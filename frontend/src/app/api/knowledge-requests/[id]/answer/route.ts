// app/api/knowledge-requests/[id]/answer/route.ts
/**
 * Proxy API to submit answers to agent-lead-gen
 * POST - Submit an answer
 */

import { NextRequest, NextResponse } from 'next/server';

const AGENT_LEAD_GEN_URL = process.env.AGENT_LEAD_GEN_API_URL || 'http://localhost:3000';

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();

    // Call agent-lead-gen API
    const response = await fetch(
      `${AGENT_LEAD_GEN_URL}/api/knowledge-requests/${id}/answer`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      }
    );

    if (!response.ok) {
      const error = await response.json();
      return NextResponse.json(
        { error: error.error || 'Failed to submit answer' },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('[knowledge-requests/answer/POST] Error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
