$(document).ready(function () {
  $("body").keydown((e) => {
    switch (e.keyCode) {
      //First case is for number row above letters
      //Second case is for the number pad
      case 48:
      case 96:
        const bassSound = new Audio("sounds/bass.mp3");
        bassSound.play();
        break;
      case 49:
      case 97:
        const floorTomSound = new Audio("sounds/floorTom.mp3");
        floorTomSound.play();
        break;
      case 50:
      case 98:
        const medTomSound = new Audio("sounds/medTom.mp3");
        medTomSound.play();
        break;
      case 51:
      case 99:
        const smallTomSound = new Audio("sounds/smallTom.mp3");
        smallTomSound.play();
        break;
      case 52:
      case 100:
        const crashSound = new Audio("sounds/crash.mp3");
        crashSound.play();
        break;
      case 53:
      case 101:
        const snareSound = new Audio("sounds/snare.mp3");
        snareSound.play();
        break;
      case 54:
      case 102:
        const hiHatSound = new Audio("sounds/hiHat.mp3");
        hiHatSound.play();
        break;
    }
  });

  $("#bass").click(function () {
    const bassSound = new Audio("sounds/bass.mp3");
    bassSound.play();
  });
  $("#crash").click(function () {
    const crashSound = new Audio("sounds/crash.mp3");
    crashSound.play();
  });
  $("#hiHat").click(function () {
    const hiHatSound = new Audio("sounds/hiHat.mp3");
    hiHatSound.play();
  });
  $("#medTom").click(function () {
    const medTomSound = new Audio("sounds/medTom.mp3");
    medTomSound.play();
  });
  $("#smallTom").click(function () {
    const smallTomSound = new Audio("sounds/smallTom.mp3");
    smallTomSound.play();
  });
  $("#floorTom").click(function () {
    const floorTomSound = new Audio("sounds/floorTom.mp3");
    floorTomSound.play();
  });
  $("#snare").click(function () {
    const snareSound = new Audio("sounds/snare.mp3");
    snareSound.play();
  });
});
