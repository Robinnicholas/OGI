function navigation(){
    const burgerMenu = document.querySelector('.burger');
    burgerMenu.addEventListener('click', () => {
        let nav = document.querySelector('.nav-links');
        return nav.classList.toggle("show-on-mobile");
    })
}

function headerScroll(){
    window.addEventListener('scroll', () => {
        let header = document.querySelector("header");
        return (window.scrollY > 43) ? header.classList.add("add-bg") : header.classList.remove("add-bg");
    })
}

function progress(){
    let line = document.querySelector('.progress>ul');
    let content = document.querySelector('.col-right');
    let counter = 0;
    
    setInterval(() => {
        counter += 1;
        if(counter == 1){
            line.classList.add("ready");
            content.classList.add("ready");
        }else if(counter == 2){
            line.classList.replace("ready", "started");
            content.classList.replace("ready", "started");
        }else if(counter == 3){
            line.classList.replace("started", "event-one");
            content.classList.replace("started", "event-one");
        }else if(counter == 4){
            line.classList.replace("event-one", "event-two");
            content.classList.replace("event-one", "event-two");
        }else if(counter == 5){
            line.classList.replace("event-two", "ended");
            content.classList.replace("event-two", "ended");
        }
        if(counter >5){
            counter = 0;
            line.classList.replace("ended", "ready");
            content.classList.replace("ended", "ready");
        }
    }, 5000);
}

window.addEventListener('load', () => {
    navigation();
    headerScroll();
    progress()
})
