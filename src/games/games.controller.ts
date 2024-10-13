import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { GamesService } from './games.service';
import { CreateGameDto } from './dtos/create-game.dto';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GameEntitySwagger } from 'src/swagger/GameEntitySwagger';
import { GenericErrorSwagger } from 'src/swagger/GenericErrorSwagger';

@Controller('games')
@ApiTags('games')
export class GamesController {
  constructor(private readonly gamesService: GamesService) {}

  @Get()
  @ApiOperation({ summary: 'Retorna todos os jogos'})
  @ApiResponse({ 
    status: 200, 
    description: 'Lista de todos os jogos cadastrados',
    type: GameEntitySwagger,
    isArray: true
  })
  @ApiResponse({ 
    status: 404, 
    description: 'Jogo não encontrado',
    type: GenericErrorSwagger
  })
  @ApiBearerAuth('KEY_AUTH_TOKEN')
  async findAll() {
    return await this.gamesService.findAll();
  }

 @Get('/:id')
 @ApiOperation({ summary: 'Retorna jogo por id'})
  async findById(@Param('id') id: string) {
    return await this.gamesService.findById(id);
  }


  @Post()
  @ApiOperation({ summary: 'Cria um novo jogo'})
  @ApiResponse({ 
    status: 201, 
    description: 'Nojo jogo cadastrado', 
    type: GameEntitySwagger
  })
  @ApiResponse({ 
    status: 404, 
    description: 'Jogo não encontrado',
    type: GenericErrorSwagger
  })
  async create(@Body() game: CreateGameDto) {
    if (!game.name || !game.platforms)
      throw new BadRequestException('Dados insuficientes!');
    return await this.gamesService.create(game);
  }

  @Put('/:id')
  async update(@Body() game: CreateGameDto, @Param('id') id: string) {
    return await this.gamesService.update(id, game);
  }

  @Delete('/:id')
  @ApiOperation({ summary: 'Deleta um jogo a partir do id'})
  @ApiResponse({ status: 200, description: 'Jogo deletado com sucesso'})
  @ApiResponse({ 
    status: 404, 
    description: 'Jogo não encontrado',
    type: GenericErrorSwagger
  })
  async remove(@Param('id') id: string) {
    return await this.gamesService.remove(id);
  }
}
