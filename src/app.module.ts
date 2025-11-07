import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.module';
import { OnboardingModule } from './onboarding/onboarding.module';
import { HealtModule } from './healt/healt.module';

@Module({
  imports: [AuthModule, ProductsModule, OnboardingModule, HealtModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
