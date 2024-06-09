import { ConfirmationMailFactory } from "./ConfirmationMailFactory.class";
import { ConfirmationMailMailer } from "./ConfirmationMailMailer.class";
import {
  SimpleMailer,
  SimpleTemplatingEngine,
  SimpleTranslator,
  User,
} from "./implementation.class";

const templatingEngine = new SimpleTemplatingEngine();
const translator = new SimpleTranslator();
const mailer = new SimpleMailer();

const confirmationMailFactory = new ConfirmationMailFactory(
  templatingEngine,
  translator
);
const confirmationMailMailer = new ConfirmationMailMailer(
  confirmationMailFactory,
  mailer
);

const user = new User("nishant@gmail.com", "1234");

confirmationMailMailer.sendTo(user);
