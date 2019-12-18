import * as Koa from 'koa';
import * as KoaRouter from 'koa-router';

class ManagerApp {
    public app: Koa;
    public router: KoaRouter;

    public constructor() {
        this.app = new Koa();
        this.router = new KoaRouter();
    }

    public configApp() {
        this.app.use(this.router.routes());
    }
}

const managerApp = new ManagerApp();

const app = managerApp.app;

managerApp.configApp();
export { ManagerApp, app };
