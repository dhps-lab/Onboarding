import { Injectable } from '@nestjs/common';
import { OnboardingRecord, OnboardingStatus } from './onboarding.entity';
import { CreateOnboardingDto } from './dto/create-onboarding.dto';
import { randomUUID } from 'crypto';

@Injectable()
export class OnboardingService {
  private onboardings: OnboardingRecord[] = [];

  create(dto: CreateOnboardingDto) {
    const onboarding: OnboardingRecord = {
      id: randomUUID(),
      ...dto,
      status: OnboardingStatus.REQUESTED,
    };

    this.onboardings.push(onboarding);

    return { onboardingId: onboarding.id, status: onboarding.status };
  }
}
