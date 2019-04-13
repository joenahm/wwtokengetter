'use strict';

const Controller = require('egg').Controller;

class TokenController extends Controller {
  async index() {
    const { ctx } = this;
    const token = await ctx.model.Token.findById(1);
    
    ctx.body = token.value;
  }
}

module.exports = TokenController;
