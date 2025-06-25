const nodemailer = require('nodemailer');
require('dotenv').config();

const contact = async (req, res) => {
    const { name, email, message } = req.body;
    
    console.log(process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD)

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    } 

    try {
        // Configure your mail service
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            secure: false,
            host :'smtp.gmail.com',
            auth: {
                user: process.env.ADMIN_EMAIL,
                pass: process.env.ADMIN_PASSWORD
            }
        });   
        const mailOptions = {
            from: email,
            to: "mahmashak08@gmail.com",
            subject: `New Contact Message from ${name}`,
            html: `
                <h3>Contact Message</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong><br/>${message}</p>
            `
        };

        await transporter.sendMail(mailOptions);

        res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Email error:', error);
        res.status(500).json({ error: 'Failed to send message' });
    }
};

module.exports = { contact };
