const nodeMailer = require("nodemailer");
const path = require("path");
const fs = require("fs");
const handlebars = require("handlebars");

const sendEmail = async (options) => {
  const transporter = nodeMailer.createTransport({
    host: process.env.SMPT_HOST,
    port: process.env.SMPT_PORT,
    // service: process.env.SMPT_SERVICE,
    auth: {
      user: process.env.SMPT_MAIL,
      pass: process.env.SMPT_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const filePath = path.join(__dirname, "../template/ticket.html");
  const source = fs.readFileSync(filePath, "utf-8").toString();
  const template = handlebars.compile(source);
  const replacements = {
    name: options.message.name,
    collegeName: options.message.college,
    qrCode: `${process.env.BASE_URL}/images/${options.message.qr}`,
    ticketId: options.message.ticketId,
  };
  const htmlToSend = template(replacements);

  const mailOptions = {
    from: process.env.SMPT_MAIL,
    to: options.email,
    subject: options.subject,
    html: htmlToSend,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
