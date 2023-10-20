const pupils = ["Adrian", "Marius", "Omar", "Jacob", "Sina", "Maria", "Gard", "Aivan", "Brandon", "Viljar", "Ola", "Helge", "Sindre", "Eskil", "Mehmet", "Silje", "Matilde", "Sebastian", "Bjørn"]
console.log(pupils.length)

const nav = document.getElementById("pupilNav");
const pupilSite = document.getElementById("pupilSite");
const responseForm = document.getElementById("responseForm");
const pupilName = document.getElementById("pupilName");

let activePupil = "";

for (let i = 0; i < pupils.length; i++) {
    let listItem = document.createElement("li");
    listItem.innerHTML = pupils[i];
    listItem.addEventListener("click", () => {
        pupilSite.src = "./" + pupils[i] + "/index.html";
        activePupil = pupils[i];
        responseForm.reset();
        pupilName.value = pupils[i];
    });
    nav.appendChild(listItem);    
}

async function fetchComment() {
    const response = await fetch("/api/comments?name=" + activePupil);
    const data = await response.json();
    
    //Fill form with data
}