'use strict';
// stores user data
const app =require('../app');

const success = (data) => {
  console.log(data);
};
// stores user data
const signInSuccess = (data) => {
  app.user = data.user;
  console.log(app);
};

const signOutSuccess = () => {
  delete app.user;
  console.log(app);
};

const failure = (error) => {
  console.error(error);
};

// Game AJAX
const createGameSuccess = (data) => {
  app.game = data.game;
  console.log(app);
};



module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  createGameSuccess
};
