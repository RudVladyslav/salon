import Router from 'express';
import authRouter from './authRouter.js';
import adminRouter from './adminsRouter.js';
import ordersRouter from './ordersRouter.js';

const router = new Router();

router.use('/auth', authRouter)
router.use('/admin', adminRouter)
router.use('/orders', ordersRouter)

export default router;
