import sitemap from '../misc/sitemap';

let tests = {
  'Smoke Nav Test': client => {
    client.url(sitemap.home.url);
  }
};


export = tests;
