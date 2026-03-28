import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { name, email, company, message } = await req.json();

    // Validate required fields
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Name, email, and message are required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; border-radius: 10px;">
          <h2 style="color: #ff0000; margin-bottom: 20px;">New Message from SarX LABS Contact Form</h2>
          
          <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <p style="margin: 10px 0;"><strong style="color: #00bfff;">Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong style="color: #00bfff;">Email:</strong> ${email}</p>
            <p style="margin: 10px 0;"><strong style="color: #00bfff;">Company:</strong> ${company || 'Not provided'}</p>
          </div>
          
          <div style="background-color: white; padding: 20px; border-radius: 8px;">
            <h3 style="color: #333; margin-bottom: 10px;">Message:</h3>
            <p style="color: #555; line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <p style="margin-top: 20px; color: #888; font-size: 12px;">
            Sent from SarX LABS Portfolio Website
          </p>
        </div>
      `,
      text: `
New Message from SarX LABS Contact Form

Name: ${name}
Email: ${email}
Company: ${company || 'Not provided'}

Message:
${message}

Sent from SarX LABS Portfolio Website
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ success: true, message: 'Email sent successfully' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to send email', details: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
