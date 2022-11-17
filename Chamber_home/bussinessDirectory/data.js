const requestURL ="./data.json";
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("div");



fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const companies = jsonObject['companies'];
    companies.forEach(displayCompanies);
  });
  //const prophets = jsonObject['prophets'];
  //companies.forEach(displaycompanies);

  function displayCompanies(companies) {

    let card=document.createElement("section");
    let companiesName = document.createElement("h2");
    let companiesAdd = document.createElement("p");
    let companiesPhone =document.createElement("p");
    let companiesImg = document.createElement("img");
    // Change the textContent property of the h2 element to contain the companies full name
    companiesName.textContent =`${companies.name}`; 
    companiesAdd.textContent =`${companies.address}`;
    companiesPhone.textContent =`${companies.phonenumber}`;
    companiesImg.textContent =`${companies.imageurl}`;
  
    
    companiesImg.setAttribute('src',companies.imageurl);
    companiesImg.setAttribute('alt',companies.name);
    companiesImg.setAttribute('loading','lazy');
    

  
    // Add/append the section(card) with the h2 element
    card.appendChild(companiesName);
    card.appendChild(companiesAdd);
    card.appendChild(companiesPhone);
    card.appendChild(companiesImg);
    
    
  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.menu').appendChild(card);


// The following code could be written cleaner. How We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function


function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}
}