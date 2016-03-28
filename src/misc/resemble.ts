let resemble = require('../../node_modules/resemblejs/resemble');


export function compare (img1: string, img2: string, cb: Function = () => {}) {
  resemble(img1).compareTo(img2).ignoreColors().onComplete(data => {
    console.log('compare data ', data);
    return cb(data);
  })
}

