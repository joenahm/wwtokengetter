'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  router.get('/', controller.home.index);

  router.post('/updateValue', controller.update.value);

  router.get('/updateStatus', controller.update.status);
};
