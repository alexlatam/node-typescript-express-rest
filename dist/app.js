"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const server_1 = __importDefault(require("./database/models/server"));
// Ejecutamos el metodo config de dotenv. Este metodo carga la configuracion por defecto del paquete
// Lo cual nos permite leer las variables del archivo .env en nuestra aplicacion.
dotenv_1.default.config();
// Creamos una instancia de la clase Server. 
// Esta clase contiene toda la lógica para levantar el servidor Express
const server = new server_1.default();
// Llamamos al método listen, esto es lo que hace que el servidor se ponga a escuchar peticiones HTTP
// En este caso en el puerto 8000
server.listen();
//# sourceMappingURL=app.js.map