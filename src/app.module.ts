import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { ProductsModule } from './modules/products/products.module';
import { PaymentsModule } from './modules/payments/payments.module';
import { AuthModule } from './modules/auth/auth.module';
import { UploadController } from './modules/upload/upload.controller';

@Module({
  imports: [UsersModule, ProductsModule, PaymentsModule, AuthModule],
  controllers: [AppController, UploadController],
  providers: [AppService],
})
export class AppModule { }
