import {
  IsEmail,
  IsNumber,
  IsString,
  Length,
  Min,
  MinLength,
} from 'class-validator';

export class CreateOnboardingDto {
  @IsString()
  @MinLength(3)
  name: string;

  @IsString()
  @Length(6, 12)
  document: string;

  @IsEmail()
  email: string;

  @IsNumber()
  @Min(100000)
  initialAmount: number;
}
