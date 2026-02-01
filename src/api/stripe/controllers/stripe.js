import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default {
  async webhook(ctx) {
    const sig = ctx.request.headers["stripe-signature"];

    const rawBody = await new Promise((resolve, reject) => {
      let data = "";
      ctx.req.on("data", (chunk) => (data += chunk));
      ctx.req.on("end", () => resolve(data));
      ctx.req.on("error", (err) => reject(err));
    });

    let event;
    try {
      event = stripe.webhooks.constructEvent(
        rawBody,
        sig,
        process.env.STRIPE_WEBHOOK_SECRET,
      );
    } catch (err) {
      ctx.status = 400;
      return (ctx.body = `Webhook Error: ${err.message}`);
    }

    console.log("💳 Received Stripe event:", event.type);

    if (event.type === "checkout.session.completed") {
      const session = event.data.object;
      const orderId = session.metadata?.orderId;

      if (orderId) {
        await strapi.entityService.update("api::order.order", orderId, {
          data: {
            order_status: "paid",
            payment_method: "Stripe",
            stripe_payment_id: session.payment_intent,
          },
        });
      }
    }

    ctx.status = 200;
    ctx.body = { received: true };
  },

  async createCheckoutSession(ctx) {
    const {
      cart,
      customer_email,
      customer_name,
      customer_phone,
      customer_address,
    } = ctx.request.body;

    if (!cart || cart.length === 0) {
      ctx.status = 400;
      return (ctx.body = { error: "Cart is empty" });
    }

    const formattedCart = cart.map((item) => ({
      product_id: item.id,
      product_name: item.product_name,
      price: item.price,
      quantity: item.quantity || 1,
      subtotal: item.price * (item.quantity || 1),
    }));

    const order = await strapi.entityService.create("api::order.order", {
      data: {
        customer_name,
        customer_email,
        customer_phone,
        customer_address,
        cart_items: formattedCart,
        total_amount: formattedCart.reduce(
          (sum, item) => sum + item.subtotal,
          0,
        ),
        order_status: "pending",
        payment_method: "Stripe",
      },
    });

    const line_items = cart.map((item) => ({
      price_data: {
        currency: "eur",
        product_data: { name: item.product_name },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.quantity || 1,
    }));

    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items,
        mode: "payment",
        success_url: "http://localhost:5173/checkout-success",
        cancel_url: "http://localhost:5173/checkout",
        customer_email,
        metadata: { orderId: order.id },
      });

      ctx.body = { url: session.url };
    } catch (err) {
      ctx.status = 500;
      ctx.body = { error: err.message };
    }
  },
};
