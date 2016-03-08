import {Interface} from './components.interface';

export const NavBar: Interface = {

  selector: 'div.nav-bar',
  description: 'Just a nav-bar fool.',
  //it: [
  //  {should: 'Open navmenu when hamMenu is clicked.'},
  //  {should: 'Redirect to homepage when logo is clicked.'}
  //],

  elements: {
    hamMenu: 'a.hamburger',
    logo: 'a.prpl-badge'
  },

  commands: {
    openNavMenu: client => {
      client.click(NavBar.elements['hamMenu'])
        .pause(1000)
        .assert.visible(NavMenu.selector);
    },
    goHomePage: client => client.click(NavBar.elements['logo']),
    getAllLinks: client => {
      let elementVal;
      client
        .getValue('nav.the-links', result => elementVal = result.value)
    }
  },

};


export const NavMenu: Interface = {

  selector: 'div.nav-menu',
  description: 'Holds navigation items.',

  elements: {
    links: '.the-links'
  },

  commands: {
    clickLink: (client, slug: string, cb= () => {}) => {
      client.click(`${NavMenu.elements['links']} a[href="${slug}"]`)
        .waitForElementVisible('body', 5000);
      return cb();
    }
  }

};
