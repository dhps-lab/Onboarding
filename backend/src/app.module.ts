import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.module';
import { OnboardingModule } from './onboarding/onboarding.module';
import { HealthModule } from './health/health.module';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [
    CacheModule.register({
      isGlobal: true,
      ttl: 60,
      max: 100,
    }),
    AuthModule,
    ProductsModule,
    OnboardingModule,
    HealthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
