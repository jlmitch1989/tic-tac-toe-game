'use strict';

let gameBoardArray = [];
let counter = 1;

const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');

const toePic = ('assets/toe-pic.jpg');
const ticTacPic = ('assets/tic-tac-pic.jpg');


// SIGNIN / SIGNUP/ SIGNOUT / CHANGE PASSWORD
const onSignUp = function (event) {
  console.log('test');
  let data = getFormFields(this);
  event.preventDefault();
  api.signUp(data)
    .done(ui.success)
    .fail(ui.failure);
};

const onSignIn = function (event) {
  let data = getFormFields(this);
  event.preventDefault();
  api.signIn(data)
    .done(ui.signInSuccess)
    .fail(ui.failure);
};

const onChangePassword = function onChangePassword(event) {
  let data = getFormFields(this);
  event.preventDefault();
  api.changePassword(data)
    .done(ui.success)
    .fail(ui.failure);
};

const onSignOut = function (event) {
  event.preventDefault();
  api.signOut()
    .done(ui.signOutSuccess)
    .fail(ui.failure);
};
// SIGNIN / SIGNUP/ SIGNOUT / CHANGE PASSWORD END


//GET WINNER FUNCTION
const getWinner = function() {
if (gameBoardArray[0] === 'x' &&      //Start of rows for 'x'
    gameBoardArray[1] === 'x' &&
    gameBoardArray[2] === 'x') {
      return 'x';
    }
if (gameBoardArray[3] === 'x' &&
    gameBoardArray[4] === 'x' &&
    gameBoardArray[5] === 'x') {
      return 'x';
    }
if (gameBoardArray[6] === 'x' &&
    gameBoardArray[7] === 'x' &&
    gameBoardArray[8] === 'x') {
      return 'x';
    }
if (gameBoardArray[0] === 'x' &&      //Start of columns for 'x'
    gameBoardArray[3] === 'x' &&
    gameBoardArray[6] === 'x') {
      return 'x';
    }
if (gameBoardArray[1] === 'x' &&
    gameBoardArray[4] === 'x' &&
    gameBoardArray[7] === 'x') {
      return 'x';
    }
if (gameBoardArray[2] === 'x' &&
    gameBoardArray[5] === 'x' &&
    gameBoardArray[8] === 'x') {
      return 'x';
    }
if (gameBoardArray[0] === 'x' &&        //Start of diagonals for 'x'
    gameBoardArray[4] === 'x' &&
    gameBoardArray[8] === 'x') {
      return 'x';
    }
if (gameBoardArray[2] === 'x' &&
    gameBoardArray[4] === 'x' &&
    gameBoardArray[6] === 'x') {
      return 'x';
    }
if (gameBoardArray[0] === 'o' &&      //Start of rows for 'o'
    gameBoardArray[1] === 'o' &&
    gameBoardArray[2] === 'o') {
      return 'o';
    }
if (gameBoardArray[3] === 'o' &&
    gameBoardArray[4] === 'o' &&
    gameBoardArray[5] === 'o') {
      return 'o';
    }
if (gameBoardArray[6] === 'o' &&
    gameBoardArray[7] === 'o' &&
    gameBoardArray[8] === 'o') {
      return 'o';
    }
if (gameBoardArray[0] === 'o' &&      //Start of columns for 'o'
    gameBoardArray[3] === 'o' &&
    gameBoardArray[6] === 'o') {
      return 'o';
    }
if (gameBoardArray[1] === 'o' &&
    gameBoardArray[4] === 'o' &&
    gameBoardArray[7] === 'o') {
      return 'o';
    }
if (gameBoardArray[2] === 'o' &&
    gameBoardArray[5] === 'o' &&
    gameBoardArray[8] === 'o') {
      return 'o';
    }
if (gameBoardArray[0] === 'o' &&        //Start of diagonals for 'o'
    gameBoardArray[4] === 'o' &&
    gameBoardArray[8] === 'o') {
      return 'o';
    }
if (gameBoardArray[2] === 'o' &&
    gameBoardArray[4] === 'o' &&
    gameBoardArray[6] === 'o') {
      return 'o';
    }
  };

// const boardFull = function () {
//   for (let i = 0; i < 9; i++) {
//     return gameBoardArray[i];
//   }
// };

// GAME LOGIC
const onTurn = function () {
  let $tile = $(this);
  if ($tile.attr('style')) {
    return;
  }else {
    if (counter % 2) {
      //first person logic
      $tile.css("background-image" , 'url("' + ticTacPic + '")');
      let index = parseInt($tile.data('index'), 10);
      gameBoardArray[index] = 'x';
      // console.log('first person');
    }else {
      //second person logic
      $tile.css("background-image" , 'url("' + toePic + '")');
      let index = parseInt($tile.data('index'), 10);
      gameBoardArray[index] = 'o';
      // console.log('second person');
    }
      counter++;
      //if getWinner returns 'x'or 'o'
      if (getWinner() === 'x') {
        //game is won.
        console.log('X won');
        //end game and announce winner
        $('.announcement').text('Tic-tac has won!');
      }else if (getWinner() === 'o') {
        console.log('O Won');
        //end game and announce winner
        $('.announcement').text('Toe has won!');
      }else if (counter === 10) {
        console.log('Draw');
        //end game and announce winner
        $('.announcement').text('Draw!');

      }
        //start a new game
      //check if board is full counter is 10 and no winner
        //it's a draw
  }
};

//on click of clear button
const clearBoard = function() {
  //empty gameBoardArray
  gameBoardArray = [];
  //clear images
  $('.game-tile').each(function() {
    $(this).css("background-image", "none");
  });
  //counter needs to be reset
  counter = 1;
};

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#change-password').on('submit', onChangePassword);
  $('#sign-out').on('submit', onSignOut);
  $('.game-tile').on('click', onTurn);
  $('.clear-button').on('click', clearBoard);
};

module.exports = {
  addHandlers,
};
