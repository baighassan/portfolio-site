import Nav from "@/components/Nav";
import ServicesTabs from "@/components/ServicesTabs";
import CopyEmail from "@/components/CopyEmail";
import { site, work, upcoming, steps, pricing, faq } from "@/lib/site";

const usd = (n: number) => `$${n.toLocaleString("en-US")}`;

export default function Home() {
  const lead = work.find((w) => !w.video && w.images.length >= 2) ?? work[0];

  return (
    <>
      <Nav />
      <main id="top">
        {/* Hero */}
        <section className="hero wrap">
          <p className="status">
            <span className="status-dot" aria-hidden="true" />
            Taking new projects
          </p>
          <div className="hero-grid">
            <h1>
              <span className="h-strong">Websites and web apps,</span>{" "}
              <span className="h-soft">designed and built by one developer.</span>
            </h1>
            <div className="hero-side">
              <p>
                I design in Figma and ship in Next.js, so the site you approve is the site that goes live.
                {" "}{site.basedIn}.
              </p>
              <div className="btn-row">
                <a className="btn btn-dark" href="#work">
                  See the work
                </a>
                <a className="btn btn-text" href="#contact">
                  Get in touch
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="strip wrap" aria-label="Recent work">
          {lead.images.map((img) => (
            <a key={img.src} href="#work" className={`tile tile-${img.ratio}`} style={{ background: lead.bg }}>
              <img src={img.src} alt={img.alt} loading="eager" />
              <span className="tile-tag">{lead.name}</span>
            </a>
          ))}
        </div>

        {/* Work */}
        <section id="work" className="section wrap" aria-labelledby="work-h">
          <h2 id="work-h" className="section-title">
            <span className="h-strong">Selected work.</span> <span className="h-soft">Concepts built end to end.</span>
          </h2>

          {work.map((w) => (
            <article key={w.slug} className="case">
              <header className="case-head">
                <h3>{w.name}</h3>
                <p className="case-meta">
                  <span className="pill">{w.label}</span>
                  {w.kind}
                </p>
              </header>
              {w.video ? (
                <figure className="case-video" style={{ background: w.bg }}>
                  <video
                    src={w.video.src}
                    poster={w.video.poster}
                    aria-label={w.video.alt}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  />
                </figure>
              ) : (
                <div className="case-grid" style={{ background: w.bg }}>
                  <figure className="case-main">
                    <img src={w.images[0].src} alt={w.images[0].alt} loading="lazy" />
                  </figure>
                  <figure className="case-side">
                    <img src={w.images[1].src} alt={w.images[1].alt} loading="lazy" />
                  </figure>
                </div>
              )}
              <div className="case-foot">
                <p>{w.summary}</p>
                <ul className="stack" aria-label="Built with">
                  {w.stack.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}

          <div className="upcoming">
            <h3>In progress</h3>
            <ul>
              {upcoming.map((u) => (
                <li key={u}>{u}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="section wrap" aria-labelledby="services-h">
          <h2 id="services-h" className="section-title center">
            <span className="h-strong">One developer.</span> <span className="h-soft">Design to launch.</span>
          </h2>
          <ServicesTabs />
        </section>

        {/* Process */}
        <section className="section wrap" aria-labelledby="process-h">
          <h2 id="process-h" className="section-title">
            <span className="h-strong">How a project runs.</span> <span className="h-soft">Four steps, no surprises.</span>
          </h2>
          <ol className="process">
            {steps.map((p, i) => (
              <li key={p.name}>
                <span className="process-num" aria-hidden="true">{i + 1}</span>
                <h3>{p.name}</h3>
                <p>{p.body}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Pricing */}
        <section id="pricing" className="section wrap" aria-labelledby="pricing-h">
          <h2 id="pricing-h" className="section-title center">
            <span className="h-strong">Clear starting prices.</span> <span className="h-soft">Fixed quote after a short brief.</span>
          </h2>
          <div className="prices">
            {pricing.map((p) => (
              <div key={p.name} className={p.featured ? "price featured" : "price"}>
                <div className="price-top">
                  <h3>{p.name}</h3>
                  {p.featured && <span className="pill pill-accent">Most clients</span>}
                </div>
                <p className="price-from">
                  <small>from</small> <strong>{usd(p.from)}</strong>
                </p>
                <p className="price-note">{p.note}</p>
                <ul>
                  {p.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
                <a
                  className={p.featured ? "btn btn-dark btn-block" : "btn btn-light btn-block"}
                  href="#contact"
                >
                  {p.cta}
                </a>
              </div>
            ))}
          </div>
          <p className="price-foot">Half at the start, half at launch. {site.overlap}.</p>
        </section>

        {/* FAQ */}
        <section id="faq" className="section wrap faq-wrap" aria-labelledby="faq-h">
          <h2 id="faq-h" className="section-title">
            <span className="h-strong">Questions.</span> <span className="h-soft">Short answers.</span>
          </h2>
          <div className="faq">
            {faq.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Closing */}
        <section id="contact" className="closing wrap" aria-labelledby="closing-h">
          <div className="closing-card">
            <h2 id="closing-h">
              <span className="h-strong">Have a project in mind?</span>{" "}
              <span className="h-soft">Send me the details.</span>
            </h2>
            <div className="btn-row">
              <CopyEmail email={site.email} />
              <a className="btn btn-light" href={site.contraUrl} target="_blank" rel="noopener">
                Message on Contra
              </a>
            </div>
            <p className="closing-mail">{site.email}</p>
          </div>
        </section>
      </main>

      <footer className="footer wrap">
        <span>
          {site.name}, {site.role.toLowerCase()}
        </span>
        <span>
          <a href={site.contraUrl} target="_blank" rel="noopener">Contra</a>
          {"  "}
          <a href="#top">Back to top</a>
        </span>
      </footer>
    </>
  );
}
