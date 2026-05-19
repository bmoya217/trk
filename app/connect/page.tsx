const officers = [
  {
    character: "Ecksreaper",
    role: "Guild Master / Raid Lead",
    discord: "@ecksreaper",
    focus: "Guild direction, raid planning, recruitment",
  },
  {
    character: "RockProvider",
    role: "Raid Officer",
    discord: "@jakota",
    focus: "Raid strategy, logs, progression, sales",
  },
  {
    character: "OMV",
    role: "Raid Officer",
    discord: "@omv",
    focus: "General questions, mythic plus, guild help",
  },
];

const Connect = () => {
  return (
    <main className="page-container">
      <section className="page-intro">
        <p className="section-title">Connect</p>
        <h1 className="section-header">Join or contact TRK</h1>
        <p className="section-description">
          Looking to raid, join the Discord, apply, or ask a question? Start
          here.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <article className="card">
          <p className="section-title">Discord</p>
          <h2 className="card-header">Join the guild Discord</h2>
          <p className="card-description">
            Discord is where most raid updates, key groups, announcements, and
            guild conversations happen.
          </p>
          <a className="card-link inline-block" href="#" target="_blank">
            Join Discord →
          </a>
        </article>

        <article className="card">
          <p className="section-title">Recruitment</p>
          <h2 className="card-header">Apply to TRK</h2>
          <p className="card-description">
            Interested in raiding with us? Fill out an application and an
            officer will follow up.
          </p>
          <a
            className="card-link inline-block"
            href="https://forms.gle/H7enJG38rfGfGSXu6"
            target="_blank"
          >
            Apply now →
          </a>
        </article>
      </section>

      <section className="cards-container">
        <div>
          <p className="section-title">Officers</p>
          <h2 className="section-header">Who to contact</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {officers.map((officer) => (
            <article className="card" key={officer.character}>
              <p className="card-link-label">{officer.role}</p>
              <h3 className="card-header">{officer.character}</h3>
              <p className="card-description">{officer.focus}</p>

              <div>
                <p className="card-link-label">Discord</p>
                <p className="card-link">{officer.discord}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Connect;
