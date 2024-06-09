import { Message, User } from "./implementation.class";
import { TemplatingEngineInterface, TranslatorInterface } from "./interfaces";

export class ConfirmationMailFactory {
  private templating: TemplatingEngineInterface;
  private translator: TranslatorInterface;

  constructor(
    templating: TemplatingEngineInterface,
    translator: TranslatorInterface
  ) {
    this.templating = templating;
    this.translator = translator;
  }

  public createMessageFor(user: User): Message {
    const subject = this.translator.translate("Confirm your mail address");
    const body = this.templating.render("confirmationMail.html.tpl", {
      confirmationCode: user.getConfirmationCode(),
    });

    const message = new Message(subject, body);
    message.setTo(user.getEmailAddress());

    return message;
  }
}
