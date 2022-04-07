import dotenv from 'dotenv';
import { join } from 'path';
import { IBaseSettings } from '../interfaces/IBaseSettings';
import { defaultBaseSettings } from '../models/DefaultBaseSettings';

dotenv.config({
  path: '.env',
});

export const GetNodeEnvKey = () => {
  if (process.env.NODE_ENV) return process.env.NODE_ENV;
  throw 'Impossible to get value from NODE_ENV environment key';
};

export const GetSettingsFolderPathKey = () => {
  if (process.env.SETTINGS_PATH) return process.env.SETTINGS_PATH;
  return '.';
};

export const GetPortKey = () => {
  if (process.env.PORT) return process.env.PORT;
  throw 'Impossible to get value from PORT environment key';
};

export const GetConfigFileName = () => {
  const nodeEnv = GetNodeEnvKey();
  return nodeEnv === 'production' ? './settings.json' : `./settings.${nodeEnv}.json`;
};

export const GetConfig = <TSettings extends IBaseSettings>(): TSettings => {
  const fs = require('fs-extra');
  const configFilename = join(GetSettingsFolderPathKey(), GetConfigFileName());
  if (!fs.existsSync(configFilename)) {
    console.error(`Settings file not found. File ${configFilename} will be created!`);
    fs.writeJsonSync(configFilename, defaultBaseSettings);
  }
  const settingsReadContent = fs.readFileSync(configFilename);
  const settingsJsonReadContent = JSON.parse(settingsReadContent);
  return settingsJsonReadContent;
};

export const GetPublicKey = () => {
  const settings = GetConfig();
  if (settings.PUBLIC_KEY === defaultBaseSettings.PUBLIC_KEY)
    throw 'Impossible to get value from PUBLIC_KEY settings key';
  return settings.PUBLIC_KEY;
};

export const GetGithubToken = () => {
  const settings = GetConfig();
  if ((settings as any).GITHUB_TOKEN === '' || (settings as any).GITHUB_TOKEN === null)
    throw 'Impossible to get value from GITHUB_TOKEN settings key';
  return (settings as any).GITHUB_TOKEN;
};

export const GetPrivateKey = () => {
  const settings = GetConfig();
  if (settings.PRIVATE_KEY === defaultBaseSettings.PRIVATE_KEY)
    throw 'Impossible to get value from PRIVATE_KEY settings key';
  return settings.PRIVATE_KEY;
};

export const GetExpiresInKey = () => {
  const settings = GetConfig();
  if (settings.TOKEN_EXPIRES_IN === '') throw 'Impossible to get value from TOKEN_EXPIRES_IN settings key';
  return settings.TOKEN_EXPIRES_IN;
};

/**
 * @description Time to token expiration. Default value 90 days (324000s)
 */
export const GetTimeToExpireKey = () => {
  const settings = GetConfig();
  if (settings.TOKEN_TIME_TO_EXPIRE === '') throw 'Impossible to get value from TOKEN_TIME_TO_EXPIRE settings key';
  return settings.TOKEN_TIME_TO_EXPIRE;
};

export const GetCypherKey = () => {
  const settings = GetConfig();
  if (settings.CYPHER_KEY === defaultBaseSettings.CYPHER_KEY)
    throw 'Impossible to get value from CYPHER_KEY settings key';
  return settings.CYPHER_KEY;
};

export const GetHostBaseKey = () => {
  if (process.env.HOST_BASE) return process.env.HOST_BASE;
  const settings = GetConfig();
  if (!settings.HOST_BASE) throw 'Impossible to get value from HOST_BASE env variable and settings key';
  return settings.HOST_BASE;
};

export const GetDBHostKey = () => {
  const settings = GetConfig();
  if (settings.DB_HOST === '') throw 'Impossible to get value from DB_HOST settings key';
  return settings.DB_HOST;
};

export const GetDBPortKey = () => {
  const settings = GetConfig();
  if (settings.DB_PORT === '') throw 'Impossible to get value from DB_PORT settings key';
  return settings.DB_PORT;
};

export const GetDBUserNameKey = () => {
  const settings = GetConfig();
  if (settings.DB_USERNAME === '') throw 'Impossible to get value from DB_USERNAME settings key';
  return settings.DB_USERNAME;
};

export const GetDBPasswordKey = () => {
  const settings = GetConfig();
  if (settings.DB_PASSWORD === '') throw 'Impossible to get value from DB_PASSWORD settings key';
  return settings.DB_PASSWORD;
};

export const GetDBNameKey = () => {
  const settings = GetConfig();
  if (settings.DB_NAME === '') throw 'Impossible to get value from DB_NAME settings key';
  return settings.DB_NAME;
};

export const GetEmailHostKey = () => {
  if (process.env.EMAIL_HOST) return process.env.EMAIL_HOST;
  const settings = GetConfig();
  if (!settings.EMAIL_HOST || settings.EMAIL_HOST === '')
    throw 'Impossible to get value from EMAIL_HOST env variable and settings key';
  return settings.EMAIL_HOST;
};

export const GetEmailPortKey = () => {
  if (process.env.EMAIL_PORT) return parseInt(process.env.EMAIL_PORT);
  const settings = GetConfig();
  if (!settings.EMAIL_PORT) throw 'Impossible to get value from EMAIL_PORT env variable and settings key';
  return settings.EMAIL_PORT;
};

export const GetEmailLogKey = () => {
  if (process.env.EMAIL_LOG) return process.env.EMAIL_LOG === 'true';
  const settings = GetConfig();
  if (!settings.EMAIL_LOG) throw 'Impossible to get value from EMAIL_LOG env variable and settings key';
  return settings.EMAIL_LOG === 'true';
};

export const GetEmailDebugKey = () => {
  if (process.env.EMAIL_DEBUG) return process.env.EMAIL_DEBUG === 'true';
  const settings = GetConfig();
  if (!settings.EMAIL_DEBUG) throw 'Impossible to get value from EMAIL_DEBUG env variable and settings key';
  return settings.EMAIL_DEBUG === 'true';
};

export const GetEmailSecureKey = () => {
  if (process.env.EMAIL_SECURE) return process.env.EMAIL_SECURE === 'true';
  const settings = GetConfig();
  if (!settings.EMAIL_SECURE) throw 'Impossible to get value from EMAIL_SECURE env variable and settings key';
  return settings.EMAIL_SECURE === 'true';
};

export const GetEmailSenderAnonymousKey = (): boolean => {
  if (process.env.EMAIL_SENDER_ANONYMOUS) return process.env.EMAIL_SENDER_ANONYMOUS === 'true';
  const settings = GetConfig();
  if (!settings.EMAIL_SENDER_ANONYMOUS || settings.EMAIL_SENDER_ANONYMOUS === '')
    throw 'Impossible to get value from EMAIL_SENDER_ANONYMOUS env variable and settings key';
  return settings.EMAIL_SENDER_ANONYMOUS === 'true';
};

export const GetEmailSenderKey = () => {
  if (process.env.EMAIL_SENDER_ADDRESS) return process.env.EMAIL_SENDER_ADDRESS;
  const settings = GetConfig();
  if (!settings.EMAIL_SENDER_ADDRESS || settings.EMAIL_SENDER_ADDRESS === '')
    throw 'Impossible to get value from EMAIL_SENDER_ADDRESS env variable and settings key';
  return settings.EMAIL_SENDER_ADDRESS;
};

export const GetEmailSenderNameKey = () => {
  if (process.env.EMAIL_SENDER_ADDRESS_NAME) return process.env.EMAIL_SENDER_ADDRESS_NAME;
  const settings = GetConfig();
  if (!settings.EMAIL_SENDER_ADDRESS_NAME || settings.EMAIL_SENDER_ADDRESS_NAME === '')
    throw 'Impossible to get value from EMAIL_SENDER_ADDRESS_NAME env variable and settings key';
  return settings.EMAIL_SENDER_ADDRESS_NAME;
};

export const GetEmailSenderPassKey = () => {
  if (process.env.EMAIL_SENDER_PASSWORD) return process.env.EMAIL_SENDER_PASSWORD;
  const settings = GetConfig();
  if (!settings.EMAIL_SENDER_PASSWORD || settings.EMAIL_SENDER_PASSWORD === '')
    throw 'Impossible to get value from EMAIL_SENDER_PASSWORD env variable and settings key';
  return settings.EMAIL_SENDER_PASSWORD;
};

export const GetEmailAppAddressKey = () => {
  if (process.env.EMAIL_APP_ADDRESS) return process.env.EMAIL_APP_ADDRESS;
  const settings = GetConfig();
  if (!settings.EMAIL_APP_ADDRESS || settings.EMAIL_APP_ADDRESS === '')
    throw 'Impossible to get value from EMAIL_APP_ADDRESS env variable and settings key';
  return settings.EMAIL_APP_ADDRESS;
};

export const GetEmailAppAddressNameKey = () => {
  if (process.env.EMAIL_APP_ADDRESS_NAME) return process.env.EMAIL_APP_ADDRESS_NAME;
  const settings = GetConfig();
  if (!settings.EMAIL_APP_ADDRESS_NAME || settings.EMAIL_APP_ADDRESS_NAME === '')
    throw 'Impossible to get value from EMAIL_APP_ADDRESS_NAME env variable and settings key';
  return settings.EMAIL_APP_ADDRESS_NAME;
};

export const GetUserPoliceTokenKey = () => {
  if (process.env.USER_POLICE_TOKEN) return process.env.USER_POLICE_TOKEN;
  const settings = GetConfig();
  if (!settings.USER_POLICE_TOKEN || settings.USER_POLICE_TOKEN === '')
    throw 'Impossible to get value from USER_POLICE_TOKEN env variable and settings key';
  return settings.USER_POLICE_TOKEN;
};

export const GetUserPoliceResetPwdUrlKey = () => {
  if (process.env.USER_POLICE_RESETPWD_URL) return process.env.USER_POLICE_RESETPWD_URL;
  const settings = GetConfig();
  if (!settings.USER_POLICE_RESETPWD_URL || settings.USER_POLICE_RESETPWD_URL === '')
    throw 'Impossible to get value from USER_POLICE_RESETPWD_URL env variable and settings key';
  return settings.USER_POLICE_RESETPWD_URL;
};

export const GetUserPoliceResetPwdEmailKey = () => {
  if (process.env.USER_POLICE_RESETPWD_EMAIL) return process.env.USER_POLICE_RESETPWD_EMAIL;
  const settings = GetConfig();
  if (!settings.USER_POLICE_RESETPWD_EMAIL || settings.USER_POLICE_RESETPWD_EMAIL === '')
    throw 'Impossible to get value from USER_POLICE_RESETPWD_EMAIL env variable and settings key';
  return settings.USER_POLICE_RESETPWD_EMAIL;
};

export const GetUserPoliceResetPwdExpKey = () => {
  if (process.env.USER_POLICE_RESETPWD_EXP) return parseInt(process.env.USER_POLICE_RESETPWD_EXP);
  const settings = GetConfig();
  if (!settings.USER_POLICE_RESETPWD_EXP)
    throw 'Impossible to get value from USER_POLICE_RESETPWD_EXP env variable and settings key';
  return settings.USER_POLICE_RESETPWD_EXP;
};
