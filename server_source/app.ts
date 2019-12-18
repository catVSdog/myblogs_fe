/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import * as Koa from "koa";
import * as KoaRouter from "koa-router";

class ManagerApp {
    app: Koa;
    router: KoaRouter;

    constructor() {
        this.app = new Koa();
        this.router = new KoaRouter();
    }

    configApp() {
        this.app.use(this.router.routes());
    }
}

const managerApp = new ManagerApp();

const app = managerApp.app;

managerApp.configApp();
export { ManagerApp, app };
