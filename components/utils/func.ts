const nodemailer = require('nodemailer');

async function messager(data: any) {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    // let testAccount = await nodemailer.createTestAccount();
    // console.log('Before CREATING TRANSPORTER');
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: process.env.Host,
        port: process.env.Port,
        secure: true, // true for 465, false for other ports
        auth: {
            user: process.env.Email, // generated ethereal user
            pass: process.env.Password, // generated ethereal password
        },
    });
    // console.log('CREATED TRANSPORTER');
    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: data.email, // sender address
        to: process.env.Email, // list of receivers
        subject: 'Request from Website', // Subject line
        text: data.message, // plain text body
        html: `<b>Hello Abdul Aleem,<br /><br /><br /><br /> ${data.message}?</b>`, // html body
    });

    // console.log('Message sent: %s', info);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    // console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}
export { messager };
