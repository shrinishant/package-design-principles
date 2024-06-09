export interface TemplatingEngineInterface {
  render(template: string, context: object): string;
}

export interface TranslatorInterface {
  translate(key: string): string;
}

export interface MessageInterface {
  setTo(email: string): void;
}

export interface MailerInterface {
  send(message: MessageInterface): void;
}

export interface User {
  getConfirmationCode(): string;
  getEmailAddress(): string;
}
