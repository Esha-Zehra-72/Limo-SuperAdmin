// const closeBtn = document.querySelector(".close-icon")
// const sideMenu = document.querySelector(".side-menu")
// const openBtn = document.querySelector(".open-btn") 
// window.onload = function(){
//     sideMenu.style.transform='translateX(0)'
// }
// closeBtn.addEventListener('click', function(){
// sideMenu.style.transform='translateX(-100%)';

// })
// openBtn.addEventListener('click', function(){
//     sideMenu.style.transform='translateX(0)';
// })


// const closeBtn = document.querySelector(".close-icon")
// const sideMenu = document.querySelector(".side-menu")
// const openBtn = document.querySelector(".open-btn") 

// window.onload =function(){
//     sideMenu.style.transform = 'translateX(0)'
// }
// function toggleSideMenu(){
//     if(sideMenu.style.transform === 'translateX(-100%)'){
//          sideMenu.style.transform = 'translateX(0)'
//          console.log("side menu open")
//     }else{
//         console.log("side menu close")
//         sideMenu.style.transform = 'translateX(-100%)'
//     }
// }

// openBtn.addEventListener('click', toggleSideMenu)
// closeBtn.addEventListener('click', toggleSideMenu)

const closeBtn = document.querySelector(".close-icon");
const sideMenu = document.querySelector(".side-menu");
const openBtn = document.querySelector(".open-btn");
const contentArea = document.querySelector(".container"); // Reference to the main content area

window.onload = function () {
  sideMenu.style.transform = 'translateX(0)';
  contentArea.classList.add('sidebar-open'); // Add class to shrink the content when the sidebar is open
}

function toggleSideMenu() {
  if (sideMenu.style.transform === 'translateX(-100%)') {
    sideMenu.style.transform = 'translateX(0)';
    // contentArea.classList.add('sidebar-open'); // Shrink the content area
  } else {
    sideMenu.style.transform = 'translateX(-100%)';
    // contentArea.classList.remove('sidebar-open'); // Expand the content area
  }
}

openBtn.addEventListener('click', toggleSideMenu);
closeBtn.addEventListener('click', toggleSideMenu);