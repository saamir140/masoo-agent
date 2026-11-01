# Masooma Professor Outreach Agent

A Next.js starter for a research-led professor outreach dashboard.

## Included now
- Responsive outreach dashboard
- Supabase schema for professor leads, email events and agent settings
- Server-side lead API scaffold
- Safe setup mode: no email is sent automatically

## Stack
- Next.js App Router + TypeScript
- Supabase (database)
- Gmail API (next integration step)
- AI provider API (next integration step)
- Vercel deployment

## Run locally
1. Install Node.js 20.9+.
2. Run `npm install`.
3. Copy `.env.example` to `.env.local` and fill Supabase values.
4. Run the SQL in `supabase/schema.sql` in your Supabase SQL editor.
5. Run `npm run dev`.

## Deploy
1. Push this folder to a private GitHub repository.
2. Import the repository into Vercel.
3. Add environment variables from `.env.example` in Vercel project settings.
4. Deploy.

## Next build steps
1. Authentication and private dashboard protection.
2. CSV/XLSX lead import and deduplication.
3. Upload Masooma's original email, CV and transcript securely.
4. AI research + email personalization with draft approval.
5. Gmail OAuth, sending and reply synchronization.
6. Scheduled queue, follow-up rules and reporting.

## Safety
- Never commit `.env.local` or API keys.
- Do not put Supabase service-role keys or Google client secrets in browser code.
- Keep approval required until sending, duplicate prevention and reply handling are tested.
- Stop follow-ups immediately when a reply is received.
