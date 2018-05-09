var path = require('path');
var Koa = require('koa');

var port = process.env.PORT || 8080;

var httpProxy = require('http-proxy')
var proxy = httpProxy.createProxyServer({
    cookieDomainRewrite: {
        '*': '*'
    }
})

var app = new Koa();

app.use(async(ctx, next) => {
    console.log(ctx.url,'==')
    if (ctx.url.indexOf('/api') >= 0) {
        return await new Promise(resolve => {
            proxy.web(ctx.req, ctx.res, {
                target: 'https://cnodejs.org',
                changeOrigin: true,
                headers: {'Content-Type': 'application/json'}
            }, function(e) {
                resolve(e)
            })

        })
    }
    await next()
})

app.use(function* (next) {
    let indexHtml = `${path.sep}index.html`;
    if (files[this.path] == null && files[indexHtml] != null) {
        let content = files[indexHtml].buffer;
        // let basePath = '/';
        // content = content.toString().replace('<head>', `<head>\n  <base href="${basePath}">`);
        this.type = 'text/html';
        this.body = content;
        this.set("Cache-Control", 'no-cache, no-store, must-revalidate');
        return;
    }
    yield next;
});

let files = {};

app.use(require('koa-static-cache')({
    dir: path.join(__dirname, '/dist'),
    maxAge: 60 * 60 * 24 * 365,
    buffer: true,
    gzip: true,
}, files));

app.listen(port, () => {
    console.log('listening on port 8080')
});



