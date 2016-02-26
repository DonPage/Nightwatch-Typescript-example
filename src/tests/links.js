var sitemap_1 = require('../misc/sitemap');
var globals_1 = require('../components/globals');
var tests = {
    'Smoke Nav Test': function (client) {
        client
            .url(sitemap_1.default.home.url)
            .waitForElementVisible('body', 1000);
        globals_1.NavBar.commands.openNavMenu(client);
    }
};
module.exports = tests;
//# sourceMappingURL=links.js.map