import Link from "next/link";
import { Footer, Header } from "./site-chrome";

const cards = [
  {
    href: "/privacy",
    eyebrow: "Your information",
    title: "Privacy policy",
    copy: "What Operation Daycare stores, why it is needed, how long it is kept, and the controls available to families.",
  },
  {
    href: "/terms",
    eyebrow: "Using the service",
    title: "Terms of use",
    copy: "Subscription terms, responsible use, service limitations, and the separate safety practices every family should keep.",
  },
  {
    href: "/support",
    eyebrow: "We can help",
    title: "Support",
    copy: "Contact Duba Tech Studio for account, billing, setup, privacy, or reliability questions.",
  },
];

export default function Home() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <section className="hero">
          <p className="eyebrow">Operation Daycare</p>
          <h1>A clear safety layer for the family drop-off plan.</h1>
          <p className="hero-copy">
            Operation Daycare helps adult caregivers share schedules, confirm daycare arrivals,
            and receive a warning when a scheduled drop-off is not confirmed. These pages explain
            the service, the information it uses, and how to reach us.
          </p>
          <div className="safety-callout">
            <span aria-hidden="true">!</span>
            <p>
              Operation Daycare is an additional reminder—not an emergency service, certified
              child-presence system, or guarantee. Always keep another reminder and your daycare’s
              unexpected-absence call procedure.
            </p>
          </div>
        </section>

        <section className="card-grid" aria-label="Policies and support">
          {cards.map((card) => (
            <Link className="policy-card" href={card.href} key={card.href}>
              <p className="card-eyebrow">{card.eyebrow}</p>
              <h2>{card.title}</h2>
              <p>{card.copy}</p>
              <span className="card-link">Read more <span aria-hidden="true">→</span></span>
            </Link>
          ))}
        </section>

        <section className="principles">
          <div>
            <p className="eyebrow">Built around families</p>
            <h2>Minimal location data. Visible system status. Manual fallback.</h2>
          </div>
          <ul>
            <li>The iPhone detects the daycare geofence; the service does not receive a continuous route.</li>
            <li>A green confirmation appears only after the family service acknowledges an arrival.</li>
            <li>Manual confirmation remains available when automatic location detection is unsuitable.</li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}
