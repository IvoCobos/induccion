import { Router } from 'express';

const router = Router();

app.get('/', (req, res)=>{
    res.send('Aqui estamos!')
});

export default router