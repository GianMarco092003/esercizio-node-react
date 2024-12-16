import Router from "@koa/router";
import { cercaTutto } from "../services/user";
import { InserisciUser } from "../services/user";
import { User } from "../../api-types/user";

const routerUsers = new Router();
//chiamata api 
routerUsers.get("/cercatutto", async (ctx) => {
    ctx.response.body = await cercaTutto();
  });

routerUsers.post("/inserisciUser", async (ctx) => {
  const insert = await InserisciUser(ctx.request.body as User);
  ctx.response.body = insert;
});

export default routerUsers;