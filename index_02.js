import express from 'express';

const app = express();
// definir puerto
const port = process.env.PORT ||4000;

app.get('/',(req,res)=>{ //req : lo que enviamos res : lo que respondemos
    res.send('Hola mundo');
    console.log(res);
});

app.listen(port, () => {
    console.log(`El servidor está funcionando en el puerto ${port}`);
})