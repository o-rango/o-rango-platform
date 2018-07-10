var express = require('express')
var http = require('http');
var app = express();
const route = require('@o-rango/o-express-middleware')
let port = process.env.PORT || "3050";


const config =  [
	{
		url : '/home' ,
		handler : (ua , props)=>{
			return {
				ssr: ua ? 'https://stenc.a' : 'https://stenciljs.com/docs-content/reference/forms.html',
				fallback : {
					tag : '<o-content-placeholder-block line-height="50" margin="6" animation="true" lines="8"></o-content-placeholder-block><o-content-placeholder-block line-height="50" margin="6" animation="true" lines="8"></o-content-placeholder-block><o-content-placeholder-block line-height="50" margin="6" animation="true" lines="8"></o-content-placeholder-block><o-content-placeholder-block line-height="50" margin="6" animation="true" lines="8"></o-content-placeholder-block><o-content-placeholder-block line-height="50" margin="6" animation="true" lines="8"></o-content-placeholder-block><o-content-placeholder-block line-height="50" margin="6" animation="true" lines="8"></o-content-placeholder-block><o-content-placeholder-block line-height="50" margin="6" animation="true" lines="8"></o-content-placeholder-block><o-content-placeholder-block line-height="50" margin="6" animation="true" lines="8"></o-content-placeholder-block><o-content-placeholder-block line-height="50" margin="6" animation="true" lines="8"></o-content-placeholder-block><o-content-placeholder-block line-height="50" margin="6" animation="true" lines="8"></o-content-placeholder-block><o-content-placeholder-block line-height="50" margin="6" animation="true" lines="8"></o-content-placeholder-block><o-content-placeholder-block line-height="50" margin="6" animation="true" lines="8"></o-content-placeholder-block>',
					script : 'https://unpkg.com/@o-rango/o-content-placeholder@0.1.5/dist/o-content-placeholder.js'
				}
		    }
		}
	},
	{
		url : '/main' ,
		handler : (ua , props)=>{
			return {
				ssr: ua ? 'https://stenc.com' : 'https://stenciljs.com/docs-content/introduction/getting-started.html',
				fallback : {
					tag : '<o-demo-bar name="Demo o-content-placeholder"></o-demo-bar>',
					script : 'https://unpkg.com/@o-rango/orango-demo-tools/dist/orango-demo-tools.js'
				}
		    }
		}
	}
];
// Set app configuration First;
route.routerConfig(config);

app.use(route.routerHandler);
app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});