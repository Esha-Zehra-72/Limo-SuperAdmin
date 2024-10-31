
// Side Bar Variables
const closeBtn = document.querySelector(".close-icon");
const sideMenu = document.querySelector(".side-menu");
const openBtn = document.querySelector(".open-btn");
const contentArea = document.querySelector(".container"); // Reference to the main content area

// Cancel and Deleta  Buttons
const addFeatrures = document.querySelector("#addFeatures");
const cancelFeatures = document.querySelector("#cancelFeatures")
const featureFields = document.querySelector("#featureFields");
const featuresStatus = document.querySelector(".features-status")

// Setting DropDown Buttons
const setting = document.querySelector("#setting");
const dropDownList = document.querySelector(".dropdown-list")
// Side bar
function setSidebarState() {
  if (window.innerWidth > 768) {
    // Large screen: keep the sidebar open
    sideMenu.style.transform = 'translateX(0)';
    contentArea.classList.add('sidebar-open');
  } else {
    // Small screen: hide the sidebar initially
    sideMenu.style.transform = 'translateX(-100%)';
    contentArea.classList.remove('sidebar-open');
  }
}

function toggleSideMenu() {
  if (window.innerWidth <= 768) { // Only toggle on small screens
    if (sideMenu.style.transform === 'translateX(-100%)') {
      sideMenu.style.transform = 'translateX(0)';
      contentArea.classList.add('sidebar-open'); // Shrink the content area
    } else {
      sideMenu.style.transform = 'translateX(-100%)';
      contentArea.classList.remove('sidebar-open'); // Expand the content area
    }
  }
}

// Set initial sidebar state based on screen size
window.onload = setSidebarState;
window.onresize = setSidebarState; // Adjust sidebar on window resize

// Event listeners for toggling sidebar on small screens
openBtn.addEventListener('click', toggleSideMenu);
closeBtn.addEventListener('click', toggleSideMenu);


// Cancel Add Buttons
function addFeatureGroup() {
  const featureFields = document.querySelector("#featureFields");

  // Create a unique identifier for each radio button set
  const uniqueId = `duration${Date.now()}`;

  // Define the HTML structure for a new feature input and radio buttons
  const newFieldHTML = `
  <div class="feature-input-group d-flex flex-column mt-3"> <!-- Flex column to stack input and buttons -->
      <div class="d-flex align-items-center">
          <input type="text" class="form-control rounded-0 mt-1 py-2 ps-1 col-md-8 col-6" placeholder="Enter Feature">
          <div class="col-md-3 ms-md-2 features-status col-6">
              <div class="text-md-center ms-4 ">
                  <label class="package-label fs-6 status-field">Status</label>
                  <div class="col mt-md-2 radio-btns">
                      <input type="radio" class="rounded-0 mt-1 tick" name="${uniqueId}">
                      <span class="me-2">
                          <i class="fa-solid fa-check fs-5 ms-1 text-success"></i>
                      </span>
                      <input type="radio" class="rounded-0 mt-1 ms-1" name="${uniqueId}">
                      <span>
                          <i class="fa-solid fa-xmark fs-5 text-danger"></i>
                      </span>
                  </div>
              </div>
          </div>
      </div>
      <div class="d-flex justify-content-md-end align-items-center mt-auto add-del-btns " > <!-- Push buttons to the bottom -->
          <button class="" type="button" onclick="addFeatureGroup()" style=" background-color:#887a5b; color: white; padding: 2px 10px;   font-size: 400 !important;
  border: 2px solid #a09578;">Add</button>
          <button class=" ms-2" type="button" onclick="removeFeatureGroup(this)" style=" color: white; padding: 2px 10px;   font-size: 400 !important;
 background-color: red; border: 2px solid red;">Cancel</button>
      </div>
  </div>
  `;

  // Add the new HTML structure below the existing content
  featureFields.innerHTML += newFieldHTML;
}

function removeFeatureGroup(button) {
  // Find the parent .feature-input-group by going up the DOM tree
  const featureGroup = button.closest('.feature-input-group');

  // Remove the entire feature group if it exists
  if (featureGroup) {
    featureGroup.remove(); // Remove the entire group
  }
}

// Setting DropDown Buttons
const showDropDown =()=>{
if(dropDownList.style.display === 'block'){
  dropDownList.style.display = 'none'
  setting.classList.remove('active'); 
}else{
  dropDownList.style.display = 'block'
  setting.classList.add('active'); 
}
}
setting.addEventListener('click', showDropDown)