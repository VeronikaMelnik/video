import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, HasOne, Model, Table } from "sequelize-typescript";
import { Clerk } from "src/clerks/clerks.model";
import { Coach } from "src/coaches/coaches.model";

interface HumanCreationAttrs {
  name: string;
  image: string;
}

@Table({ tableName: 'humans' })
export class Human extends Model<Human, HumanCreationAttrs> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  name: string;

  @Column({ type: DataType.STRING })
  image: string;

  @HasOne(() => Clerk)
  clerk: Clerk;

  @HasOne(() => Coach)
  coach: Coach;

}