const closeBtn = document.querySelector(".close-icon")
const sideMenu = document.querySelector(".side-menu")
const openBtn = document.querySelector(".open-btn") 
window.onload = function(){
    sideMenu.style.transform='translateX(0)'
}
closeBtn.addEventListener('click', function(){
sideMenu.style.transform='translateX(-100%)';

})
openBtn.addEventListener('click', function(){
    sideMenu.style.zIndex ='999'
    sideMenu.style.transform='translateX(0)';
})
