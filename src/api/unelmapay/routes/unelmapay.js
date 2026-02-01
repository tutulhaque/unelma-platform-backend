module.exports = {
  routes: [
    {
      method: "POST",
      path: "/unelmapay/ipn",
      handler: "unelmapay.ipn",
      config: {
        auth: false,
      },
    },
  ],
};
