"use strict";

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::product.product", ({ strapi }) => ({
  async find(ctx) {
    ctx.query = {
      ...ctx.query,
      populate: {
        products_card: {
          populate: ["product_image"],
        },
      },
    };

    return await super.find(ctx);
  },
}));
