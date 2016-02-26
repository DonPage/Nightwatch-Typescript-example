import {Interface} from './components.interface';

export const NavBar: Interface = {

  selector: 'div.nav-bar',
  description: 'Just a nav-bar fool.',
  it: [
    {should: 'Open navmenu when hamMenu is clicked.'},
    {should: 'Redirect to homepage when logo is clicked.'}
  ],

  elements: {
    hamMenu: {selector: 'a.hamburger'},
    logo: {selector: 'a.prpl-badge'}
  },

  commands: {
    openNavMenu: client => {
      client.click(this.elements.hamMenu)
    }
  },

};
