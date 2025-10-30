import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const { firstName, lastName, email, message } = await request.json();

        // Validate input
        if (!firstName || !lastName || !email || !message) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

        // Send email
        const data: any = await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: ['anshulbadoni359@gmail.com'],
            replyTo: email,
            subject: `Portfolio Contact: ${firstName} ${lastName}`,
            html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Form Submission</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif; background-color: #f9fafb; color: #001e22;">
          
          <!-- Main Container -->
          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f9fafb; padding: 40px 0;">
            <tr>
              <td align="center">
                
                <!-- Email Card -->
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="max-width: 600px; background-color: #ffffff; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden;">
                  
                  <!-- Header -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #001e22 0%, #003a42 100%); padding: 40px 40px 48px 40px; text-align: center;">
                      <h1 style="margin: 0; font-size: 28px; font-weight: 600; color: #ffffff; letter-spacing: -0.02em; line-height: 1.2;">
                        New Message Received
                      </h1>
                      <p style="margin: 12px 0 0 0; font-size: 15px; color: #a8dadc; font-weight: 400;">
                        Someone reached out through your portfolio
                      </p>
                    </td>
                  </tr>
                  
                  <!-- Content -->
                  <tr>
                    <td style="padding: 48px 40px;">
                      
                      <!-- Contact Info Card -->
                      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f2f7f7; border: 1px solid #c8e6f1; border-radius: 8px; margin-bottom: 32px;">
                        <tr>
                          <td style="padding: 24px;">
                            
                            <!-- Name -->
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 16px;">
                              <tr>
                                <td style="padding-bottom: 4px;">
                                  <p style="margin: 0; font-size: 12px; font-weight: 500; color: #66787a; text-transform: uppercase; letter-spacing: 0.05em;">
                                    From
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <p style="margin: 0; font-size: 18px; font-weight: 600; color: #001e22; line-height: 1.4;">
                                    ${firstName} ${lastName}
                                  </p>
                                </td>
                              </tr>
                            </table>
                            
                            <!-- Email -->
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                              <tr>
                                <td style="padding-bottom: 4px;">
                                  <p style="margin: 0; font-size: 12px; font-weight: 500; color: #66787a; text-transform: uppercase; letter-spacing: 0.05em;">
                                    Email
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <a href="mailto:${email}" style="font-size: 16px; font-weight: 500; color: #2dd4fb; text-decoration: none; line-height: 1.4;">
                                    ${email}
                                  </a>
                                </td>
                              </tr>
                            </table>
                            
                          </td>
                        </tr>
                      </table>
                      
                      <!-- Message Section -->
                      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                        <tr>
                          <td style="padding-bottom: 12px;">
                            <h2 style="margin: 0; font-size: 16px; font-weight: 600; color: #001e22; text-transform: uppercase; letter-spacing: 0.05em;">
                              Message
                            </h2>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 24px; background-color: #fafafa; border-left: 3px solid #2dd4fb; border-radius: 4px;">
                            <p style="margin: 0; font-size: 15px; color: #374151; line-height: 1.7; white-space: pre-wrap;">
${message}
                            </p>
                          </td>
                        </tr>
                      </table>
                      
                      <!-- Reply Button -->
                      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-top: 40px;">
                        <tr>
                          <td align="center">
                            <a href="mailto:${email}?subject=Re: Your message from portfolio" style="display: inline-block; background-color: #001e22; color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 6px; font-size: 14px; font-weight: 600; letter-spacing: 0.02em; transition: background-color 0.3s;">
                              Reply to ${firstName}
                            </a>
                          </td>
                        </tr>
                      </table>
                      
                    </td>
                  </tr>
                  
                  <!-- Footer -->
                  <tr>
                    <td style="padding: 32px 40px; background-color: #fafafa; border-top: 1px solid #e5e7eb;">
                      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                        <tr>
                          <td align="center">
                            <p style="margin: 0 0 8px 0; font-size: 13px; color: #66787a; line-height: 1.5;">
                              This message was sent from your portfolio contact form
                            </p>
                            <p style="margin: 0; font-size: 12px; color: #9ca3af;">
                              Sent on ${new Date().toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            })}
                            </p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  
                </table>
                
                <!-- Footer Note -->
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="max-width: 600px; margin-top: 24px;">
                  <tr>
                    <td align="center">
                      <p style="margin: 0; font-size: 12px; color: #9ca3af; line-height: 1.5;">
                        <strong>Anshul Badoni</strong> • Software Engineer<br>
                        Gurugram, Haryana, India
                      </p>
                    </td>
                  </tr>
                </table>
                
              </td>
            </tr>
          </table>
          
        </body>
        </html>
      `,
        });

        return NextResponse.json(
            { message: 'Email sent successfully', id: data.id },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: 'Failed to send email' },
            { status: 500 }
        );
    }
}