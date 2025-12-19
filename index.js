const scrollContainer = document.getElementById("scrollContainer");
const pageSelector = document.querySelectorAll(".pageSelector");
const body = document.getElementById("body");
const whoWeAreSubtitle = document.getElementById("whoWeAreSubtitle");
const whoWeAreMain = document.getElementById("whoWeAreMain");
const getMoreInfoButton = document.getElementById("getMoreInfoButton");
const separators = document.querySelectorAll(".separators");
const products = document.querySelectorAll(".products");
const images = ["image/china.jpg","image/jade.jpg","image/copper.jpg","image/furniture.jpg","image/brush.jpg","image/dialect.jpg","image/buddha.jpg"];
const header = document.getElementById("header");
const heroSectionContainer = document.getElementById("heroSectionContainer");


var curPage = [1];
var flipPageInterval = setInterval(flipPage, 5000);

function flipPage(){
    pageSelector[curPage[0]%3].click();
    scrollContainer.style.transform = `translateX(${-33*(curPage[0]%3)}%)`;

    curPage[0]+=1;
}

function setPosition(index){
    curPage[0] = index;
    scrollContainer.style.transform = `translateX(${-33*(curPage[0]%3)}%)`;
}

function buttonFlipPage(index){
    clearInterval(flipPageInterval);
    if(index==0){
         curPage[0]++;
    }
    else{
        curPage[0] += 2;
    }
    pageSelector[curPage[0]%3].click();
    scrollContainer.style.transform = `translateX(${-33*(curPage[0]%3)}%)`;
    flipPageInterval = setInterval(flipPage,5000)
}

document.addEventListener("scroll",(ev)=>{
    if(window.scrollY >= window.innerHeight/2){
        whoWeAreSubtitle.style.top = "0%";
        whoWeAreSubtitle.style.opacity = "1";

        whoWeAreMain.style.top="0%";
        whoWeAreMain.style.opacity = "1";
    }
    separators.forEach((e)=>{
        e.style.backgroundPosition = `0% ${window.scrollY/(e.offsetTop+e.clientHeight)*100}%`
    })

    header.style.opacity = `1-${window.scrollY/heroSectionContainer.offsetTop/100}`;
    header.style.backgroundColor = "green";
})

getMoreInfoButton.addEventListener("mousemove", (ev)=>{
    getMoreInfoButton.style.setProperty("--getMoreInfoButtonX",`${ev.offsetX}px`);
    getMoreInfoButton.style.setProperty("--getMoreInfoButtonY",`${ev.offsetY}px`);
})
products.forEach((e,i)=>{
    e.style.backgroundImage = `url(${images[i]})`
})