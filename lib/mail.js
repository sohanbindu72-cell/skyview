import nodemailer from 'nodemailer';

let transporter = null;

function getTransporter() {
  if (transporter) return transporter;
  
  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
  return transporter;
}

export async function sendPasswordEmail(to, name, password) {
  const dashboardUrl = `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/login`;
  
  const mailOptions = {
    from: process.env.MAIL_FROM,
    to: to,
    subject: 'Welcome to SkyLuxe VIP - Your Mission Awaits',
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
        <h2 style="color: #ea580c;">Welcome to SkyLuxe VIP, ${name}</h2>
        <p>Thank you for choosing SkyLuxe VIP for your journey. We have created a dedicated dashboard for you to track your missions, view benefits, and manage your travel history.</p>
        
        <div style="background: #f9f9f9; padding: 20px; border-radius: 10px; margin: 20px 0;">
          <h3 style="margin-top: 0;">Access Credentials</h3>
          <p><strong>Email:</strong> ${to}</p>
          <p><strong>Temporary Password:</strong> <span style="font-family: monospace; background: #eee; padding: 2px 5px; border-radius: 3px;">${password}</span></p>
        </div>
        
        <p>You can access your dashboard here:</p>
        <a href="${dashboardUrl}" style="display: inline-block; padding: 12px 24px; background: #000; color: #fff; text-decoration: none; border-radius: 8px; font-weight: bold;">Login to Dashboard</a>
        
        <p style="margin-top: 30px; font-size: 0.8em; color: #888;">
          * For your security, please change your password upon your first login.
        </p>
      </div>
    `,
  };

  try {
    const transporter = getTransporter();
    await transporter.sendMail(mailOptions);
    console.log(`[MAIL] Password email sent to ${to}`);
  } catch (error) {
    console.error('[MAIL] Error sending password email:', error);
    // We don't want to throw error here to avoid breaking the booking flow, 
    // but we log it for the admin to see.
  }
}

export async function sendLeadEmail(to, airport, passengers = 1) {
  const airportName = airport?.split(',')[0] || 'your destination';
  
  // Basic price calculations based on user prompt (placeholder logic)
  const meetAndGreetBase = 474;
  const salonBase = 1920;
  const totalMeet = (meetAndGreetBase * passengers).toFixed(2);
  const totalSalon = (salonBase * passengers).toFixed(2);

  const mailOptions = {
    from: process.env.MAIL_FROM,
    to: to,
    subject: `Services for ${airportName} - SkyVIP`,
    html: `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #1a1a1a; line-height: 1.6; max-width: 600px;">
        <p>Good day,</p>
        <p>Thank you for contacting SkyVIP Services.</p>
        <p>In <strong>${airportName}</strong> airport, we can offer the following premium services on arrival:</p>

        <div style="margin: 25px 0; border-left: 4px solid #ea580c; padding-left: 20px;">
          <h3 style="color: #ea580c; margin-bottom: 5px;">VIP Meet and Greet Assistance</h3>
          <p style="margin: 5px 0;"><strong>Price:</strong> For ${passengers} passenger(s), the cost is ${totalMeet} USD plus a 4% fee.</p>
          <p style="margin: 5px 0; font-size: 0.95em;"><strong>Includes:</strong> Personalized meet and greet upon arrival, guidance through airport formalities, assistance with luggage collection (porter fees may apply), and escort to your transportation.</p>
          <p style="font-size: 0.85em; color: #666; margin-top: 5px;">Note: This service covers up to 2 hours. Additional charges may apply for delays or extended waiting times</p>
        </div>

        <div style="margin: 25px 0; border-left: 4px solid #1e293b; padding-left: 20px;">
          <h3 style="color: #1e293b; margin-bottom: 5px;">VIP Salon Service</h3>
          <p style="margin: 5px 0;"><strong>Price:</strong> For ${passengers} passenger(s), the cost is ${totalSalon} USD plus a 4% fee.</p>
          <p style="margin: 5px 0; font-size: 0.95em;"><strong>Includes:</strong> Meet at the aircraft door and tarmac transfer to the VIP Lounge, private processing of airport formalities, baggage retrieval and delivery to the VIP Lounge.</p>
          <p style="font-size: 0.85em; color: #666; margin-top: 5px;">Important: The salon and vehicle may be shared with other VIP guests</p>
        </div>

        <p>Kindly let us know if you would like to proceed with the booking.</p>
        <p>To view our cancellation policy, please refer to the link in the signature below.</p>

        <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #eee;">
          <p style="margin: 0; font-weight: bold;">Best Regards,</p>
          <p style="margin: 5px 0; color: #ea580c; font-size: 1.1em; font-weight: bold;">Emily Byrne</p>
          <p style="margin: 0; font-weight: 500;">SkyVIP Team</p>
          <p style="margin: 0; color: #666; font-size: 0.9em;">Office: 1(855)575-9847</p>
          <p style="margin: 10px 0 0 0; font-size: 0.9em;"><a href="mailto:info@usvipservices.com" style="color: #ea580c; text-decoration: none;">info@usvipservices.com</a></p>
          <p style="margin: 0; font-size: 0.9em;"><a href="https://www.usvipservices.com" style="color: #ea580c; text-decoration: none;">www.usvipservices.com</a></p>
        </div>
      </div>
    `
  };

  try {
    const transporter = getTransporter();
    await transporter.sendMail(mailOptions);
    console.log(`[LEAD_MAIL] Inquiry email sent to ${to}`);
  } catch (error) {
    console.error('[LEAD_MAIL] Error sending lead email:', error);
  }
}
