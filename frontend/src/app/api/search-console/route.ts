import { google } from 'googleapis';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/types/auth';

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.accessToken) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
  }

  const auth = new google.auth.OAuth2();
  auth.setCredentials({ access_token: session.accessToken });

  const searchconsole = google.searchconsole({ version: 'v1', auth });

  try {
    const res = await searchconsole.searchanalytics.query({
      siteUrl: 'https://www.naderomarrealtor.com', // Replace with your verified site
      requestBody: {
        startDate: '2025-07-01',
        endDate: '2025-08-22',
        dimensions: ['query'],
        rowLimit: 10,
      },
    });

    return new Response(JSON.stringify(res.data.rows || []), { status: 200 });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
    return new Response(JSON.stringify({ error: 'Unknown error occurred' }), { status: 500 });
  }
}
