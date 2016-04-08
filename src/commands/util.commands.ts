
var ssDir = './results/screenshots';

export function takeScreenshot(client, title: string, ...params: Array<Object>) {
  console.log('params ', params);
  let env = process.env.NODE_ENV;
  let titleMods = `${title}?ENV=${env}`;
  return new Promise(resolve => {
    params.map(val => {
      for (let i in val) titleMods += `&${i}=${val[i]}`;
    });

    client.saveScreenshot(`${ssDir}/${titleMods}.png`)
      .perform((client, done) => {
        resolve();
        done();
      })
  });
}
