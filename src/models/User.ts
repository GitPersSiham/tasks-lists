

import {Schema, model, Document} from 'mongoose';

interface IUser extends Document {
  username: string;
  email: string;
  password: string;
}

const userSchema = new Schema({
  username: {
    type: String,
    unique: true
  },
  email: {
    type: String,
    unique: true
  },

  password: String
});

const User = model<IUser>('User',userSchema, 'Usersmodel');

export {User, IUser};


