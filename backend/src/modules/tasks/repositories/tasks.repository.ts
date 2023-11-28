import { CreateTaskDto } from "../dto/create-task.dto";
import { UpdateTaskDto } from "../dto/update-task.dto";
import {Task} from "../entities/task.entity"

export abstract class TasksRepository{

    abstract create(data:CreateTaskDto, userId: string): Promise<Task> | Task;
    abstract findAll(userId: string): Promise<Task[]> | Task[];
    abstract findOne(taskId: string): Promise<Task> | Task;
    abstract update(taskId: string, data: UpdateTaskDto): Promise<Task> | Task;
    abstract delete(taskId: string): Promise<void> | void;

}