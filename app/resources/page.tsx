const guildLinks = [
  {
    name: "Warcraft Logs",
    description: "Raid logs, rankings, damage/healing breakdowns, and review.",
    href: "https://www.warcraftlogs.com/guild/id/589972",
  },
  {
    name: "Raider.IO",
    description: "Guild mythic plus profile, characters, score, and progress.",
    href: "https://raider.io/guilds/us/proudmoore/TRK",
  },
  {
    name: "WoWProgress",
    description: "Guild progression tracking and realm ranking history.",
    href: "https://www.wowprogress.com/guild/us/proudmoore/TRK",
  },
];

const playerResources = [
  {
    name: "Wowhead",
    description: "Class guides, item lookups, talents, quests, and news.",
    href: "https://www.wowhead.com",
  },
  {
    name: "Bloodmallet",
    description: "Trinket, embellishment, and gear comparison charts.",
    href: "https://bloodmallet.com",
  },
  {
    name: "Questionably Epic",
    description: "Healing tools, gear comparisons, and raid resources.",
    href: "https://questionablyepic.com/live",
  },

  {
    name: "Raidbots",
    description: "Character sims, gear comparisons, and stat weights.",
    href: "https://www.raidbots.com",
  },
  {
    name: "WoW Utils",
    description: "Raid planning, roster assignemnts, simulation submitions",
    href: "https://wowutils.com/viserio-cooldowns/groups/66e3db435a95350dd76a2b42",
  },
];

const Resources = () => {
  return (
    <main className="page-container">
      <section className="page-intro">
        <p className="section-title">Resources</p>
        <h1 className="section-header">Guild links and raid tools</h1>
        <p className="section-description">
          Useful links for checking TRK progress, reviewing logs, improving your
          character, and preparing for raid.
        </p>
      </section>

      <section className="cards-container">
        <div>
          <p className="section-title">Guild profiles</p>
          <h2 className="section-header">TRK around the web</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {guildLinks.map((link) => (
            <article className="card" key={link.name}>
              <h3 className="card-header">{link.name}</h3>
              <p className="card-description">{link.description}</p>
              <a
                className="card-link inline-block"
                href={link.href}
                target="_blank"
              >
                Open →
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="cards-container">
        <div>
          <p className="section-title">Raid member tools</p>
          <h2 className="section-header">Useful external resources</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {playerResources.map((resource) => (
            <article className="card" key={resource.name}>
              <h3 className="card-header">{resource.name}</h3>
              <p className="card-description">{resource.description}</p>
              <a
                className="card-link inline-block"
                href={resource.href}
                target="_blank"
              >
                Visit →
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Resources;
