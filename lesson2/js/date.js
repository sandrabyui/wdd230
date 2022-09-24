const d = new Date();
const  year = d.getFullYear();
const lastmod = document.querySelector("#lastmod")
lastmod.textContent = `Last updated at ${document.lastModified}`;
document.getElementById("current_year").innerHTML = year;
