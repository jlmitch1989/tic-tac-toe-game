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
  //shows game board after clickin start game
  $('.game-board').show();
  //shows restart button after clickin start game
  $('.clear-button').show();
  //hides start game button after clicking start game button
  $('.start-button').hide();
};

const patchGameSuccess = (data) => {
  app.game = data.game;
  console.log(app);
};

const getGamesSuccess = (data) => {
  // console.log('ASS');
  app.getGame = data.games;
  console.log(app);
  $('.results').text("User has played " + app.getGame.length + " games!");
};


module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  createGameSuccess,
  patchGameSuccess,
  getGamesSuccess
};
