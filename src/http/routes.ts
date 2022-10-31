import { Router } from 'express';
import { HelloController } from './controllers/hello';
import { UsersController } from './controllers/users';

const router = Router();

router.get('/v1', HelloController);

router.get('/v1/users', UsersController);

export { router };
