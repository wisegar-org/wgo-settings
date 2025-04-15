import { IBaseSettings } from '../interfaces/IBaseSettings';

export const defaultBaseSettings: IBaseSettings = {
  HOST_BASE: '',
  CYPHER_KEY: 'INSERT A CYPHER_KEY FOR DATA CYPHER HANDLER',
  PRIVATE_KEY: 'INSERT A PRIVATE_KEY FOR JWT TOKEN HANDLER',
  PUBLIC_KEY: 'INSERT A PUBLIC_KEY FOR JWT TOKEN HANDLER',
  TOKEN_EXPIRES_IN: '7d',
  TOKEN_TIME_TO_EXPIRE: '324000',
  DB_HOST: 'localhost',
  DB_PORT: 5432,
  DB_USERNAME: 'postgres',
  DB_NAME: 'postgres',
  DB_PASSWORD: 'postgres',
  EMAIL_HOST: '',
  EMAIL_PORT: 587,
  EMAIL_LOG: true,
  EMAIL_DEBUG: true,
  EMAIL_SECURE: false, // Use SSL
  EMAIL_SENDER_ANONYMOUS: false,
  EMAIL_SENDER_ADDRESS: '',
  EMAIL_SENDER_ADDRESS_NAME: '',
  EMAIL_SENDER_PASSWORD: '',
  EMAIL_APP_ADDRESS: '',
  EMAIL_APP_ADDRESS_NAME: '',
  USER_POLICE_TOKEN: '',
  USER_POLICE_RESETPWD_URL: '',
  USER_POLICE_RESETPWD_EMAIL: '',
  USER_POLICE_RESETPWD_EXP: 1800,
};
