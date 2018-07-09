import {routeMatch} from './route-matcher';

const MockReqUrlHome = [ '/home/', '/home/1/3/profile', 'home', 'home/', '/home?id=11111'];
const MockRoutesHome = [{  url: '/home/*' } , {  url: '/about:id' }];
const MockRoutesHome2 = [{  url: '/home/:id/:param/' } , {  url: '/about:id' }];


describe('Router Matcher - Tests - /home/*' , () => {
  test('/home/* => /home/' , async (done) => {
    const r = await routeMatch(MockRoutesHome , MockReqUrlHome[0]);
    expect(await r).toEqual(true);
    done();
  });

  test('/home/* =>  /home/1/3/profile ' , async (done) => {
    const r = await routeMatch(MockRoutesHome , MockReqUrlHome[1]);
    expect(await r).toEqual(true);
    done();
  });

  test('/home/* =>  home' , async (done) => {
    const r = await routeMatch(MockRoutesHome , MockReqUrlHome[2]);
    expect(await r).toEqual(false);
    done();
  });

  test('/home/* =>  home/' , async (done) => {
    const r = await routeMatch(MockRoutesHome , MockReqUrlHome[3]);
    expect(await r).toEqual(false);
    done();
  });

  test('/home/* =>  /home?id=11111' , async (done) => {
    const r = await routeMatch(MockRoutesHome , MockReqUrlHome[3]);
    expect(await r).toEqual(false);
    done();
  });
});


describe('Router Matcher - Tests - /home/:id/:param/' , () => {
  test('/home/:id/:param/ => /home/' , async (done) => {
    const r = await routeMatch(MockRoutesHome2 , MockReqUrlHome[0]);
    expect(await r).toEqual(false);
    done();
  });

  test('/home/:id/:param/ =>  /home/1/3/profile ' , async (done) => {
    const r = await routeMatch(MockRoutesHome2 , MockReqUrlHome[1]);
    expect(await r).toEqual(false);
    done();
  });

  test('/home/:id/:param/=>  home' , async (done) => {
    const r = await routeMatch(MockRoutesHome2 , MockReqUrlHome[2]);
    expect(await r).toEqual(false);
    done();
  });

  test('/home/:id/:param/ =>  home/' , async (done) => {
    const r = await routeMatch(MockRoutesHome2 , MockReqUrlHome[3]);
    expect(await r).toEqual(false);
    done();
  });

  test('/home/:id/:param/ =>  /home?id=11111' , async (done) => {
    const r = await routeMatch(MockRoutesHome2 , MockReqUrlHome[3]);
    expect(await r).toEqual(false);
    done();
  });
});
