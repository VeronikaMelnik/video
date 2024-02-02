import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { CompDiscip } from "src/comps-discips/comps-discips.model";
import { Discip } from "src/discips/discips.model";

interface CompCreationAttrs {
  name: string;
  date: Date;
}

@Table({ tableName: 'comps' })
export class Comp extends Model<Comp, CompCreationAttrs> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  name: string;

  @Column({ type: DataType.DATE, unique: true, allowNull: false })
  date: Date;

  @BelongsToMany(() => Discip, () => CompDiscip)
  discips: Discip[];


}