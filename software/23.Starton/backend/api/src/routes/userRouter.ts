import express from 'express';
import UserController from '../controller/UserController';

const router = express.Router();
const controller = new UserController();

router.get('/id/:id', (req: express.Request, res: express.Response) =>
controller.getById(req, res))

router.put('/register', (req: express.Request, res: express.Response) =>
controller.register(req, res))

router.post('/login', (req: express.Request, res: express.Response) =>
controller.login(req, res))

router.patch('/update', (req: express.Request, res: express.Response) =>
controller.update(req, res))

router.delete('/id/:id', (req: express.Request, res: express.Response) =>
controller.delete(req, res))

export default router;