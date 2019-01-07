type HandlerFunction = (ua: any , props: any) => any;

export interface Template {
   name: string; zone: string; content: string;
}

export interface IConfig {
  defaultUrl?: string;
  errorUrl?: string;
  templates: { [name: string]: Template };
  axiosConfig ?: any; // This configuration is same as https://github.com/axios/axios#request-config in case need extra headers or configure authentication to get your templates
}

export interface IRoute {
  url: string;
  handler: HandlerFunction;
}
