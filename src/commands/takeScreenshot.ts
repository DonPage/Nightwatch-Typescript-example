/**
 * Created by donald on 3/28/16.
 */

var ssDir = './results/screenshots';

export function takeScreenshot(client, title: string, ...params: Array<{key: string, value: string}>) {
  let env = process.env.NODE_ENV;
  let titleMods = `${title}?env=${env}`;
  params.forEach(param => titleMods += `&${param.key}=${param.value}`);

  client.saveScreenshot(`${ssDir}/${titleMods}.png`);
}
