import { Module } from '@nestjs/common';
import { ScheduleController } from './schedule.controller';
import { TypegooseModule } from '@m8a/nestjs-typegoose';
import { ScheduleModel } from './schedule.model/schedule.model';
import { ScheduleService } from './schedule.service';

@Module({
  controllers: [ScheduleController],
  imports: [
    TypegooseModule.forFeature([{
      typegooseClass: ScheduleModel,
      schemaOptions: {
        collection: 'Schedule'
      }
    }])
  ],
  providers: [ScheduleService]
})
export class ScheduleModule {

}
