import { ConfirmatinoMailMailer } from "./ConfirmationMailMailer.class";
import {
  SimpleMailer,
  SimpleTemplatingEngine,
  SimpleTranslator,
  User,
} from "./implementation.class";

const confirmationMailTemplate = `
    <html>
        <body>
            <p>Please confirm your email using the following code: {{confirmationCode}}</p>
        </body>
    </html>
`;

const templatingEngine = new SimpleTemplatingEngine();
const translator = new SimpleTranslator();
const mailer = new SimpleMailer();

const confirmationMailMailer = new ConfirmatinoMailMailer(
  templatingEngine,
  translator,
  mailer
);

const user = new User("nishant@gmail.com", "1234");

confirmationMailMailer.sendTo(user);
