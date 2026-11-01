const stats = [
  ["Total professors", "0", "Leads in your database"],
  ["Emails sent", "0", "Confirmed sent messages"],
  ["Replies received", "0", "Responses from professors"],
  ["Follow-ups due", "0", "Waiting for your review"]
];

const stages = [
  ["New lead", "Add professor details and research notes"],
  ["Research ready", "AI checks the professor's work and fit"],
  ["Draft ready", "Personalized email prepared for approval"],
  ["Scheduled", "Approved email queued for its send time"],
  ["Sent", "Gmail confirms the message was sent"],
  ["Replied", "Reply classified and follow-up paused"]
];

export default function Home() {
  return <main className="shell">
    <header className="topbar">
      <div><div className="eyebrow">OUTREACH WORKSPACE</div><h1>Masooma's Professor Outreach</h1><p className="muted">Research-led scholarship email operations</p></div>
      <div className="status"><span className="dot"/> Setup mode</div>
    </header>
    <section className="notice"><strong>Safe launch mode</strong><span>Emails are not sent yet. Connect Gmail, configure the database and approve drafts before enabling sending.</span></section>
    <section className="stats">{stats.map(([label,value,desc]) => <article className="stat" key={label}><div className="muted">{label}</div><div className="number">{value}</div><div className="small">{desc}</div></article>)}</section>
    <section className="grid">
      <article className="panel wide">
        <div className="panelHead"><div><h2>Outreach pipeline</h2><p className="muted">Every professor moves through a tracked workflow.</p></div><span className="tag">0 active leads</span></div>
        <div className="pipeline">{stages.map(([name,desc],i)=><div className="stage" key={name}><div className="stageNo">{String(i+1).padStart(2,"0")}</div><div><strong>{name}</strong><p className="small">{desc}</p></div></div>)}</div>
      </article>
      <article className="panel">
        <h2>Daily sending plan</h2><p className="muted">Set a conservative daily cap. We will add editable scheduling controls after Gmail is connected.</p>
        <div className="setting"><span>Daily email limit</span><strong>5 emails</strong></div>
        <div className="setting"><span>Sending window</span><strong>To be configured</strong></div>
        <div className="setting"><span>Approval required</span><strong className="green">Yes</strong></div>
      </article>
      <article className="panel wide">
        <div className="panelHead"><div><h2>Recent activity</h2><p className="muted">Sending, replies, errors and follow-up events will appear here.</p></div></div>
        <div className="empty"><div className="emptyIcon">✉</div><strong>No activity yet</strong><p className="muted">Your activity log will populate after the first leads are imported.</p></div>
      </article>
    </section>
    <footer>Masooma Outreach Agent · Private workspace · v0.1 starter</footer>
  </main>;
}
