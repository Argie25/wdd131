const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener('click', () => {
   hamburger.classList.toggle("active");
   navMenu.classList.toggle("active");
});


   // Get the last modified date of the document
let lastModifiedDate = document.lastModified;
   // Find the paragraph element with the id "lastModified"
let paragraphElement = document.getElementById("lastModified");
   // Set the text content of the paragraph element to display the last modified date
paragraphElement.textContent = "Last modified: " + lastModifiedDate;

