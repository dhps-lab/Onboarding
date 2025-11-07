import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.module';
import { OnboardingModule } from './onboarding/onboarding.module';
import { HealthModule } from './health/health.module';

@Module({
  imports: [AuthModule, ProductsModule, OnboardingModule, HealthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
