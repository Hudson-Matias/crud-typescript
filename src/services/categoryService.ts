// services/CategoryService.ts
import Category from '../models/category';

class CategoryService {
  private categories: Category[] = [];

  getAllCategories(): Category[] {
    return this.categories;
  }

  getCategoryById(id: string): Category | undefined {
    return this.categories.find(category => category.id === id);
  }

  createCategory(name: string, color: string): Category {
    const id = Date.now().toString();
    const newCategory = new Category(id, name, color);
    this.categories.push(newCategory);
    return newCategory;
  }

  updateCategory(id: string, updatedCategory: Partial<Category>): Category | null {
    const index = this.categories.findIndex(category => category.id === id);
    if (index !== -1) {
      this.categories[index] = { ...this.categories[index], ...updatedCategory };
      return this.categories[index];
    }
    return null;
  }

  deleteCategory(id: string): boolean {
    const index = this.categories.findIndex(category => category.id === id);
    if (index !== -1) {
      this.categories.splice(index, 1);
      return true;
    }
    return false;
  }
}

export default CategoryService;
