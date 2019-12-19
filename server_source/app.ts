import * as Koa from 'koa';
import * as KoaRouter from 'koa-router';
import * as bodyParse from 'koa-bodyparser';
import * as mount from 'koa-mount';
import * as koaServer from 'koa-static';
import * as path from 'path';
import * as compress from 'koa-compress';
import * as zlib from 'zlib';

class ManagerApp {
    app: Koa;
    router: KoaRouter;

    constructor() {
        this.app = new Koa();
        this.router = new KoaRouter();
    }

    configApp() {
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
