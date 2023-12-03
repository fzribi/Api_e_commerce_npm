// user.routes.ts
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Controller('users')
export class UserRoutes {
  constructor(private readonly userService: UsersService) {}

  @Get()
  getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Get(':userId')
  getUserById(@Param('userId') userId: string) {
    return this.usersService.getUserById(userId);
  }

  @Post()
  createUser(@Body() userData: any) {
    return this.userService.createUser(userData);
  }

  @Put(':userId')
  updateUser(@Param('userId') userId: string, @Body() userData: any) {
    return this.userService.updateUser(userId, userData);
  }

  @Delete(':userId')
  deleteUser(@Param('userId') userId: string) {
    return this.userService.deleteUser(userId);
  }
}
