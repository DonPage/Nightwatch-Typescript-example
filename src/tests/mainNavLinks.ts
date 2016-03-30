import sitemap from '../misc/sitemap';
import {Tags} from '../misc/tags';
import {$NavBar, _NavMenu} from '../components/globals'
import * as $ from 'jquery';
import * as async from 'async'
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

  'Get Nav links and click each one': client => {

    client.execute(() => {
      var navItems = $('a[analytics-category="Main Navigation"]');
      return navItems.map(function (el) {
        return $(navItems[el]).attr('href')
      });
    }, [], hrefs => {
      hrefs = hrefs.value;
      hrefs.shift();

      async.eachSeries(hrefs, (href, next) => {
        console.log('CLICK ', href);
        NavMenu.clickLinkOpenNav(href, () => {
          client.assert.urlContains(href)
            .perform((client, done) => {
              next();
              done();
            });
        });
      }, function done() {
        console.log("DONE");
      });

    })

  }

};


export = tests;
