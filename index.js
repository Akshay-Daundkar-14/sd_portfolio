let bar = document.getElementById("bar");

let ul = document.querySelector('ul');

bar.addEventListener("click", function(){
    ul.classList.toggle('showData');

    if(ul.className == "showData"){
        bar.className = 'fa-solid fa-xmark';
    }else{
        bar.className = 'fa-solid fa-bars';
    }

});


var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");

function openTab(tab) {
  for (tabLink of tabLinks) {
    tabLink.classList.remove("active-link");
  }
  for (tabContent of tabContents) {
    tabContent.classList.remove("active-tab");
  }

  event.currentTarget.classList.add("active-link");
  document.getElementById(tab).classList.add("active-tab");
}

//------------------- Side Menu ------------------

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0";
}

function closemenu() {
  sidemenu.style.right = "-200px";
}