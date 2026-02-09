// app/api/knowledge-requests/route.ts
/**
 * Proxy API to fetch knowledge requests from agent-lead-gen
 * GET - Get pending requests for this client
 */

import { NextRequest, NextResponse } from 'next/server';

const AGENT_LEAD_GEN_URL = process.env.AGENT_LEAD_GEN_API_URL || 'http://localhost:3000';
const CLIENT_ID = process.env.CLIENT_ID || 'nader-omar';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status') || 'all';

    // Call agent-lead-gen API
    const response = await fetch(
      `${AGENT_LEAD_GEN_URL}/api/knowledge-requests?clientId=${CLIENT_ID}&status=${status}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        cache: 'no-store',
      }
    );

    if (!response.ok) {
      const error = await response.json();
      return NextResponse.json(
        { error: error.error || 'Failed to fetch requests' },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('[knowledge-requests/GET] Error:', error);

    // If agent-lead-gen is not running, return empty requests
    if (error instanceof Error && error.message.includes('fetch failed')) {
      return NextResponse.json({
        success: true,
        requests: [],
        pendingCount: 0,
        error: 'Backend service unavailable - using offline mode',
      });
    }

    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
