import { prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

export enum RoomType {
	Standard = 'Standard',
	StandardImproved = 'Standard improved',
	Lux = 'Lux',
}

export interface RoomModel extends Base {}

export class RoomModel extends TimeStamps {
	@prop()
	number: number;
	@prop({ enum: RoomType, type: () => String })
	type: RoomType;
}
