import { ConfirmationMailFactory } from "./ConfirmationMailFactory.class";
import { Message, User } from "./implementation.class";
import { MailerInterface, MessageInterface } from "./interfaces";

export class ConfirmationMailMailer {
  private confirmationMailFactory: ConfirmationMailFactory;
  private mailer: MailerInterface;

  constructor(
    confirmationMailFactory: ConfirmationMailFactory,
    mailer: MailerInterface
  ) {
    this.confirmationMailFactory = confirmationMailFactory;
    this.mailer = mailer;
  }

  public sendTo(user: User): void {
    const message = this.createMessageFor(user);
    this.sendMessage(message);
  }

  private createMessageFor(user: User): Message {
    return this.confirmationMailFactory.createMessageFor(user);
  }

  private sendMessage(message: MessageInterface): void {
    this.mailer.send(message);
  }
}
