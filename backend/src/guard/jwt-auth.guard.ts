import { Injectable, UnauthorizedException, ExecutionContext } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {

    handleRequest<TUser = any>(err: any, user: TUser, info: any): TUser {
        if (err || !user) throw new UnauthorizedException('Invalid or missing token'); 

        return user;
      }
}
