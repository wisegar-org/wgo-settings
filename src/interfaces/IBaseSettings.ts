export interface IBaseSettings {
  HOST_BASE: string;
  DB_NAME: string;
  DB_PASSWORD: string;
  DB_USERNAME: string;
  DB_PORT: number;
  DB_HOST: string;
  PRIVATE_KEY: string;
  PUBLIC_KEY: string;
  CYPHER_KEY: string;
  TOKEN_EXPIRES_IN: string;
  TOKEN_TIME_TO_EXPIRE: string;
  EMAIL_HOST: string;
  EMAIL_PORT: number;
  EMAIL_LOG: boolean;
  EMAIL_DEBUG: boolean;
  EMAIL_SECURE: boolean;
  EMAIL_SENDER_ANONYMOUS: boolean;
  EMAIL_SENDER_ADDRESS: string;
  EMAIL_SENDER_ADDRESS_NAME: string;
  EMAIL_SENDER_PASSWORD: string;
  EMAIL_APP_ADDRESS: string;
  EMAIL_APP_ADDRESS_NAME: string;
  USER_POLICE_TOKEN: string;
  USER_POLICE_RESETPWD_URL: string;
  USER_POLICE_RESETPWD_EMAIL: string;
  USER_POLICE_RESETPWD_EXP: number;
}
