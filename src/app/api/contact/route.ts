import { NextRequest, NextResponse } from "next/server";

const SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;

export async function POST(req: NextRequest) {
  if (!SCRIPT_URL) {
    return NextResponse.json({ error: "Server misconfiguration" }, { status: 500 });
  }
  try {
    const data = await req.json();

    const response = await fetch(SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      return NextResponse.json({ error: "Script error" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to submit" }, { status: 500 });
  }
}
