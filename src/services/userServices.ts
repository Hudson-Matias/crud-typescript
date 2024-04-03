// services/UserService.ts
import User from '../models/user';

class UserService {
  private users: User[] = [];

  getAllUsers(): User[] {
    return this.users;
  }

  getUserById(id: string): User | undefined {
    return this.users.find(user => user.id === id);
  }

  createUser(username: string, weight: number, password: string, email: string): User {
    const id = Date.now().toString();
    const newUser = new User(id, username, weight, password, email);
    this.users.push(newUser);
    return newUser;
  }

  updateUser(id: string, updatedUser: Partial<User>): User | null {
    const index = this.users.findIndex(user => user.id === id);
    if (index !== -1) {
      this.users[index] = { ...this.users[index], ...updatedUser };
      return this.users[index];
    }
    return null;
  }

  deleteUser(id: string): boolean {
    const index = this.users.findIndex(user => user.id === id);
    if (index !== -1) {
      this.users.splice(index, 1);
      return true;
    }
    return false;
  }
}

export default UserService;
