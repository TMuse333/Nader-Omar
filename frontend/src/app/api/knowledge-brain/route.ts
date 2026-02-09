// app/api/knowledge-brain/route.ts
/**
 * Proxy API to fetch knowledge brain data from agent-lead-gen
 */

import { NextResponse } from 'next/server';

const AGENT_LEAD_GEN_URL = process.env.AGENT_LEAD_GEN_API_URL || 'http://localhost:3000';
const CLIENT_ID = process.env.CLIENT_ID || 'nader-omar';

export async function GET() {
  try {
    // Call agent-lead-gen's knowledge-brain API
    // Note: The agent-lead-gen API requires authentication, so we need a different approach
    // For now, we'll use a client-specific endpoint
    const response = await fetch(
      `${AGENT_LEAD_GEN_URL}/api/knowledge-brain/client?clientId=${CLIENT_ID}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        cache: 'no-store',
      }
    );

    if (!response.ok) {
      // If the client endpoint doesn't exist, return empty data
      if (response.status === 404) {
        return NextResponse.json({
          success: true,
          businessName: 'Nader Omar',
          totalCount: 0,
          categories: {},
          customCategories: [],
          error: 'API endpoint not configured yet',
        });
      }
      const error = await response.json();
      return NextResponse.json(
        { error: error.error || 'Failed to fetch knowledge' },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('[knowledge-brain/GET] Error:', error);

    // If agent-lead-gen is not running, fall back to direct Qdrant access
    try {
      const { QdrantClient } = await import('@qdrant/js-client-rest');

      const client = new QdrantClient({
        url: process.env.QDRANT_URL!,
        apiKey: process.env.BIG_Q_KEY!,
      });

      const collectionName = process.env.CLIENT_DB!;

      const result = await client.scroll(collectionName, {
        limit: 500,
        with_payload: true,
        with_vector: false,
      });

      // Organize by category
      const categories: Record<string, { id: string; label: string; count: number; items: unknown[] }> = {};

      for (const point of result.points) {
        const payload = point.payload as Record<string, unknown>;
        const category = (payload?.category as string) || (payload?.type as string) || 'general';

        if (!categories[category]) {
          categories[category] = {
            id: category,
            label: category.charAt(0).toUpperCase() + category.slice(1).replace(/-/g, ' '),
            count: 0,
            items: [],
          };
        }

        categories[category].items.push({
          id: point.id,
          title: payload?.title || payload?.question || 'Untitled',
          text: payload?.text || '',
          category,
        });
        categories[category].count++;
      }

      const totalCount = result.points.length;

      return NextResponse.json({
        success: true,
        businessName: 'Nader Omar',
        totalCount,
        categories,
        customCategories: [],
        source: 'direct-qdrant',
      });
    } catch (qdrantError) {
      console.error('[knowledge-brain/GET] Qdrant fallback error:', qdrantError);
      return NextResponse.json({
        success: true,
        businessName: 'Nader Omar',
        totalCount: 0,
        categories: {},
        customCategories: [],
        error: 'Backend service unavailable',
      });
    }
  }
}
