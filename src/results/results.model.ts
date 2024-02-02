import { BelongsTo, Column, DataType, ForeignKey, HasMany, HasOne, Model, Table } from "sequelize-typescript";
import { CompDiscip } from "src/comps-discips/comps-discips.model";
import { Prize } from "src/prizes/prizes.model";
import { User } from "src/users/users.model";

interface ResultCreationAttrs {
  place: number,
  userId: number,
  compId: number
}

@Table({ tableName: 'results' })
export class Result extends Model<Result, ResultCreationAttrs> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  place: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER
  })
  userId: number;

  @BelongsTo(() => User)
  user: User;

  @ForeignKey(() => CompDiscip)
  @Column({
    type: DataType.INTEGER
  })
  compId: number;

  @BelongsTo(() => CompDiscip)
  compsDiscips: CompDiscip;

  @HasOne(() => Prize)
  prize: Prize;

}