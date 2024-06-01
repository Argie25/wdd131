
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener('click', () => {
   hamburger.classList.toggle("active");
   navMenu.classList.toggle("active");
});



let lastModifiedDate = document.lastModified;
let paragraphElement = document.getElementById("lastModified");
paragraphElement.textContent = "Last modified: " + lastModifiedDate;

function updateReviewCount() {
   let reviewCount = localStorage.getItem('reviewCount') || 0;
   reviewCount++;
   localStorage.setItem('reviewCount', reviewCount);
   document.getElementById('review-count').textContent = reviewCount;
 }

 updateReviewCount();
