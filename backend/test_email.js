require('dotenv').config();
const { sendWelcomeEmail } = require('./src/utils/mailer');

async function run() {
    console.log("Testing mailer...");
    const success = await sendWelcomeEmail(process.env.SMTP_USER, "Test User", "temp1234");
    console.log("Mail success:", success);
}
run();
