import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express'

@Controller('users')
export class UsersController {
    @Get()
    getAll(@Req() request: Request): string {
        return 'users'
    }
}