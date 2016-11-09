const Koa = require('koa');
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');
const controller = require('./controllers');

const app = new Koa();

app.use(async (ctx, next) => {
	console.log(`${ctx.request.method} ${ctx.request.url}`);
	await next();
});

app.use(bodyParser());

app.use(controller());


app.listen(3000);
console.log('app started on port 3000!');