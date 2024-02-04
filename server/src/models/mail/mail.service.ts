import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendUserConfirmation(user: {
    name: string,
    email: string
  }, token: string) {
    const url = `https://google.com/${token}`

    await this.mailerService.sendMail({
      to: user.email,
      subject: 'Please confirm your email!',
      template: './confirmation',
      context: {
        name: user.name,
        url
      }
    })
  }
}