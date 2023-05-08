import { InjectModel } from '@m8a/nestjs-typegoose';
import { Injectable } from '@nestjs/common';
import { RoomModel } from './room.model/room.model';
import { DocumentType, ModelType } from '@typegoose/typegoose/lib/types';
import { CreateRoomDto } from './dto/create-room.dto';
import { Types } from 'mongoose';

@Injectable()
export class RoomService {
	constructor(
		@InjectModel(RoomModel) private readonly roomModel: ModelType<RoomModel>
	) {

	}

	async create(dto: CreateRoomDto): Promise<DocumentType<RoomModel>> {
		return this.roomModel.create(dto);
	}

	async delete(id: string): Promise<DocumentType<RoomModel> | null> {
		return this.roomModel.findByIdAndDelete(id).exec();
	}

	async findByProductId(productId: string): Promise<DocumentType<RoomModel>[]> {
		return this.roomModel.find({ productId: new Types.ObjectId(productId) }).exec();
	}
}
