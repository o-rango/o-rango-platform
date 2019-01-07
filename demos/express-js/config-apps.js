const tpl = require('./config-templates')


const axios = { 
	headers : {
	'Content-Type': 'application/json;charset=UTF-8',
	"Access-Control-Allow-Origin": "*",	
	}
};

const configGlobal = {
	axiosConfig: {
		axios
	},
	errorUrl: 'https://stenciljs.com/asfadada/',
	// At Moment only one template is available
	templates:{
		basic:	{
			name: 'basic',
			zone: '<!--basic-->',
			content: `<html><body>${tpl.tplBodyHome}<!--basic--></body></body>`
		},
		home:	{
			name: 'home',
			zone: '<!--basic-->',
			content: `<html><body>${tpl.tplBodyBasic}<!--basic--></body></body>`
		}
	}
}

const config = [{
		url: '/home',
		template : 'home',
		handler: (mobile, props) => {
			return {
				ssr: mobile ?'https://www.revolut.com/en-ES/': 'https://gist.githubusercontent.com/romulocintra/6076999459ef697cae649abb329b6c6a/raw/fd953d854eee1a2b28177b85fff209989b8fb90e/sample-home',
				fallback: {
					tag: `<o-demo-bar name="Demo bs-login-page"> <o-demo-case name="Simple">
				 </o-demo-case> </o-demo-bar>`,
					script: 'https://unpkg.com/@o-rango/orango-demo-tools/dist/orango-demo-tools.js'
				}
			}
		}
	},
	{
		url: '/alert',
		template : 'basic',
		handler: (mobile, props) => {
			return {
				ssr: mobile ? 'https://stenc.a' : '	https://gist.githubusercontent.com/romulocintra/7400c01e0cbe6319997873a3f0f2df1b/raw/532c19c2c14f9631ed26ba4ef7936bb9fb773acc/alert-gist',
				fallback: {
					tag: '<o-content-placeholder-block line-height="50" margin="6" animation="true" lines="8"></o-content-placeholder-block><o-content-placeholder-block line-height="50" margin="6" animation="true" lines="8"></o-content-placeholder-block><o-content-placeholder-block line-height="50" margin="6" animation="true" lines="8"></o-content-placeholder-block><o-content-placeholder-block line-height="50" margin="6" animation="true" lines="8"></o-content-placeholder-block><o-content-placeholder-block line-height="50" margin="6" animation="true" lines="8"></o-content-placeholder-block><o-content-placeholder-block line-height="50" margin="6" animation="true" lines="8"></o-content-placeholder-block><o-content-placeholder-block line-height="50" margin="6" animation="true" lines="8"></o-content-placeholder-block><o-content-placeholder-block line-height="50" margin="6" animation="true" lines="8"></o-content-placeholder-block><o-content-placeholder-block line-height="50" margin="6" animation="true" lines="8"></o-content-placeholder-block><o-content-placeholder-block line-height="50" margin="6" animation="true" lines="8"></o-content-placeholder-block><o-content-placeholder-block line-height="50" margin="6" animation="true" lines="8"></o-content-placeholder-block><o-content-placeholder-block line-height="50" margin="6" animation="true" lines="8"></o-content-placeholder-block>',
					script: 'https://unpkg.com/@o-rango/o-content-placeholder@0.1.5/dist/o-content-placeholder.js'
				}
			}
		}
	},
	{
		url: '/main',
		template : 'home',
		handler: (mobile, props) => {
			return {
				ssr: mobile ? 'https://stenc.com' : 'https://stenciljs.com/docs-content/introduction/getting-started.html',
				fallback: {
					tag: '<o-demo-bar name="Demo o-content-placeholder"></o-demo-bar>',
					script: 'https://unpkg.com/@o-rango/orango-demo-tools/dist/orango-demo-tools.js'
				}
			}
		},

	},
	{
		url: '/form',
		template : 'home',
		handler: (mobile, props) => {
			return {
				ssr: mobile ? 'https://stenc.com' : 'https://stenciljs.com/',
				fallback: {
					tag: '<o-demo-bar name="Demo o-content-placeholder"></o-demo-bar>',
					script: 'https://unpkg.com/@o-rango/orango-demo-tools/dist/orango-demo-tools.js'
				}
			}
		},

	},
	{
		url: '/alias',
		template : 'home',
		handler: (mobile, props) => {
			return {
				ssr: mobile ? 'https://stenc.com' : 'https://www.bancsabadell.com/cs/Satellite/SabAtl/',
				fallback: {
					tag: '<o-demo-bar name="Demo o-content-placeholder"></o-demo-bar>',
					script: 'https://unpkg.com/@o-rango/orango-demo-tools/dist/orango-demo-tools.js'
				}
			}
		},

	}
];


module.exports = {config , configGlobal};