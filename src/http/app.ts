import cors from 'cors';
import express, { Application } from 'express';
import { router } from './routes';
import { NotFoundMiddleware } from './middlewares/404';

function buildApp(): Application {
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.disable('x-powered-by'); // don't exploit https framework

  app.use(router);

  app.use(NotFoundMiddleware);

  return app;
}

export default buildApp();
