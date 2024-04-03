import { Router } from 'express';
import UserController from '../src/controllers/userController';

const router = Router();

router.get('/', UserController.getAllUsers.bind(UserController));
router.get('/:id', UserController.getUserById.bind(UserController));
router.post('/', UserController.createUser.bind(UserController));
router.put('/:id', UserController.updateUser.bind(UserController));
router.delete('/:id', UserController.deleteUser.bind(UserController));

export { router as userRoutes };
