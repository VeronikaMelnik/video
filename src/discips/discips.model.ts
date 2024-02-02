import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { CompDiscip } from "src/comps-discips/comps-discips.model";
import { Comp } from "src/comps/comps.model";

interface DiscipCreationAttrs {
  type: string;
}

@Table({ tableName: 'discips' })
export class Discip extends Model<Discip, DiscipCreationAttrs> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  type: string;

  @BelongsToMany(() => Comp, () => CompDiscip)
  comps: Comp[];

}