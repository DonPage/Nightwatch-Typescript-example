import sitemap from '../misc/sitemap';
import {Tags} from '../misc/tags';
import {NavBar, NavMenu} from '../components/globals'

let tests = {

  '@tags': [Tags.smoke, Tags.sprint1],

  'Open Homepage': client => {
    client
      .url(sitemap.home.url)
      .waitForElementVisible('body', 1000);
  },

  'Open Nav': client => {
    NavBar.commands['openNavMenu'](client);
  },

  'Goto About Page': client => {
    NavMenu.commands['clickLink'](client, '/about', () => client.assert.urlContains(sitemap.about.url).end());
  }

};


export = tests;
