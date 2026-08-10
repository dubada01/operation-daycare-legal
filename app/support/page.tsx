import type { Metadata } from "next";
import { Footer, Header } from "../site-chrome";

export const metadata: Metadata = {
  title: "Support",
  description: "Get help with Operation Daycare setup, accounts, subscriptions, privacy, and reliability.",
};

export default function Support() {
  return (
    <div className="site-shell">
      <Header />
      <main className="support-main">
        <section className="support-hero">
          <p className="eyebrow">Support</p>
          <h1>Tell us what went wrong.</h1>
          <p>
            We can help with family setup, invitations, account deletion, subscriptions, permissions,
            missed alerts, and privacy requests.
          </p>
          <a className="primary-link" href="mailto:dubatechstudio@gmail.com?subject=Operation%20Daycare%20support">
            Email dubatechstudio@gmail.com
          </a>
        </section>

        <section className="support-grid">
          <div className="support-card urgent">
            <p className="card-eyebrow">Immediate concern</p>
            <h2>Check on the child directly</h2>
            <p>
              If a drop-off is overdue or a child may be at risk, contact the driver, daycare, and
              emergency services as appropriate. Do not wait for an email response or another app alert.
            </p>
          </div>
          <div className="support-card">
            <p className="card-eyebrow">Faster diagnosis</p>
            <h2>What to include</h2>
            <ul>
              <li>App version and iPhone/iOS version.</li>
              <li>Whether the build says Development or Production.</li>
              <li>The time and time zone of the problem.</li>
              <li>The exact message shown under System status.</li>
            </ul>
            <p className="small-note">Never email a family invitation, access code, device token, or Apple credential.</p>
          </div>
          <div className="support-card">
            <p className="card-eyebrow">Billing</p>
            <h2>Subscriptions and refunds</h2>
            <p>
              Restore purchases from Family Plan in the app. Manage or cancel through Apple
              subscription settings. Apple handles App Store refund requests and payment details.
            </p>
            <a href="https://apps.apple.com/account/subscriptions">Manage Apple subscriptions</a>
          </div>
          <div className="support-card">
            <p className="card-eyebrow">Privacy</p>
            <h2>Data and account requests</h2>
            <p>
              Use Delete account in the app for permanent account removal. Email us if you cannot
              access the app or need help with access, correction, deletion, or another privacy choice.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
