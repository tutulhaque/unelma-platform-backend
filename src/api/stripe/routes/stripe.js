export default {
  routes: [
    {
      method: "POST",
      path: "/stripe/create-checkout-session",
      handler: "api::stripe.stripe.createCheckoutSession",
      config: { auth: false },
    },
    {
      method: "POST",
      path: "/stripe/webhook",
      handler: "api::stripe.stripe.webhook",
      config: { auth: false, body: { parse: false } },
    },
  ],
};
