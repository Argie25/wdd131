const link = document.querySelector("a");
link.textContent = "youtube";
link.href = "https://www.youtube.com/index";

console.log(link)

const sect = document.querySelector("section");
const para = document.createElement("p");
para.textContent= "hope you enjoy the ride";
sect.appendChild(para);
const text = document.createTextNode(
    " — the premier source for web development knowledge.",
);
const linkPara = document.querySelector("p");
linkPara.appendChild(text);

sect.appendChild(linkPara);

para.setAttribute("class", "highlight");


    