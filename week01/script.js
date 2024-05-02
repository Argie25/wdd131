function createParagraph() {
    const para = document.createElement("p");
    para.textContent = "You clicked the button!";
    document.body.appendChild(para);
  }
  
  const buttons = document.querySelectorAll("button");
  
  for (const button of buttons) {
    button.addEventListener("click", createParagraph);
  }

      // Get the last modified date of the document
      let lastModifiedDate = document.lastModified;

      // Find the paragraph element with the id "lastModified"
      let paragraphElement = document.getElementById("lastModified");
  
      // Set the text content of the paragraph element to display the last modified date
      paragraphElement.textContent = "Last modified: " + lastModifiedDate;