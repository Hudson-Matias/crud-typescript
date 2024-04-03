// services/TaskService.ts
import Task from '../models/task';

class TaskService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  getTasksByUserId(userId: string): Task[] {
    return this.tasks.filter(task => task.userId === userId);
  }

  getTaskById(id: string): Task | undefined {
    return this.tasks.find(task => task.id === id);
  }

  createTask(title: string, description: string, type: string, category: string | null, status: string, userId: string): Task {
    const id = Date.now().toString();
    const creationDate = new Date();
    const newTask = new Task(id, title, description, creationDate, null, type, category, status, userId);
    this.tasks.push(newTask);
    return newTask;
  }

  updateTask(id: string, updatedTask: Partial<Task>): Task | null {
    const index = this.tasks.findIndex(task => task.id === id);
    if (index !== -1) {
      this.tasks[index] = { ...this.tasks[index], ...updatedTask };
      return this.tasks[index];
    }
    return null;
  }

  deleteTask(id: string): boolean {
    const index = this.tasks.findIndex(task => task.id === id);
    if (index !== -1) {
      this.tasks.splice(index, 1);
      return true;
    }
    return false;
  }
}

export default TaskService;
