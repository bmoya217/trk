import { CardLink } from "@/components/CardLink";
import { guildLinks, playerResources } from "./data";

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

        <div className="responsive-layout">
          {guildLinks.map((item) => (
            <CardLink
              header={item.name}
              description={item.description}
              href={item.href}
            />
          ))}
        </div>
      </section>

      <section className="cards-container">
        <div>
          <p className="section-title">Raid member tools</p>
          <h2 className="section-header">Useful external resources</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {playerResources.map((item) => (
            <CardLink
              header={item.name}
              description={item.description}
              href={item.href}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Resources;
