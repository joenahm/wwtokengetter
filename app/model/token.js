'use strict';

module.exports = app => {
  const { INTEGER, DATE } = app.Sequelize;

  const Token = app.model.define('token', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    value: INTEGER,
    status: INTEGER,
    updated_at: DATE,
  });

  return Token;
};