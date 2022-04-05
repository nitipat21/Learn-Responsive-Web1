const DOM = (function(){
    const   menuContainer = document.querySelector(".menu-container"),
            menuBtn = document.querySelector(".bx-menu"),
            exitBtn = document.querySelector(".bx-x"),

            showNavMenu = function(){
                menuContainer.classList.toggle("showNavMenu");
                menuBtn.classList.toggle("hideBtn");
                exitBtn.classList.toggle("hideBtn");
            };

    return  {
                showNavMenu:showNavMenu
            }
})();