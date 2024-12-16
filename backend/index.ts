import Koa from "koa";
import serveStatic from "koa-static";
import cors from "@koa/cors";
import Router from "@koa/router";
import dotenv from 'dotenv';
import routerUsers from "./routes/user";

dotenv.config({path : '.env.development'});
//inizializzi l'app 
const app = new Koa();
//inizializzi il router
const router = new Router();



//affermi al server che gli passi solo certi dati
app.use(cors({ credentials: true, origin: "*" }));
//nel middleware tramite serveStatic affermi che gli passerai dati statici dalla cartella public
app.use(serveStatic(`./public`, {}));
//richiesta http
app.use(async (ctx, next) => {
  console.log("Incoming HTTP request");
  await next();
});
//creazione prima api -> get
router.get("/", (ctx) => {
    ctx.body = "<p>Home page</p>";
  });
  
//permette all' api router di effettuare la chiamata
app.use(router.routes()).use(router.allowedMethods());
//permette all' api routerUsers di effettuare la chiamata
app.use(routerUsers.routes()).use(routerUsers.allowedMethods());
// fa partire il server
app.listen(process.env.PORT); 