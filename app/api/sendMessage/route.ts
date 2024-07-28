import { NextResponse } from 'next/server';
import twilio from 'twilio';

export async function POST(req: Request) {
  const accountSid = process.env.TWILIO_ACCOUNT_SID as string;
  const token = process.env.TWILIO_AUTH_TOKEN as string;
  const client = twilio(accountSid, token);

  // Target phone number
  const phone = '+601116552368';
  // Message to send
  const message = "Your charging session is complete! Please remember to move your car to avoid any additional fees.";

  try {
    await client.messages.create({
      body: message,
      from: '+1 786 345 8921',
      to: phone,
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ success: false });
  }
}