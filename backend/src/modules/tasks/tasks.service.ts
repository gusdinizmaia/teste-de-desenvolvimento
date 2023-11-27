import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TasksRepository } from './repositories/tasks.repository';

@Injectable()
export class TasksService {
  constructor(private tasksRepository: TasksRepository) {}

 async create(createTaskDto: CreateTaskDto) {
    // const findTask = await this.tasksRepository.findByEmail(
    //   createTaskDto.email,
    // );
    // if (findTask) {
    //   throw new ConflictException('Task already exists');
    // }
    const Task = await this.tasksRepository.create(createTaskDto);

    return Task;
  }

  async findOne(taskId: string) {
    const task = await this.tasksRepository.findOne(taskId);
    return task;
  }

  async update(taskId: string, updateTaskDto: UpdateTaskDto) {
    const task = await this.tasksRepository.update(taskId, updateTaskDto);
    return task;
  }

  async remove(taskId: string) {
    await this.tasksRepository.delete(taskId);
    return;
  }
}
