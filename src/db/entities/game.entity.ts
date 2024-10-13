import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'game' })
export class GameEntity {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty()
  id: string;

  @Column({type: 'varchar'})
  @ApiProperty()
  name: string;

  @Column( 'varchar', { array: true })
  @ApiProperty()
  platforms: string[];
}
