import sitemap from '../misc/sitemap';
import {Tags} from '../misc/tags';
import {$NavBar, _NavMenu} from '../components/globals'
import {takeScreenshot} from '../commands/takeScreenshot';
var NavBar;
var NavMenu;

let tests = {
  before: client => {
    NavBar = new $NavBar(client);
    NavMenu = new _NavMenu(client);
  },
  after: client => client.end(),

  '@tags': [Tags.smoke, Tags.sprint1],

  'Open Homepage': client => {
    client
      .url(sitemap.home.url)
      .waitForElementVisible('body', 1000);
  },

  'Open Nav': client => {
    NavMenu.open();
  },

  'Goto About Page': client => {
    NavMenu.clickLink('/about', () => {
      client.assert.urlContains(sitemap.about.url);
      takeScreenshot(client, 'aboutPage', 
        {key: 'key', value: 'val'},
        {key: 'param', value: 'value'}
      );
    })


  }

};


export = tests;
