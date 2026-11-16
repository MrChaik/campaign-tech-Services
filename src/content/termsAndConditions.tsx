import type { ReactNode } from "react";
import type { LegalSection } from "../components/legal/LegalDocument";
import {
  CONTACT_EMAIL,
  CONTACT_MOBILE,
  formatIndiaMobile,
  indiaTelHref,
} from "../lib/siteContact";

export const termsLastUpdated = "16 November 2026";

export const termsIntro: ReactNode | undefined = undefined;

export const termsFooter: ReactNode = <p>© My Leader. All Rights Reserved.</p>;

const contactPhone = formatIndiaMobile(CONTACT_MOBILE);

export const termsSections: LegalSection[] = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    body: (
      <>
        <p>
          Welcome to My Leader (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;). By accessing or using our website,
          you agree to these Terms &amp; Conditions and our{" "}
          <a href="/privacy-policy">Privacy Policy</a>.
        </p>
        <p>If you do not agree with these terms, please discontinue using our website.</p>
        <p>These terms apply to all visitors, prospective clients and individuals interacting with our website.</p>
      </>
    ),
  },
  {
    id: "about-services",
    title: "2. About Our Services",
    body: (
      <>
        <p>
          My Leader provides campaign technology solutions, including Bulk SMS, Voice and IVR, WhatsApp
          communication, websites and applications, automation, analytics, AI-powered communication and campaign
          management infrastructure.
        </p>
        <p>
          The information and service descriptions on this website are provided for general informational and
          business purposes. They do not constitute a binding offer, guarantee of service availability or professional
          advice.
        </p>
        <p>
          The actual scope, pricing, deliverables, timelines, responsibilities and service conditions will be
          determined through separate written proposals, service agreements or contracts signed between My Leader and
          the respective client.
        </p>
        <p>
          In case of any conflict, the signed service agreement will take precedence over these website terms for the
          services covered by that agreement.
        </p>
      </>
    ),
  },
  {
    id: "acceptable-use",
    title: "3. Acceptable Use and User Responsibilities",
    body: (
      <>
        <p>You agree to use this website and our communication channels only for lawful purposes.</p>
        <p>You must not:</p>
        <ul>
          <li>Use our website or services for fraudulent, misleading, unlawful or unauthorized activities.</li>
          <li>Transmit harmful software, malicious code or attempt to compromise our systems.</li>
          <li>Attempt unauthorized access, reverse engineering, scraping or disruption of our website.</li>
          <li>
            Infringe upon the intellectual property, privacy or other legal rights of any individual or organization.
          </li>
          <li>Use our inquiry or communication channels for spam, harassment or abusive activities.</li>
        </ul>
        <p>
          We reserve the right to restrict access to our website or refuse inquiries where we reasonably believe these
          terms have been violated.
        </p>
      </>
    ),
  },
  {
    id: "client-responsibilities",
    title: "4. Client Responsibilities and Regulatory Compliance",
    body: (
      <>
        <p>
          Clients engaging our campaign technology services are responsible for ensuring that their use of our services
          complies with all applicable laws, regulations and third-party platform policies.
        </p>
        <p>This includes, where applicable:</p>
        <ul>
          <li>Obtaining necessary permissions, consent and lawful authority for collecting and using personal information.</li>
          <li>Complying with applicable data protection and privacy laws.</li>
          <li>
            Following TRAI regulations, telecom requirements and DLT registration requirements for commercial
            communications.
          </li>
          <li>
            Complying with WhatsApp Business Platform policies and other third-party communication platform
            requirements.
          </li>
          <li>Following applicable election laws, Election Commission of India guidelines and advertising requirements.</li>
          <li>
            Ensuring that campaign content, communication lists, instructions and materials provided to us are accurate
            and lawful.
          </li>
        </ul>
        <p>
          Clients remain responsible for the content, data, recipient lists, approvals and instructions they provide or
          authorize.
        </p>
        <p>
          My Leader reserves the right to refuse, suspend or discontinue activities that it reasonably believes may
          violate applicable laws or these terms.
        </p>
        <p>
          Detailed responsibilities relating to campaign data, service delivery and regulatory compliance will be governed
          by separate client agreements.
        </p>
      </>
    ),
  },
  {
    id: "intellectual-property",
    title: "5. Intellectual Property Rights",
    body: (
      <>
        <p>
          All content available on this website, including text, graphics, logos, designs, branding, images, software
          and other materials, belongs to My Leader or its respective licensors unless otherwise stated.
        </p>
        <p>
          You may access and view website content for personal or legitimate business reference. You may not reproduce,
          distribute, modify, commercially exploit or republish any website material without prior written permission.
        </p>
        <p>
          All trademarks, trade names, logos and branding displayed on this website remain the property of their
          respective owners.
        </p>
        <p>Unauthorized use of our intellectual property may result in appropriate legal action.</p>
      </>
    ),
  },
  {
    id: "third-party",
    title: "6. Third-Party Services and Links",
    body: (
      <>
        <p>
          Our website may contain links to third-party platforms and services, including WhatsApp and other external
          websites.
        </p>
        <p>
          We do not control or operate these third-party platforms and are not responsible for their availability,
          content, security, privacy practices or independent policies.
        </p>
        <p>
          Your interaction with such platforms is subject to their respective terms and conditions and privacy policies.
        </p>
        <p>
          Services we provide may also depend on third-party communication providers, infrastructure providers and
          technology platforms. Their availability and policies may affect service delivery.
        </p>
      </>
    ),
  },
  {
    id: "disclaimers",
    title: "7. Disclaimers and Service Availability",
    body: (
      <>
        <p>
          We make reasonable efforts to keep our website information accurate and accessible. However, we do not
          guarantee that the website will always be available, uninterrupted, error-free or free from technical issues.
        </p>
        <p>
          Service descriptions, marketing materials, demonstrations and AI-generated outputs are provided for
          informational purposes and should not be treated as guaranteed results or professional, legal or electoral
          advice.
        </p>
        <p>
          AI-generated content and automated outputs may contain inaccuracies or incomplete information and should be
          reviewed before use.
        </p>
        <p>
          Specific service performance, availability, warranties and service commitments, where applicable, will be
          governed by the relevant signed client agreement.
        </p>
      </>
    ),
  },
  {
    id: "liability",
    title: "8. Limitation of Liability and Indemnification",
    body: (
      <>
        <p>
          To the maximum extent permitted by applicable law, My Leader shall not be liable for indirect, incidental,
          special or consequential losses, including loss of profits, business opportunities, data or goodwill arising from
          the use of this website or inability to access it.
        </p>
        <p>
          We are not responsible for losses arising from unlawful or unauthorized use of our services by clients,
          inaccurate information or instructions supplied by clients, or the independent actions and failures of
          third-party platforms.
        </p>
        <p>
          You agree to indemnify and hold My Leader, its officers, employees and representatives harmless against
          third-party claims, damages and reasonable legal expenses arising directly from your unlawful use of the
          website, violation of these terms or infringement of another party&apos;s rights.
        </p>
        <p>
          Liability relating to paid services and client engagements will be addressed separately in the applicable signed
          service agreement.
        </p>
        <p>Nothing in these terms excludes liability that cannot legally be excluded under applicable law.</p>
      </>
    ),
  },
  {
    id: "governing-law",
    title: "9. Governing Law and Jurisdiction",
    body: (
      <>
        <p>These Terms &amp; Conditions shall be governed by and interpreted in accordance with the laws of India.</p>
        <p>
          Any disputes arising from the use of this website or these terms shall be subject to the exclusive
          jurisdiction of the competent courts at{" "}
          <span className="text-white/45">[INSERT CITY, STATE, INDIA]</span>, subject to applicable law.
        </p>
        <p>
          Disputes relating to specific client engagements may be governed by the dispute resolution provisions of the
          relevant signed agreement.
        </p>
      </>
    ),
  },
  {
    id: "changes-contact",
    title: "10. Changes and Contact Information",
    body: (
      <>
        <p>
          We reserve the right to modify, update or revise these Terms &amp; Conditions at any time to reflect changes
          in our business operations, services, technology or applicable legal requirements.
        </p>
        <p>
          Updated terms will be published on this page with a revised Last Updated date. Continued use of the website
          after updated terms are published constitutes acceptance of the revised terms, to the extent permitted by
          applicable law.
        </p>
        <p>For questions or concerns regarding these Terms &amp; Conditions, please contact us:</p>
        <ul className="legal-contact-list">
          <li>
            <strong>Brand:</strong> My Leader
          </li>
          <li>
            <strong>Associated Brand:</strong> CampaignTech
          </li>
          <li>
            <strong>Email:</strong>{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </li>
          <li>
            <strong>Phone:</strong>{" "}
            <a href={indiaTelHref(CONTACT_MOBILE)}>{contactPhone}</a>
          </li>
          <li>
            <strong>Legal Entity:</strong>{" "}
            <span className="text-white/45">[INSERT REGISTERED LEGAL ENTITY NAME]</span>
          </li>
          <li>
            <strong>Registered Address:</strong>{" "}
            <span className="text-white/45">[INSERT COMPLETE REGISTERED ADDRESS]</span>
          </li>
        </ul>
      </>
    ),
  },
];