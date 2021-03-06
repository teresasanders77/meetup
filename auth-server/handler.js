'use strict';

const axios = require('axios');

module.exports.getToken = async (event) => {
  const MEETUP_OAUTH_URL = 'https://cors-anywhere.herokuapp.com/https://secure.meetup.com/oauth2/access'
    + '?client_id=k9vf6q35i0rb8af51v9cjaat2b'
    + '&client_secret=n8bak7i5hfl3kpgrs8udbnkptn'
    + '&grant_type=authorization_code'
    + '&redirect_uri=https://teresasanders77.github.io/meetup/'
    + '&code=' + event.pathParameters.code;

  const info = await axios.post(MEETUP_OAUTH_URL);

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2'],
    body: JSON.stringify({
      access_token: info.data.access_token,
      refresh_token: info.data.refresh_token,
    }),
  };
};

module.exports.refreshToken = async (event) => {
  const MEETUP_OAUTH_URL = 'https://cors-anywhere.herokuapp.com/https://secure.meetup.com/oauth2/access'
    + '?client_id=k9vf6q35i0rb8af51v9cjaat2b'
    + '&client_secret=n8bak7i5hfl3kpgrs8udbnkptn'
    + '&grant_type=refresh_token'
    + '&refresh_token=' + event.pathParameters.code;

  const info = await axios.post(MEETUP_OAUTH_URL);

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      "Access-Control-Allow-Credentials": true
    },
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2'],
    body: JSON.stringify({
      access_token: info.data.access_token,
      refresh_token: info.data.refresh_token,
    }),
  };
};