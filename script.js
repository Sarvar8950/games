var right = document.querySelector(".right")
function navbar() {
    if(right.style.display == "flex") {
        right.style.display = "none"
    } else {
        right.style.display = "flex"
    }
}