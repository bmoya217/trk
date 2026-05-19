import { history, raidTimes } from "./data";

const About = () => {
  return (
    <main className="page-container">
      <section className="page-intro">
        <p className="section-title">About</p>
        <h1 className="section-header">About TRK</h1>
        <p className="section-description">
          TRK is a World of Warcraft guild focused on high-end progression,
          consistency, and building a long-term community that enjoys pushing
          difficult content together.
        </p>
      </section>

      <section className="">
        <p className="section-title">Raid Schedule</p>
        <div className="section-description grid gap-6 md:grid-cols-2">
          {raidTimes.map((item) => (
            <div className="card" key={item.label}>
              <p className="card-link-label">{item.label}</p>
              <p className="card-stat">{item.value}</p>
            </div>
          ))}
        </div>

        <p className="section-description">
          During progression, TRK raids four days a week until Cutting Edge is
          achieved. Farm schedules are usually voted on afterward.
        </p>
      </section>

      <section className="cards-container">
        <div>
          <p className="section-title">History</p>
          <h2 className="section-header">The story of TRK</h2>
        </div>

        <div className="space-y-6">
          {history.map((entry) => (
            <article className="card" key={entry.title}>
              <p className="card-title">{entry.era}</p>
              <h3 className="card-header">{entry.title}</h3>
              <p className="card-description">{entry.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="card">
        <p className="section-title">Guild culture</p>

        <h2 className="card-header">
          Progression-focused without losing the community.
        </h2>

        <div className="card-description space-y-4">
          <p>
            TRK has always tried to balance serious progression with a stable,
            long-term environment. We value preparation, consistency, and
            improving over time without turning raid nights into a miserable
            experience.
          </p>

          <p>
            Many of our players have raided together across multiple expansions,
            and a large part of the guild&apos;s identity comes from maintaining
            those long-standing friendships while continuing to push difficult
            content.
          </p>

          <p>
            We aim to keep comms relaxed, avoid unnecessary ego, and create a
            roster where people genuinely enjoy logging in with each other —
            whether that&apos;s for progression, mythic plus, alt raids, or just
            hanging out in Discord.
          </p>
        </div>
      </section>
    </main>
  );
};

export default About;
