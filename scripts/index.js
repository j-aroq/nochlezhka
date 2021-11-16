const popupMenu = document.querySelector('.popup_menu')
const menuButton = document.querySelector('.header__menu-button')
const changeCityButton = popupMenu.querySelector('.popup__change-city-button')
const popupChangeCity = document.querySelector('.popup_change-city')
const backButton = popupChangeCity.querySelector('.popup__back-button')
const formChangeCity = popupChangeCity.querySelector('.popup__change-city-form')
const labelCity = formChangeCity.querySelectorAll('.popup__form-radio')
const cityName = popupMenu.querySelector('.popup__city-name')
const openDonateButtonInPopup = popupMenu.querySelector('.popup__open-donate-button')
const openDonateButtonInHeader = document.querySelector('.header__donate-button')
const popupDonate = document.querySelector('.popup_donate')
const closeDonateButton = popupDonate.querySelector('.popup__donate-close-button')
const sumOfMoneyButton = popupDonate.querySelectorAll('.popup__sum-of-money')
const inputSum = popupDonate.querySelector('.popup__sum-of-money-input')

function openPopup (popup) {
  popup.classList.add('popup_opened')
}

function closePopup (popup) {
  popup.classList.remove('popup_opened')
}

menuButton.addEventListener('click', function () {
  popupMenu.classList.toggle('popup_opened')
  if (popupChangeCity.classList.contains('popup_opened')) {
    closePopup(popupChangeCity)
    closePopup(popupMenu)
    getCheckedRadio()
  }
})

changeCityButton.addEventListener('click', function () {
  closePopup(popupMenu)
  openPopup(popupChangeCity)
})

backButton.addEventListener('click', function () {
  openPopup(popupMenu)
  closePopup(popupChangeCity)
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

openDonateButtonInPopup.addEventListener('click', function () {
  closePopup(popupMenu)
  openPopup(popupDonate)
})

openDonateButtonInHeader.addEventListener('click', function () {
  openPopup(popupDonate)
})

closeDonateButton.addEventListener('click', () => closePopup(popupDonate))

sumOfMoneyButton.forEach(function (item) {
  item.addEventListener('click', function () {
    sumOfMoneyButton.forEach(function (item) {
      item.classList.remove('popup__sum-of-money_active')
    })
    item.classList.add('popup__sum-of-money_active')
  })
})

inputSum.addEventListener('click', function () {
  sumOfMoneyButton.forEach(function (item) {
    item.classList.remove('popup__sum-of-money_active')
  })
})
