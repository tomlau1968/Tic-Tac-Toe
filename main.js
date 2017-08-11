let turn = true;
let player = "x"
let score = 0;


////DOM JS stuff
$(document).ready(function() {
  $('.btn').on('click', function() {
    location.reload();
  })

  let audio = new Audio('Alex_Cohen_-_Good_Old_Times.mp3');

  $('.btn2').on('click', function() {
    console.log('yes');
    audio.play();
  })

  $('.divTableCell').on('click', function() {
    $(this).text(player).addClass(player);
    let result = youWon();

    if (result === 'x') {
      $('.xwin').text("X win");

    } else if (result === 'o') {
      $('.xwin').text("O win");

    }


    // need to do below as change as "x" to "o" than back to "x" again
    if (turn === true) { // start as player "x" as in the logic
      turn = false; //Switch to false
      player = "o" //next time the player click become player "o"
    } else if (turn === false) {
      turn = true; //turn back to true again
      player = "x" //output "X"
    }
  })


  //below is the engine to check the ressult......
  let youWon = function() {

    if ($("#0").hasClass("x") && $("#1").hasClass("x") && $("#2").hasClass("x")) {
      return "x";
    } else if ($("#0").hasClass("o") && $("#1").hasClass("o") && $("#2").hasClass("o")) {
      return "o";

    } else if ($("#3").hasClass("x") && $("#4").hasClass("x") && $("#5").hasClass("x")) {
      return "x";
    } else if ($("#3").hasClass("o") && $("#4").hasClass("o") && $("#5").hasClass("o")) {
      return "o";

    } else if ($("#6").hasClass("x") && $("#7").hasClass("x") && $("#8").hasClass("x")) {
      return "x";
    } else if ($("#6").hasClass("o") && $("#7").hasClass("o") && $("#8").hasClass("o")) {
      return "o";
      //conditions for row end



      //conditions  veritcal column start
    } else if ($("#0").hasClass("x") && $("#3").hasClass("x") && $("#6").hasClass("x")) {
      return "x";
    } else if ($("#0").hasClass("o") && $("#3").hasClass("o") && $("#6").hasClass("o")) {
      return "o";
    } else if ($("#1").hasClass("x") && $("#4").hasClass("x") && $("#7").hasClass("x")) {
      return "x";
    } else if ($("#1").hasClass("o") && $("#4").hasClass("o") && $("#7").hasClass("o")) {
      return "o";
    } else if ($("#2").hasClass("x") && $("#5").hasClass("x") && $("#8").hasClass("x")) {
      return "x";
    } else if ($("#2").hasClass("o") && $("#5").hasClass("o") && $("#8").hasClass("o")) {
      return "o";
      //conditions  veritcal column end


      //conditions  across column
    } else if ($("#0").hasClass("x") && $("#4").hasClass("x") && $("#8").hasClass("x")) {
      return "x";
    } else if ($("#0").hasClass("o") && $("#4").hasClass("o") && $("#8").hasClass("o")) {
      return "o";
    } else if ($("#2").hasClass("x") && $("#4").hasClass("x") && $("#6").hasClass("x")) {
      return "x";
    } else if ($("#2").hasClass("o") && $("#4").hasClass("o") && $("#6").hasClass("o")) {
      return "o";
    } else {
      return false;

    }
  };





});
