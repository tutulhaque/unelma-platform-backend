"use strict";

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::home.home", ({ strapi }) => ({
  async find(ctx) {
    try {
      const entity = await strapi.db.query("api::home.home").findOne({
        populate: {
          // Root-level
          services_image: true,
          // Components
          SlidingText: true,
          HomeServices: {
            populate: {
              image: true, // Assuming each service has an image
            },
          },
          HomePortfolio: {
            populate: {
              image: true,
            },
          },
          HomeTestimonial: {
            populate: {
              image: true, // If your testimonial has a client image/avatar
            },
          },
          HomeWorkProcess: {
            populate: {
              icon: true,
            },
          },
          homeBlog: {
            populate: {
              image: true,
            },
          },
        },
      });

      return entity;
    } catch (error) {
      console.error("Error fetching home data:", error);
      ctx.throw(500, "Internal Server Error");
    }
  },
}));
