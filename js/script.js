var popup = document.querySelector(".js-form");
var formTrigger = document.querySelector(".js-form-trigger");
var formClose = popup.querySelector('.js-form-close');

var form = popup.querySelector("form");
var userName = popup.querySelector("[name=name]");
var userEmail = popup.querySelector("[name=email]");
var userText = popup.querySelector("[name=text]");

// Событие клика по кнопке
formTrigger.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add("popup-show");
  if (storageName || storageEmail) {
    userName.value = storageName;
    userEmail.value = storageEmail;
    userText.focus();
  } else {
    userName.focus();
  }
});

// Событие закрытия формы
formClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("popup-show");
  });

// Валидация формы
form.addEventListener("submit", function (evt) {
  userName.classList.remove("input-error");
  userEmail.classList.remove("input-error");
    if (!userName.value || !userEmail.value) {
      evt.preventDefault();
      popup.classList.remove("popup-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("popup-error");
    } else {
      if (isStorageSupport)
        localStorage.setItem("name", userName.value);
        localStorage.setItem("email", userEmail.value);
    }
    if (!userName.value) {
      userName.classList.add("input-error");
    }
    if (!userEmail.value) {
      userEmail.classList.add("input-error");
    }
  }
);

// Обработчик события нажатия кнопки ESC и закрытия модального окна
window.addEventListener("keydown", function (evt) {
if (evt.keyCode === 27) {
  evt.preventDefault();
  if (popup.classList.contains("popup-show")) {
    popup.classList.remove("popup-show");
    popup.classList.remove("popup-error");
  }
}
});

// // Поддержка LocalStorage (опционально)
// var isStorageSupport = true;
// var storageName = "";
// var storageEmail = "";

// try {
//   storageName = localStorage.getItem("name");
//   storageEmail = localStorage.getItem("email");
// } catch (err) {
//   isStorageSupport = false;
// }
