import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GenericErrorSwagger } from './swagger/GenericErrorSwagger';

@Controller()
@ApiTags('home')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: 'Rota inicial de boas vindas'})
  @ApiResponse({ status: 200, description: 'Textinho de boas-vindas da lili'})
  @ApiResponse({ 
    status: 404, 
    description: 'Jogo não encontrado',
    type: GenericErrorSwagger
  })
  getHello(): string {
    return "🕹️👾 Bem vindas a minha lista de jogos favoritos! 👾🎮";
  }
}
