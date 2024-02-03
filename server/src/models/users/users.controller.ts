import { Body, Controller, Get, HttpException, HttpStatus, Param, Post, Req } from '@nestjs/common';
import { Request } from 'express'
import { User as UserModel } from '@prisma/client';
import { UsersService } from './users.service';
import { IInputUser } from './user.interface';
import { createDueDate } from './utils/date.util';
import { createSessionId } from './utils/session.util';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}

    @Get('/:uid')
    async getByUid(@Param('uid') uid: string): Promise<UserModel> {
      return  this.userService.getUser({uid: Number(uid)}).then((user) => {
        if (!user) {
          throw new HttpException({
            status: HttpStatus.NOT_FOUND,
            error: 'User with this id was not found'
          }, HttpStatus.NOT_FOUND)
        }
        return user
      })
    }

    @Get()
    async getAll(@Req() request: Request): Promise<UserModel[]> {
        return this.userService.getUsers()
    }

    @Post('/create')
    async signupUser (
      @Body() userData: IInputUser
    ): Promise<UserModel> {
        return  this.userService.CreateUser({
          ...userData,
          active_session_due: createDueDate(),
          active_session: createSessionId(),
          permissions: [1],
          subscribers: [],
          user_avatar: 'avatar.jpg'
        })
    }
}