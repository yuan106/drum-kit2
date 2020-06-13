for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    // play music after click the button
    // var audio = new Audio("sounds/tom-1.mp3");
    // audio.play();

    // change the color of the text after click the button
    // console.log((this.style.color = "white"));

    //Detect button press

    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
    // switch (buttonInnerHTML) {
    //   case "w":
    //     var audio = new Audio("sounds/tom-1.mp3");
    //     audio.play();
    //     break;
    //   case "a":
    //     var audio = new Audio("sounds/tom-2.mp3");
    //     audio.play();
    //     break;
    //   case "s":
    //     var audio = new Audio("sounds/tom-3.mp3");
    //     audio.play();
    //     break;
    //   case "d":
    //     var audio = new Audio("sounds/tom-4.mp3");
    //     audio.play();
    //     break;
    //   case "j":
    //     var audio = new Audio("sounds/snare.mp3");
    //     audio.play();
    //     break;
    //   case "k":
    //     var audio = new Audio("sounds/crash.mp3");
    //     audio.play();
    //     break;
    //   case "l":
    //     var audio = new Audio("sounds/kick-bass.mp3");
    //     audio.play();
    //     break;
    //   default:
    //     console.log(buttonInnerHTML);
    //     break;
    // }
  });
}

//detect keyboard press

document.addEventListener("keypress", function (event) {
  console.log(event);
  //   alert("Key was pressed!;");
  makeSound(event.key);
  buttonAnimation(event.key);
});
function makeSound(key) {
  switch (key) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    default:
      console.log(buttonInnerHTML);
      break;
  }
}
// buttons have shadow.
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  //timeout function javascript
  //https://www.w3schools.com/jsref/met_win_settimeout.asp
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
