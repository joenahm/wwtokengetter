'use strict';

const Controller = require('egg').Controller;

function statusMap(statusInt) {
  switch (statusInt) {
    case 0:
      return "过期";
    case 1:
      return "可用";
    default:
      return "未知";
  }
}

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const token = await ctx.model.Token.findById(1);
    
    let status = '无';
    let value = '';

    if (token) {
      status = statusMap(token.status);
      value = token.value;
    }

    await ctx.render('home.ejs', {
      status,
      value,
    });
  }
}

module.exports = HomeController;
