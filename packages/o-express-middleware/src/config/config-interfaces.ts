type HandlerFunction = (ua: any , props: any) => any;

export interface IConfig {
  defaultUrl?: string;
  errorUrl?: string;
}

export interface IRoute {
  url: string;
  handler: HandlerFunction;
}
