import { Controller, Get } from '@nestjs/common';

@Controller('healt')
export class HealtController {
  @Get()
  check() {
    return { ok: true };
  }
}
