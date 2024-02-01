import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";

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

}