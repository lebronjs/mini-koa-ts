import * as Router from 'koa-router'
import app from './app'

const router = new Router()

router.use('/app', app.routes())

interface HelloRequest {
	userName: number
}
router.get('/', async (ctx, next) => {
	ctx.body = {
		msg: 'Hello world'
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
