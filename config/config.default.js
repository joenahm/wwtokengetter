/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = {
    security: {
      csrf: {
        enable: false,
      },
    },
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1555115903111_4364';

  // add your middleware config here
  config.middleware = [];

  config.sequelize = {
    dialect: 'sqlite',
    storage: 'token.db',
  };

  // config/config.default.js
  config.view = {
    mapping: {
      '.ejs': 'ejs',
    },
  };
  

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};


