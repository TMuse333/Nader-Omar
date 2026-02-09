// app/api/agent-knowledge/route.ts
/**
 * Proxy API for agent knowledge operations
 * Forwards requests to agent-lead-gen's client API
 */

import { NextRequest, NextResponse } from 'next/server';

const AGENT_LEAD_GEN_URL = process.env.AGENT_LEAD_GEN_API_URL || 'http://localhost:3000';
const CLIENT_ID = process.env.CLIENT_ID || 'nader-omar';

export async function GET() {
  try {
    const response = await fetch(
      `${AGENT_LEAD_GEN_URL}/api/agent-knowledge/client?clientId=${CLIENT_ID}`,
      {
        headers: { 'Content-Type': 'application/json' },
        cache: 'no-store',
      }
    );

    if (!response.ok) {
      const error = await response.json();
      return NextResponse.json(
        { error: error.error || 'Failed to fetch knowledge entries' },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('[agent-knowledge/GET] Error:', error);
    return NextResponse.json(
      { error: 'Backend service unavailable', entries: [] },
      { status: 503 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const response = await fetch(
      `${AGENT_LEAD_GEN_URL}/api/agent-knowledge/client`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          clientId: CLIENT_ID,
          ...body,
        }),
      }
    );

    if (!response.ok) {
      const error = await response.json();
      return NextResponse.json(
        { error: error.error || 'Failed to add knowledge' },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('[agent-knowledge/POST] Error:', error);
    return NextResponse.json(
      { error: 'Backend service unavailable' },
      { status: 503 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const body = await request.json();

    const response = await fetch(
      `${AGENT_LEAD_GEN_URL}/api/agent-knowledge/client`,
      {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          clientId: CLIENT_ID,
          ...body,
        }),
      }
    );

    if (!response.ok) {
      const error = await response.json();
      return NextResponse.json(
        { error: error.error || 'Failed to delete knowledge' },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('[agent-knowledge/DELETE] Error:', error);
    return NextResponse.json(
      { error: 'Backend service unavailable' },
      { status: 503 }
    );
  }
}
