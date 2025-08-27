import { NextResponse } from "next/server";
import { QdrantClient } from "@qdrant/js-client-rest";
import { v4 as uuidv4 } from "uuid";
import { getEmbedding } from "@/lib/getEmbeddings";

const client = new QdrantClient({
  url: process.env.QDRANT_URL!,
  apiKey: process.env.BIG_Q_KEY!,
});

const collectionName = process.env.CLIENT_DB!;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    let entries = body.entries;

    // Normalize to array
    if (!entries) {
      return NextResponse.json({ error: "No entries provided" }, { status: 400 });
    }
    if (typeof entries === "string") {
      entries = [entries];
    }
    if (!Array.isArray(entries)) {
      entries = [entries];
    }

    if (entries.length === 0) {
      return NextResponse.json({ error: "No valid entries provided" }, { status: 400 });
    }

    const points = [];

    for (const text of entries) {
      if (!text || text.trim() === "") continue;

      const vector = await getEmbedding(text);

      points.push({
        id: uuidv4(),
        vector,
        payload: {
          type: body.type || "news-segment",
          text,
          source: body.source || "search-results",
          section: text.slice(0, 40),
          title: body.title || "",
          tags: body.tags || [],
        },
      });
    }

    if (points.length === 0) {
      return NextResponse.json({ error: "All entries were empty or invalid" }, { status: 400 });
    }

    await client.upsert(collectionName, { points });

    return NextResponse.json({ success: true, uploaded: points.length });
  } catch (err: unknown) {
    console.error("Error uploading to Qdrant:", err);

    if (err instanceof Error) {
      return NextResponse.json({ error: err.message }, { status: 500 });
    }

    return NextResponse.json({ error: "Unknown error occurred" }, { status: 500 });
  }
}