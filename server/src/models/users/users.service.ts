import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { Prisma, User } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async getUser(
    {uid}: Prisma.UserWhereUniqueInput
  ): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: {uid}
    }).catch((err) => {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: 'something gone wrong'
      }, HttpStatus.INTERNAL_SERVER_ERROR, {
        cause: err
      })
    })
  }

  async getUsers(): Promise<User[]> {
    return this.prisma.user.findMany()
  }

  async CreateUser(data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({
      data,
    }).catch((err) => {
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        throw new HttpException({
          status: HttpStatus.BAD_REQUEST,
          error: 'User with these email or username already exists'
        }, HttpStatus.BAD_REQUEST, {
          cause: err
        })
      }
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: 'something gone wrong'
      }, HttpStatus.INTERNAL_SERVER_ERROR, {
        cause: err
      })
    })
  }
}