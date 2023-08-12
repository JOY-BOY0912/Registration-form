import express, { Router } from 'express';
import { getlogin, getlogout, getnull, getregister, isAuthenticated, postlogin, postregister } from '../controllers/user.js';

const routes = express.Router();

routes.get("/logout", getlogout);
  
routes.get("/register", getregister);

routes.get("/login",getlogin);

routes.get("/", isAuthenticated, getnull);

routes.post("/register", postregister);

routes.post("/login",postlogin)

export default routes;