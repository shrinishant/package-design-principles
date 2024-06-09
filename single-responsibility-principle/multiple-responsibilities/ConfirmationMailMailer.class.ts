import { Message, User } from "./implementation.class";
import {
  MailerInterface,
  MessageInterface,
  TemplatingEngineInterface,
  TranslatorInterface,
} from "./interfaces";

export class ConfirmatinoMailMailer {
  private templating: TemplatingEngineInterface;
  private translator: TranslatorInterface;
  private mailer: MailerInterface;

  constructor(
    templating: TemplatingEngineInterface,
    translator: TranslatorInterface,
    mailer: MailerInterface
  ) {
    this.templating = templating;
    this.translator = translator;
    this.mailer = mailer;
  }

  public sendTo(user: User): void {
    const message = this.createMessageFor(user);
    this.sendMessage(message);
  }

  private createMessageFor(user: User): Message {
    const subject = this.translator.translate("Confirm Your mail address");
    const body = this.templating.render("confirmationMail.html.tpl", {
      confirmationCode: user.getConfirmationCode(),
    });

    const message = new Message(subject, body);
    message.setTo(user.getEmailAddress());

    return message;
  }

  private sendMessage(message: MessageInterface): void {
    this.mailer.send(message);
  }
}
