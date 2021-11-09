const gulp = require('gulp');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass')(require('sass'));
const cssmin = require('gulp-cssnano');
const sourcemaps = require('gulp-sourcemaps'); 

// const imagemin = require('gulp-imagemin');

// gulp.task('imageMin', async () => {
//     console.log('compressing images')
//     gulp.src('./src/images/*')
//     .pipe(imagemin())
//     .pipe(gulp.dest('./dist/images'))
// })

// log message 
gulp.task('message', async () => {
    await console.log('This is message one');
})

// generatig source map
gulp.task('sourcemap', async () => {
    console.log("sourcemap generated...")
    await gulp.src('./src/sass/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./dist/css/'))
})

// minify js
gulp.task('minifyjs', async () =>{
    console.log("minifying js...")
    await gulp.src('./src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
})

// minify css 
gulp.task('minifycss', async () =>{
    console.log("minifying css...")
    await gulp.src('./src/css/*.css')
        .pipe(cssmin())
        .pipe(gulp.dest('./dist/css'));
})

// compile sass to css 
gulp.task('sass', async () => {
    console.log("Sass running...")
    console.log("compiling css...")
    await gulp.src('./src/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src/css'));
})

// copy html
gulp.task('copyHtml', async () => {
    console.log('Copying html to dist...');
    await gulp.src('./src/*.html')
        .pipe(gulp.dest('./dist'))
})
// copy images
gulp.task('copyImg', async () => {
    console.log('Copying Images to dist...');
    await gulp.src('./src/images/*.+(png|jpg|svg)')
        .pipe(gulp.dest('./dist/images'));
})

// watching for changes
gulp.task('watch', async () => {
    console.log('Gulp is Watching...');
    await gulp.watch('./src/*.html', {ignoreInitial: false} ,gulp.series('renderhtml'));
    await gulp.watch('./src/sass/*.scss', {ignoreInitial: false} ,gulp.series('rendercss'));
    await gulp.watch('./src/js/*.js', {ignoreInitial: false} ,gulp.series('minifyjs'));
})

gulp.task('renderhtml', gulp.series('copyHtml', 'copyImg'));

gulp.task('rendercss', gulp.series('sass', 'minifycss' , 'sourcemap'));

gulp.task('default', gulp.series('message', 'copyHtml', 'copyImg', 'sass', 'minifycss', 'minifyjs','watch'));