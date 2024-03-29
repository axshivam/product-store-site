import { Router } from 'express';
import usersRouter from './user.routes';

const routes = Router();

routes.use('', usersRouter);

export default routes;