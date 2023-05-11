import { RoomType } from '../room.model/room.model';

export class CreateRoomDto {
	number: number;
	type: RoomType;
}