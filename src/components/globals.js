exports.NavBar = {
    selector: 'div.nav-bar',
    description: 'Just a nav-bar fool.',
    //it: [
    //  {should: 'Open navmenu when hamMenu is clicked.'},
    //  {should: 'Redirect to homepage when logo is clicked.'}
    //],
    elements: {
        hamMenu: { selector: 'a.hamburger' },
        logo: { selector: 'a.prpl-badge' }
    },
    commands: {
        openNavMenu: function (client) { return client.click(exports.NavBar.elements.hamMenu.selector); },
        goHomePage: function (client) { return client.click(exports.NavBar.elements.logo.selector); }
    },
};
exports.NavMenu = {
    selector: 'div.nav-menu',
    description: 'Holds navigation items.',
    elements: {
        links: { selector: '.the-links' }
    },
    commands: {
        goAboutPage: function (client) { return client.click('//TODO:'); }
    }
};
//# sourceMappingURL=globals.js.map