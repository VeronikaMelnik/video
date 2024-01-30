import { Column, DataType, HasMany, HasOne, Model, Table } from "sequelize-typescript";
import { User } from "src/users/users.model";

interface TeamCreationAttrs {
  name: string,
  city: string,
  address: string,
}

@Table({ tableName: 'teams' })
export class Team extends Model<Team, TeamCreationAttrs> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  city: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  address: string;

  @HasMany(() => User)
  user: User[];

}





// @OneToMany(() => Result, (result) => result.users)
// results: Result[];

// @OneToMany(() => Title, (title) => title.users)
// titles: Result[];

// @OneToOne(() => Team, (team) => team.id)
// @JoinColumn({
//   name: 'teamId',
// })
// team: Team;
// @Column({
//   nullable: true,
// })
// teamId: number;
