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