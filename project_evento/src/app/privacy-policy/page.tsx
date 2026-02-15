import React from "react";
import {
  PrivacyPolicyHeader,
  PrivacyPolicyParagraph,
  PrivacyPolicyList,
} from "@/components/privacyPolicyComponents";

const PrivacyPolicyPage = () => {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-zinc-300 text-3xl font-semibold tracking-tight">Privacy Policy</h1>
      <p className="mt-2 text-sm text-gray-500">Last updated: 2026-02-15</p>

      <section className="mt-10 max-w-none">
        <PrivacyPolicyHeader>1) Who we are</PrivacyPolicyHeader>
        <PrivacyPolicyParagraph>
          This Privacy Policy describes how <span className="font-semibold">Evento Inc.</span> (“we”, “us”)
          collects and uses personal data when you use{" "}
          <span className="font-semibold">Evento</span> (the “Service”).
        </PrivacyPolicyParagraph>
        <PrivacyPolicyParagraph>
          <span className="font-semibold">Data Controller (EU/GDPR):</span> Evento Inc., 100 Market Street,
          Suite 12, Austin, TX 78701, USA; email: privacy@evento.example.
        </PrivacyPolicyParagraph>

        <PrivacyPolicyHeader>2) Data we collect</PrivacyPolicyHeader>
        <PrivacyPolicyParagraph>Depending on how you use the Service, we may collect:</PrivacyPolicyParagraph>
        <PrivacyPolicyList>
          <li>
            <span className="font-semibold">Account/contact data:</span> name, email address, and username
            (if you create an account or contact us).
          </li>
          <li>
            <span className="font-semibold">Event-related data you provide:</span> event submissions,
            messages, and feedback you choose to send us.
          </li>
          <li>
            <span className="font-semibold">Usage and technical data:</span> IP address, device/browser
            information, pages viewed, approximate location (derived from IP), logs, and similar diagnostics.
          </li>
          <li>
            <span className="font-semibold">Cookies and identifiers:</span> cookies or similar technologies
            for essential functionality and analytics (if enabled).
          </li>
        </PrivacyPolicyList>

        <PrivacyPolicyHeader>3) How we use your data (purposes)</PrivacyPolicyHeader>
        <PrivacyPolicyParagraph>We use personal data to:</PrivacyPolicyParagraph>
        <PrivacyPolicyList>
          <li>Provide and operate the Service (e.g., show events and process requests).</li>
          <li>Improve reliability and performance (debugging and monitoring).</li>
          <li>Communicate with you (support responses and service updates).</li>
          <li>Comply with legal obligations (where applicable).</li>
        </PrivacyPolicyList>

        <PrivacyPolicyHeader>4) Legal bases (GDPR)</PrivacyPolicyHeader>
        <PrivacyPolicyParagraph>Where GDPR applies, we rely on:</PrivacyPolicyParagraph>
        <PrivacyPolicyList>
          <li>
            <span className="font-semibold">Contract:</span> to provide the Service you request.
          </li>
          <li>
            <span className="font-semibold">Legitimate interests:</span> security, fraud prevention, and
            service improvement.
          </li>
          <li>
            <span className="font-semibold">Consent:</span> for non-essential cookies/analytics where required.
          </li>
          <li>
            <span className="font-semibold">Legal obligation:</span> when we must comply with law.
          </li>
        </PrivacyPolicyList>

        <PrivacyPolicyHeader>5) Cookies and analytics</PrivacyPolicyHeader>
        <PrivacyPolicyParagraph>
          We may use cookies and similar technologies. Some are essential, while others are used for analytics
          (e.g., understanding traffic and feature usage).
        </PrivacyPolicyParagraph>
        <PrivacyPolicyParagraph>
          If we use analytics tools such as Google Analytics, these tools may use cookies/identifiers to collect
          usage data and process it as described by the provider.
        </PrivacyPolicyParagraph>
        <PrivacyPolicyParagraph>
          <span className="font-semibold">Your choices:</span> you can manage cookies in your browser settings,
          and where required we will request consent before placing non-essential cookies.
        </PrivacyPolicyParagraph>

        <PrivacyPolicyHeader>6) Sharing and third parties</PrivacyPolicyHeader>
        <PrivacyPolicyParagraph>
          We may share data with service providers that help us run the Service (hosting, database, analytics,
          and email delivery), under appropriate contractual protections.
        </PrivacyPolicyParagraph>
        <PrivacyPolicyParagraph>We do not sell your personal data.</PrivacyPolicyParagraph>

        <PrivacyPolicyHeader>7) Data retention</PrivacyPolicyHeader>
        <PrivacyPolicyParagraph>
          We keep personal data only as long as necessary for the purposes described above, unless a longer
          retention period is required by law.
        </PrivacyPolicyParagraph>

        <PrivacyPolicyHeader>8) Security</PrivacyPolicyHeader>
        <PrivacyPolicyParagraph>
          We implement reasonable technical and organizational measures to protect personal data against
          unauthorized access, alteration, disclosure, or destruction.
        </PrivacyPolicyParagraph>

        <PrivacyPolicyHeader>9) International transfers</PrivacyPolicyHeader>
        <PrivacyPolicyParagraph>
          If we use providers outside the EEA, personal data may be transferred internationally and protected
          using appropriate safeguards.
        </PrivacyPolicyParagraph>

        <PrivacyPolicyHeader>10) Your rights (GDPR)</PrivacyPolicyHeader>
        <PrivacyPolicyParagraph>
          If GDPR applies, you may have rights including access, rectification, deletion, restriction,
          objection, and data portability.
        </PrivacyPolicyParagraph>
        <PrivacyPolicyParagraph>
          To exercise your rights, contact us at{" "}
          <span className="font-semibold">privacy@evento.example</span>.
        </PrivacyPolicyParagraph>

        <PrivacyPolicyHeader>11) Children’s privacy</PrivacyPolicyHeader>
        <PrivacyPolicyParagraph>
          The Service is not intended for children under 13. We do not knowingly collect personal data from children.
        </PrivacyPolicyParagraph>

        <PrivacyPolicyHeader>12) Changes to this policy</PrivacyPolicyHeader>
        <PrivacyPolicyParagraph>
          We may update this Privacy Policy from time to time. We will update the “Last updated” date and,
          where appropriate, provide additional notice.
        </PrivacyPolicyParagraph>

        <PrivacyPolicyHeader>13) Contact</PrivacyPolicyHeader>
        <PrivacyPolicyParagraph>
          For privacy questions or requests, contact:{" "}
          <span className="font-semibold">privacy@evento.example</span>, Evento Inc., 100 Market Street,
          Suite 12, Austin, TX 78701, USA.
        </PrivacyPolicyParagraph>
        <PrivacyPolicyParagraph>
          If you are in Romania, you may contact the national supervisory authority for data protection (ANSPDCP)
          at: B-dul G-ral Gheorghe Magheru 28-30, Sector 1, 010336, București, Romania; email: anspdcp@dataprotection.ro;
          phone: +40 318 059 211.
        </PrivacyPolicyParagraph>
      </section>
    </main>
  );
};

export default PrivacyPolicyPage;
