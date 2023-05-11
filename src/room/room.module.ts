import { Module } from '@nestjs/common';
import { RoomController } from './room.controller';
import { TypegooseModule } from '@m8a/nestjs-typegoose';
import { RoomModel } from './room.model/room.model';
import { RoomService } from './room.service';

@Module({
  controllers: [RoomController],
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: RoomModel,
        schemaOptions: {
          collection: 'Room'
        }
      }
    ])
  ],
  providers: [RoomService]
})
export class RoomModule {}
