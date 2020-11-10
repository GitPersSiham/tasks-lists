import express from 'express';

import MainController from './controllers/mainController';
import AuthController from './controllers/authController';

const router: express.Router = express.Router();


// on définit des routes
router.get('/', MainController.index);

router.route('/login')
  .get(AuthController.getLogin)
 

router.route('/signin')
  .get(AuthController.getSignin)
  

export default router;