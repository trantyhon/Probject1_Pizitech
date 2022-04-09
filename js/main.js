function openTheForm() {
    document.querySelector(".overplay").style.display = "block";
    document.querySelector(".navbar-fixed").style.display = "none";
}

function closeTheForm() {
    document.querySelector(".overplay").style.display = "none";
    document.querySelector(".navbar-fixed").style.display = "block";
}


window.onclick = function (event) {
    let modal = document.querySelector('.overplay');
    if (event.target == modal) {
        closeTheForm();
    }
}



window.onload = function (event) {

    closeTheForm();
}


