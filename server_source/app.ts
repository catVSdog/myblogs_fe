import * as Koa from 'koa';
import * as KoaRouter from '@koa/router';

class ManagerApp {
    app: Koa;

    router: KoaRouter;

    constructor() {
      this.app = new Koa();
      this.router = new KoaRouter();
    }

    configApp() {
      this.app.use(KoaRouter);
    }

    configRouter() {

    }
}


const managerApp = new ManagerApp();
managerApp.configApp();
managerApp.configRouter();

const { app } = managerApp;
export default app;
