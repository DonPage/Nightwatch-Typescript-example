var env = require('../config/environment');
var home = env.urls.homepage;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    home: { url: home },
    about: { url: home + "/about" },
    process: { url: home + "/process" },
    work: { url: home + "/work" },
    notes: { url: home + "/notes" },
    careers: { url: home + "/careers" },
    contact: { url: home + "/contact" },
    blogPage: { url: home + "/notes/:blogId/:blogTitle" },
    caseStudy: { url: home + "/work/:caseId" }
};
//# sourceMappingURL=sitemap.js.map