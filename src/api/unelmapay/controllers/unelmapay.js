"use strict";
const crypto = require("crypto");

module.exports = {
  async ipn(ctx) {
    const ipnPassword = process.env.UNELMAPAY_IPN_PASSWORD;

    const payload = ctx.request.body;
    const receivedHash = payload.hash;

    // Remove hash before generating new one
    delete payload.hash;

    const sorted = Object.keys(payload)
      .sort()
      .map((k) => `${k}=${payload[k]}`)
      .join("&");

    const generatedHash = crypto
      .createHmac("sha256", ipnPassword)
      .update(sorted)
      .digest("hex");

    if (generatedHash !== receivedHash) {
      return ctx.badRequest("Invalid IPN signature");
    }

    // ✅ Payment verified
    const orderId = payload.custom;

    await strapi.db.query("api::order.order").update({
      where: { id: orderId.replace("ORDER_", "") },
      data: { order_status: "paid" },
    });

    ctx.send("OK");
  },
};
