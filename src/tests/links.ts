import sitemap from '../misc/sitemap';
import {NavBar, NavMenu} from '../components/globals'

let tests = {

  'Nav Menu Links': client => {
    client
      .url(sitemap.home.url)
      .waitForElementVisible('body', 1000);
    NavBar.commands['openNavMenu'](client);
    NavMenu.commands['clickLink'](client, '/about', () => client.assert.urlContains(sitemap.about.url).end());
  }

};


export = tests;
