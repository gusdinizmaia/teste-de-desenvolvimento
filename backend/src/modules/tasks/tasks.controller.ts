import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, HttpCode, Request } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post('')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  create(@Body() createTaskDto: CreateTaskDto,@Request() req) {
    return this.tasksService.create(createTaskDto, req.user.id);
  }

  @Get('')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  findAll(@Request() req) {
    return this.tasksService.findAll(req.user.id);
  }

  @Get(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  findOne(@Param('task') taskId: string) {
    return this.tasksService.findOne(taskId);
  }

  @Patch(':task')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  update(@Param('task') taskId: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.update(taskId, updateTaskDto);
  }

  @HttpCode(204)
  @Delete(':task')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  remove(@Param('task') taskId: string) {
    return this.tasksService.remove(taskId);  }
}
