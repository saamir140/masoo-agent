import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET() {
  if (!supabase) return NextResponse.json({ error: "Database is not configured. Add Supabase environment variables." }, { status: 503 });
  const { data, error } = await supabase.from("professor_leads").select("*").order("created_at", { ascending: false });
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ leads: data });
}

export async function POST(request: Request) {
  if (!supabase) return NextResponse.json({ error: "Database is not configured." }, { status: 503 });
  const body = await request.json();
  const { professor_name, university, email, research_interests, research_url, notes } = body;
  if (!professor_name || !email) return NextResponse.json({ error: "Professor name and email are required." }, { status: 400 });
  const { data, error } = await supabase.from("professor_leads").insert({
    professor_name, university, email, research_interests, research_url, notes, status: "new"
  }).select().single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ lead: data }, { status: 201 });
}
