var mapLink = document.getElementById("buttonMap1");
var mapLink2 = document.getElementById("buttonMap2");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-map-close");

if (mapLink) {

    mapLink.addEventListener("click", function (evt) {
        evt.preventDefault();
        mapPopup.classList.add("map-driveIn");
        overlay.style.display = "block";
    });
};

if (mapLink) {
    mapLink2.addEventListener("click", function (evt) {
        evt.preventDefault();
        mapPopup.classList.add("map-driveIn");
        overlay.style.display = "block";
    });
};

mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("map-driveIn");
    overlay.style.display = "none";
    mapPopup.classList.add("map-driveOut");
    setTimeout(function () {
        //mapPopup.style.display = "none";
        mapPopup.classList.remove("map-driveOut");
    }, 200);
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (mapPopup.classList.contains("map-driveIn")) {
            mapPopup.classList.remove("map-driveIn");
            overlay.style.display = "none";
        }
    }
});