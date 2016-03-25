import sitemap from '../misc/sitemap';
import {Tags} from '../misc/tags';
import {NavBar, NavMenu} from '../components/globals'
console.log('Tags.smoke ', Tags.smoke)
let tests = {
  '@tags': [Tags.smoke, Tags.sprint1],
  'Nav Menu Links': client => {
    client
      .url(sitemap.home.url)
      .waitForElementVisible('body', 1000);
    NavBar.commands['openNavMenu'](client);
    NavMenu.commands['clickLink'](client, '/about', () => client.assert.urlContains(sitemap.about.url).end());
  }

};


export = tests;
