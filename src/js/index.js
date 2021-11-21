function lazyload(){
    const images = document.querySelectorAll('img');
    const iframes = document.querySelectorAll('iframe');
    const targets = [...images,...iframes]; 
    const io = new IntersectionObserver((entires, observer) => {
        entires.forEach(entry => {
            if(!entry.isIntersecting){
                return;
            }
            const srcSet = entry.target.getAttribute('data-srcset');
            entry.target.setAttribute("srcset", srcSet);
            if(srcSet == null){
                entry.target.removeAttribute("srcset");
                const src = entry.target.getAttribute('data-src');
                entry.target.setAttribute("src", src);
            }
            entry.target.classList.add('fadein');
            observer.unobserve(entry.target);
        });
    });

    targets.forEach(target => {
        io.observe(target);
    });
}


function lazyloadBg(){
    const bgImages = document.querySelectorAll('.bg-img');
    const io = new IntersectionObserver((entires, observer) => {
        entires.forEach(entry => {
            if(!entry.isIntersecting){
                return;
            }
            const className = entry.target.getAttribute('data-class');
            entry.target.classList.add(className);
            observer.unobserve(entry.target);
        });
    });

    bgImages.forEach(bgImage => {
        io.observe(bgImage);
    });
}

function textAnimation(){
    const text = document.querySelector('.fancy');
    const strText = text.textContent;
    const splitText = strText.split('');
    text.textContent = ""
    
    for(let value of splitText){
        text.innerHTML += `<span>${value}</span>`; 
    }

    let char = 0;
    let timer = setInterval(() => {
        const span = document.querySelectorAll('.hero-content span')[char];
        span.classList.add("fade");
        char++;
        if(char === splitText.length){
            clearInterval(timer);
            timer = null;
        }
    }, 100);
}


function navigation(){
    const burgerMenu = document.querySelector('.burger');
    burgerMenu.addEventListener('click', () => {
        let nav = document.querySelector('.nav-bar');
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
    
    let storyContent = document.querySelector('.story-content');

    let counter = 0;
    
    if(content){
        line.classList.add("ready");
        content.classList.add("ready");
        let readyContent = document.createElement('div');
        readyContent.classList.add('ready');
        let heading = document.createElement('h2');
        let description = document.createElement('p');
        heading.classList.add("sub-heading", "story-heading");
        heading.textContent = "Ready";
        description.classList.add("content", "story-description");
        description.innerHTML = `A posuere scelerisque gravida facilisi parturient magna urna donec parturient per augue a amet quam nullam a ad a. Parturient velit imperdiet in suspendisse eget a parturient adipiscing penatibus convallis himenaeos felis torquent facilisi elementum a penatibus suscipit aliquam.
        <br>    
        <br>    
        Porta at at suspendisse dolor fames ullamcorper cum id per suspendisse a dignissim eu dapibus platea turpis augue mi proin lorem morbi sapien facilisis lectus.`
        storyContent.appendChild(readyContent);
        readyContent.appendChild(heading);
        readyContent.appendChild(description);
    }
    
    setInterval(() => {
        counter += 1;
        if(counter == 1){
            line.classList.replace("ready", "started");
            content.classList.replace("ready", "started");

            if(content.classList.contains("started")){
                let startedContent = document.createElement('div');
                startedContent.classList.add('started');
                let heading = document.createElement('h2');
                let description = document.createElement('p');
                heading.classList.add("sub-heading", "story-heading");
                heading.textContent = "Started";
                description.classList.add("content", "story-description");
                description.innerHTML = `A posuere scelerisque gravida facilisi parturient magna urna donec parturient per augue a amet quam nullam a ad a. Parturient velit imperdiet in suspendisse eget a parturient adipiscing penatibus convallis himenaeos felis torquent facilisi elementum a penatibus suscipit aliquam.
                <br>    
                <br>    
                Porta at at suspendisse dolor fames ullamcorper cum id per suspendisse a dignissim eu dapibus platea turpis augue mi proin lorem morbi sapien facilisis lectus.`
                storyContent.appendChild(startedContent);
                startedContent.appendChild(heading);
                startedContent.appendChild(description);
            }

        }else if(counter == 2){
            line.classList.replace("started", "event-one");
            content.classList.replace("started", "event-one");

            if(content.classList.contains("event-one")){
                let eventOneContent = document.createElement('div');
                eventOneContent.classList.add('event-one');
                let heading = document.createElement('h2');
                let description = document.createElement('p');
                heading.classList.add("sub-heading", "story-heading");
                heading.textContent = "Event One";
                description.classList.add("content", "story-description");
                description.innerHTML = `A posuere scelerisque gravida facilisi parturient magna urna donec parturient per augue a amet quam nullam a ad a. Parturient velit imperdiet in suspendisse eget a parturient adipiscing penatibus convallis himenaeos felis torquent facilisi elementum a penatibus suscipit aliquam.
                <br>    
                <br>    
                Porta at at suspendisse dolor fames ullamcorper cum id per suspendisse a dignissim eu dapibus platea turpis augue mi proin lorem morbi sapien facilisis lectus.`
                storyContent.appendChild(eventOneContent);
                eventOneContent.appendChild(heading);
                eventOneContent.appendChild(description);
            }

        }else if(counter == 3){
            line.classList.replace("event-one", "event-two");
            content.classList.replace("event-one", "event-two");

            if(content.classList.contains("event-two")){
                let eventTwoContent = document.createElement('div');
                eventTwoContent.classList.add('event-two');
                let heading = document.createElement('h2');
                let description = document.createElement('p');
                heading.classList.add("sub-heading", "story-heading");
                heading.textContent = "Event Two";
                description.classList.add("content", "story-description");
                description.innerHTML = `A posuere scelerisque gravida facilisi parturient magna urna donec parturient per augue a amet quam nullam a ad a. Parturient velit imperdiet in suspendisse eget a parturient adipiscing penatibus convallis himenaeos felis torquent facilisi elementum a penatibus suscipit aliquam.
                <br>    
                <br>    
                Porta at at suspendisse dolor fames ullamcorper cum id per suspendisse a dignissim eu dapibus platea turpis augue mi proin lorem morbi sapien facilisis lectus.`
                storyContent.appendChild(eventTwoContent);
                eventTwoContent.appendChild(heading);
                eventTwoContent.appendChild(description);
            }

        }else if(counter == 4){
            line.classList.replace("event-two", "ended");
            content.classList.replace("event-two", "ended");

            if(content.classList.contains("ended")){
                let endedContent = document.createElement('div');
                endedContent.classList.add('ended');
                let heading = document.createElement('h2');
                let description = document.createElement('p');
                heading.classList.add("sub-heading", "story-heading");
                heading.textContent = "Ended";
                description.classList.add("content", "story-description");
                description.innerHTML = `A posuere scelerisque gravida facilisi parturient magna urna donec parturient per augue a amet quam nullam a ad a. Parturient velit imperdiet in suspendisse eget a parturient adipiscing penatibus convallis himenaeos felis torquent facilisi elementum a penatibus suscipit aliquam.
                <br>    
                <br>    
                Porta at at suspendisse dolor fames ullamcorper cum id per suspendisse a dignissim eu dapibus platea turpis augue mi proin lorem morbi sapien facilisis lectus.`
                storyContent.appendChild(endedContent);
                endedContent.appendChild(heading);
                endedContent.appendChild(description);
            }
        }
        if(counter > 4){
            counter = 0;
            line.classList.replace("ended", "ready");
            content.classList.replace("ended", "ready");
            
            if(content.classList.contains("ready")){
                let readyContent = document.createElement('div');
                readyContent.classList.add('ready');
                let heading = document.createElement('h2');
                let description = document.createElement('p');
                heading.classList.add("sub-heading", "story-heading");
                heading.textContent = "Ready";
                description.classList.add("content", "story-description");
                description.innerHTML = `A posuere scelerisque gravida facilisi parturient magna urna donec parturient per augue a amet quam nullam a ad a. Parturient velit imperdiet in suspendisse eget a parturient adipiscing penatibus convallis himenaeos felis torquent facilisi elementum a penatibus suscipit aliquam.
                <br>    
                <br>    
                Porta at at suspendisse dolor fames ullamcorper cum id per suspendisse a dignissim eu dapibus platea turpis augue mi proin lorem morbi sapien facilisis lectus.`
                readyContent.appendChild(heading);
                readyContent.appendChild(description);
            }
            let allItems = document.querySelectorAll(".story-content div");
            let otherElement = [...allItems].slice(1); 
            for (const items of otherElement) {
                items.remove();
            }
        }
    }, 5000);
}

window.addEventListener('load', () => {
    navigation();
    headerScroll();
    progress();
    textAnimation();
    lazyload();
    lazyloadBg();
})
