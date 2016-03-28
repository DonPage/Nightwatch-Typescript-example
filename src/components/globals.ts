import {Interface} from './components.interface';



export class $NavBar {
  constructor(public client) {}
  selector: string = 'div.nav-bar';
  hamMenu: string = 'a.hamburger';
  logo: string = 'a.prpl-badge';
}

export class _NavMenu extends $NavBar {

  selector: string = 'div.nav-menu';
  linksWrapper: string = '.the-links';

  open() {
    this.client.click(this.hamMenu)
  }

  clickLink(slug: string, cb: Function = () => {}) {
    this.client.click(`${this.linksWrapper} a[href="${slug}"]`)
      .waitForElementVisible('body', 2500);
    return cb();
  }

}
