const header = document.querySelector(".header")
const logo = document.querySelector(".hero__logo")
const menu = document.querySelector(".hero__menu")
const search = document.querySelector(".hero__search")

const headerWidth = window.innerWidth
let scrollY = 0
let width = 0
let big = false // making one div no more

const scrollPosion = () => {
    scrollY = +document.documentElement.scrollTop.toFixed(2)
    width = window.innerWidth
    if(scrollY <= 100 & width <= 550 && big == false){
        header.style.top = -scrollY + "px"
        menu.style.marginTop = (scrollY + 15) + "px"
        logo.style.marginTop = (scrollY + 15) + "px"
        search.style.marginTop = (scrollY + 15) + "px"
        big = false
    }

    // adding the big picture to the header
    if( width > 550 && big == false){
        big = true
        const bigPic = document.createElement("div")
        header.appendChild(bigPic)
        bigPic.classList.add("hero__bigPic")
    }
}

window.onscroll = scrollPosion
window.onload = scrollPosion
window.onresize = scrollPosion
