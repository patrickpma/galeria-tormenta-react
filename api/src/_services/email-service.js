const op = require('sequelize').Op;
const nodemailer = require('nodemailer');
const moment = require('moment');
const emailService = {
  dispararEmail
};

async function dispararEmail(db, config, log, requisicao) {
  try {
    let emailBody = `<html>
        <body>
          <table style="font-family: Verdana; font-size: 12px; color: Black;">
            <tr>
              <td style="font-size: 14px;" colspan="2">
                <b> GERDAU - Nova requisição de Saída de Materiais <br />
                  <br />
                </b>
              </td>
            </tr>
            <tr>
              <td>Solicitante:</td>
              <td>${requisicao.creator_name} <br />
              </td>
            </tr>
            <tr>
              <td>Empresa:</td>
              <td>${requisicao.carrier_company} <br />
              </td>
            </tr>
            <tr>
              <td>Local:</td>
              <td>${requisicao.location} <br />
              </td>
            </tr>
            <tr>
              <td>Número da Requisição:</td>
              <td>
                <a href="${config.urlRequest}${requisicao.id}">${requisicao.id}</a>
              </td>
            </tr>
            <tr>
              <td>Motivo de Saída:</td>
              <td>${requisicao.reason_exit}</td>
            </tr>
            <tr>
              <td>Aprovador:</td>
              <td>${requisicao.approver_name}</td>
            </tr>
            <tr>
              <td>Data da Requisição:</td>
              <td>${moment.utc(requisicao.request_date).format('DD/MM/YYYY')}</td>
            </tr>
          </table>
        </body>
      </html>`;

    log.info("hostServiceEmail: " + config.hostServiceEmail);
    log.info("portServiceEmail: " + config.portServiceEmail);
    log.info("approver_email: " + requisicao.approver_email);
    log.info("userServiceEmail: " + config.userServiceEmail);

    const transporter = nodemailer.createTransport({
      host: config.hostServiceEmail, //Host
      port: config.portServiceEmail, // Port 
      secure: false
    });

    let mailOptions = {
      from: config.userServiceEmail, // sender address
      to: requisicao.approver_email,
      subject: 'Aprovação de Requisição de Saída de Materiais',
      text: "", // plain text body
      html: emailBody
    };

    /**
     * send mail with defined transport object
     */
    transporter.sendMail(mailOptions,
      (error, info) => {
        log.error(error);
        log.debug(info);
      });


    //   let transporter = {}; 
    // log.info("hostServiceEmail: " + config.hostServiceEmail);
    // log.info("portServiceEmail: " + config.portServiceEmail);
    // log.info("requireAuthentication: " + config.requireAuthentication);
    // log.info("approver_email: " + requisicao.approver_email);
    // log.info("userServiceEmail: " + config.userServiceEmail);

    // if (config.requireAuthentication) {
    //   transporter = nodemailer.createTransport({
    //     host: config.hostServiceEmail,
    //     port: config.portServiceEmail,
    //     auth: {
    //       user: config.userServiceEmail,
    //       pass: config.passServiceEmail
    //     }
    //   });
    // }
    // else {
    //   transporter = nodemailer.createTransport({
    //     host: config.hostServiceEmail,
    //     port: config.portServiceEmail,
    //     secure: false,
    //     tls: {
    //         ciphers:'SSLv3'
    //     }
    //   });
    // }

    // // send email
    // await transporter.sendMail({
    //   from: config.userServiceEmail,
    //   to: requisicao.approver_email,
    //   subject: 'Aprovação de Requisição de Saída de Materiais',
    //   html: emailBody
    // });
  }
  catch (error) {
    console.log(error);
    log.error(error);
  }
}

module.exports = emailService;