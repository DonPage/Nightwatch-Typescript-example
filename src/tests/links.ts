import sitemap from '../misc/sitemap';
import {NavBar, NavMenu} from '../components/globals'

let tests = {

  'Smoke Nav Test': client => {
    client
      .url(sitemap.home.url)
      .waitForElementVisible('body', 1000);
    NavBar.commands.openNavMenu(client);
  }

};


export = tests;
