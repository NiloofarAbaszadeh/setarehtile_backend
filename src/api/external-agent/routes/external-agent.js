'use strict';

/**
 * external-agent router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::external-agent.external-agent');
