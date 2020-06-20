const nodemailer = require('nodemailer');
var fs = require('fs')
const path = require('path');
const MAILER_CONFIG = require('./config/mail');

const transporter = nodemailer.createTransport(
    MAILER_CONFIG,
);

async function send() {
    // local do corpo do email
    const template = fs.readFileSync(path.resolve(process.cwd(), 'src', 'template.html')).toString();
    // emails que irão receber
    const emailsTo = ['seu-email@hotmail.com', 'seu-email@gmail.com', 'seu-email@bol.com.br'];

    await transporter.sendMail({
        subject: 'teste email',
        from: 'testeemail <Teste de email>',
        to: emailsTo,
        html: template
    });
}

send();