import { Task } from 'src/entities/task.entity';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
export declare class TaskService {
    private taskRepository;
    constructor(taskRepository: Repository<Task>);
    create(task: Task): Promise<Task>;
    readAll(): Promise<Task[]>;
    update(task: Task): Promise<UpdateResult>;
    delete(id: any): Promise<DeleteResult>;
}
