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
if (gameBoardArray[0] === 'x' &&        //Start of diagnols for 'x'
    gameBoardArray[4] === 'x' &&
    gameBoardArray[8] === 'x') {
      return 'x';
    }
if (gameBoardArray[2] === 'x' &&
    gameBoardArray[4] === 'x' &&
    gameBoardArray[6] === 'x') {
      return 'x';
    }
};


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
      // console.log('The count is ' + counter);
    if (counter < 3) {
      return;
    }
    //Check for winner function

    }
};

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#change-password').on('submit', onChangePassword);
  $('#sign-out').on('submit', onSignOut);
  $('.game-tile').on('click', onTurn);
};

module.exports = {
  addHandlers,
};
