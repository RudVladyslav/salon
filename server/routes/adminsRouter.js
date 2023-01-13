import Router from 'express';
import AdminController from '../controllers/AdminController.js';
import handleValidationErrors
  from '../middlewares/validationErrorMiddleware.js';

const adminRouter = new Router();

adminRouter.post(
    '/worker',
    handleValidationErrors,
    AdminController.createWorker,
);

adminRouter.get(
    '/worker',
    handleValidationErrors,
    AdminController.getAllWorkers,
);

export default adminRouter;
