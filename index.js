import express from 'express';
import router from './routes/index.js';
// impporto las rutas del fichero route.js

const app = express();
// definir puerto
const port = process.env.PORT ||4000;
// Agregar riouter 
app.use('/',router);


app.listen(port, () => {
    console.log(`El servidor está funcionando en el puerto ${port}`);
})