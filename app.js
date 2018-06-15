const  Koa = require('koa');
const views = require('koa-views');
const path = require('path');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();
/*router.get("/",async (ctx)=>{
    let html = `
        <ul>
        <li><a href="/hello">helloworld</a></li>
        <li><a href="/about">about</a></li>
      </ul>    
    `;
    ctx.body = html;
}).get('/hello',async (ctx)=>{
    ctx.body = '<h1>hello</h1>';
}).get('/about',async (ctx)=>{
    ctx.body='<h1>about</h1>';
});*/
/*app.use(async ctx=>{
    let htmlContent = '404 NotFound';
    switch (ctx.url){//获取当前路径加以解析走不同的逻辑
        case '/':
            htmlContent = '<h1>index内容</h1>';
        break;
        case '/list':
            htmlContent = '<h1>list内容</h1>';
            break;
        case '/hello':
            htmlContent = '<h1>hello内容</h1>';
            break;
        default:
            break;
    }
    ctx.body = htmlContent;
});*/
// app.use(router.routes(),router.allowedMethods());
/*app.use(async (ctx,next)=>{
   const start = Date.now();
   await next();
   const ms = Date.now()-start;
   ctx.set('X-Response-Time',`${ms}ms`);
});
app.use(async (ctx,next)=>{
    const start = Date.now();
    await next();
    const ms = Date.now()-start;
    console.log(`${ctx.method}${ctx.url}-${ms}`);
});
app.use(async ctx=>{
   ctx.body = 'Hello world';
});*/
app.use(views(path.join(__dirname,'./view'),{
    extension:'ejs'
}));
app.use(async (ctx)=>{
   let title = 'Koa2';
   await ctx.render('index',{
       title
   });
});
app.listen(3000);