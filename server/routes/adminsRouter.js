import Router from 'express';
import AdminController from '../controllers/AdminController.js';
import handleValidationErrors
  from '../middlewares/validationErrorMiddleware.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const adminRouter = new Router();

adminRouter.post(
    '/worker',
    handleValidationErrors,
    AdminController.createWorker,
);

adminRouter.post(
    '/vacancy',
    handleValidationErrors,
    authMiddleware,
    AdminController.createVacancy,
);
adminRouter.delete(
    '/vacancy/:id',
    handleValidationErrors,
    authMiddleware,
    AdminController.deleteVacancy,
);

adminRouter.get(
    '/vacancy',
    handleValidationErrors,
    AdminController.getAllVacancy,
);

adminRouter.patch(
    '/worker',
    handleValidationErrors,
    AdminController.updateWorker,
);

adminRouter.get(
    '/worker',
    handleValidationErrors,
    AdminController.getAllWorkers,
);

adminRouter.get(
    '/worker/:id',
    handleValidationErrors,
    AdminController.getOneWorker,
);

adminRouter.delete(
    '/worker/:id',
    handleValidationErrors,
    AdminController.deleteOneDelete,
);

export default adminRouter;
