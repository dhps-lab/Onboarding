import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { CreateOnboardingDto } from './dto/create-onboarding.dto';
import { AuthGuard } from '@nestjs/passport';
import { OnboardingService } from './onboarding.service';

@Controller('onboarding')
export class OnboardingController {
  constructor(private readonly onboardingService: OnboardingService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() dto: CreateOnboardingDto) {
    return this.onboardingService.create(dto);
  }
}
