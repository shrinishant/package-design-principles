import {
  MailerInterface,
  MessageInterface,
  TemplatingEngineInterface,
  TranslatorInterface,
} from "./interfaces";

export class Message implements MessageInterface {
  constructor(public subject: string, public body: string) {}

  to?: string;

  setTo(email: string): void {
    this.to = email;
  }
}

export class SimpleTemplatingEngine implements TemplatingEngineInterface {
  render(template: string, context: object): string {
    let rendered = template;
    for (const key in context) {
      const value = (context as any)[key];
      const placeholder = `{{${key}}}`;
      rendered = rendered.replace(new RegExp(placeholder, "g"), value);
    }
    return rendered;
  }
}

export class SimpleTranslator implements TranslatorInterface {
  private translations: { [key: string]: string } = {
    "Confirm your mail address": "Confirm your mail address",
  };

  translate(key: string): string {
    return this.translations[key] || key;
  }
}

export class SimpleMailer implements MailerInterface {
  send(message: Message): void {
    console.log(`Sending email to: ${message.to}`);
  }
}

export class User {
  constructor(private emailAddress: string, private confirmationCode: string) {}

  getEmailAddress(): string {
    return this.emailAddress;
  }

  getConfirmationCode(): string {
    return this.confirmationCode;
  }
}
