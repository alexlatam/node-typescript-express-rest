"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importamos express y el modulo Application
const express_1 = __importDefault(require("express"));
const user_routes_1 = __importDefault(require("../routes/user_routes"));
const cors_1 = __importDefault(require("cors"));
// Creamos la clase llamada Server
class Server {
    constructor() {
        this.apiPaths = {
            users: '/api/users'
        };
        // Iniciamos express y guardamos en la propiedad app
        this.app = (0, express_1.default)();
        // Asignamos el valor de la variable PORT del archivo .env
        // En caso de no existir o no tener valor, se tomara '3000'
        this.port = process.env.PORT || '3000';
        this.routes();
        this.middlewares();
    }
    middlewares() {
        // CORS 
        this.app.use((0, cors_1.default)());
        // Definimos el uso de express.json. Lectura del body, ya parseado a JSON 
        this.app.use(express_1.default.json());
        // Definimos el directorio publico. La peticion localhost:port apuntara a la carpeta public 
        this.app.use(express_1.default.static('public'));
    }
    routes() {
        this.app.use(this.apiPaths.users, user_routes_1.default);
    }
    // Creamos el metodo listen que ejecuta nuestra aplicacion en el puerto 8000
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    }
}
// Exportamos la clase Server para poder usarla en otros archivos
exports.default = Server;
//# sourceMappingURL=server.js.map