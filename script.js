let humburger=document.querySelector(".humburger")
let mobileMenu=document.querySelector(".nav-list ul")
let menuItem=document.querySelectorAll(".nav-list ul li a")
let header=document.querySelector(".header")


humburger.addEventListener('click',()=>{
    humburger.classList.toggle("active");
    mobileMenu.classList.toggle("active");
});


menuItem.forEach((item)=>{
    item.addEventListener('click',()=>{
        humburger.classList.toggle("active")
        mobileMenu.classList.toggle("active")
    });
})


document.addEventListener('scroll',()=>{
    var scroll_postions = window.scrollY;
    if(scroll_postions > 250){
        header.style.backgroundColor="#29323c"
    }else{
        header.style.backgroundColor="transparent";
    }
});