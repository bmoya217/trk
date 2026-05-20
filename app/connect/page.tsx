import { CardLink } from "@/components/CardLink";
import { externalLinks, officers } from "./data";

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

      <section className="responsive-layout">
        {externalLinks.map((item) => (
          <CardLink
            title={item.title}
            header={item.header}
            description={item.description}
            href={item.href}
          />
        ))}
      </section>

      <section className="cards-container">
        <div>
          <p className="section-title">Officers</p>
          <h2 className="section-header">Who to contact</h2>
        </div>

        <div className="responsive-layout">
          {officers.map((item) => (
            <article className="card flex-1" key={item.character}>
              <p className="card-link-label">{item.role}</p>
              <h3 className="card-header">{item.character}</h3>
              <p className="card-description">{item.focus}</p>

              <div>
                <p className="card-link-label">Discord</p>
                <p className="card-link">{item.discord}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Connect;
