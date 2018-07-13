var express = require('express')
var http = require('http');
var app = express();
const route = require('@o-rango/o-express-middleware')
let port = process.env.PORT || "3050";

const tpl = `<style>
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
<a class="o-link" href="/home">Home</a>
<a class="o-link" href="/main">Main</a>
</div>
</header>`


const configGlobal = {
errorUrl : 'https://stenciljs.com/asfadada/',
// At Moment only one template is available
templates : { name : 'home', zone:'<!--content-->', content : `<body><html>${tpl} <!--content--> </html></body>`}
}


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

route.globalConfig(configGlobal);

app.use(route.routerHandler);
app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});