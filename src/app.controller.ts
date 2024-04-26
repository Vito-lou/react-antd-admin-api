import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('App主应用')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('getDello')
  getDello(): string {
    return 'i am dello';
  }

  @Get('user_*')
  getUser(): string {
    return 'get user';
  }
}
