import { Request, Response } from 'express';
import CategoryService from '../services/categoryService';

class CategoryController {
  private categoryService: CategoryService;

  constructor() {
    this.categoryService = new CategoryService();
  }

  public async getAllCategories(req: Request, res: Response) {
    const categories = await this.categoryService.getAllCategories();
    res.json(categories);
  }

  public async getCategoryById(req: Request, res: Response) {
    const { id } = req.params;
    const category = await this.categoryService.getCategoryById(id);
    if (category) {
      res.json(category);
    } else {
      res.status(404).json({ error: 'Category not found' });
    }
  }

  public async createCategory(req: Request, res: Response) {
    const { name, color } = req.body;
    const newCategory = await this.categoryService.createCategory(name, color);
    res.status(201).json(newCategory);
  }

  public async updateCategory(req: Request, res: Response) {
    const { id } = req.params;
    const updatedCategory = req.body;
    const category = await this.categoryService.updateCategory(id, updatedCategory);
    if (category) {
      res.json(category);
    } else {
      res.status(404).json({ error: 'Category not found' });
    }
  }

  public async deleteCategory(req: Request, res: Response) {
    const { id } = req.params;
    const success = await this.categoryService.deleteCategory(id);
    if (success) {
      res.sendStatus(204);
    } else {
      res.status(404).json({ error: 'Category not found' });
    }
  }
}

export default new CategoryController();