import { BelongsTo, Column, DataType, ForeignKey, HasMany, HasOne, Model, Table } from "sequelize-typescript";
import { Human } from "src/humans/humans.model";

interface ClerkCreationAttrs {
  experience: number,
  position: string,
  humanId: number,
}

@Table({ tableName: 'clerks' })
export class Clerk extends Model<Clerk, ClerkCreationAttrs> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({
    type: DataType.INTEGER,
  })
  experience: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  position: string;

  @ForeignKey(() => Human)
  @Column({
    type: DataType.INTEGER
  })
  humanId: number;

  @BelongsTo(() => Human)
  human: Human;
}