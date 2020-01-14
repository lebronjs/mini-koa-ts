import * as Router from 'koa-router'
const appRouter = new Router()

appRouter.get('/', async (ctx, next) => {
	ctx.body = {
		msg: 'router in app'
	}
	await next()
})

appRouter.post('/', async (ctx, next) => {
	ctx.body = {
		name: 'lebron',
		age: '???',
		msg: 'router in app'
	}
	await next()
})

export default appRouter
