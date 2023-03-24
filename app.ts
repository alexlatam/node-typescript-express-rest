import dotenv from 'dotenv';
import Server from './database/models/server';
// Ejecutamos el metodo config de dotenv. Este metodo carga la configuracion por defecto del paquete
// Lo cual nos permite leer las variables del archivo .env en nuestra aplicacion.
dotenv.config();

// Creamos una instancia de la clase Server. 
// Esta clase contiene toda la lógica para levantar el servidor Express
const server = new Server();

// Llamamos al método listen, esto es lo que hace que el servidor se ponga a escuchar peticiones HTTP
// En este caso en el puerto 8000
server.listen();