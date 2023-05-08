import { prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { Types } from 'mongoose';

export interface ScheduleModel extends Base {}

export class ScheduleModel extends TimeStamps {
	@prop()
	roomId: Types.ObjectId;
	@prop()
	day: Date;
}
