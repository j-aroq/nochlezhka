const popupMenu = document.querySelector('.popup_menu')
const menuButton = document.querySelector('.header__menu-button')
const changeCityButton = popupMenu.querySelector('.popup__change-city-button')
const popupChangeCity = document.querySelector('.popup_change-city')
const backButton = popupChangeCity.querySelector('.popup__back-button')
const formChangeCity = popupChangeCity.querySelector('.popup__change-city-form')
const labelCity = formChangeCity.querySelectorAll('.popup__change-city-label')


menuButton.addEventListener('click', function () {
  popupMenu.classList.toggle('popup_opened')
  if (popupChangeCity.classList.contains('popup_opened')) {
    popupChangeCity.classList.remove('popup_opened')
    popupMenu.classList.remove('popup_opened')
  }
})

changeCityButton.addEventListener('click', function () {
  popupMenu.classList.remove('popup_opened')
  popupChangeCity.classList.add('popup_opened')
  b()
})

backButton.addEventListener('click', function () {
  popupMenu.classList.add('popup_opened')
  popupChangeCity.classList.remove('popup_opened')
})

const cityRadio = document.querySelectorAll('.popup__change-city-radio')
const cityPicture = document.querySelectorAll('.popup__change-city-picture')
console.log(cityPicture)

function b () {
  labelCity.forEach(function (item) {
    item.addEventListener('click', () => a())
  })
}

function a () {
  for (let i= 0; i < cityRadio.length; i++) {
    if (cityRadio[i].checked) {
      console.log(i)
      cityPicture[i].classList.toggle('popup__change-city-picture_checked')
    }
  }
}
