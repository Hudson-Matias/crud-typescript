import { Request, Response } from 'express';
import TaskService from '../services/taskService';

class TaskController {
  private taskService: TaskService;

  constructor() {
    this.taskService = new TaskService();
  }

  public async getAllTasks(req: Request, res: Response) {
    const tasks = await this.taskService.getAllTasks();
    res.json(tasks);
  }

  public async getTaskById(req: Request, res: Response) {
    const { id } = req.params;
    const task = await this.taskService.getTaskById(id);
    if (task) {
      res.json(task);
    } else {
      res.status(404).json({ error: 'Task not found' });
    }
  }

  public async createTask(req: Request, res: Response) {
    const { title, description, type, category, status, userId } = req.body;
    const newTask = await this.taskService.createTask(title, description, type, category, status, userId);
    res.status(201).json(newTask);
  }

  public async updateTask(req: Request, res: Response) {
    const { id } = req.params;
    const updatedTask = req.body;
    const task = await this.taskService.updateTask(id, updatedTask);
    if (task) {
      res.json(task);
    } else {
      res.status(404).json({ error: 'Task not found' });
    }
  }

  public async deleteTask(req: Request, res: Response) {
    const { id } = req.params;
    const success = await this.taskService.deleteTask(id);
    if (success) {
      res.sendStatus(204);
    } else {
      res.status(404).json({ error: 'Task not found' });
    }
  }
}

export default new TaskController();