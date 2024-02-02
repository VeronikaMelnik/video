import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Human } from "src/humans/humans.model";
import { Team } from "src/teams/teams.model";

interface CoachCreationAttrs {
  experience: number,
  teamId: number,
  humanId: number,
}

@Table({ tableName: 'coaches' })
export class Coach extends Model<Coach, CoachCreationAttrs> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({
    type: DataType.INTEGER,
  })
  experience: number;

  @ForeignKey(() => Team)
  @Column({
    type: DataType.INTEGER
  })
  teamId: number;

  @BelongsTo(() => Team)
  team: Team;


  @ForeignKey(() => Human)
  @Column({
    type: DataType.INTEGER
  })
  humanId: number;

  @BelongsTo(() => Human)
  human: Human;
}