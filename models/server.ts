// Importamos express y el modulo Application
import express, { Application } from 'express';

// Creamos la clase llamada Server
class Server 
{
    // Creamos nuestra porpiedad app de tipo Application
    private app: Application; // Propiedad contendra la aplicacion express
    private port: string; // Propiedad que almacenara el puerto

    constructor() {
        // Iniciamos express y guardamos en la propiedad app
        this.app  = express();
        // Asignamos el valor de la variable PORT del archivo .env
        // En caso de no existir o no tener valor, se tomara '3000'
        this.port = process.env.PORT || '3000';
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