import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { UsersModule } from './users/users.module';
import { ConfigModule } from "@nestjs/config";
import { User } from "./users/users.model";
import { AuthModule } from './auth/auth.module';
import { TeamsModule } from './teams/teams.module';
import { Team } from "./teams/teams.model";
import { FilesModule } from './files/files.module';
import { HumansModule } from "./humans/humans.module";
import { Human } from "./humans/humans.model";
import { ServeStaticModule } from "@nestjs/serve-static";
import * as path from "path";
import { Clerk } from "./clerks/clerks.model";
import { ClerksModule } from "./clerks/clerks.module";
import { Coach } from "./coaches/coaches.model";
import { CoachesModule } from "./coaches/coaches.module";
import { Comp } from "./comps/comps.model";
import { CompsModule } from "./comps/comps.module";
import { DiscipsModule } from "./discips/discips.module";
import { Discip } from "./discips/discips.model";
import { CompDiscip } from "./comps-discips/comps-discips.model";
import { Title } from "./titles/titles.model";
import { TitlesModule } from "./titles/titles.module";
import { Result } from "./results/results.model";
import { ResultsModule } from "./results/results.module";
import { Prize } from "./prizes/prizes.model";
import { PrizesModule } from "./prizes/prizes.module";

@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`
    }),
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static'),
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [User, Team, Human, Clerk, Coach, Comp, Discip, CompDiscip, Title, Result, Prize],
      autoLoadModels: true
    }),
    UsersModule,
    AuthModule,
    TeamsModule,
    HumansModule,
    FilesModule,
    ClerksModule,
    CoachesModule,
    CompsModule,
    DiscipsModule,
    TitlesModule,
    ResultsModule,
    PrizesModule
  ]
})
export class AppModule { }