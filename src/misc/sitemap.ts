import env = require('../config/environment');

const home = env.urls.homepage;

export default {
  home: home,
  about: `${home}/about`,
  process: `${home}/process`,
  work: `${home}/work`,
  notes: `${home}/notes`,
  careers: `${home}/careers`,
  contact: `${home}/contact`,

  blogPage: `${home}/notes/:blogId/:blogTitle`,
  caseStudy: `${home}/work/:caseId`
}
