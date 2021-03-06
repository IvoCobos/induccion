import { Router } from 'express';
import Users from '../models/Users.js';

const router = Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/api/users', async (req, res) => {
    let data = await Users.find();
    res.json({data})
});

router.post('/api/users', async (req, res) => {
    await Users.create(req.body);
    res.json("funciona")
})

export default router;