import { Application, Router } from "express";

import usersRouter from "./user_routes";
import postsRouter from "./post_routes";

// creo una funcion que contendra todas las rutas de la app
function routerApi(app: Application) {

  // instancio el Router de Express
  const router = Router();
  // indico un sufijo a usar en todas las rutas
  app.use('/api/v1', router);
  // Asigno las rutas correspondiente al recurso(path) 'products'
  router.use('/users', usersRouter);
  // Asigno las rutas correspondiente al recurso(path) 'categories'
  router.use('/posts', postsRouter);

}

export default routerApi;