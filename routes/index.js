import routerx from 'express-promise-router';

import userRouter from './user';
import apisRouter from './apis';
const router=routerx();

router.use('/user',userRouter);
router.use('/apis',apisRouter);
export default router;