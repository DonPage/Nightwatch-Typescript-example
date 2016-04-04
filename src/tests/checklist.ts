import sitemap from '../misc/sitemap';

let metaTags = ['description', 'keywords', 'robots', 'twitter:card', 'twitter:title', 'twitter:description', 'twitter:image'];

let tests = {
  after: client => client.end(),

  '@tags': ['checklist'],

  'Meta tags': client => {
    client
      .url(sitemap.home.url)
      .waitForElementVisible('body.unlocked');
    metaTags.forEach(val => client.expect.element('meta').to.have.attribute('name', val));
  }

};


export = tests;
