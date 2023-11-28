import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TasksRepository } from './repositories/tasks.repository';

@Injectable()
export class TasksService {
  constructor(private tasksRepository: TasksRepository) {}

 async create(createTaskDto: CreateTaskDto, userId: string) {

    return this.tasksRepository.create(createTaskDto, userId);
  }

  async findAll(userId: string) {

    return this.tasksRepository.findAll(userId);
  }

  async findOne(taskId: string) {
    const findTask = await this.tasksRepository.findOne(taskId);
    if (!findTask) {
      throw new NotFoundException('Task not found');
    }

    return findTask;
  }

  async update(taskId: string, updateTaskDto: UpdateTaskDto) {
    const findTask = await this.tasksRepository.findOne(taskId);
    if (!findTask) {
      throw new NotFoundException('Task not found');
    }    
    
    return this.tasksRepository.update(taskId, updateTaskDto);
  }

  async remove(taskId: string) {
    const findTask = await this.tasksRepository.findOne(taskId);
    if (!findTask) {
      throw new NotFoundException('Task not found');
    }   

    await this.tasksRepository.delete(taskId);
    return;
  }
}
