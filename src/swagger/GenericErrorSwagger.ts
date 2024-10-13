import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class GenericErrorSwagger {
  @ApiProperty()
  message: string;

  @ApiPropertyOptional()
  error: string;

  @ApiProperty()
  statusCode: number;
}
