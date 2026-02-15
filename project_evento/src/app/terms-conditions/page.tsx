import React from "react";
import {
  PrivacyPolicyHeader as TermsHeader,
  PrivacyPolicyParagraph as TermsParagraph,
  PrivacyPolicyList as TermsList,
} from "@/components/privacyPolicyComponents";

const TermsConditionsPage = () => {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Terms &amp; Conditions</h1>
      <p className="mt-2 text-sm text-gray-500">Last updated: 2026-02-15</p>

      <section className="mt-10 max-w-none">
        <TermsHeader>1) Agreement to these Terms</TermsHeader>
        <TermsParagraph>
          These Terms &amp; Conditions (“Terms”) govern your access to and use of{" "}
          <span className="font-semibold">Evento</span> (the “Service”) operated by{" "}
          <span className="font-semibold">Evento Inc.</span> (“we”, “us”).
        </TermsParagraph>
        <TermsParagraph>
          By accessing or using the Service, you agree to be bound by these Terms. If you do not agree,
          do not use the Service.
        </TermsParagraph>

        <TermsHeader>2) Who we are</TermsHeader>
        <TermsParagraph>
          Company: <span className="font-semibold">Evento Inc.</span>, 100 Market Street, Suite 12, Austin,
          TX 78701, USA.
        </TermsParagraph>
        <TermsParagraph>
          Contact: <span className="font-semibold">support@evento.example</span>.
        </TermsParagraph>

        <TermsHeader>3) Eligibility</TermsHeader>
        <TermsParagraph>
          You must be at least 13 years old to use the Service. If you are under the age of majority in
          your jurisdiction, you may use the Service only with a parent or legal guardian’s consent.
        </TermsParagraph>

        <TermsHeader>4) Accounts (if applicable)</TermsHeader>
        <TermsParagraph>
          If the Service offers accounts, you are responsible for maintaining the confidentiality of your
          login credentials and for all activity under your account.
        </TermsParagraph>
        <TermsParagraph>
          You agree to provide accurate information and to keep it up to date.
        </TermsParagraph>

        <TermsHeader>5) Acceptable use</TermsHeader>
        <TermsParagraph>You agree not to:</TermsParagraph>
        <TermsList>
          <li>Use the Service in any way that violates applicable laws or regulations.</li>
          <li>Attempt to interfere with, disrupt, or bypass the security or integrity of the Service.</li>
          <li>Upload or transmit malware, spam, or content designed to harm the Service or other users.</li>
          <li>Scrape, crawl, or systematically extract data from the Service without our written permission.</li>
          <li>Impersonate others or misrepresent your affiliation with any person or entity.</li>
        </TermsList>

        <TermsHeader>6) User content</TermsHeader>
        <TermsParagraph>
          If you submit content to the Service (e.g., event details, comments, messages), you represent
          that you have the rights necessary to submit it and that it does not infringe third-party rights.
        </TermsParagraph>
        <TermsParagraph>
          You grant us a non-exclusive, worldwide, royalty-free license to use, host, store, reproduce,
          and display your content solely for operating, improving, and providing the Service.
        </TermsParagraph>

        <TermsHeader>7) Intellectual property</TermsHeader>
        <TermsParagraph>
          The Service and its content (excluding user content) are owned by us or our licensors and are
          protected by applicable intellectual property laws.
        </TermsParagraph>
        <TermsParagraph>
          You may not copy, modify, distribute, sell, or lease any part of the Service unless you have
          our written permission.
        </TermsParagraph>

        <TermsHeader>8) Third-party services and links</TermsHeader>
        <TermsParagraph>
          The Service may contain links to third-party websites or services. We do not control and are not
          responsible for third-party content, policies, or practices.
        </TermsParagraph>

        <TermsHeader>9) Disclaimers</TermsHeader>
        <TermsParagraph>
          The Service is provided on an “as is” and “as available” basis. To the maximum extent permitted
          by law, we disclaim all warranties, express or implied, including warranties of merchantability,
          fitness for a particular purpose, and non-infringement.
        </TermsParagraph>

        <TermsHeader>10) Limitation of liability</TermsHeader>
        <TermsParagraph>
          To the maximum extent permitted by law, we will not be liable for any indirect, incidental,
          special, consequential, or punitive damages, or any loss of profits, revenues, data, or goodwill,
          arising from or related to your use of the Service.
        </TermsParagraph>
        <TermsParagraph>
          Where liability cannot be excluded, our liability will be limited to the minimum amount
          permitted by law.
        </TermsParagraph>

        <TermsHeader>11) Indemnification</TermsHeader>
        <TermsParagraph>
          You agree to defend, indemnify, and hold harmless Evento Inc. from and against claims, damages,
          liabilities, and expenses (including reasonable legal fees) arising out of your use of the Service,
          your content, or your violation of these Terms.
        </TermsParagraph>

        <TermsHeader>12) Suspension and termination</TermsHeader>
        <TermsParagraph>
          We may suspend or terminate your access to the Service at any time if we reasonably believe you
          have violated these Terms, or if we must do so to comply with law or protect the Service and users.
        </TermsParagraph>
        <TermsParagraph>
          You may stop using the Service at any time. If you have an account, you may request deletion by
          contacting support.
        </TermsParagraph>

        <TermsHeader>13) Changes to the Service or Terms</TermsHeader>
        <TermsParagraph>
          We may modify the Service or these Terms from time to time. If changes are material, we will take
          reasonable steps to notify you (e.g., by posting an updated date on this page).
        </TermsParagraph>
        <TermsParagraph>
          Your continued use of the Service after changes become effective means you accept the updated Terms.
        </TermsParagraph>

        <TermsHeader>14) Governing law</TermsHeader>
        <TermsParagraph>
          These Terms are governed by the laws of the State of Texas, USA, without regard to conflict of law
          principles, unless mandatory consumer protection laws in your jurisdiction provide otherwise.
        </TermsParagraph>

        <TermsHeader>15) Contact</TermsHeader>
        <TermsParagraph> 
          Questions about these Terms? Contact{" "}
          <span className="font-semibold">support@evento.example</span>.
        </TermsParagraph>
      </section>
    </main>
  );
};

export default TermsConditionsPage;
