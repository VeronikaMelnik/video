import { BelongsTo, Column, DataType, ForeignKey, HasMany, HasOne, Model, Table } from "sequelize-typescript";
import { User } from "src/users/users.model";

interface TitleCreationAttrs {
  name: string,
  date: Date,
  userId: number
}

@Table({ tableName: 'titles' })
export class Title extends Model<Title, TitleCreationAttrs> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.DATE,
  })
  date: Date;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER
  })
  userId: number;

  @BelongsTo(() => User)
  user: User;


}