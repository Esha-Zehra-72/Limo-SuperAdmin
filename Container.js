// // Side Bar Variables
// const closeBtn = document.querySelector(".close-icon");
// const sideMenu = document.querySelector(".side-menu");
// const openBtn = document.querySelector(".open-btn");
// const contentArea = document.querySelector(".container"); // Reference to the main content area

// function setSidebarState() {
//   if (window.innerWidth > 768) {
//     // Large screen: keep the sidebar open
//     sideMenu.style.transform = 'translateX(0)';
//     contentArea.classList.add('sidebar-open');
//   } else {
//     // Small screen: hide the sidebar initially
//     sideMenu.style.transform = 'translateX(-100%)';
//     contentArea.classList.remove('sidebar-open');
//   }
// }

// function toggleSideMenu() {
//   if (window.innerWidth <= 768) { // Only toggle on small screens
//     if (sideMenu.style.transform === 'translateX(-100%)') {
//       sideMenu.style.transform = 'translateX(0)';
//       contentArea.classList.add('sidebar-open'); // Shrink the content area
//     } else {
//       sideMenu.style.transform = 'translateX(-100%)';
//       contentArea.classList.remove('sidebar-open'); // Expand the content area
//     }
//   }
// }

// // Set initial sidebar state based on screen size
// window.onload = setSidebarState;
// window.onresize = setSidebarState; // Adjust sidebar on window resize

// // Event listeners for toggling sidebar on small screens
// openBtn.addEventListener('click', toggleSideMenu);
// closeBtn.addEventListener('click', toggleSideMenu);





// 
// const showMenu = document.querySelector("#show-menu")
// const menuList = document.querySelector("#menu-list")
// const ShowMenuBtn = () => {
//   // Check the current display status and toggle it
//   if (menuList.style.display === 'block') {
//     menuList.style.display = 'none';
//     menuList.style.transition = 'all .5s ease'
//   } else {
//     menuList.style.display = 'block';
//         menuList.style.transition = 'all .5s ease'
//   }
// };

// showMenu.addEventListener('click', ShowMenuBtn);


document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".show-menu-btn");

  buttons.forEach((button) => {
      button.addEventListener("click", (event) => {
          event.stopPropagation(); // Prevent the click event from bubbling up to the document

          // Close all other open menus
          document.querySelectorAll(".menu-list").forEach((menu) => {
              menu.classList.add("d-none");
              menu.classList.remove("d-block");
          });

          // Toggle the current menu
          const menu = button.nextElementSibling;
          menu.classList.toggle("d-none");
          menu.classList.toggle("d-block");
      });
  });

  // Close menus when clicking outside
  document.addEventListener("click", () => {
      document.querySelectorAll(".menu-list").forEach((menu) => {
          menu.classList.add("d-none");
          menu.classList.remove("d-block");
      });
  });
});

