(function(carusel) {
  if (!carusel) {
    return;
  }

  let promise = new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();

    xhr.open(
      "GET",
      "https://cors-anywhere.herokuapp.com/http://api.lenta.ru/lists/latest",
      true
    );

    xhr.onload = function() {
      if (this.status == 200) {
        resolve(this.response);
      } else {
        var error = new Error(this.statusText);
        error.code = this.status;
        reject(error);
      }
    };

    xhr.onerror = function() {
      reject(new Error("Network Error"));
    };

    xhr.send();
  }).then(
    result => {
      let lastNews = JSON.parse(result);
      lastNews = lastNews.headlines.filter(article => {
        return article.type === "news";
      });

      lastNews.forEach(newCard => {
        carusel.appendChild(addCard(newCard));
      });
      console.log(lastNews);
    },
    error => console.log(error)
  );

  const addCard = card => {
    let cardLi = document.createElement("li");
    cardLi.classList.add("br-carousel__card");
    cardLi.classList.add("br-card");

    let time = card.info.id.split("/").filter((item, index) => {
      return 1 < index && index < 5;
    });

    let date = new Date(time);
    cardLi.innerHTML = `${addPicture(card)}
                        ${addTime(date)}
                        ${addTitle(card.info)}
                        ${addRightcol(card.info)}
                        ${addButtonMore(card.links)}`;

    return cardLi;
  };

  const addPicture = card => {
    return !!card.title_image
      ? `<div class="br-card__picture">
        <img src="${card.title_image.url}" alt="${card.title_image.credits}" >
        </div>`
      : "";
  };

  const addTime = date => {
    let options = {
      month: "long",
      day: "numeric"
    };

    return !!date
      ? `<time class="br-card__item-pd br-card__date">${date.toLocaleString(
          "ru",
          options
        )}</time>`
      : "";
  };

  const addTitle = info => {
    return !!info.title
      ? `<span class="br-card__item-pd br-card__title"><p>${info.title}</p></span>`
      : "";
  };

  const addRightcol = info => {
    return !!info.rightcol
      ? `<span class="br-card__item-pd br-card__article"><p> ${info.rightcol}</p></span>`
      : "";
  };

  const addButtonMore = links => {
    return !!links.public
      ? `<div class="br-card__btn-wrapper">
            <a href="${links.public}" class="br-card__item-pd br-card__btn-more-info">Читать полностью</a>
        </div>`
      : "";
  };
})(document.querySelector(".br-carousel"));
