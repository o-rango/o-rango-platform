
import * as rgxprm from 'regexparam';

export async function routeMatch(matcher: any, reqUrl: string) {
  const result = await matcher.filter((item) => {
    const match = rgxprm(item.url);
    return match.pattern.test(reqUrl);
  });
  return  await result.length !== 0 ? result[0] : false;
}
