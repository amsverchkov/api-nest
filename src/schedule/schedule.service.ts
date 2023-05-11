import { InjectModel } from '@m8a/nestjs-typegoose';
import { Get, HttpException, HttpStatus, Injectable, Post } from '@nestjs/common';
import { ScheduleModel } from './schedule.model/schedule.model';
import { DocumentType, ModelType } from '@typegoose/typegoose/lib/types';
import { Types } from 'mongoose';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { SCHEDULE_EXISTS } from './schedule.constants.dto';

@Injectable()
export class ScheduleService {

	constructor(@InjectModel(ScheduleModel) private scheduleModel: ModelType<ScheduleModel>) {

	}


	async getByRoomIdAndDate(roomId: string, date: Date): Promise<DocumentType<ScheduleModel>[] | null> {
		return this.scheduleModel.find({ roomId: new Types.ObjectId(roomId), date: date }).exec();
	}


	async create(dto: CreateScheduleDto): Promise<DocumentType<ScheduleModel>> {
		const foundSchedules = await this.getByRoomIdAndDate(dto.roomId, dto.day);
		if (foundSchedules.length > 0) {
			throw new HttpException(SCHEDULE_EXISTS, HttpStatus.BAD_GATEWAY);
		}
		return this.scheduleModel.create(dto);
	}
}
