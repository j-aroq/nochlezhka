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

