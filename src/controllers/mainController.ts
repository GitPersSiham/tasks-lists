import {Request, Response} from 'express';

export default class MainController {

  static index(request : Request,response: Response) {
    response.render('index');
  }

 
}