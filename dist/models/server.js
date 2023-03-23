"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importamos express y el modulo Application
const express_1 = __importDefault(require("express"));
const user_routes_1 = __importDefault(require("../routes/user_routes"));
const cors_1 = __importDefault(require("cors"));
const conection_1 = __importDefault(require("../database/conection"));
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
        this.dbConnection();
        this.routes();
        this.middlewares();
    }
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield conection_1.default.authenticate();
                console.log('Database online');
            }
            catch (error) {
                throw new Error(error);
            }
        });
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