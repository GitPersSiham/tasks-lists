import {Request, Response} from 'express';

export default class AuthController {

    static getLogin(request: Request, response: Response) {
     /* response.render('login');*/
     response.send('hello')
    }



     static getSignin(request: Request, response: Response) {
    response.send('signin');
    }

}