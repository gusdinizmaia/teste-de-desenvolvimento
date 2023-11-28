import { Injectable } from '@nestjs/common';
import { TasksRepository } from '../tasks.repository';
import { CreateTaskDto } from '../../dto/create-task.dto';
import { UpdateTaskDto } from '../../dto/update-task.dto';
import { Task } from '../../entities/task.entity';
import { PrismaService } from 'src/database/prisma.service';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class TasksPrismaRepository implements TasksRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateTaskDto, userId: string): Promise<Task> {
    const task = new Task();
    Object.assign(task, {
      ...data
    });

    const newTask = await this.prisma.task.create({
      data: { ...task, userId}
    });

    return plainToInstance(Task, newTask);
  }

  async findAll(userId: string): Promise<Task[]> {
    const tasks = await this.prisma.task.findMany({
      where: { userId: userId }
    });

    return tasks.map(elem => plainToInstance(Task, elem))
  }

  async findOne(TaskId: string): Promise<Task> {
    const tasks = await this.prisma.task.findUnique({
      where: { id: TaskId }
    });

    console.log(tasks)

    return plainToInstance(Task, tasks);
  }

  async update(id: string, data: UpdateTaskDto): Promise<Task> {
    const task = await this.prisma.task.update({
      where: { id },
      data: { ...data },
    });

    return plainToInstance(Task, task);
  }
  async delete(id: string): Promise<void> {
    await this.prisma.task.delete({
      where: { id },
    });
  }
}
