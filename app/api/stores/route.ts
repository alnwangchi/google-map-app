import { google } from 'googleapis';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  if (req.method !== 'GET') NextResponse.json({ error: 'Methods not allowed' }, { status: 405 });
  // console.log(process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL);
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.replace(/\\n/g, '\n')
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets']
    });

    const sheets = google.sheets({
      auth,
      version: 'v4'
    });

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: '工作表1!A1:D',
      valueRenderOption: 'UNFORMATTED_VALUE'
    });
    const result = response.data.values;
    // console.log('🚀 ~ result:', result);

    return NextResponse.json(result);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
