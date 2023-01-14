import Router from 'express';
import handleValidationErrors
  from '../middlewares/validationErrorMiddleware.js';
import authMiddleware from '../middlewares/authMiddleware.js';
import ordersController from '../controllers/OrdersController.js';

const reviewRouter = new Router();

reviewRouter.post(
    '/',
    handleValidationErrors,
    authMiddleware,
    ordersController.createOrder,
);

reviewRouter.get(
    '/',
    handleValidationErrors,
    authMiddleware,
    ordersController.getOrders,
);

export default reviewRouter;
