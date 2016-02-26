import env = require('../config/environment');

const home = env.urls.homepage;

export default {
  home: {url: home},
  about: {url: `${home}/about`},
  process: {url: `${home}/process`},
  work: {url: `${home}/work`},
  notes: {url: `${home}/notes`},
  careers: {url: `${home}/careers`},
  contact: {url: `${home}/contact`},

  blogPage: {url: `${home}/notes/:blogId/:blogTitle`},
  caseStudy: {url: `${home}/work/:caseId`}
}
