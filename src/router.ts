import express from 'express';

import MainController from './controllers/mainController';
import AuthController from './controllers/authController';
import bodyparser from 'body-parser';


const router: express.Router = express.Router();

const bodyParser = bodyparser.urlencoded({extended: true});

// on définit des routes
/** 
 * @swagger
 * /:
 * get:
 *   description : homepage donne la possiblité à un utilistateur de creer un compte ou de se connecter
 *   response:
 *   '200':
 *     description : A success response
*/ 


router.get('/', MainController.index);

router.route('/login')
  .get(AuthController.getLogin)
  .post(bodyParser, AuthController.postLogin);

  router.get('/logout', AuthController.logout);
  
router.route('/signin')
  .get(AuthController.getSignin)
  .post(bodyParser, AuthController.postSignin);

export default router;