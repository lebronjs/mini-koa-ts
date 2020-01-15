import * as Koa from 'koa'
import * as logger from 'koa-logger'
import * as json from 'koa-json'
import * as bodyParser from 'koa-bodyparser'

import controller from './controller'

declare module 'koa' {
	interface Context {
		createYear: number
		config: any
	}
}

// tslint:disable-next-line: max-classes-per-file
class App {
	config: any
	app: Koa
	constructor(config) {
		this.config = config
		this.koa.context.createYear = 2020
		this.koa.context.config = this.config
	}
	get koa() {
		if (this.app) {
			return this.app
		} else {
			this.app = new Koa()
				.use(json())
				.use(logger())
				.use(bodyParser())
				.use(controller.router.routes())
				.use(controller.router.allowedMethods())
			return this.app
		}
	}
}

export default App
