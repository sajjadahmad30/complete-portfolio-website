let humburger=document.querySelector(".humburger")
let mobileMenu=document.querySelector(".nav-list ul")

humburger.addEventListener('click',()=>{
    humburger.classList.toggle("active");
    mobileMenu.classList.toggle("active");
});
