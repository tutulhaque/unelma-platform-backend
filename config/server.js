module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  // === ADDED: Explicitly define Strapi's public URL for correct external links ===
  url: "https://unelma-platform-backend.onrender.com",
  // ===============================================================================
  app: {
    keys: env.array("APP_KEYS"),
  },
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
});
