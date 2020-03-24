import routerx from 'express-promise-router';
import apisController from '../controller/ApisController';
import auth from '../middlewares/auth';
const router=routerx();

router.get('/api_one',auth.verifyAdministrador,apisController.api_one);
router.get('/api_two',auth.verifyAdministrador,apisController.api_two);
router.get('/api_three',auth.verifyUserGeneric,apisController.api_three);
router.get('/api_four',auth.verifyUserGeneric,apisController.api_four);
router.get('/api_five',auth.verifyUserGeneric,apisController.api_five);
export default router;