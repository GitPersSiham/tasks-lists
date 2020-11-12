import {Request, Response} from 'express';

import {User, IUser} from '../models/user';

import bcrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';

export default class AuthController {

    static getLogin(request: Request, response: Response) {
     response.render('login')
    }

    static async postLogin(request: Request, response: Response) {
        // 1 : récupérer les données du formulaire
        let {username, password} = request.body;
        username = username.trim();
        password = password.trim();
    
        // 2 : check in database
        // méthode : 
        // a) aller chercher l'utilisateur qui a le bon name
        const user: IUser = await User.findOne({username});
        // erreur 1 : pas d'utilisateur
        if (!user) {
          return response.render('login',{error: "Cet utilisateur n'existe pas"});
        }
        
        console.log(user);
        // b) vérifier que le password est valide
        const passwordIsOK = bcrypt.compareSync(password,user.password);
        // erreur 2 : mauvais mot de passe
        if (!passwordIsOK) {
          return response.render('login',{error: "Mauvais mot de passe"});
        }
    
        // 3 : génèrer le JWT et l'ajouter aux cookies
        const token = jsonwebtoken.sign({
          username: user.username,
          test: 'Bonjour'
        },
        process.env.JWT_SECRET || 'dummy',
        {
          expiresIn: '24h'
        });
        response.cookie('jwt', token);
    
        // 4 : rediriger vers /home =>(app react)
       
       response.redirect('http://localhost:3000')
      }

      static logout(request: Request, response: Response) {
        // il faut détruire le jeton => on détruit le cookie
        response.clearCookie('jwt');
        response.redirect('/');
      }
    



     static getSignin(request: Request, response: Response) {
    response.render('signin');
    }

    static postSignin(request: Request, response: Response) {
        // 1 : récupérer les données du formulaire
        let {username, email, password} = request.body;
        username = username.trim();
        email = email.trim();
        password = password.trim();
    
        // 2 : créer un nouvel utilisateur
        // a) encrypter le mot de passe
        password = bcrypt.hashSync(password, process.env.BCRYPT_SALT || '$2a$10$vI8aWBnW3fID.ZQ4/zo1G.q1lRps.9cGLcZEiGDMVr5yUP1KUOYTa' );
        // b) crée un document User
        const newUser = new User({username, email, password});
        // c) enregistrer le nouveau document !
        newUser.save( (error, product) => {
          if (error) {
            return response.render('signin',{error});
          } else {
            response.redirect('/login');
          }
        });
      }


}