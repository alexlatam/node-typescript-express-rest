// Importamos express y el modulo Application
import express, { Application } from 'express';
import userRoutes from '../routes/user_routes';
import cors from 'cors';
import db from '../database/conection';

// Creamos la clase llamada Server
class Server 
{
    // Creamos nuestra porpiedad app de tipo Application
    private app: Application; // Propiedad contendra la aplicacion express
    private port: string; // Propiedad que almacenara el puerto
    private apiPaths = {
        users: '/api/users'
    }

    constructor() {
        // Iniciamos express y guardamos en la propiedad app
        this.app  = express();
        // Asignamos el valor de la variable PORT del archivo .env
        // En caso de no existir o no tener valor, se tomara '3000'
        this.port = process.env.PORT || '3000';

        this.dbConnection();
        this.routes();
        this.middlewares();
    }

    async dbConnection() {
        try {
            await db.authenticate();
            console.log('Database online');
        } catch (error: any) {
            throw new Error( error );
        }
    }

    middlewares() {
        // CORS 
        this.app.use(cors());

        // Definimos el uso de express.json. Lectura del body, ya parseado a JSON 
        this.app.use(express.json());

        // Definimos el directorio publico. La peticion localhost:port apuntara a la carpeta public 
        this.app.use(express.static('public'));

    }

    routes() {
        this.app.use(this.apiPaths.users, userRoutes);
    }

    // Creamos el metodo listen que ejecuta nuestra aplicacion en el puerto 8000
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    }

}

// Exportamos la clase Server para poder usarla en otros archivos
export default Server;