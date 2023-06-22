const sliderParkButton = document.querySelector('.hedonismfest__button_slider_park');
const sliderLadyButton = document.querySelector('.hedonismfest__button_slider_lady');
const sliderDrinkButton = document.querySelector('.hedonismfest__button_slider_drink');
const sliderExhibitionButton = document.querySelector('.hedonismfest__button_slider_exhibition');
const sliderTeamButton = document.querySelector('.hedonismfest__button_slider_team');

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

const popupMenu = document.querySelector('.popup_type_menu')
const menuButton = document.querySelector('.header__menu-button')
const changeCityButton = popupMenu.querySelector('.popup__change-city-button')
const popupChangeCity = document.querySelector('.popup_type_change-city')
const backButton = popupChangeCity.querySelector('.popup__back-button')
const formChangeCity = popupChangeCity.querySelector('.popup__change-city-form')
const labelCity = formChangeCity.querySelectorAll('.popup__form-radio')
const cityName = popupMenu.querySelector('.popup__city-name')
const openDonateButtonInPopup = popupMenu.querySelector('.popup__open-donate-button')
const openDonateButtonInHeader = document.querySelector('.header__donate-button')
const popupDonate = document.querySelector('.popup_type_donate')
const popupTickets = document.querySelector('.popup_type_tickets')
const donateFormElement = document.querySelector('.popup__donate-form');
const ticketsFormElement = document.querySelector('.popup__tickets-form')
//const closeDonateButton = popupDonate.querySelector('.popup__close-button')
const closeButtons = document.querySelectorAll('.popup__close-button')
const sumOfMoneyButton = popupDonate.querySelectorAll('.popup__sum-of-money')
const inputSum = popupDonate.querySelector('.popup__sum-of-money-input')
const header = document.querySelector('.header')

function openPopup (popup) {
  popup.classList.add('popup_opened')
}

function closePopup (popup) {
  popup.classList.remove('popup_opened')
}

const eventsCards = document.querySelectorAll(".events__card");
eventsCards.forEach(element => {
  element.querySelector(".events__like-button").addEventListener("click", event => {
   event.target.classList.toggle("events__like-button_active");
 })
})

menuButton.addEventListener('click', function () {
  popupMenu.classList.toggle('popup_opened')
  if (popupChangeCity.classList.contains('popup_opened')) {
    closePopup(popupChangeCity);
    closePopup(popupMenu);
    getCheckedRadio()
  }
  if (popupDonate.classList.contains('popup_opened')) {
    closePopup(popupDonate)
    closePopup(popupMenu)
  }
})

changeCityButton.addEventListener('click', function () {
  closePopup(popupMenu);
  openPopup(popupChangeCity)
})

backButton.addEventListener('click', function () {
  openPopup(popupMenu);
  closePopup(popupChangeCity)
  getCheckedRadio ()
})

function getCheckedRadio () {
  labelCity.forEach(function (item) {
    if (item.checked) {
      cityName.textContent = item.value;
    }
  })
}

openDonateButtonInPopup.addEventListener('click', function () {
  closePopup(popupMenu);
  openPopup(popupDonate);
})

openDonateButtonInHeader.addEventListener('click', function () {
  document.location.href = "./thanks.html";
  // openPopup(popupDonate)
})

//closeDonateButton.addEventListener('click', function () {
//  closePopup(popupDonate)
//  donateFormElement.reset();
//})

sumOfMoneyButton.forEach(function (item) {
  item.addEventListener('click', function () {
    sumOfMoneyButton.forEach(function (item) {
      item.classList.remove('popup__sum-of-money_active');
      item.classList.remove('page__button-hover'); //
      item.classList.add('page__link-hover', 'page__link-hover_border');//
      })
    item.classList.add('popup__sum-of-money_active');
    item.classList.add('page__button-hover'); //
    item.classList.remove('page__link-hover', 'page__link-hover_border');//
    if (donateFormElement.querySelector('.popup__sum-of-money-input').value < 1) {
      donateFormElement.querySelector('.popup__sum-of-money-input').value = "";
    }
  })
})

inputSum.addEventListener('click', function () {
  sumOfMoneyButton.forEach(function (item) {
    item.classList.remove('popup__sum-of-money_active')
    item.classList.remove('page__button-hover'); //
    item.classList.add('page__link-hover', 'page__link-hover_border');//
})
})

let prevScroll = window.scrollY;
let curScroll;

window.addEventListener('scroll', () => {
  curScroll = window.scrollY;
  let headerHidden = header.classList.contains('header_hidden');

  if (curScroll > prevScroll && !headerHidden) {
    header.classList.add('header_hidden');
  } else if (curScroll < prevScroll && headerHidden) {
    header.classList.remove('header_hidden');
  }

  prevScroll = curScroll;
});

donateFormElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  closePopup(popupDonate);
  // вывод в консоль значений полей попапа
  const popupDonateValues = {};

  donateFormElement.querySelectorAll('.popup__sum-of-money').forEach(function (item) {
    if (item.classList.contains('popup__sum-of-money_active')) {
      popupDonateValues[item.name] = parseInt(item.querySelector('.popup__sum-of-money-text').textContent);
    }
  })
  if (!popupDonateValues['sum-of-money']) {
    popupDonateValues[donateFormElement.querySelector('.popup__sum-of-money-input').name] = parseInt(donateFormElement.querySelector('.popup__sum-of-money-input').value);
  }

  popupDonateValues[donateFormElement.querySelector('.popup__email-input').name] = donateFormElement.querySelector('.popup__email-input').value;

  donateFormElement.querySelectorAll('.popup__form-radio').forEach(function (item) {
    if (item.checked) {
      popupDonateValues[item.name] = item.value;
    }
  })
  console.log(popupDonateValues);
  //
  donateFormElement.reset();
});

//Один обработчик для крестиков
closeButtons.forEach((button)=>{
  const popup = button.closest('.popup');
  button.addEventListener('click',()=>closePopup(popup));
})
//кнопки + и -
const moreButton = document.querySelector('.popup__tickets-button_type_more');
const lessButton = document.querySelector('.popup__tickets-button_type_less');
const ticketsAmount = document.querySelector('.popup__tickets-input');
const ticketsPrice = document.querySelector('.popup__tickets-price');

function addTicket(){
  ticketsAmount.value = parseInt(ticketsAmount.value)+1;
  ticketsPrice.innerHTML = 500*ticketsAmount.value + '&#8381';
}
function removeTicket(){
  if (ticketsAmount.value>1){
  ticketsAmount.value = parseInt(ticketsAmount.value)-1;
  ticketsPrice.innerHTML = 500*ticketsAmount.value + '&#8381';
  }
}

ticketsAmount.addEventListener('change',()=>{
  ticketsPrice.innerHTML = 500*ticketsAmount.value + '&#8381';
})

moreButton.addEventListener('click',function(){
  addTicket();
})

lessButton.addEventListener('click', function(){
  removeTicket();
})

ticketsFormElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  closePopup(popupTickets);
  // вывод в консоль значений полей попапа
  const popupTicketsValues = {};

  popupTicketsValues[ticketsAmount.name] = ticketsAmount.value;
  popupTicketsValues.Price = ticketsPrice.innerHTML;

  popupTicketsValues[ticketsFormElement.querySelector('.popup__email-input_type_tickets').name] = ticketsFormElement.querySelector('.popup__email-input_type_tickets').value;

  ticketsFormElement.querySelectorAll('.popup__form-radio').forEach(function (item) {
    if (item.checked) {
      popupTicketsValues[item.name] = item.value;
    }
  })
  console.log(popupTicketsValues);
  //
  ticketsFormElement.reset();
});
