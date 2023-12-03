//////////////////////
// user.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class UserService {
  private users = []; // Remplacez par votre source de données réelle (base de données, stockage en mémoire, etc.)

<<<<<<< HEAD
  getAllUsers() {
    // Logique pour récupérer tous les utilisateurs
    return this.users;
  }
=======
public async create(createUserDto: CreateUserDto) {
  const createdUser = await this.prisma.users.create({
    data: {
      pseudo: createUserDto.pseudo,
      username: createUserDto.username,
      password: createUserDto.password,
      created_at: createUserDto.created_at,
    },
  });
  return createdUser;
}
>>>>>>> refs/remotes/origin/develop

  getUserById(userId: string) {
    // Logique pour récupérer un utilisateur par ID
    const user = this.users.find(u => u.userId === userId);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

<<<<<<< HEAD
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
=======
  public async getByUUID(uuid: string) {
    const gettedUser = await this.prisma.users.findUnique({
      where: {
        UUID: uuid,
      },
    });
    return gettedUser;
  }

  public async updateByUUID(uuid: string, updateUserDto: UpdateUserDto) {
    const updatedUser = await this.prisma.users.update({
      where: {
        UUID: uuid,
      },
      data: {
        pseudo: !!updateUserDto.pseudo ? updateUserDto.pseudo : undefined,
        username: !!updateUserDto.username ? updateUserDto.username : undefined,
        password: !!updateUserDto.password ? updateUserDto.password : undefined,
        created_at: !!updateUserDto.created_at ? updateUserDto.created_at : undefined,
      },
    });
    return updatedUser;
>>>>>>> refs/remotes/origin/develop
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
