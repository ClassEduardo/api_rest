import { Router } from 'express';
import UserController from '../controller/UserController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Não deveria existir
router.get('/', loginRequired, UserController.index); // Lista usuários
router.get('/:id', UserController.show); // Lista usuário

// Deveria existir
router.post('/', UserController.create); // Criar usuário
router.put('/', loginRequired, UserController.update); // Atualizar dados usuário
router.delete('/', loginRequired, UserController.delete); // Deletar usuário

export default router;

/**
 * index   =   lista todos os usuários   ->   GET
 * store/create   =   Cria um novo usuário   ->   POST
 * delete   =   apaga usuário   ->   DELETE
 * show   =   mostra um usuário   ->   GET
 * update   =   atualiza um usuário   ->   PATCH ou PUT
 */
