import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import RecipientController from './app/controllers/RecipientController';
import FileController from './app/controllers/FileController';
import DeliverymanController from './app/controllers/DeliverymanController';
import DeliveryController from './app/controllers/DeliveryController';
import DeliveryProblemController from './app/controllers/DeliveryProblemController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

// User Routes
routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

// Deliveryman actions
routes.get(
  '/deliverymans/:id/deliveries',
  DeliverymanController.showDeliveries
);
routes.put(
  '/deliverymans/:id/deliveries/:deliveryId',
  DeliverymanController.updateDeliveryStatus
);
routes.post(
  '/deliverymans/:id/delivery/:deliveryId/problems',
  DeliveryProblemController.store
);

// Auth middleware using jwt
routes.use(authMiddleware);

// User Update Routes
routes.put('/users', UserController.update);

// Recipients Routes
routes.get('/recipients', RecipientController.index);
routes.get('/recipients/:id', RecipientController.show);
routes.post('/recipients', RecipientController.store);
// routes.put('/recipients/:id', RecipientController.update);
// routes.delete('/recipients/:id', RecipientController.destroy);

// Deliverymans Routes
routes.get('/deliverymans', DeliverymanController.index);
routes.post('/deliverymans', DeliverymanController.store);
routes.put('/deliverymans/:id', DeliverymanController.update);
routes.delete('/deliverymans/:id', DeliverymanController.delete);

// Delivery Routes
routes.get('/deliveries', DeliveryController.index);
routes.post('/deliveries', DeliveryController.store);
routes.put('/deliveries/:id', DeliveryController.update);
routes.delete('/deliveries/:id', DeliveryController.delete);

// Delivery Problems Routes
routes.get('/delivery/problems', DeliveryProblemController.index);
routes.get('/delivery/:id/problems', DeliveryProblemController.show);
routes.delete('/problem/:id/cancel-delivery', DeliveryProblemController.delete);

// Files Routes
routes.post('/files', upload.single('file'), FileController.store);

export default routes;
