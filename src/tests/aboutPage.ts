import sitemap from '../misc/sitemap';
import {Tags} from '../misc/tags';
import {$NavBar, _NavMenu} from '../components/globals'
var NavBar;
var NavMenu;

let tests = {
  before: client => {
    NavBar = new $NavBar(client);
    NavMenu = new _NavMenu(client);
  },

  '@tags': [Tags.smoke, Tags.sprint1],

  'Open Homepage': client => {
    client
      .url(sitemap.home.url)
      .waitForElementVisible('body', 1000);
  },

  'Open Nav': client => {
    NavMenu.open();
    // NavBar.commands['openNavMenu'](client);
  },

  'Goto About Page': client => {
    NavMenu.clickLink('/about', () => client.assert.urlContains(sitemap.about.url).end());
    // NavMenu.commands['clickLink'](client, '/about', () => client.assert.urlContains(sitemap.about.url).end());
  }

};


export = tests;
