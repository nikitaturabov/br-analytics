(function (btnOrder) {
  if (!btnOrder) {
    return;
  }

  const header = document.querySelector(".br-site__header"),
    menu = document.querySelector(".br-header__menu"),
    body = document.querySelector("body"),
    headerBtn = document.querySelector(".br-header__btn"),
    headerLogo = document.querySelector(".br-header__logo");

  window.addEventListener("scroll", e => {

    if (btnOrder.getBoundingClientRect().bottom < 100) {

      setCustomView();
    }

    else {

      setStockView();
    }

  });

  const setCustomView = () => {

    menu.classList.add("br-header__menu--left");
    header.classList.add("br-site__header--narrow");
    headerBtn.classList.add("br-header__btn--visible");
    headerLogo.classList.add("svg-small-logo");
    headerLogo.classList.add("svg-small-logo-dims");
  }

  const setStockView = () => {

    menu.classList.remove("br-header__menu--left");
    header.classList.remove("br-site__header--narrow");
    headerBtn.classList.remove("br-header__btn--visible");
    headerLogo.classList.remove("br-header__logo--small");
    headerLogo.classList.remove("svg-small-logo");
    headerLogo.classList.remove("svg-small-logo-dims");
  }

  const otherOption = () => {

    let possibleOffsetTop = body.clientHeight - window.innerHeight;
    let flGrow = Math.abs(body.getBoundingClientRect().top) / possibleOffsetTop;
    menu.style.flex = flGrow;

    if (btnOrder.getBoundingClientRect().bottom > 70) {
      let btnOrderOffset = 10 + "px";
      headerBtn.style.top = btnOrderOffset;
    }
    else {
      headerBtn.style.top = 150 + "px";
    }


    if (btnOrder.getBoundingClientRect().top < 100) {

      header.style.height = 70 + "px";
    }
    else {
      header.style.height = 100 + "px";
    }
  }
})(document.querySelector(".br-order-board__btn"));
