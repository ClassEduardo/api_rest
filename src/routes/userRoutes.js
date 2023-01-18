import { Router } from 'express';
import UserController from '../controller/UserController';

const router = new Router();
router.post('/', UserController.create);
router.get('/', UserController.index);
router.get('/:id', UserController.show);
router.put('/:id', UserController.update);

export default router;

/**
 * index   =   lista todos os usuários   ->   GET
 * sotre/create   =   Cria um novo usuário   ->   POST
 * delete   =   apaga usuário   ->   DELETE
 * show   =   mostra um usuário   ->   GET
 * update   =   atualiza um usuário   ->   PATCH ou PUT
 */
