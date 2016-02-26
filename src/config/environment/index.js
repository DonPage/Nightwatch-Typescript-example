var _ = require('lodash');
process.env.NODE_ENV = process.env.NODE_ENV || 'staging';
var all = {
    env: process.env.NODE_ENV,
    waitForConditionTimeout: 6000,
    urls: {
        homepage: ''
    }
};
module.exports = _.merge(all, require("./" + process.env.NODE_ENV));
//# sourceMappingURL=index.js.map