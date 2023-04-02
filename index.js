import express from 'express';

const app = express();
// definir puerto
const port = process.env.PORT ||4000;

app.get('/',(req,res)=>{
    let texto = '';
    for ( const r in req ){
        texto += r + '\r\n' ;
    }
    res.send( texto);
    console.log(req);
});

app.listen(port, () => {
    console.log(`El servidor está funcionando en el puerto ${port}`);
})