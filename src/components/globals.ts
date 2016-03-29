
export class $NavBar {
  constructor(public client) {}
  selector: string = 'div.nav-bar';
  hamMenu: string = 'a.hamburger';
  logo: string = 'a.prpl-badge';

  goHome() {
    this.client.click(this.logo);
  }
}

export class _NavMenu extends $NavBar {

  selector: string = 'div.nav-menu';
  linksWrapper: string = '.the-links';

  open() {
    this.client.click(this.hamMenu)
      .pause(2000);// loading animation.
  }

  clickLink(slug: string, cb: Function = () => {}) {
    this.client.click(`${this.linksWrapper} a[href="${slug}"]`)
      .waitForElementVisible('body', 2500)
      .perform((client, done) => {
        cb();
        done();
      })
  }

  clickLinkOpenNav(slug: string, cb: Function = () => {}) {
    this.clickLink(slug, () => {
      this.open();
      return cb();
    });
  }

}
