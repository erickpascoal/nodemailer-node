module.exports = {
    // configurar dados do email que vai fazer os disparos

    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: "algum-email@gmail.com",
        pass: "senha-do-email"
    },
    tls: {
        rejectUnauthorized: false,
    }
}