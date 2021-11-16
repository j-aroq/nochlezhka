const sliderParkButton = document.querySelector('.slider-park');
const sliderLadyButton = document.querySelector('.slider-lady');
const sliderDrinkButton = document.querySelector('.slider-drink');
const sliderExhibitionButton = document.querySelector('.slider-exhibition');
const sliderTeamButton = document.querySelector('.slider-team');

const sliderButtons = document.querySelectorAll('.hedonismfest__button');

const hedonismfestImage = document.querySelector('.hedonismfest__image');

function setImage(imageLinkValue, altValue){
  hedonismfestImage.setAttribute('src', imageLinkValue);
  hedonismfestImage.setAttribute('alt', altValue);
}

function defaultButtonColor(buttons) {
  buttons.forEach(function(item){
    removeActiveColorButton(item);
    addNonActiveColorButton(item);
  });
}

function addActiveColorButton(button) {
  button.classList.add('hedonismfest__button_status_active');
}

function removeActiveColorButton(button) {
  button.classList.remove('hedonismfest__button_status_active');
}

function addNonActiveColorButton(button) {
  button.classList.add('hedonismfest__button_status_non-active');
}

function setButtonColor(button){
  defaultButtonColor(sliderButtons);
  addActiveColorButton(button);
}

sliderParkButton.addEventListener('click', function(event){
  setImage("./images/fest-park.svg", "парк");
  setButtonColor(event.target);
});

sliderLadyButton.addEventListener('click', function(event){
  setImage("./images/fest-lady.svg", "девушка");
  setButtonColor(event.target);
});

sliderDrinkButton.addEventListener('click', function(event){
  setImage("./images/fest-drink.svg", "напитки");
  setButtonColor(event.target);
});

sliderExhibitionButton.addEventListener('click', function(event){
  setImage("./images/fest-exhibition.svg", "выставка");
  setButtonColor(event.target);
});

sliderTeamButton.addEventListener('click', function(event){
  setImage("./images/fest-team.svg", "компания");
  setButtonColor(event.target);
});

function initPage(button){
  addActiveColorButton(button);
}

initPage(sliderLadyButton);

const popupMenu = document.querySelector('.popup_menu')
const menuButton = document.querySelector('.header__menu-button')
const changeCityButton = popupMenu.querySelector('.popup__change-city-button')
const popupChangeCity = document.querySelector('.popup_change-city')
const backButton = popupChangeCity.querySelector('.popup__back-button')
const formChangeCity = popupChangeCity.querySelector('.popup__change-city-form')
const labelCity = formChangeCity.querySelectorAll('.popup__change-city-radio')
const cityName = popupMenu.querySelector('.popup__city-name')
const eventsCards = document.querySelectorAll(".events__card");

menuButton.addEventListener('click', function () {
  popupMenu.classList.toggle('popup_opened')
  if (popupChangeCity.classList.contains('popup_opened')) {
    popupChangeCity.classList.remove('popup_opened')
    popupMenu.classList.remove('popup_opened')
    getCheckedRadio()
  }
})

changeCityButton.addEventListener('click', function () {
  popupMenu.classList.remove('popup_opened')
  popupChangeCity.classList.add('popup_opened')
})

backButton.addEventListener('click', function () {
  popupMenu.classList.add('popup_opened')
  popupChangeCity.classList.remove('popup_opened')
  getCheckedRadio ()
})

function getCheckedRadio () {
  labelCity.forEach(function (item) {
    if (item.checked) {
      cityName.textContent = item.value
      console.log(item.value)
    }
  })
}

eventsCards.forEach(element => {
   element.querySelector(".events__like-button").addEventListener("click", event => {
    event.target.classList.toggle("events__like-button_active");
  })
})
