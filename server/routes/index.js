import Router from 'express';
import authRouter from './authRouter.js';
import adminRouter from './adminsRouter.js';

const router = new Router();

router.use('/auth', authRouter)
router.use('/admin', adminRouter)

export default router;
