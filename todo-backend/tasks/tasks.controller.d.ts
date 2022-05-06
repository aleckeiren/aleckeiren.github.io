import { TaskService } from 'src/task/task.service';
import { Task } from 'src/entities/task.entity';
export declare class TasksController {
    private taskService;
    constructor(taskService: TaskService);
    read(): Promise<Task[]>;
    create(task: Task): Promise<any>;
    update(id: any, task: Task): Promise<any>;
    delete(id: any): Promise<any>;
}
