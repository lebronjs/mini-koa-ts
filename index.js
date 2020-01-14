const port = process.env.npm_config_port || process.env.PORT || 5002
const env = process.env.npm_config_env || process.env.NODE_ENV || 'production'
const isDebug = process.env.npm_config_debug ? true : false
const srcEntry = './dist/app.js'
const App = require(srcEntry).default
const config = require(`./config/${env}.json`)
config.debug = isDebug

console.log(env, config)

let koa = new App({
	config: config
}).koa
koa.listen(port, function() {
	console.log('listening on port ' + port)
})
