import {Request, Response} from 'express';

export default class MainController {

  static index(request : Request,response: Response) {
    response.send('index');
  }

  static home(request : Request,response: Response) {
    response.send('home');
  }

}