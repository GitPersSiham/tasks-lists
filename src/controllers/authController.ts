import {Request, Response} from 'express';

export default class AuthController {

    static getLogin(request: Request, response: Response) {
     /* response.render('login');*/
     response.render('login')
    }

     static getSignin(request: Request, response: Response) {
    response.render('signin');
    }

}