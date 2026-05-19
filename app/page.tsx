const links = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Connect",
    href: "/connect",
  },
  {
    label: "Resources",
    href: "/resources",
  },
];

const raidInfo = [
  { label: "Guild", value: "TRK" },
  { label: "Focus", value: "Raiding / M+" },
  { label: "Game", value: "World of Warcraft" },
];

const guildInfo = [
  {
    label: "Progression without the ego",
    description:
      "We like improving, killing bosses, pushing keys, and showing up prepared — but we are not here to make raid night miserable.",
  },
  {
    label: "Mythic plus friendly",
    description:
      "Whether you are gearing alts, filling vault slots, or pushing higher keys, the goal is to make it easier to find people you actually want to play with.",
  },
  {
    label: "Alt-friendly, real-life friendly",
    description:
      "People have jobs, families, school, and other games. TRK is for players who want consistency without pretending WoW is their full identity.",
  },
  {
    label: "Discord-first community",
    description:
      "Most planning, memes, raid reminders, and key groups happen in Discord. The website is here to keep the important stuff easy to find.",
  },
];

export default function Home() {
  return (
    <main className="page-container">
      <section className="page-intro">
        <p className="section-title">Alliance guild on Proudmoore.</p>
        <h1 className="section-header">TRK</h1>
        <p className="section-subheader">
          A laid-back guild for players who still like clearing content.
        </p>
        <p className="section-description">
          TRK is a World of Warcraft guild built around steady progression,
          mythic plus, raid nights, and hanging out without turning the game
          into a second job.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {links.map((item) => {
            return (
              <a
                className="tag hover:text-foreground transition-colors"
                href={item.href}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {raidInfo.map((item) => (
          <div className="card" key={item.label}>
            <p className="card-link-label">{item.label}</p>
            <p className="card-stat">{item.value}</p>
          </div>
        ))}
      </section>

      <section className="cards-container">
        <div>
          <p className="section-title">About</p>
          <h2 className="section-header">What kind of guild is TRK?</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {guildInfo.map((item) => {
            return (
              <div className="card">
                <h3 className="card-header">{item.label}</h3>
                <p className="card-description">{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="card">
        <p className="section-title">Recruitment</p>
        <h2 className="card-header">Looking for people who fit the vibe.</h2>
        <p className="card-description">
          TRK is usually interested in reliable players who are prepared,
          communicative, and willing to learn. If you want raid nights, keys,
          and a group that actually talks to each other, check recruitment.
        </p>

        <a
          className="card-link inline-block"
          href="https://forms.gle/H7enJG38rfGfGSXu6"
          target="_blank"
        >
          Apply →
        </a>
      </section>
    </main>
  );
}
