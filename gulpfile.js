const gulp = require('gulp');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass')(require('sass'));
const cssmin = require('gulp-cssnano');
const sourcemaps = require('gulp-sourcemaps'); 
const autoprefixer = require('gulp-autoprefixer');
const image = require('gulp-image');
const htmlmin = require('gulp-htmlmin');
const { watch, series } = require('gulp');

function imageOpti(cb){
    gulp.src('./src/images/*')
        .pipe(image())
        .pipe(gulp.dest('./dist/images'));
    cb();
}
exports.imgop = imageOpti;

function htmlMin(cb){
    gulp.src('./src/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('./dist'));
    cb();
}
exports.minifyHtml = htmlMin;

function sourceMap(cb){
    gulp.src('./src/sass/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./dist/css/'))
    cb();
}
exports.srcmap = sourceMap;

function minifyJs(cb){
    gulp.src('./src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
    cb();
}
exports.minifyjs = minifyJs;

function minifyCss(cb){
    gulp.src('./src/css/*.css')
        .pipe(cssmin())
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(gulp.dest('./dist/css'));
    cb();
}
exports.minifycss = minifyCss;

function sassToCss(cb){
    gulp.src('./src/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src/css'));
    cb();
}
exports.sasscomp = sassToCss;

function defaultTask(cb) {
    watch('./src/*.html' , htmlMin);
    watch('./src/sass/**/*.scss' , series(sassToCss, sourceMap));
    watch('./src/css/*.css' , minifyCss);
    watch('./src/js/*.js' , minifyJs);   
    watch('./src/images/*' , imageOpti);   
    cb();
}
exports.default = defaultTask;

