create extension if not exists pgcrypto;

create table if not exists public.professor_leads (
  id uuid primary key default gen_random_uuid(),
  professor_name text not null,
  university text,
  email text not null,
  research_interests text,
  research_url text,
  notes text,
  status text not null default 'new',
  personalized_subject text,
  personalized_body text,
  scheduled_at timestamptz,
  sent_at timestamptz,
  last_reply_at timestamptz,
  follow_up_due_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique(email)
);

create table if not exists public.email_events (
  id uuid primary key default gen_random_uuid(),
  lead_id uuid references public.professor_leads(id) on delete cascade,
  event_type text not null,
  provider_message_id text,
  details jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists public.agent_settings (
  id integer primary key default 1 check (id = 1),
  daily_send_limit integer not null default 5,
  sending_timezone text not null default 'Asia/Karachi',
  sending_start_time time,
  sending_end_time time,
  require_approval boolean not null default true,
  follow_up_after_days integer not null default 7,
  updated_at timestamptz not null default now()
);

insert into public.agent_settings (id) values (1) on conflict (id) do nothing;

alter table public.professor_leads enable row level security;
alter table public.email_events enable row level security;
alter table public.agent_settings enable row level security;
-- Add authenticated-user RLS policies before exposing database access to a browser.
-- Keep service-role operations server-side only.
