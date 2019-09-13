const express = require('express');
const nodemailer = require('nodemailer')
require('dotenv').config();
const app = express();

app.use(express.json())

const {EMAIL, EMAIL_PASSWORD} = process.env

app.use(express.static(`${__dirname}/../build`));

// landscape services
const {getLandscapingServices, getConcreteServices, getWallWorkServices, getFlooringServices, getCleaningServices} = require('./controller')
app.get('/api/landscaping', getLandscapingServices )
app.get('/api/concrete', getConcreteServices)
app.get('/api/wall-work', getWallWorkServices)
app.get('/api/flooring', getFlooringServices)
app.get('/api/cleaning', getCleaningServices)

// Nodmailer 
let nodemailerFunction = (input) => {
    const {name, email, phone, zip_code, budget, description} = input

    // Step 1
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: EMAIL,
            pass: EMAIL_PASSWORD
        }
    })
    
    // Step 2
    let MailOptions = {
        from: email,
        to: EMAIL,
        subject: 'Potential lead from website asking for estimate',
        text: `A user from the website wants an estimate for a job.
            Name: ${name},
            Email: ${email},
            Phone: ${phone},
            Location: ${zip_code},
            Budget: $${budget},

            Here is what they need done - "${description}"`
    }

    // Step 3
    transporter.sendMail(MailOptions, (err, data) => {
        if(err){
            console.log('failed to send')
        } else {
            console.log('email sent!')
        }
    })
}


app.post('/api/contact-form', (req, res, next) => {
    console.log( req.body)
    nodemailerFunction(req.body)
})

const path =require('path')

app.get('*', (req, res )=> {
    res.sendFile(path.join(__dirname, '../build/index.html'))
})

app.listen(4000, () => console.log('Listening on port 4000'))