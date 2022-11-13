const requestURL ="https://github.com/sandrabyui/wdd230/commit/322220c00f27e4467b1cb59837ee77a7740fb271";
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
    companies.forEach(displaycompanies);
  });
  //const prophets = jsonObject['prophets'];
  //companies.forEach(displaycompanies);
  
  
    // Change the textContent property of the h2 element to contain the companies full name
    h2.textContent = companies.name + ' ' + companies.address +' / '+ companies.phone;
  
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    grid.setAttribute('src', companies.imageurl);
    grid.setAttribute('alt', 'Portait of ' + companies.name + ' ' + companies.address +' '+ companies.phone );
    grid.setAttribute('loading', 'lazy');
  
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(grid);
  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.menu').appendChild(menu);


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