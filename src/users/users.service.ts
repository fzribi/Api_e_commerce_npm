//////////////////////
// user.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class UserService {
  private users = []; // Remplacez par votre source de données réelle (base de données, stockage en mémoire, etc.)

  getAllUsers() {
    // Logique pour récupérer tous les utilisateurs
    return this.users;
  }

  getUserById(userId: string) {
    // Logique pour récupérer un utilisateur par ID
    const user = this.users.find(u => u.userId === userId);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  createUser(userData: any) {
    // Logique pour créer un utilisateur
    const newUser = {
      userId: this.users.length + 1,
      ...userData,
    };
    this.users.push(newUser);
    return newUser;
  }

  updateUser(userId: string, userData: any) {
    // Logique pour mettre à jour un utilisateur par ID
    const userIndex = this.users.findIndex(u => u.userId === userId);
    if (userIndex === -1) {
      throw new NotFoundException('User not found');
    }

    this.users[userIndex] = {
      ...this.users[userIndex],
      ...userData,
    };

    return this.users[userIndex];
  }

  deleteUser(userId: string) {
    // Logique pour supprimer un utilisateur par ID
    const userIndex = this.users.findIndex(u => u.userId === userId);
    if (userIndex === -1) {
      throw new NotFoundException('User not found');
    }

    this.users.splice(userIndex, 1);
  }
}
