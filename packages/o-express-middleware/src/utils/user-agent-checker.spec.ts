import {UAChecker} from './user-agent-checker';


describe( 'UA checker - Group' , () => {
/* tslint:disable */
  const uaMobile = 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1';
  const uaDesktop = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.42 Safari/537.36';
/* tslint:enable */

  test('Test is Mobile :' , (done) => {
     const t = UAChecker(uaMobile);
     expect(t).toBeTruthy();
     done();
  });

  test('Test is Desktop :' , (done) => {
    const t = UAChecker(uaDesktop);
    expect(t).toBeTruthy();
    done();
  });
});
