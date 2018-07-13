type HandlerFunction = (ua: any , props: any) => any;

export interface IConfig {
  defaultUrl?: string;
  errorUrl?: string;
  templates: any;
}

export interface IRoute {
  url: string;
  handler: HandlerFunction;
}
