import { InjectModel } from '@m8a/nestjs-typegoose';
import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { RoomModel } from './room.model/room.model';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { CreateRoomDto } from './dto/create-room.dto';
import { RoomService } from './room.service';
import { ROOM_NOT_FOUND } from './room.constants';

@Controller('room')
export class RoomController {

	constructor(
		private readonly roomService: RoomService
	) {

	}


	@Post('create')
	async create(@Body() dto: CreateRoomDto) {
		this.roomService.create(dto);
	}


	@Delete(':id')
	async delete(@Param('id') id: string) {
		const deletedDoc = this.roomService.delete(id);
		if (!deletedDoc) {
			throw new HttpException(ROOM_NOT_FOUND, HttpStatus.NOT_FOUND);
		}
	}


}
