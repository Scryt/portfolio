const express = require('express'),
    bodyParser = require('body-parser')

require('dotenv').config({path: __dirname + '/.env'})

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/send_email', (req, res) => {
    const contactDetails = req.body
    const sgMail = require('@sendgrid/mail');

    const API_KEY = process.env.SENDGRID_API_KEY;
    sgMail.setApiKey(API_KEY);

    const msg = {
        to: 'przemyslaw.tos@gmail.com',
        from: 'przemyslaw.tos@gmail.com',
        subject: 'New contact request',
        text: 'name: ' + contactDetails.name + '\n' +
            'mail: ' + contactDetails.email + '\n' +
            'message: ' + contactDetails.message
    };

    sgMail.send(msg);
    res.json({status: "ok"});

});

const PORT = process.env.PORT
const HOST = process.env.HOST
app.listen(PORT, HOST);