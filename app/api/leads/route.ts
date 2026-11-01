
import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function GET() {
  if (!supabaseAdmin) {
    return NextResponse.json(
      { error: "Database is not configured." },
      { status: 503 }
    );
  }

  const { data, error } = await supabaseAdmin
    .from("professor_leads")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ leads: data });
}

export async function POST(request: Request) {
  if (!supabaseAdmin) {
    return NextResponse.json(
      { error: "Database is not configured." },
      { status: 503 }
    );
  }

  try {
    const body = await request.json();

    const {
      professor_name,
      university,
      email,
      research_interests,
      research_url,
      notes,
    } = body;

    if (!professor_name || !email) {
      return NextResponse.json(
        { error: "Professor name and email are required." },
        { status: 400 }
      );
    }

    const { data, error } = await supabaseAdmin
      .from("professor_leads")
      .insert({
        professor_name,
        university,
        email,
        research_interests,
        research_url,
        notes,
        status: "new",
      })
      .select()
      .single();

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ lead: data }, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 }
    );
  }
}
