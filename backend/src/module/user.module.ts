import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersService } from '../services/user.service';
import { User, UserSchema } from '../schema/user.schema';
import { DashboardController } from 'src/controller/dashboard.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
  controllers: [DashboardController],  
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
