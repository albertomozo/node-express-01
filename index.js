import express from 'express';
import router from './routes/index.js';
// importo las rutas del fichero route.js

const app = express();
// definir puerto
const port = process.env.PORT ||4000;
// Agregar riouter 
app.use('/',router);
// Agregamo el usos de templates pug 
app.set('view engine','pug');
// agregamos uso de ficheros estáticos
app.use(express.static('public'))


app.listen(port, () => {
    console.log(`El servidor está funcionando en el puerto ${port}`);
})