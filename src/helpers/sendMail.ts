//  var fs = require('fs')
import ejs from "ejs";
const path = require("path");
const fs = require("fs");

const nodemailer = require("nodemailer");

function getAppRootDir() {
  let currentDir = __dirname;
  while (!fs.existsSync(path.join(currentDir, "package.json"))) {
    currentDir = path.join(currentDir, "..");
  }
  return currentDir;
}

const SendMail = (
  content: string,
  recipient: string,
  name: string,
  title: string
) => {
  //  message, email, `Message from: ${name}`, subject
  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 465,
    secure: true, // use SSL
    auth: {
      user: "inquiry@stlilyanna.sc.ke",
      pass: process.env.ZOHO_PASSWORD,
    },
  });

  const rootDir = getAppRootDir();

  const template = path.join(rootDir, "/views/lib/mail.ejs");
  //    const content = `This is the content sent from this email.`

  ejs.renderFile(template, { title, content }, function (err: any, data: any) {
    if (err) {
      console.log(err);
    } else {
      var mainOptions = {
        from: `"New message - ${name}" inquiry@stlilyanna.sc.ke`,
        to: "info@stlilyanna.sc.ke", // recipient,
        subject: title, // subject,
        html: `Email from ${name} - ${recipient}: <br> <br> ${content}`,
      };
      //  console.log('html data ======================>', mainOptions.html)
      transporter.sendMail(mainOptions, function (err: any, info: any) {
        if (err) {
          console.log(err);
        } else {
          console.log("Message sent: " + info.response);
        }
      });
    }
  });
};

export default SendMail;

// export const confirmationEmail = (order, recipient) => {
//   const transporter = nodemailer.createTransport({
//     host: "smtp.zoho.com",
//     port: 465,
//     secure: true, // use SSL
//     auth: {
//       user: "info@apnest.net",
//       pass: "virginiah*",
//     },
//   });

//   const template = path.join(__dirname, "/order-email.ejs");

//   ejs.renderFile(template, { order }, function (err, data) {
//     if (err) {
//       console.log(err);
//     } else {
//       var mainOptions = {
//         from: `"Dial a Delivery" info@apnest.net`,
//         to: recipient,
//         subject: "Order confirmation",
//         html: data,
//       };
//       transporter.sendMail(mainOptions, function (err, info) {
//         if (err) {
//           console.log(err);
//         } else {
//           console.log("Message sent: " + info.response);
//         }
//       });
//     }
//   });
// };
