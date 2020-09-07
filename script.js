
function googlesearch() {
    var searchText = document.getElementById("searchbox");
    window.location.href = "http://google.se/search?q=" + searchText.value;


}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}

function addCapsCheck() {
    var input = document.getElementById("emailtext");
    var text = document.getElementById("text");
    input.addEventListener("keyup", function (event) {

        if (event.getModifierState("CapsLock")) {
            text.style.display = "block";
        } else {
            text.style.display = "none"
        }
    });

}
