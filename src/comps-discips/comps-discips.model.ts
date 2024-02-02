import { Table, Column, Model, ForeignKey, HasMany } from 'sequelize-typescript';
import { Comp } from 'src/comps/comps.model';
import { Discip } from 'src/discips/discips.model';
import { Result } from 'src/results/results.model';

@Table({ tableName: 'comps-discips' })
export class CompDiscip extends Model {
  @ForeignKey(() => Comp)
  @Column
  compId: number;

  @ForeignKey(() => Discip)
  @Column
  discipId: number;

  @HasMany(() => Result)
  results: Result[];

}
