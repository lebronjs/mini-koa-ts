import * as Router from 'koa-router'
import app from './app'

import { DefaultState, Context } from 'koa'
const router = new Router<DefaultState, Context>()

interface HelloRequest {
	userName: number
}

router.use('/app', app.routes())

router.get('/', async (ctx, next) => {
	ctx.body = {
		msg: 'Hello world',
		year: ctx.createYear,
		config: ctx.config
	}
	await next()
})

router.post('/', async (ctx, next) => {
	const data = ctx.request.body as HelloRequest
	ctx.body = {
		uname: data.userName,
		message: 2020
	}
	await next()
})
export default { router }
