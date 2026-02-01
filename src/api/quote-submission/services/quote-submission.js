'use strict';

/**
 * quote-submission service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::quote-submission.quote-submission');
