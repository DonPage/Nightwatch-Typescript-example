import sitemap from '../misc/sitemap';

let metaTags = ['description', 'author', 'keywords', 'robots', 'twitter:card', 'twitter:title', 'twitter:description', 'twitter:image'];

let tests = {
  before: client => client.url(sitemap.home.url).waitForElementVisible('body.unlocked'),
  after: client => client.end(),

  '@tags': ['checklist'],

  'Meta': client => {
    metaTags.forEach(val => client.expect.element('meta').to.have.attribute('name', val));
  },

  'SEO': client => {
    client.url(`${sitemap.home.url}/robots.txt`)
      .assert.urlContains('robot')
  }

};


export = tests;
