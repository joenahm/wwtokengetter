'use strict';

const Controller = require('egg').Controller;


function toInt(str) {
  if (typeof str === 'number') return str;
  if (!str) return str;
  return parseInt(str, 10) || 0;
}

class UpdateController extends Controller {
  async value() {
    const { ctx } = this;
    const { body } = ctx.request;
    const token = await ctx.model.Token.findById(1);

    if (token) {
      await token.update({ value: body.token });
      ctx.body = "更新成功";
    } else {
      await ctx.model.Token.create({ status: -1, value: body.token });
      ctx.body = "创建成功";
    }    
  }

  async status() {
    const { ctx } = this;
    const { status } = ctx.query;
    const token = await ctx.model.Token.findById(1);

    if (token) {
      await token.update({ status: toInt(status) });
      ctx.body = "更新成功";
    }  
  }
}

module.exports = UpdateController;
