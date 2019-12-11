'use strict';
const getSchools = require('../api/schools').getSchools;
exports.routes = [{
    method: 'GET',
    path: '/schools',
    handler: getSchools
}];
