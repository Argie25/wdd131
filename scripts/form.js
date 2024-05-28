
   // Get the last modified date of the document
   let lastModifiedDate = document.lastModified;
   // Find the paragraph element with the id "lastModified"
let paragraphElement = document.getElementById("lastModified");
   // Set the text content of the paragraph element to display the last modified date
paragraphElement.textContent = "Last modified: " + lastModifiedDate;

const products = [
    {
      id: 'fc-1888',
      name: "flux capacitor",
      avgRating: 4.5
    },
    {
      id: 'fc-2050',
      name: "power laces",
      avgRating: 4.7
    },
    {
      id: 'fs-1987',
      name: "time circuits",
      avgRating: 3.5
    },
    {
      id: 'ac-2000',
      name: "low voltage reactor",
      avgRating: 3.9
    },
    {
      id: 'jj-1969',
      name: "warp equalizer",
      avgRating: 5.0
    }
  ];

  function populateProductOptions() {
    const selectElement = document.getElementById('product-select');
    products.forEach(product => {
      const option = document.createElement('option');
      option.value = product.id;
      option.textContent = product.name;
      selectElement.appendChild(option);
    });
  }

  populateProductOptions();



  function updateReviewCount() {
    let reviewCount = localStorage.getItem('reviewCount') || 0;
    reviewCount++;
    localStorage.setItem('reviewCount', reviewCount);
    document.getElementById('review-count').textContent = reviewCount;
  }

  updateReviewCount();