import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return "🕹️👾 Bem vindas a minha lista de jogos favoritos! 👾🎮";
  }
}
