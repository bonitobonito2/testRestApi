import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import User from './user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    PassportModule.register({defaultStrategy : 'jwt'}),
    JwtModule.register({
      secret : 'topSecret51',
      signOptions:{
        expiresIn : 3600
      }
    })
    ,TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService, JwtStrategy],
  exports : [JwtStrategy,PassportModule]
})
export class UsersModule {}
