import sitemap from '../misc/sitemap';
import {$Reasons} from '../components/theReasons';
import * as async from 'async'

var ReasonsComp;

let tests = {
  before: client => {
    client.url(sitemap.careers.url).waitForElementVisible('body.unlocked').pause(2000);
    ReasonsComp = new $Reasons(client);
  },
  after: client => client.end(),

  '@tags': ['sprint2'],

  'Scroll to Reason Container': client => {
    console.log('ReasonsComp.button ', ReasonsComp.button);
    client.moveToElement(ReasonsComp.button, 0, 0);
  },

  'Test Refresh Button': client => {
    client.execute(() => {
      return $('div.reason');
    }, [], reasons => {
      reasons = reasons.value;

      async.eachSeries(reasons, (reason, next) => {
        reason = parseInt(reason['ELEMENT']) - 1;// We don't talk about the -1 here.
        client.assert.visible(`div.reason.reason-${reason}`);
        ReasonsComp.refreshReason(() => next() );
      }, () => client.end());

    });
  }


};


export = tests;

