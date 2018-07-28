var link = document.querySelector(".login-link");
var popup = document.querySelector(".modal-login");
var close = popup.querySelector(".modal-close");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");
var overlay = document.querySelector(".modal-overlay");
var isStorageSupport = true;
var storage = "";

try {
    storage = localStorage.getItem("login");
} catch (err) {
    isStorageSupport = false;
};

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show"); //open popup
    overlay.style.display = "block"; //open modal-overlay background
    if (storage) {
        login.value = storage;
        password.focus();
    } else {
        login.focus();
    }
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show"); //close popup
    overlay.style.display = "none"; //close modal-overlay background
    form.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
    if (!login.value || !password.value) {
        evt.preventDefault();
        form.classList.remove("modal-error");
        //popup.offsetWidth = popup.offsetWidth;
        // form.classList.add("modal-error");
        setTimeout(function () {
            form.classList.add("modal-error")
        }, 1);
    } else {
        if (isStorageSupport) {
            localStorage.setItem("login", login.value);
        }
    }
});

window.addEventListener("keydown", function (evt) { //for key pressed on keyboard
    if (evt.keyCode === 27) { //and if key="Escpae"
        evt.preventDefault();
        if (popup.classList.contains("modal-show")) { //if popup modal window is opened
            popup.classList.remove("modal-show"); //close popup
            overlay.style.display = "none"; //close modal-overlay background
            form.classList.remove("modal-error");
        }
    }
});

