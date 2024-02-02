import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { CompDiscip } from "src/comps-discips/comps-discips.model";
import { Comp } from "src/comps/comps.model";
import { Result } from "src/results/results.model";

interface PrizeCreationAttrs {
  name: string,
  resultId: number
}

@Table({ tableName: 'prizes' })
export class Prize extends Model<Prize, PrizeCreationAttrs> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @ForeignKey(() => Result)
  @Column({
    type: DataType.INTEGER
  })
  resultId: number;

  @BelongsTo(() => Result)
  result: Result;


}