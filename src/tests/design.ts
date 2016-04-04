import sitemap from '../misc/sitemap';
import {takeScreenshot} from '../commands/util.commands';

let tests = {
  before: client => client.url(sitemap.home.url).waitForElementVisible('body.unlocked'),
  after: client => client.end(),

  '@tags': ['checklist'],

  '404': client => {
    client.url(`${sitemap.home.url}/Testing404Page`)
      .waitForElementVisible('body.loaded').perform((client, done) => {
      takeScreenshot(client, '404-Page', {key: 'DATE', value: new Date()});
      client.assert.urlContains('404');
      done();
    });
    
    
  }

};


export = tests;