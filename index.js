import express from 'express';
import router from './routes/index.js';
import path from 'path';
// importo las rutas del fichero route.js

const app = express();
// definir puerto
const port = process.env.PORT ||4000;
const __dirname = path.resolve();
// Agregar riouter 
app.set('views', __dirname + '/views')
app.use('/',router);
// Agregamo el usos de templates pug 
app.set('view engine','pug');
// agregamos uso de ficheros estáticos
app.use(express.static('public'))
// vamos a obtener el dia actual para colocar en el pie

const fecha = new Date;
app.locals.actualFecha = `${fecha.getHours()} : ${fecha.getMinutes()} : ${fecha.getSeconds()}  `;
app.locals.miValor = 'Proyectos a Medida ';

app.listen(port, () => {
    console.log(`El servidor está funcionando en el puerto ${port}`);
})