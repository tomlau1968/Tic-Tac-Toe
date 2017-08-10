// addClass hasClass if...else .hide toggle??, array??, indexOf??

//add player 1 and 2
//turn off all crosses and sqaures ".hind"

// shoud I create another class called "square" and put  crosse and circle inside????? andClass to xCross and oCircle???

//onclick to appear cross or square 'hasClass'

//if 'square' is click 'addClass', so player have clicked and show either circle or cross

/////to win//////
//use if...else if...
// list out all conditions
// 8 conditions to win//
// 3 rows stright, 3 columns stright and 2 crosses section..
//if conditions return ture
//alert you WIN!
//else alert play again?


////logic/////
let turn = true;
let player = "x"

let oWin = 0
// let win = [0, 1, 2, 3, 4, 5, 6, 7, 8];

////DOM JS stuff
$(document).ready(function() {
$('.divTableCell').on('click', function() {
    $(this).text(player).addClass(player); //output "X"
    let result = youWon(); // this shouls be in the last, but this is JS as, you can write the end and place on top

    if (result === 'x' || result === 'o') { // below is
      alert(`Congratulations, ${ result } won!`);
    }

  //   if (result === 'x') {
  //   $(".xwin").text(0+1);
  //
  //
  // } else {
  //     $(".owin").text("hello");
      // alert(`Congratulations, ${ result } won!`





    //

    // function drawScore() {
    //     $('.xwin').text('X=');
    //     ctx.font = "16px Arial";
    //     ctx.fillStyle = "#0095DD";
    //     ctx.fillText("Score: "+score, 8, 20);
    // let score = function() {


    // };


    //  {
    //
    //     $('#checking-balance').text('$' + bank.checking);
    //
    //     bank.deposit('checking', amount);
    //     render();
    // }
    //switching player, kind of lie to computer
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
