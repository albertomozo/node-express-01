import express from 'express'; 
// importi express
const router = express.Router();
// creo la constater route de tipo express.Router 

router.get('/',(req,res)=>{
    const inicio = 'Somos una empresa dedicada a ...';
    res.render('inicio', {
        inicio
    });
});
router.get('/nosotros',(req,res)=>{
    const proyectos = 'proyecto Node';
    res.render('nosotros',{
        parametro : proyectos
    });
});
router.get('/contacto',(req,res)=>{
    res.render('contacto');
});

export default router;