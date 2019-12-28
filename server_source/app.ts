import Koa = require('koa');
import KoaRouter = require('koa-router');
import bodyParse = require('koa-bodyparser');
import mount = require('koa-mount');
import koaServer = require('koa-static');
import path = require('path');
import compress = require('koa-compress');
import zlib = require('zlib');
import koaWebpack = require('koa-webpack');

class ManagerApp {
    app: Koa;
    router: KoaRouter;

    constructor() {
        this.app = new Koa();
        this.router = new KoaRouter();
        
    }

    async configApp() {
        this.app.use( await koaWebpack())
        this.app.use(this.router.routes());
        this.app.use(bodyParse());
        this.app.use(mount('/', koaServer(path.resolve(__dirname, '../client_dist'))));
        this.app.use(mount('/static', koaServer(path.resolve(__dirname, '../static'))));
        this.app.use(
            compress({
                filter: function(content_type) {
                    return /text|javascript|json/i.test(content_type);
                },
                threshold: 2048,
                flush: zlib.Z_SYNC_FLUSH
            })
        );
    }
}

const managerApp = new ManagerApp();

const app = managerApp.app;

managerApp.configApp();
export { ManagerApp, app };
