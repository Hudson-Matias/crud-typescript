import { Request, Response } from 'express';
import UserService from '../services/userServices';

class userController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  public async getAllUsers(req: Request, res: Response) {
    const users = await this.userService.getAllUsers();
    res.json(users);
  }

  public async getUserById(req: Request, res: Response) {
    const { id } = req.params;
    const user = await this.userService.getUserById(id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  }

  public async createUser(req: Request, res: Response) {
    const { username, weight, password, email } = req.body;
    const newUser = await this.userService.createUser(username, weight, password, email);
    res.status(201).json(newUser);
  }

  public async updateUser(req: Request, res: Response) {
    const { id } = req.params;
    const updatedUser = req.body;
    const user = await this.userService.updateUser(id, updatedUser);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  }

  public async deleteUser(req: Request, res: Response) {
    const { id } = req.params;
    const success = await this.userService.deleteUser(id);
    if (success) {
      res.sendStatus(204);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  }
}

export default new userController();
