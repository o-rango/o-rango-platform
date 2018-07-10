import Axios from 'Axios';
import { NextFunction, Request, Response} from 'express';
import http from 'http';
import {getConfig} from '../config/config';
import {routeMatch, UAChecker} from '../utils/';
import logger from '../utils/logger';


const HEAD = `
<style>
/* Add a black background color to the top navigation */
.topnav {
background-color: #333;
overflow: hidden;
z-index : 9999999999;
position : absolute;
}
/* Style the links inside the navigation bar */
.topnav a {
float: left;
color: #f2f2f2;
text-align: center;
padding: 14px 16px;
text-decoration: none;
font-size: 17px;
}
/* Change the color of links on hover */
.topnav a:hover {
background-color: #ddd;
color: black;
}
/* Add a color to the active/current link */
.topnav a.active {
background-color: #4CAF50;
color: white;
}
</style>
<header>
<div class="topnav">
<a class="active" href="/home">Home</a>
<a href="/main">Main</a>
</div>
</header>
        `;

export async function routerHandler(req: Request, res: Response, next: NextFunction) {
  logger.log('info' , `Router Handler initialized with req :  ${req.url}`);
  const isMobile = await UAChecker(req.headers['user-agent']);
  const route = await routeMatch(await getConfig('routes'), req.url);
  let html = '';

  if (!route) {
    res.status(404).send('Not Found!!!!');
    next();
  }

  try {
      const data = await Axios.get(route.handler(isMobile).ssr);
      html = data.data;
  } catch (error) {
      logger.log('error' , `Error rendering going to Fallback View: ${req.url}`);
      /* tslint:disable */
      html = `${route.handler(isMobile).fallback.tag}<script async src="${route.handler(isMobile).fallback.script}"></script>`;
      /* tslint:enable */
  }

  const render = `<body><html>${HEAD} ${html}</body></html>`;
  res.send(render);
  next();
}
