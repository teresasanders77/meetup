'use strict';

const axios = require('axios');

module.exports.getAccessToken = async (event) => {

  const MEETUP_OAUTH_URL = 'https://secure.meetup.com/oauth2/access'
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
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      access_token: info.data.access_token,
      refresh_token: info.data.refresh_token,
    }),
  };
};

module.exports.refreshAccessToken = async (event) => {
  const MEETUP_OAUTH_URL = 'https://secure.meetup.com/oauth2/access'
    + '?client_id=k9vf6q35i0rb8af51v9cjaat2b'
    + '&client_secret=n8bak7i5hfl3kpgrs8udbnkptn'
    + '&grant_type=refresh_token'
    + '&refresh_token=' + event.pathParameters.code;

  const info = await axios.post(MEETUP_OAUTH_URL);

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      access_token: info.data.access_token,
      refresh_token: info.data.refresh_token,
    }),
  };
};