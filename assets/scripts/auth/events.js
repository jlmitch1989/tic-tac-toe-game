'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');

const toePic = ('./assets/toe-pic.jpg');
const ticTacPic = ('./assets/tic-tac-pic.jpg');

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

// CLICK MOVES
const onMove = function (event) {
  console.log(toePic);

};

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#change-password').on('submit', onChangePassword);
  $('#sign-out').on('submit', onSignOut);
  $('.tile-a, .tile-b, .tile-c, .tile-d, .tile-e, .tile-f, .tile-g, .tile-h, .tile-i').on('click', onMove);
  
};

module.exports = {
  addHandlers,
};
