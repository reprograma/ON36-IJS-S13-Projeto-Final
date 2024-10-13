import { ApiProperty } from "@nestjs/swagger";

export class CreateGameDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  platforms: string[];
}
