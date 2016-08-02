'use strict';

const app = require('../app');

const signUp = (data) => {
  return $.ajax({
    url: app.api + '/sign-up/',
    method: 'POST',
    data,
  });
};
const signIn = (data) => $.ajax({
    url: app.api + '/sign-in/',
    method: 'POST',
    data,
  });

const changePassword = (data) => $.ajax({
    url: app.api + '/change-password/' + app.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data,
  });

const signOut = () => $.ajax({
    url: app.api + '/sign-out/' + app.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });


// GAME AJAX
const createGame = () => $.ajax({
    url: app.api + '/games/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });

const updateGame = (i, v, b) => $.ajax({
  url: app.api + '/games/' + app.game.id,
  method: 'PATCH',
  headers: {
    Authorization: 'Token token=' + app.user.token,
  },
  data: {
  "game": {
    "cell": {
      "index": i,
      "value": v
    },
    "over": b
  }
}
});

const getGames = () => $.ajax({
  url: app.api + '/games/',
  method: 'GET',
  headers: {
    Authorization: 'Token token=' + app.user.token,
  },
});

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  createGame,
  updateGame,
  getGames
};
