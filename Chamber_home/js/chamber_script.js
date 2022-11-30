//CHAMBER PROJECT SCRIPT


  const d = new Date();
  const  year = d.getFullYear();
  const lastmod = document.querySelector("#lastmod");
  lastmod.textContent = `Last updated at ${document.lastModified}`;
  document.getElementById("current_year").innerHTML = year;
  const fulldateUK = new Intl.DateTimeFormat("en-UK",{dateStyle: "full"}).format(d);
  document.querySelector(".currentdate").textContent = fulldateUK;
  /* ANNOUNCEMENT BANNER */

  // const announcementbanner = document.querySelector(".announcement-banner");
  // if( d.getDay() === 2 || d.getDay() === 3){
  //   //if today is Monday or Tuesday, display the announcement banner
  //   announcementbanner.style.display = "flex";
  // }else{
  //   //otherwise do not display it
  //   announcementbanner.style.display = "none";
  // }
  //
  //   /* BAD WEATHER BANNER */
  //
  // // hide bad weather banner (default)
  // const badweatherbanner = document.querySelector(".weather-warning-banner");
  // badweatherbanner.style.display = "none";
    
  //API URL with arguments  
  const APIAlerturl = "//api.openweathermap.org/data/2.5/onecall?lat=41.55&lon=-124.08&exclude=hourly,daily&appid=7c894b69ae7ae90c1d0eac7949ebdf76";

  fetch(APIAlerturl)
    .then((response) => response.json())
    .then((weatherinfo) => {
      // IF THERE IS BAD WEATHER
      if(weatherinfo.alerts != undefined){
      badweatherbanner.innerHTML += `<strong>EVENT: ${weatherinfo.alerts.event} DESCRIPTION: ${weatherinfo.alerts.description}</strong>`;
      badweatherbanner.style.display = "block";
      }
    
  });
  



  /* HAMBURGER MENU */

function toggleMenu(){
  document.getElementById("primaryNav").classList.toggle("open");
  document.getElementById("hamburgerbttn").classList.toggle("open")
}

const x  = document.getElementById("hamburgerbttn")
x.onclick = toggleMenu;


let dayNumber =  d.getDay();

let element = document.getElementById("message");
if (dayNumber == 1 || dayNumber == 2){
  element.classList.add("showme");
} else {
  element.classList.add("hideme");
}




  // To solve the mid resizing issue with responsive class on
  window.onresize = () => {if (window.innerWidth > 1028) mainnav.classList.remove('responsive')};


  