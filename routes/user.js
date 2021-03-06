import routerx from 'express-promise-router';
import userController from '../controller/UserController';
import auth from '../middlewares/auth';
const router=routerx();


// router.post('/add',auth.verifyAdministrador,usuarioController.add);
// router.get('/query',auth.verifyAdministrador,usuarioController.query);
// router.get('/list',auth.verifyAdministrador,usuarioController.list);
// router.put('/update',auth.verifyAdministrador,usuarioController.update);
// router.delete('/remove',auth.verifyAdministrador,usuarioController.remove);
// router.put('/activate',auth.verifyAdministrador,usuarioController.activate);
// router.put('/desactivate',auth.verifyAdministrador,usuarioController.desactivate);
router.post('/add',userController.add);
router.post('/login',userController.login);
export default router;