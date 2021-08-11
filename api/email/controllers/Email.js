// File /api/email/controllers/Email.js
"use strict";

/**
 * Read the documentation () to implement custom controller functions
 */

module.exports = {
  /**
   * Sends an email to the recipient in the body of the request
   */
  send: async (ctx) => {
    const body = ctx.request.body;
    const sendTo = body.email;
    const name = body.name;
    strapi.log.debug(`Trying to send an email to ${sendTo}`);

    try {
      const emailOptions = {
        fromName: "POG-PRINT",
        replyTo: "dindu696@gmail.com",
        cc: "chimdindue@gmail.com",
        to: sendTo,
        subject: "Successfully created account",
        html: `<html>
        <head>
          <meta name="viewport" content="width=device-width">
          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
          <title>Welcome to Pog-Print</title>
        <style>
      @media only screen and (max-width: 620px) {
        table[class='body'] h1 {
          font-size: 28px !important;
          margin-bottom: 10px !important;
        }
      
        table[class='body'] p,
      table[class='body'] ul,
      table[class='body'] ol,
      table[class='body'] td,
      table[class='body'] span,
      table[class='body'] a {
          font-size: 16px !important;
        }
      
        table[class='body'] .wrapper,
      table[class='body'] .article {
          padding: 10px !important;
        }
      
        table[class='body'] .content {
          padding: 0 !important;
        }
      
        table[class='body'] .container {
          padding: 0 !important;
          width: 100% !important;
        }
      
        table[class='body'] .main {
          border-left-width: 0 !important;
          border-radius: 0 !important;
          border-right-width: 0 !important;
        }
      
        table[class='body'] .btn table {
          width: 100% !important;
        }
      
        table[class='body'] .btn a {
          width: 100% !important;
        }
      
        table[class='body'] .img-responsive {
          height: auto !important;
          max-width: 100% !important;
          width: auto !important;
        }
      }
      @media all {
        .ExternalClass {
          width: 100%;
        }
      
        .ExternalClass,
      .ExternalClass p,
      .ExternalClass span,
      .ExternalClass font,
      .ExternalClass td,
      .ExternalClass div {
          line-height: 100%;
        }
      
        .apple-link a {
          color: inherit !important;
          font-family: inherit !important;
          font-size: inherit !important;
          font-weight: inherit !important;
          line-height: inherit !important;
          text-decoration: none !important;
        }
      
        .btn-primary table td:hover {
          background-color: #d5075d !important;
        }
      
        .btn-primary a:hover {
          background-color: #d5075d !important;
          border-color: #d5075d !important;
        }
      }
      </style></head>
        <body class style="background-color: #1A202C; font-family: sans-serif; -webkit-font-smoothing: antialiased; font-size: 14px; line-height: 1.4; margin: 0; padding: 0; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
          <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; background-color: #161f33; width: 100%;" width="100%" bgcolor="#161f33">
            <tr>
              <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" valign="top">&nbsp;</td>
              <td class="container" style="font-family: sans-serif; font-size: 14px; vertical-align: top; display: block; max-width: 580px; padding: 10px; width: 580px; margin: 0 auto;" width="580" valign="top">
                <div class="header" style="padding: 20px 0;">
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; width: 100%;" width="100%">
                    <tr>
                      <td class="align-center" style="font-family: sans-serif; font-size: 14px; vertical-align: top; text-align: center;" valign="top" align="center">
                        <a href="https://pog-print.netlify.app" style="color: #6415FF; text-decoration: underline;"><img src="https://pog-print.netlify.app/static/media/logo.4884b6f5.svg" style="border: none; -ms-interpolation-mode: bicubic; max-width: 100%; margin-bottom: 3rem;" height="90" alt="Pog print logo"></a>
                      </td>
                    </tr>
                  </table>
                </div>
                <div class="content" style="box-sizing: border-box; display: block; margin: 0 auto; max-width: 580px; padding: 10px;">
      
                  <!-- START CENTERED WHITE CONTAINER -->
                  <span class="preheader" style="color: transparent; display: none; height: 0; max-height: 0; max-width: 0; opacity: 0; overflow: hidden; mso-hide: all; visibility: hidden; width: 0;">Thank you for signing up with pog-print.</span>
                  <table role="presentation" class="main" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; background: #ffffff; border-radius: 3px; width: 100%;" width="100%">
      
                    <!-- START MAIN CONTENT AREA -->
                    <tr>
                      <td class="wrapper" style="font-family: sans-serif; font-size: 14px; vertical-align: top; box-sizing: border-box; padding: 20px;" valign="top">
                        <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; width: 100%;" width="100%">
                          <tr>
                            <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" valign="top">
                              <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 3rem;">Hi there, <strong>${name}<strong></strong></strong></p>
                              <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 3rem;">Thank you for signing up with pog print, enjoy a world of unlimited printing opportunities.</p>
                              <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="btn btn-primary" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; box-sizing: border-box; min-width: 100%; width: 100%;" width="100%">
                                <tbody>
                                  <tr>
                                    <td align="left" style="font-family: sans-serif; font-size: 14px; vertical-align: top; padding-bottom: 15px;" valign="top">
                                      <table style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: auto; width: auto; margin-bottom: 2rem;" role="presentation" border="0" cellpadding="0" cellspacing="0">
                                        <tbody>
                                          <tr>
                                            <td style="font-family: sans-serif; font-size: 14px; vertical-align: top; border-radius: 5px; text-align: center; background-color: #6415FF;" valign="top" align="center" bgcolor="#6415FF"> <a href="https://pog-print.netlify.app" target="_blank" style="border: solid 1px #6415FF; border-radius: 5px; box-sizing: border-box; cursor: pointer; display: inline-block; font-size: 14px; font-weight: bold; margin: 0; padding: 12px 25px; text-decoration: none; text-transform: capitalize; background-color: #6415FF; border-color: #6415FF; color: #ffffff;">Make an Order</a> </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;">Visit our website at www.pog-print.netlify.app or by clicking this <a href="https://pog-print.netlify.app" style="color: #6415FF; text-decoration: underline;">link</a> to view access your newly created wallet.</p>
                              <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;">A lot of features await you... cheers</p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
      
                  <!-- END MAIN CONTENT AREA -->
                  </table>
      
                  <!-- START FOOTER -->
                  <div class="footer" style="clear: both; text-align: center; width: 100%; margin-top: 3rem;">
                    <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; width: 100%;" width="100%">
                      <tr>
                        <td class="content-block" style="font-family: sans-serif; vertical-align: top; padding-bottom: 10px; padding-top: 10px; color: #9a9ea6; font-size: 12px; text-align: center;" valign="top" align="center">
                          <span class="apple-link" style="color: #9a9ea6; font-size: 12px; text-align: center;">Pog-print printing solutions</span>
                          <br> Don't like these emails? <a href="https://pog-print.netlify.app" style="text-decoration: underline; color: #9a9ea6; font-size: 12px; text-align: center;">Unsubscribe</a>.
                        </td>
                      </tr>
                      <tr>
                        <td class="content-block powered-by" style="font-family: sans-serif; vertical-align: top; padding-bottom: 10px; padding-top: 10px; color: #9a9ea6; font-size: 12px; text-align: center;" valign="top" align="center">
                          Powered by <a href="https://pog-print.netlify.app" style="color: #9a9ea6; font-size: 12px; text-align: center; text-decoration: none;">Pog Print</a>.
                        </td>
                      </tr>
                    </table>
                  </div>
                  <!-- END FOOTER -->
      
                <!-- END CENTERED WHITE CONTAINER -->
                </div>
              </td>
              <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" valign="top">&nbsp;</td>
            </tr>
          </table>
        </body>
      </html>
      `,
      };
      await strapi.plugins["email"].services.email.send(emailOptions);
      strapi.log.debug(`Email sent to ${sendTo}`);
      ctx.send({ message: "Email sent" });
    } catch (err) {
      strapi.log.error(`Error sending email to ${sendTo}`, err);
      ctx.send({ error: "Error sending email" });
    }
  },
  update: async (ctx) => {
    const body = ctx.request.body;
    const sendTo = body.email;
    const name = body.name;
    const documentName = body.documentName;
    const status = body.status;
    const id = body.id;
    strapi.log.debug(`Trying to send an email to ${sendTo}`);

    try {
      const emailOptions = {
        replyTo: "dindu696@gmail.com",
        cc: "chimdindue@gmail.com",
        to: sendTo,
        subject: "Print-Order updated",
        html: `<html>
        <head>
          <meta name="viewport" content="width=device-width">
          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
          <title>Welcome to Pog-Print</title>
        <style>
      @media only screen and (max-width: 620px) {
        table[class='body'] h1 {
          font-size: 28px !important;
          margin-bottom: 10px !important;
        }
      
        table[class='body'] p,
      table[class='body'] ul,
      table[class='body'] ol,
      table[class='body'] td,
      table[class='body'] span,
      table[class='body'] a {
          font-size: 16px !important;
        }
      
        table[class='body'] .wrapper,
      table[class='body'] .article {
          padding: 10px !important;
        }
      
        table[class='body'] .content {
          padding: 0 !important;
        }
      
        table[class='body'] .container {
          padding: 0 !important;
          width: 100% !important;
        }
      
        table[class='body'] .main {
          border-left-width: 0 !important;
          border-radius: 0 !important;
          border-right-width: 0 !important;
        }
      
        table[class='body'] .btn table {
          width: 100% !important;
        }
      
        table[class='body'] .btn a {
          width: 100% !important;
        }
      
        table[class='body'] .img-responsive {
          height: auto !important;
          max-width: 100% !important;
          width: auto !important;
        }
      }
      @media all {
        .ExternalClass {
          width: 100%;
        }
      
        .ExternalClass,
      .ExternalClass p,
      .ExternalClass span,
      .ExternalClass font,
      .ExternalClass td,
      .ExternalClass div {
          line-height: 100%;
        }
      
        .apple-link a {
          color: inherit !important;
          font-family: inherit !important;
          font-size: inherit !important;
          font-weight: inherit !important;
          line-height: inherit !important;
          text-decoration: none !important;
        }
      
        .btn-primary table td:hover {
          background-color: #d5075d !important;
        }
      
        .btn-primary a:hover {
          background-color: #d5075d !important;
          border-color: #d5075d !important;
        }
      }
      </style></head>
        <body class style="background-color: #1A202C; font-family: sans-serif; -webkit-font-smoothing: antialiased; font-size: 14px; line-height: 1.4; margin: 0; padding: 0; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
          <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; background-color: #161f33; width: 100%;" width="100%" bgcolor="#161f33">
            <tr>
              <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" valign="top">&nbsp;</td>
              <td class="container" style="font-family: sans-serif; font-size: 14px; vertical-align: top; display: block; max-width: 580px; padding: 10px; width: 580px; margin: 0 auto;" width="580" valign="top">
                <div class="header" style="padding: 20px 0;">
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; width: 100%;" width="100%">
                    <tr>
                      <td class="align-center" style="font-family: sans-serif; font-size: 14px; vertical-align: top; text-align: center;" valign="top" align="center">
                        <a href="https://pog-print.netlify.app" style="color: #6415FF; text-decoration: underline;"><img src="https://pog-print.netlify.app/static/media/logo.4884b6f5.svg" style="border: none; -ms-interpolation-mode: bicubic; max-width: 100%; margin-bottom: 3rem;" height="90" alt="Pog print logo"></a>
                      </td>
                    </tr>
                  </table>
                </div>
                <div class="content" style="box-sizing: border-box; display: block; margin: 0 auto; max-width: 580px; padding: 10px;">
      
                  <!-- START CENTERED WHITE CONTAINER -->
                  <span class="preheader" style="color: transparent; display: none; height: 0; max-height: 0; max-width: 0; opacity: 0; overflow: hidden; mso-hide: all; visibility: hidden; width: 0;">Your print order has been updated successfully.</span>
                  <table role="presentation" class="main" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; background: #ffffff; border-radius: 3px; width: 100%;" width="100%">
      
                    <!-- START MAIN CONTENT AREA -->
                    <tr>
                      <td class="wrapper" style="font-family: sans-serif; font-size: 14px; vertical-align: top; box-sizing: border-box; padding: 20px;" valign="top">
                        <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; width: 100%;" width="100%">
                          <tr>
                            <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" valign="top">
                              <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 3rem;">Hi there, <strong>${name}<strong></strong></strong></p>
                              <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 3rem;">Your print order <strong>${documentName}</strong> with <strong>ID:${id}</strong> has been updated, current status is <strong>${status}.</strong></p>
                              <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;">Thank you for choosing Pog-print.</p>
                              <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;">Visit our website at www.pog-print.netlify.app or by clicking this <a href="https://pog-print.netlify.app" style="color: #6415FF; text-decoration: underline;">link</a></p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
      
                  <!-- END MAIN CONTENT AREA -->
                  </table>
      
                  <!-- START FOOTER -->
                  <div class="footer" style="clear: both; text-align: center; width: 100%; margin-top: 3rem;">
                    <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; width: 100%;" width="100%">
                      <tr>
                        <td class="content-block" style="font-family: sans-serif; vertical-align: top; padding-bottom: 10px; padding-top: 10px; color: #9a9ea6; font-size: 12px; text-align: center;" valign="top" align="center">
                          <span class="apple-link" style="color: #9a9ea6; font-size: 12px; text-align: center;">Pog-print printing solutions</span>
                          <br> Don't like these emails? <a href="https://pog-print.netlify.app" style="text-decoration: underline; color: #9a9ea6; font-size: 12px; text-align: center;">Unsubscribe</a>.
                        </td>
                      </tr>
                      <tr>
                        <td class="content-block powered-by" style="font-family: sans-serif; vertical-align: top; padding-bottom: 10px; padding-top: 10px; color: #9a9ea6; font-size: 12px; text-align: center;" valign="top" align="center">
                          Powered by <a href="https://pog-print.netlify.app" style="color: #9a9ea6; font-size: 12px; text-align: center; text-decoration: none;">Pog Print</a>.
                        </td>
                      </tr>
                    </table>
                  </div>
                  <!-- END FOOTER -->
      
                <!-- END CENTERED WHITE CONTAINER -->
                </div>
              </td>
              <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" valign="top">&nbsp;</td>
            </tr>
          </table>
        </body>
      </html>
      
      `,
      };
      await strapi.plugins["email"].services.email.send(emailOptions);
      strapi.log.debug(`Email sent to ${sendTo}`);
      ctx.send({ message: "Email sent" });
    } catch (err) {
      strapi.log.error(`Error sending email to ${sendTo}`, err);
      ctx.send({ error: "Error sending email" });
    }
  },
  create: async (ctx) => {
    const body = ctx.request.body;
    const sendTo = body.email;
    const name = body.name;
    const documentName = body.documentName;
    const id = body.id;
    strapi.log.debug(`Trying to send an email to ${sendTo}`);

    try {
      const emailOptions = {
        replyTo: "dindu696@gmail.com",
        cc: "chimdindue@gmail.com",
        to: sendTo,
        subject: "Print-Order Created successfully",
        html: `<html>
        <head>
          <meta name="viewport" content="width=device-width">
          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
          <title>Welcome to Pog-Print</title>
        <style>
      @media only screen and (max-width: 620px) {
        table[class='body'] h1 {
          font-size: 28px !important;
          margin-bottom: 10px !important;
        }
      
        table[class='body'] p,
      table[class='body'] ul,
      table[class='body'] ol,
      table[class='body'] td,
      table[class='body'] span,
      table[class='body'] a {
          font-size: 16px !important;
        }
      
        table[class='body'] .wrapper,
      table[class='body'] .article {
          padding: 10px !important;
        }
      
        table[class='body'] .content {
          padding: 0 !important;
        }
      
        table[class='body'] .container {
          padding: 0 !important;
          width: 100% !important;
        }
      
        table[class='body'] .main {
          border-left-width: 0 !important;
          border-radius: 0 !important;
          border-right-width: 0 !important;
        }
      
        table[class='body'] .btn table {
          width: 100% !important;
        }
      
        table[class='body'] .btn a {
          width: 100% !important;
        }
      
        table[class='body'] .img-responsive {
          height: auto !important;
          max-width: 100% !important;
          width: auto !important;
        }
      }
      @media all {
        .ExternalClass {
          width: 100%;
        }
      
        .ExternalClass,
      .ExternalClass p,
      .ExternalClass span,
      .ExternalClass font,
      .ExternalClass td,
      .ExternalClass div {
          line-height: 100%;
        }
      
        .apple-link a {
          color: inherit !important;
          font-family: inherit !important;
          font-size: inherit !important;
          font-weight: inherit !important;
          line-height: inherit !important;
          text-decoration: none !important;
        }
      
        .btn-primary table td:hover {
          background-color: #d5075d !important;
        }
      
        .btn-primary a:hover {
          background-color: #d5075d !important;
          border-color: #d5075d !important;
        }
      }
      </style></head>
        <body class style="background-color: #1A202C; font-family: sans-serif; -webkit-font-smoothing: antialiased; font-size: 14px; line-height: 1.4; margin: 0; padding: 0; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
          <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; background-color: #161f33; width: 100%;" width="100%" bgcolor="#161f33">
            <tr>
              <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" valign="top">&nbsp;</td>
              <td class="container" style="font-family: sans-serif; font-size: 14px; vertical-align: top; display: block; max-width: 580px; padding: 10px; width: 580px; margin: 0 auto;" width="580" valign="top">
                <div class="header" style="padding: 20px 0;">
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; width: 100%;" width="100%">
                    <tr>
                      <td class="align-center" style="font-family: sans-serif; font-size: 14px; vertical-align: top; text-align: center;" valign="top" align="center">
                        <a href="https://pog-print.netlify.app" style="color: #6415FF; text-decoration: underline;"><img src="https://pog-print.netlify.app/static/media/logo.4884b6f5.svg" style="border: none; -ms-interpolation-mode: bicubic; max-width: 100%; margin-bottom: 3rem;" height="90" alt="Pog print logo"></a>
                      </td>
                    </tr>
                  </table>
                </div>
                <div class="content" style="box-sizing: border-box; display: block; margin: 0 auto; max-width: 580px; padding: 10px;">
      
                  <!-- START CENTERED WHITE CONTAINER -->
                  <span class="preheader" style="color: transparent; display: none; height: 0; max-height: 0; max-width: 0; opacity: 0; overflow: hidden; mso-hide: all; visibility: hidden; width: 0;">You have successfully created a print order.</span>
                  <table role="presentation" class="main" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; background: #ffffff; border-radius: 3px; width: 100%;" width="100%">
      
                    <!-- START MAIN CONTENT AREA -->
                    <tr>
                      <td class="wrapper" style="font-family: sans-serif; font-size: 14px; vertical-align: top; box-sizing: border-box; padding: 20px;" valign="top">
                        <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; width: 100%;" width="100%">
                          <tr>
                            <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" valign="top">
                              <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 3rem;">Hi there, <strong>${name}<strong></strong></strong></p>
                              <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 3rem;">Your New print order <strong>${documentName}</strong> has been successfully created. <strong>Document ID:${id}</strong></p>
                              <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;">Visit our website at www.pog-print.netlify.app or by clicking this <a href="https://pog-print.netlify.app" style="color: #6415FF; text-decoration: underline;">link</a> to view more details.</p>
                              <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;">Thank you for choosing Pog-print.</p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
      
                  <!-- END MAIN CONTENT AREA -->
                  </table>
      
                  <!-- START FOOTER -->
                  <div class="footer" style="clear: both; text-align: center; width: 100%; margin-top: 3rem;">
                    <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; width: 100%;" width="100%">
                      <tr>
                        <td class="content-block" style="font-family: sans-serif; vertical-align: top; padding-bottom: 10px; padding-top: 10px; color: #9a9ea6; font-size: 12px; text-align: center;" valign="top" align="center">
                          <span class="apple-link" style="color: #9a9ea6; font-size: 12px; text-align: center;">Pog-print printing solutions</span>
                          <br> Don't like these emails? <a href="https://pog-print.netlify.app" style="text-decoration: underline; color: #9a9ea6; font-size: 12px; text-align: center;">Unsubscribe</a>.
                        </td>
                      </tr>
                      <tr>
                        <td class="content-block powered-by" style="font-family: sans-serif; vertical-align: top; padding-bottom: 10px; padding-top: 10px; color: #9a9ea6; font-size: 12px; text-align: center;" valign="top" align="center">
                          Powered by <a href="https://pog-print.netlify.app" style="color: #9a9ea6; font-size: 12px; text-align: center; text-decoration: none;">Pog Print</a>.
                        </td>
                      </tr>
                    </table>
                  </div>
                  <!-- END FOOTER -->
      
                <!-- END CENTERED WHITE CONTAINER -->
                </div>
              </td>
              <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" valign="top">&nbsp;</td>
            </tr>
          </table>
        </body>
      </html>      
      `,
      };
      await strapi.plugins["email"].services.email.send(emailOptions);
      strapi.log.debug(`Email sent to ${sendTo}`);
      ctx.send({ message: "Email sent" });
    } catch (err) {
      strapi.log.error(`Error sending email to ${sendTo}`, err);
      ctx.send({ error: "Error sending email" });
    }
  },
};
