const menuIconClicked = document.querySelector("#menu__input")
const menuContainer = document.querySelector(".menu__navbar-container")
const menuNavbar = document.querySelector(".menu__navbar")

menuIconClicked.addEventListener("click", function(){
    if(menuIconClicked.checked){
        menuContainer.style.top = 0;
    }else{
        menuContainer.style.top = "-100%";
    }
    
})
