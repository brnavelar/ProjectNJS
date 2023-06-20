import { Router } from "express";
import {createTable, inserir, editar, listar, excluir} from './reserva.js';

const router = Router();

router.get('/', (req, res)=>{
    res.json({
        "statusCode": 200,
        "msg": "Api Funcionando!!"
    })
});

router.get('/reservas', listar);
router.post('/reserva', inserir);
router.put('/reservas', editar);
router.delete('/reservas', excluir);

export default router;