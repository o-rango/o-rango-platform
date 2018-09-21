const win = window as any;
const log = console as any;
// Namespace
const namespace: string = 'orango';
(win[namespace] = win[namespace] || {});

const version: any = { version: '0.0.1', codeName: 'furious monkey' };
const options = { zones: 'body', renderMode: 'ssr ' };

async function init(name, opts, versions) {
  win[namespace]  = {...opts, ...versions };
}






init('version', version , options);
