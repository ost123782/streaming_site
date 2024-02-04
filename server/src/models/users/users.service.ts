import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { Prisma, User } from '@prisma/client';
import { MailService } from '../mail/mail.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService, private mailService: MailService) {}

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
    try {
      const res = await this.prisma.user.create({
        data
      })

      await this.mailService.sendUserConfirmation({ name: data.name, email: data.email }, '')

      return res
    } catch (err) {
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
    }
  }

}