(function (arrowBtns) {

    if (!arrowBtns) {
        return;
    }

    const courusel = document.querySelector(".br-cases__carousel");
    let item = 0;

    arrowBtns.forEach(btn => {

        if (btn.classList.contains("br-cases__button--forward")) {

            btn.addEventListener("click", (e) => {

                if (item < courusel.children.length - 1) {

                    item++;
                }

                courusel.children[item].scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest'
                })
            })
        }

        if (btn.classList.contains("br-cases__button--back")) {

            btn.addEventListener("click", (e) => {

                if (item > 0) {

                    item--;
                }

                courusel.children[item].scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest'
                })
            })
        }
    })

})(document.querySelectorAll(".br-cases__button"));