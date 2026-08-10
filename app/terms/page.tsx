import type { Metadata } from "next";
import { PolicyPage } from "../site-chrome";

export const metadata: Metadata = {
  title: "Terms of use",
  description: "Terms governing use of the Operation Daycare app and family service.",
};

export default function TermsOfUse() {
  return (
    <PolicyPage
      eyebrow="Using the service"
      title="Terms of use"
      introduction="These terms govern use of the Operation Daycare app and family service provided by Duba Tech Studio. By using the service, you agree to these terms and Apple’s applicable App Store terms."
    >
      <section className="critical-section">
        <h2>An additional reminder—not a guarantee</h2>
        <p>
          Operation Daycare is not an emergency service, certified child-presence system, vehicle
          safety system, or guarantee that a child reached daycare. A geofence indicates that a
          participating phone reached an area; it does not prove that the child was in the vehicle
          or was safely handed to a caregiver.
        </p>
        <p>
          Location settings, force-quitting, device power, operating-system behavior, network
          outages, hosting failures, Apple Push Notification service, and inaccurate configuration
          can delay or prevent detection and alerts. Keep the vehicle’s rear-seat reminder enabled,
          use a separate physical or personal reminder, and arrange for the daycare to call promptly
          when a child is unexpectedly absent. Contact emergency services directly in an emergency.
        </p>
      </section>

      <section>
        <h2>Who may use Operation Daycare</h2>
        <p>
          The service is for adults who can legally manage the family and daycare information they
          provide. It does not offer accounts to children. You are responsible for obtaining any
          permission required from other adults and for keeping invitation links and device access
          private.
        </p>
      </section>

      <section>
        <h2>Your responsibilities</h2>
        <ul>
          <li>Enter accurate daycare pins, schedules, deadlines, time zones, roles, and notification recipients.</li>
          <li>Check the app’s system status and correct permission, billing, configuration, and connection warnings.</li>
          <li>Test the complete setup in a harmless scenario before relying on it for a real trip.</li>
          <li>Use manual confirmation only after the child has been safely handed over.</li>
          <li>Maintain an independent reminder and follow up immediately on an overdue confirmation.</li>
          <li>Protect your phone, Apple Account, family invitations, and access credentials.</li>
        </ul>
      </section>

      <section>
        <h2>Family plan and billing</h2>
        <p>
          One Family Plan covers the adults and children joined to an Operation Daycare family. The
          monthly and annual plans renew automatically unless canceled before the end of the current
          period. A one-month introductory trial may be available to eligible Apple Accounts. The
          price and renewal period shown by the App Store before purchase control your transaction.
        </p>
        <p>
          Apple processes payments, renewals, cancellations, and refunds. Manage or cancel a plan in
          Apple subscription settings. Deleting an Operation Daycare family or account does not
          automatically cancel an App Store subscription. Monitoring pauses when family-plan
          coverage and any applicable billing grace period end; the app displays that state rather
          than presenting the system as ready.
        </p>
      </section>

      <section>
        <h2>Acceptable use</h2>
        <p>
          Do not misuse the service, access another family without authorization, share invitation
          or administration credentials publicly, interfere with service operation, automate abusive
          requests, reverse engineer protected service components except where law permits, or use
          the service to violate another person’s privacy or legal rights.
        </p>
      </section>

      <section>
        <h2>Availability and changes</h2>
        <p>
          We work to keep the service available but do not promise uninterrupted or error-free
          operation. We may maintain, modify, suspend, or discontinue features when needed for
          reliability, security, legal compliance, or product changes. When practical, we will give
          notice of changes that materially affect paid service.
        </p>
      </section>

      <section>
        <h2>Disclaimer and limitation</h2>
        <p>
          To the extent permitted by law, the service is provided “as is” and without implied
          warranties. Duba Tech Studio is not responsible for harm caused by relying on Operation
          Daycare as the only child-safety procedure, by inaccurate family configuration, or by
          failures outside reasonable control. Nothing in these terms limits rights or remedies that
          cannot legally be limited in your location.
        </p>
      </section>

      <section>
        <h2>Termination, changes, and contact</h2>
        <p>
          You may stop using the service and delete your account in the app. We may suspend abusive
          or unlawful use. We may update these terms and will update the effective date or provide
          additional notice when appropriate. Questions: <a href="mailto:dubatechstudio@gmail.com">dubatechstudio@gmail.com</a>.
        </p>
      </section>
    </PolicyPage>
  );
}
