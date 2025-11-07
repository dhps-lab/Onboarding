import { Module } from '@nestjs/common';
import { HealtController } from './healt.controller';

@Module({
  controllers: [HealtController],
})
export class HealtModule {}
