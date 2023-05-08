import { Body, Controller, Post } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ScheduleService } from './schedule.service';
import { CreateScheduleDto } from './dto/create-schedule.dto';

@Controller('schedule')
export class ScheduleController {
	constructor(
		private readonly configService: ConfigService,
		private readonly scheduleService: ScheduleService
	) {

	}

	@Post('create')
	async create(@Body() dto: CreateScheduleDto) {
		return this.scheduleService.create(dto);
	}
}
