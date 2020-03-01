function changeColor(){
    var logo = document.getElementsByClassName("logo");
    if (logo.length === 0) {
        var logo2 = document.getElementsByClassName("red");
        logo2[0].className = "logo";
    } else {
        logo[0].className = "red";
    }
    console.log(logo);

}