const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function page5Animation(){
    let elem = document.querySelector("#elem-container")
let fixed = document.querySelector("#fixed-image")
elem.addEventListener("mouseenter",()=>{
    fixed.style.display = "block"
})
elem.addEventListener("mouseleave",()=>{
    fixed.style.display = "none"
})

let elems = document.querySelectorAll(".elem")
elems.forEach((e) => {
    e.addEventListener("mouseenter", ()=>{
        let image = e.getAttribute("data-image")
        fixed.style.backgroundImage = `url(${image})`
    },)
})
}
function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100
    });
}
function menuAnimation() {
    let menu = document.querySelector("nav h3")
 let full = document.querySelector("#full-scr")
 let navimg = document.querySelector("nav img")
 var flag = 0
 menu.addEventListener("click",()=>{
    if(flag === 0){
        full.style.top = 0
        navimg.style.opacity = 0
        flag = 1
    }else{
        full.style.top = "-100%"
        navimg.style.opacity = 1
        flag = 0
    }
 })
}
function loaderAnimation(){
    let loader = document.querySelector("#loader")
setTimeout(()=>{
    loader.style.top = "-100%"
},4000)
}
page5Animation()
swiperAnimation()
menuAnimation()
loaderAnimation()

