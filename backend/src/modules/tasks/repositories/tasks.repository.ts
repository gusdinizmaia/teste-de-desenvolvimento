import { CreateTaskDto } from "../dto/create-task.dto";
import { UpdateTaskDto } from "../dto/update-task.dto";
import {Task} from "../entities/task.entity"

export abstract class TasksRepository{

    abstract create(data:CreateTaskDto, userId: string): Promise<Task> | Task;
    abstract findOne(taskId: string): Promise<Task> | Task;
    abstract update(id: string, data: UpdateTaskDto): Promise<Task> | Task;
    abstract delete(id: string): Promise<void> | void;

}