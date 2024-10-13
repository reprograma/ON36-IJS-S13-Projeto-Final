import { ApiProperty } from "@nestjs/swagger";

export class CreateGameDto {
  id: string;

  name: string;

  platforms: string[];
}
