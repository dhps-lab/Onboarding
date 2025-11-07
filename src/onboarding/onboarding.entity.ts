interface OnboardingRecord {
  id: string;
  name: string;
  document: string;
  email: string;
  initialAmount: number;
  status: string;
}

enum OnboardingStatus {
  REQUESTED = 'REQUESTED',
}

export { OnboardingRecord, OnboardingStatus };
