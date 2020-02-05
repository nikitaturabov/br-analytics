(function (header) {

    if (!header) {

        return;
    }

    const btnMenu = header.querySelector(".br-header__btn-menu"),
        headerMenu = header.querySelector(".br-header__menu");


    const menuOpen = () => {

        btnMenu.classList.add("br-header__btn-menu--open");
        btnMenu.querySelector("use").setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', "../stack/sprite.svg#cross");
        headerMenu.classList.add("br-header__menu--open");
    }

    const menuClose = () => {

        btnMenu.querySelector("use").setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', "../stack/sprite.svg#burger");
        btnMenu.classList.remove("br-header__btn-menu--open");
        headerMenu.classList.remove("br-header__menu--open");
    }

    btnMenu.addEventListener("click", (e) => {

        if (!e.target.closest(".br-header__btn-menu").classList.contains("br-header__btn-menu--open")) {

            menuOpen();
        }
        else {

            menuClose();
        }
    })

})(document.querySelector(".br-site__header"));
