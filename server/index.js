import express, { response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import sgMail from '@sendgrid/mail';
import zipcodes from 'zipcodes'

const app = express();

dotenv.config()

const PORT = process.env.PORT || 5000
app.use(cors({
  // ORIGIN IS WHERE THE FRONT END GOES localhost 3000 or Netlify url
  origin: "http://localhost:3000",
  methods: ["GET", "POST"],
}


)); //utilize Cors so the browser doesn't restrict data, without it Sendgrid will not send!

app.use(express.json()) // accept data in json format
app.use(express.urlencoded()); // decode data sent thru html form 
// app.use('/fees', feesRoutes)
app.get('/', (req, res) => {
    res.send("Welcome to the Sendgrid Emailing Server"); 
});


app.post('/', (req, res) => {
    
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    console.log(req.body)
    const { name, company, email, phone, mortgage, message } = req.body
    // console.log(`${name}, ${company}, ${email}, ${phone}, ${mortgage}, ${message}`)
    
    const email_template = `<html data-editor-version="2" class="sg-campaigns" xmlns="http://www.w3.org/1999/xhtml">
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
      <!--[if !mso]><!-->
      <meta http-equiv="X-UA-Compatible" content="IE=Edge">
      <!--<![endif]-->
      <!--[if (gte mso 9)|(IE)]>
      <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG/>
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
      <![endif]-->
      <!--[if (gte mso 9)|(IE)]>
    <style type="text/css">
    body {width: 1000px;margin: 0 auto;}
    table {border-collapse: collapse;}
    table, td {mso-table-lspace: 0pt;mso-table-rspace: 0pt;}
    img {-ms-interpolation-mode: bicubic;}
    </style>
    <![endif]-->
      <style type="text/css">
    body, p, div {
      font-family: arial,helvetica,sans-serif;
      font-size: 14px;
    }
    body {
      color: #000000;
    }
    body a {
      color: #932A89;
      text-decoration: none;
    }
    p { margin: 0; padding: 0; }
    table.wrapper {
      width:100% !important;
      table-layout: fixed;
      -webkit-font-smoothing: antialiased;
      -webkit-text-size-adjust: 100%;
      -moz-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
    }
    img.max-width {
      max-width: 100% !important;
    }
    .column.of-2 {
      width: 50%;
    }
    .column.of-3 {
      width: 33.333%;
    }
    .column.of-4 {
      width: 25%;
    }
    ul ul ul ul  {
      list-style-type: disc !important;
    }
    ol ol {
      list-style-type: lower-roman !important;
    }
    ol ol ol {
      list-style-type: lower-latin !important;
    }
    ol ol ol ol {
      list-style-type: decimal !important;
    }
    @media screen and (max-width:480px) {
      .preheader .rightColumnContent,
      .footer .rightColumnContent {
        text-align: left !important;
      }
      .preheader .rightColumnContent div,
      .preheader .rightColumnContent span,
      .footer .rightColumnContent div,
      .footer .rightColumnContent span {
        text-align: left !important;
      }
      .preheader .rightColumnContent,
      .preheader .leftColumnContent {
        font-size: 80% !important;
        padding: 5px 0;
      }
      table.wrapper-mobile {
        width: 100% !important;
        table-layout: fixed;
      }
      img.max-width {
        height: auto !important;
        max-width: 100% !important;
      }
      a.bulletproof-button {
        display: block !important;
        width: auto !important;
        font-size: 80%;
        padding-left: 0 !important;
        padding-right: 0 !important;
      }
      .columns {
        width: 100% !important;
      }
      .column {
        display: block !important;
        width: 100% !important;
        padding-left: 0 !important;
        padding-right: 0 !important;
        margin-left: 0 !important;
        margin-right: 0 !important;
      }
      .social-icon-column {
        display: inline-block !important;
      }
    }
    </style>
      <!--user entered Head Start--><!--End Head user entered-->
    </head>
    <body>
      <center class="wrapper" data-link-color="#932A89" data-body-style="font-size:14px; font-family:arial,helvetica,sans-serif; color:#000000; background-color:#ffffff;">
        <div class="webkit">
          <table cellpadding="0" cellspacing="0" border="0" width="100%" class="wrapper" bgcolor="#ffffff">
            <tr>
              <td valign="top" bgcolor="#ffffff" width="100%">
                <table width="100%" role="content-container" class="outer" align="center" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td width="100%">
                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                        <tr>
                          <td>
                            <!--[if mso]>
    <center>
    <table><tr><td width="1000">
    <![endif]-->
                                    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%; max-width:1000px;" align="center">
                                      <tr>
                                        <td role="modules-container" style="padding:0px 0px 0px 0px; color:#000000; text-align:left;" bgcolor="#FFFFFF" width="100%" align="left"><table class="module preheader preheader-hide" role="module" data-type="preheader" border="0" cellpadding="0" cellspacing="0" width="100%" style="display: none !important; mso-hide: all; visibility: hidden; opacity: 0; color: transparent; height: 0; width: 0;">
    <tr>
      <td role="module-content">
        <p></p>
      </td>
    </tr>
    </table><table class="module" role="module" data-type="code" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="13d36c46-b515-4bdf-ad3c-edafb5c1c151">
    <tbody>
      <tr>
        <td height="100%" valign="top" role="module-content"><div style="font-family: inherit; text-align: center">
    <div style="padding: 20px 30px 10px 30px; background-color: #123456;">
        <i class="sg-icon sg-icon-airplane-fill" style="color: white; font-size: 25px;"></i>
        <span style="color: #ffffff; font-size: 22px; padding-top: 10px">
            CONFIRMATION
        </span>
    </div>
    </div></td>
      </tr>
    </tbody>
    </table><table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" role="module" data-type="columns" style="padding:0px 0px 0px 0px;" bgcolor="#e5ecee" data-distribution="1">
    <tbody>
      <tr role="module-content">
        <td height="100%" valign="top"><table width="1000" style="width:1000px; border-spacing:0; border-collapse:collapse; margin:0px 0px 0px 0px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-0">
      <tbody>
        <tr>
          <td style="padding:0px;margin:0px;border-spacing:0;"><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="efe5a2c4-1b11-49e7-889d-856d80b40f63" data-mc-module-version="2019-10-22">
    <tbody>
      <tr>
        <td style="padding:40px 10px 30px 10px; line-height:36px; text-align:inherit; background-color:#123456;" height="100%" valign="top" bgcolor="#123456" role="module-content"><div><div style="font-family: inherit; text-align: center"><span style="color: #ffffff; font-family: &quot;trebuchet ms&quot;, helvetica, sans-serif; font-size: 24px"><strong>Your notary inquiry has been received!</strong></span><span style="color: #ffffff; font-family: &quot;trebuchet ms&quot;, helvetica, sans-serif; font-size: 30px"><strong>&nbsp;</strong></span></div><div></div></div></td>
      </tr>
    </tbody>
    </table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="efe5a2c4-1b11-49e7-889d-856d80b40f63.2" data-mc-module-version="2019-10-22">
    <tbody>
      <tr>
        <td style="padding:50px 30px 30px 30px; line-height:28px; text-align:inherit; background-color:#ffffff;" height="100%" valign="top" bgcolor="#ffffff" role="module-content"><div><div style="font-family: inherit; text-align: inherit"><span style="font-size: 20px; font-family: &quot;trebuchet ms&quot;, helvetica, sans-serif; color: #656565">Hi ${name},</span></div>
    <div style="font-family: inherit; text-align: inherit"><br></div>
    <div style="font-family: inherit; text-align: inherit"><span style="font-size: 20px; font-family: &quot;trebuchet ms&quot;, helvetica, sans-serif; color: #656565">Thank you for submitting your inquiry. I will get back to you as soon as possible within (1-2 business days).&nbsp;</span></div>
    <div style="font-family: inherit; text-align: inherit"><br></div>
    <div style="font-family: inherit; text-align: inherit"><span style="font-size: 20px; font-family: &quot;trebuchet ms&quot;, helvetica, sans-serif; color: #656565">For a quicker response, you can call or text my direct line at (626) 872-8584.</span></div><div></div></div></td>
      </tr>
    </tbody>
    </table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="efe5a2c4-1b11-49e7-889d-856d80b40f63.1" data-mc-module-version="2019-10-22">
    <tbody>
      <tr>
        <td style="padding:20px 10px 50px 30px; line-height:26px; text-align:inherit; background-color:#FFFFFF;" height="100%" valign="top" bgcolor="#FFFFFF" role="module-content"><div><div style="font-family: inherit; text-align: inherit"><span style="font-family: &quot;trebuchet ms&quot;, helvetica, sans-serif; font-size: 16px; color: #656565">Thank you,</span></div>
    <div style="font-family: inherit; text-align: inherit"><br></div>
    <div style="font-family: inherit; text-align: inherit"><span style="font-family: &quot;trebuchet ms&quot;, helvetica, sans-serif; font-size: 16px; color: #656565"><strong>Sydney Nguyen</strong></span></div>
    <div style="font-family: inherit; text-align: inherit"><span style="font-family: &quot;trebuchet ms&quot;, helvetica, sans-serif; font-size: 16px; color: #656565">Notary Public</span></div>
    <div style="font-family: inherit; text-align: inherit"><span style="font-family: &quot;trebuchet ms&quot;, helvetica, sans-serif; font-size: 16px; color: #656565">(626) 872-8584</span></div><div></div></div></td>
      </tr>
    </tbody>
    </table></td>
        </tr>
      </tbody>
    </table></td>
      </tr>
    </tbody>
    </table></td>
                                      </tr>
                                    </table>
                                    <!--[if mso]>
                                  </td>
                                </tr>
                              </table>
                            </center>
                            <![endif]-->
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </div>
      </center>
    </body>
    </html>`


    const fullMessage = `${name} is requesting a ${mortgage} signing. ${message} // ${company} ${phone} ${email}`
    const msg = {
        to: process.env.EMAIL,
        from: process.env.EMAIL,
        subject: `${mortgage} Notary Website Inquiry`,
        text: fullMessage,
      
    }


    sgMail.send(msg)

    
    const confirm_msg = {
        to: email,
        from: process.env.EMAIL,
        subject: `Confirmation: Your message has been received!`,
        html: email_template
        // html: `<h1>Thank you ${name}</h1> for submitting your message. We will get back to you shortly. <br> For a quicker response, please call or text 626-566-5705.`
    }
    sgMail.send(confirm_msg)
    console.log('email was sent')

  

})
// calculate the distance in miles and send it back to the front end
app.post('/fees', (req, res) => {
  const myZip = process.env.ZIP_CODE;

  try {
    // receives the zip code from the user input when you press submit button
    const { zip } = req.body
    
    console.log(`user zipcode : ${zip}`)
    // calculates the distance between the zipcodes in miles
    let distanceZip = zipcodes.distance(myZip, zip)
    // rough estimate rounding up the miles 
    let miles = Math.ceil(distanceZip + (distanceZip * 0.50))
    console.log(`distance calculated miles: ${miles}`)
    let kilometers = zipcodes.toKilometers(miles)
    console.log(`distance calculated kilometers: ${kilometers}`)
    res.status(200).json(miles)

  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong with calculating the distance' })
  }
})




app.listen(PORT, () => console.log(`Server running on ${PORT}`))