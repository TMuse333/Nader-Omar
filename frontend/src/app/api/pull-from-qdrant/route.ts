// src/app/api/qdrant/route.ts
import { NextResponse } from "next/server";
import { QdrantClient } from "@qdrant/js-client-rest";

export const runtime = "nodejs"; // Ensure Node.js runtime on Vercel

const client = new QdrantClient({
  url: process.env.QDRANT_URL!,
  apiKey: process.env.BIG_Q_KEY!,
});

const collectionName = process.env.CLIENT_DB!;

export async function GET() {
  try {
    const response = await client.scroll(collectionName, {
      limit: 20,
      with_payload: true,
    });

    const points = response.points.map((p) => ({
      id: p.id,
      payload: p.payload,
    }));

    return NextResponse.json({ points });
  } catch (err) {
    console.error("Error fetching from Qdrant:", err);
    return NextResponse.json(
      { error: "Failed to fetch data from Qdrant" },
      { status: 500 }
    );
  }
}
