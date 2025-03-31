import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../schema/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(user: any): Promise<User> {
    return new this.userModel(user).save();
  }

  async findOne(email: string): Promise<User | null> {
    return await this.userModel.findOne({ email }).exec();
  }
}
