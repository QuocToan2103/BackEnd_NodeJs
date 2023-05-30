import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormconfig } from './config/typeorm.config';
import { UsersModule } from './users/users.module';
import { AuthenticationModule } from './authentication/authentication.module';




@Module({
  imports: [TypeOrmModule.forRoot(typeormconfig), UsersModule, AuthenticationModule],
  controllers: [AppController, ],
  providers: [AppService],
})
export class AppModule {}
