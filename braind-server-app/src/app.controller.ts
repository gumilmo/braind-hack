import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('main')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(@Query('prompt') prompt: string): Promise<string> {
    await this.appService.tesProducts();
    return await this.appService.getPrompt(prompt);
  }
}
