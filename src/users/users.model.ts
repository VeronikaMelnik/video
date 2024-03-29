import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Team } from "src/teams/teams.model";
import { Title } from "src/titles/titles.model";

interface UserCreationAttrs {
  name: string,
  email: string,
  password: string,
  isAdmin: boolean,
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({ example: 'Veronika', description: 'Имя' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @ApiProperty({ example: 'veronikamelnik00@mail.ru', description: 'Уникальный email' })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;

  @ApiProperty({ example: '246810', description: 'Пароль' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @ApiProperty({ example: 'false', description: 'Роль' })
  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  isAdmin: boolean;

  @ForeignKey(() => Team)
  @Column({
    type: DataType.INTEGER
  })
  teamId: number;

  @BelongsTo(() => Team)
  team: Team

  @HasMany(() => Title)
  titles: Title[];

}