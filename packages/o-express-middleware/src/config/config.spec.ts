import * as config from './config';

const MockConfigRouter = [
  {
    url: '/home',
    handler: (ua, props) => {
      return {
        ssr: ua ? 'http://127.0.0.1:9999/com1/' : 'http://127.0.0.1:9999/com1/',
        fallback: {
          tag: '<my-component></my-component>',
          script:
            'https://unpkg.com/@o-rango/o-content-placeholder@0.1.1/dist/o-content-placeholder.js'
        },
      };
    },
  },
];

const axios = {
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
  },
};

const MockGlobalConfig = {
  axiosConfig: {
    axios,
  },
  errorUrl: 'https://stenciljs.com/asfadada/',
  // At Moment only one template is available
  templates: {
    basic : {
      name: 'basic',
      zone: '<!--content-->',
      content: `<html><body><!--content--></body></body>`,
    },
    home : {
      name: 'home',
      zone: '<!--content-->',
      content: `<html><body>Holasss home<!--content--> Holaaaa</body></body>`,
    },
  },
};

describe('Provide Configurations', () => {
  test('Config Router - Initialize and Get ', async (done) => {
    await config.routerConfig(MockConfigRouter);
    const configResult: any = await config.getConfig('routes');
    expect(configResult[0].url).toEqual(MockConfigRouter[0].url);
    done();
  });

  test('Config Global - Initialize and Get ', async (done) => {
    await config.globalConfig(MockGlobalConfig);
    const configResult = await config.getConfig('global');
    expect(configResult).toEqual(MockGlobalConfig);
    done();
  });
});
