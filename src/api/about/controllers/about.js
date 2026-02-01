const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::about.about", ({ strapi }) => ({
  async find(ctx) {
    const entity = await strapi.entityService.findMany("api::about.about", {
      populate: {
        Team: { populate: "*" },
        who_we_are_image: true,
        our_mission_image: true,
        our_vission_image: true,
        about_bg_image: true,
      },
    });

    const sanitized = await this.sanitizeOutput(entity, ctx);
    return this.transformResponse(sanitized);
  },
}));
