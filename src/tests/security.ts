import sitemap from '../misc/sitemap';
import {takeScreenshot} from '../commands/util.commands';

const hiddenDirectories =['/readme', '/readme.md', ''];

let tests = {
  before: client => client.url(sitemap.home).waitForElementVisible('body.unlocked'),
  after: client => client.end(),

  '@tags': ['checklist'],

  'README': client => { //README should not be visible, should redirect to 404 page.
    client.url(`${sitemap.home}/README.md`)
      .waitForElementVisible('body.loaded').perform((client, done) => {
      takeScreenshot(client, '404-Page', {'DATE': new Date()})
        .then(() => {
          client.assert.urlContains('404');
          done();
        });
    });

  }

};


export = tests;
