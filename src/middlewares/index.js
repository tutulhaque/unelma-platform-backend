export default (config, { strapi }) => {
  return async (ctx, next) => {
    if (ctx.request.url === "/api/stripe/webhook") {
      ctx.request.body = await getRawBody(ctx.req);
    }
    await next();
  };
};

const getRawBody = (req) =>
  new Promise((resolve, reject) => {
    let data = "";
    req.on("data", (chunk) => (data += chunk));
    req.on("end", () => resolve(data));
    req.on("error", (err) => reject(err));
  });
