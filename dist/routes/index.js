"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_routes_1 = __importDefault(require("./user_routes"));
const post_routes_1 = __importDefault(require("./post_routes"));
// creo una funcion que contendra todas las rutas de la app
function routerApi(app) {
    // instancio el Router de Express
    const router = (0, express_1.Router)();
    // indico un sufijo a usar en todas las rutas
    app.use('/api/v1', router);
    // Asigno las rutas correspondiente al recurso(path) 'products'
    router.use('/users', user_routes_1.default);
    // Asigno las rutas correspondiente al recurso(path) 'categories'
    router.use('/posts', post_routes_1.default);
}
exports.default = routerApi;
//# sourceMappingURL=index.js.map