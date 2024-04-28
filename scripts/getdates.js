    // Get the last modified date of the document
    var lastModifiedDate = document.lastModified;

    // Find the paragraph element with the id "lastModified"
    var paragraphElement = document.getElementById("lastModified");

    // Set the text content of the paragraph element to display the last modified date
    paragraphElement.textContent = "Last modified: " + lastModifiedDate;