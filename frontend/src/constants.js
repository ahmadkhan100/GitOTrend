/* eslint-disable no-nested-ternary */
export const PROD = process.env.REACT_APP_PROD === 'true';

export const USE_LOGGER = true;

export const CLIENT_ID = PROD
  ? process.env.REACT_APP_PROD_CLIENT_ID
  : process.env.REACT_APP_DEV_CLIENT_ID;

export const MODE = process.env.REACT_APP_MODE;


export const GITHUB_PRIVATE_AUTH_URL = `https://github.com/login/oauth/authorize?scope=user,repo&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}/private`;
export const GITHUB_PUBLIC_AUTH_URL = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}/public`;


export const CURR_YEAR = 2024;
