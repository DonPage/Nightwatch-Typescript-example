import * as _ from 'lodash';


process.env.NODE_ENV = process.env.NODE_ENV || 'staging';

let all = {
  env: process.env.NODE_ENV,
  waitForConditionTimeout: 6000,
  urls: {
    homepage: ''
  }
};

export = <any>_.merge(
  all,
  require(`./${process.env.NODE_ENV}`)
);

