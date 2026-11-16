import type { ReactNode } from "react";
import type { LegalSection } from "../components/legal/LegalDocument";
import {
  CONTACT_EMAIL,
  CONTACT_MOBILE,
  formatIndiaMobile,
  indiaTelHref,
} from "../lib/siteContact";

export const privacyPolicyLastUpdated = "16 November 2026";

export const privacyPolicyIntro: ReactNode | undefined = undefined;

export const privacyPolicyFooter: ReactNode = (
  <p>© My Leader. All Rights Reserved.</p>
);

const contactPhone = formatIndiaMobile(CONTACT_MOBILE);

export const privacyPolicySections: LegalSection[] = [
  {
    id: "introduction",
    title: "1. Introduction",
    body: (
      <>
        <p>
          Welcome to <strong>My Leader</strong> (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;). We are
          committed to respecting your privacy and protecting the personal information you share with us.
        </p>
        <p>
          My Leader provides campaign technology infrastructure, communication solutions, artificial
          intelligence systems and automation platforms designed to support political organizations,
          political parties and campaign teams.
        </p>
        <p>
          This Privacy Policy explains how we collect, use, store, protect and share your personal
          information when you visit our website, contact us, submit an inquiry or otherwise interact with
          us through our website and communication channels.
        </p>
        <p>
          We believe that your personal information should be handled responsibly, transparently and only
          for legitimate business purposes. We aim to collect only the information necessary to respond to your
          inquiries and provide relevant information about our services.
        </p>
        <p>By accessing or using our website, you acknowledge that you have read and understood this Privacy Policy.</p>
      </>
    ),
  },
  {
    id: "scope",
    title: "2. Scope of This Privacy Policy",
    body: (
      <>
        <p>This Privacy Policy applies to individuals who:</p>
        <ul>
          <li>Visit our website.</li>
          <li>Browse our services and other publicly available content.</li>
          <li>Submit inquiries through our contact form.</li>
          <li>Contact us through email, WhatsApp or other communication channels linked to our website.</li>
          <li>Interact with us in connection with potential business relationships.</li>
        </ul>
        <p>
          <strong>Important distinction regarding our services:</strong>
        </p>
        <p>
          This Privacy Policy primarily covers personal information collected through our website and direct
          business interactions.
        </p>
        <p>
          Our services may involve processing communication records, campaign information, survey responses,
          voter outreach information and other data on behalf of our clients. Such information is processed in
          connection with specific client engagements and is generally governed by separate service agreements,
          contractual arrangements and applicable data processing terms.
        </p>
        <p>
          If you interact with a political campaign or organization that uses technology provided by us, that
          organization may be responsible for explaining how your information is collected and used. In such
          circumstances, you should refer to that organization&apos;s privacy policy or contact them directly.
        </p>
      </>
    ),
  },
  {
    id: "information-we-collect",
    title: "3. Information We Collect",
    body: (
      <>
        <p>
          We collect limited personal information necessary to understand business inquiries, communicate with
          prospective clients and maintain the security of our website.
        </p>
        <h3>3.1 Information You Provide Directly</h3>
        <p>When you use the contact form available on our website, you may be asked to provide:</p>
        <ul>
          <li>
            <strong>Full Name:</strong> To identify and address you appropriately.
          </li>
          <li>
            <strong>Email Address:</strong> To respond to your inquiry and communicate with you.
          </li>
          <li>
            <strong>Mobile Number:</strong> To contact you regarding your request.
          </li>
          <li>
            <strong>Service Interest:</strong> To understand which of our services you are interested in.
          </li>
        </ul>
        <p>Providing these details allows us to understand your requirements and respond appropriately.</p>
        <h3>3.2 Contact Form Submission</h3>
        <p>
          Our website contact form uses your device&apos;s default email application to prepare an email
          containing the information you provide.
        </p>
        <p>When you submit the form:</p>
        <ul>
          <li>Your email application opens with a pre-filled message.</li>
          <li>The message is addressed to our business contact email.</li>
          <li>
            The information is not directly submitted to or stored in a website backend through the contact
            form.
          </li>
          <li>We receive your information only when you choose to send the prepared email.</li>
        </ul>
        <p>
          Once we receive your email, we may process the information contained in it to respond to your inquiry,
          maintain business correspondence and follow up regarding potential services.
        </p>
        <h3>3.3 Information Collected Through WhatsApp</h3>
        <p>Our website provides WhatsApp links to make it easier for visitors to contact our team.</p>
        <p>When you choose to initiate a WhatsApp conversation, you may share information such as:</p>
        <ul>
          <li>Your name and phone number.</li>
          <li>Your business or organization details.</li>
          <li>Your service requirements.</li>
          <li>Any additional information you voluntarily include in your message.</li>
        </ul>
        <p>
          WhatsApp is operated by Meta Platforms. Communications through WhatsApp are subject to
          WhatsApp&apos;s own terms, privacy policy and data handling practices.
        </p>
        <p>
          We encourage you to review WhatsApp&apos;s Privacy Policy before sharing personal or confidential
          information through that platform.
        </p>
        <h3>3.4 Technical and Usage Information</h3>
        <p>
          When you visit our website, certain technical information may be collected automatically by our
          website hosting provider or related infrastructure, depending on their configurations.
        </p>
        <p>This information may include:</p>
        <ul>
          <li>Internet Protocol (IP) address.</li>
          <li>Browser type and version.</li>
          <li>Device and operating system information.</li>
          <li>Date and time of access.</li>
          <li>Pages requested and server access logs.</li>
          <li>Basic technical information required to deliver website content.</li>
        </ul>
        <p>
          We do not currently implement Google Analytics, Meta Pixel or similar third-party advertising and
          behavioural tracking tools in the website application.
        </p>
        <p>
          However, our hosting or infrastructure providers may independently collect technical logs for
          operational, security and performance purposes.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "4. How We Use Your Information",
    body: (
      <>
        <p>
          We use the information collected through our website for legitimate business and operational
          purposes, including:
        </p>
        <h3>4.1 Responding to Inquiries</h3>
        <p>
          To respond to questions, understand your requirements, provide service information and communicate
          with prospective clients.
        </p>
        <h3>4.2 Business Communication</h3>
        <p>
          To contact you regarding services you have expressed interest in, discuss potential collaborations,
          schedule meetings and provide relevant business information.
        </p>
        <h3>4.3 Service Improvement</h3>
        <p>
          To understand general inquiry patterns, improve our website content and make our services and
          communication processes more effective.
        </p>
        <h3>4.4 Website Security</h3>
        <p>
          To identify suspicious activities, prevent unauthorized access, investigate potential security
          incidents and maintain the reliability of our website.
        </p>
        <h3>4.5 Legal and Regulatory Compliance</h3>
        <p>
          To comply with applicable legal obligations, respond to lawful requests and protect our legal rights
          and legitimate business interests.
        </p>
        <p>
          We do not use the contact information submitted through our website to create voter profiles or
          political preference profiles.
        </p>
      </>
    ),
  },
  {
    id: "legal-basis",
    title: "5. Legal Basis and Consent",
    body: (
      <>
        <p>We process personal information in accordance with applicable data protection and privacy laws in India.</p>
        <p>Depending on the circumstances, our processing may be based on:</p>
        <ul>
          <li>
            <strong>Consent:</strong> Where you voluntarily provide information or authorize us to contact you
            for a particular purpose.
          </li>
          <li>
            <strong>Legitimate business purposes:</strong> Where processing is reasonably necessary to respond to
            inquiries, manage business communications or protect our website.
          </li>
          <li>
            <strong>Legal obligations:</strong> Where processing is required to comply with applicable laws,
            regulations or lawful directions.
          </li>
        </ul>
        <p>
          Where consent is required under applicable law, we will seek it before processing your personal
          information for the relevant purpose.
        </p>
        <p>
          You may withdraw your consent by contacting us using the details provided in this Privacy Policy.
          Withdrawal of consent does not affect processing lawfully carried out before such withdrawal.
        </p>
      </>
    ),
  },
  {
    id: "sharing",
    title: "6. Sharing and Disclosure of Information",
    body: (
      <>
        <p>We do not sell your personal information to third parties.</p>
        <p>
          We may share limited personal information with third parties when reasonably necessary for operating
          our website, communicating with you, providing our services or complying with legal requirements.
        </p>
        <p>These parties may include:</p>
        <h3>6.1 Email and Communication Providers</h3>
        <p>
          When you contact us through email, your information may be processed by your email service provider
          and our email service provider as part of delivering and managing correspondence.
        </p>
        <h3>6.2 WhatsApp and Meta</h3>
        <p>
          If you choose to contact us through WhatsApp, your communication will be processed through
          WhatsApp&apos;s infrastructure and governed by its applicable privacy practices.
        </p>
        <h3>6.3 Website Hosting and Infrastructure Providers</h3>
        <p>
          Our website relies on hosting, content delivery and related infrastructure providers to make the
          website accessible.
        </p>
        <p>
          These providers may process technical information, including server logs and IP addresses, as
          necessary to deliver and secure the website.
        </p>
        <h3>6.4 Professional Advisers</h3>
        <p>
          We may share relevant information with professional advisers, including legal, accounting, compliance
          and technical consultants, where necessary for legitimate business purposes.
        </p>
        <h3>6.5 Legal and Regulatory Authorities</h3>
        <p>
          We may disclose personal information where required by applicable law, a valid court order, regulatory
          requirement or lawful government request.
        </p>
        <p>
          We may also disclose information where reasonably necessary to protect our rights, property, safety or
          the rights and safety of others.
        </p>
        <p>We seek to limit information shared with third parties to what is reasonably necessary for the relevant purpose.</p>
      </>
    ),
  },
  {
    id: "international-transfers",
    title: "7. International Transfers of Information",
    body: (
      <>
        <p>
          Some third-party service providers, including email, hosting, communication and infrastructure
          providers, may operate servers or process information outside India.
        </p>
        <p>
          As a result, information you share with us may be transferred to or processed in jurisdictions outside
          your country of residence.
        </p>
        <p>
          Where such transfers occur, we will take reasonable steps to ensure that the handling of personal
          information is consistent with applicable data protection requirements.
        </p>
        <p>
          We will comply with any applicable restrictions or conditions governing cross-border transfers under
          Indian law.
        </p>
      </>
    ),
  },
  {
    id: "data-retention",
    title: "8. Data Retention",
    body: (
      <>
        <p>
          We retain personal information only for as long as reasonably necessary to fulfil the purposes for
          which it was collected.
        </p>
        <p>For example:</p>
        <ul>
          <li>
            Business inquiries and correspondence may be retained for the period necessary to respond to requests
            and manage potential or existing business relationships.
          </li>
          <li>
            Contact details may be retained for legitimate business follow-ups where permitted by applicable law.
          </li>
          <li>
            Technical logs may be retained by hosting and infrastructure providers according to their respective
            retention policies.
          </li>
          <li>
            Certain records may be retained for longer periods where required by law, for dispute resolution or to
            protect our legal rights.
          </li>
        </ul>
        <p>
          When personal information is no longer required, we will take reasonable steps to delete it or ensure
          that it is no longer identifiable, subject to applicable legal and contractual obligations.
        </p>
      </>
    ),
  },
  {
    id: "data-security",
    title: "9. Data Security",
    body: (
      <>
        <p>
          We take reasonable technical and organizational measures to protect personal information against
          unauthorized access, disclosure, alteration, misuse or destruction.
        </p>
        <p>
          Our security practices are intended to maintain the confidentiality and integrity of the information we
          handle.
        </p>
        <p>Depending on the nature of the information and the systems involved, these measures may include:</p>
        <ul>
          <li>Access restrictions and appropriate authorization controls.</li>
          <li>Secure communication practices.</li>
          <li>Monitoring and maintenance of website infrastructure.</li>
          <li>Reasonable safeguards against unauthorized access.</li>
          <li>Appropriate handling of business correspondence and inquiry information.</li>
        </ul>
        <p>However, no method of transmitting information over the internet or storing electronic information is completely secure.</p>
        <p>
          While we take reasonable precautions, we cannot guarantee absolute security against every possible threat
          or unauthorized activity.
        </p>
        <p>If you believe that your information has been compromised in connection with our website, please contact us promptly.</p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "10. Cookies and Tracking Technologies",
    body: (
      <>
        <p>
          Cookies are small text files that websites may store on your device to support functionality, remember
          preferences and collect usage information.
        </p>
        <p>
          Our current website does not implement dedicated analytics cookies, advertising pixels or behavioural
          tracking technologies.
        </p>
        <p>
          However, certain technical cookies or similar technologies may be used by our website hosting provider or
          third-party infrastructure to support essential website functionality, security and performance.
        </p>
        <p>
          If we introduce analytics, advertising, personalization or other non-essential tracking technologies in
          the future, we will update this Privacy Policy and implement any consent mechanisms required by applicable
          law.
        </p>
        <p>
          You may also manage or disable cookies through your browser settings. Please note that disabling certain
          cookies may affect website functionality.
        </p>
      </>
    ),
  },
  {
    id: "your-rights",
    title: "11. Your Privacy Rights",
    body: (
      <>
        <p>
          Subject to applicable laws and their conditions, you may have rights concerning your personal
          information, including:
        </p>
        <h3>11.1 Right to Access</h3>
        <p>You may request information about the personal data we process about you and how it is being used.</p>
        <h3>11.2 Right to Correction</h3>
        <p>
          You may request correction or updating of personal information that is inaccurate, incomplete or outdated.
        </p>
        <h3>11.3 Right to Erasure</h3>
        <p>
          You may request deletion of your personal information where we are no longer required or permitted to retain
          it.
        </p>
        <h3>11.4 Right to Withdraw Consent</h3>
        <p>Where processing is based on consent, you may withdraw that consent at any time.</p>
        <h3>11.5 Right to Raise a Grievance</h3>
        <p>
          You may contact us if you have concerns about how your personal information is collected, used, stored or
          disclosed.
        </p>
        <h3>11.6 Right to Nominate</h3>
        <p>
          Where provided under applicable law, you may nominate another individual to exercise your rights in the event
          of your death or incapacity.
        </p>
        <p>To exercise any applicable privacy rights, please contact us using the contact information provided below.</p>
        <p>
          We may request reasonable information to verify your identity before processing a privacy-related request.
        </p>
        <p>We will review and respond to requests within the timelines prescribed by applicable law.</p>
        <p>Please note that certain requests may be subject to legal, regulatory or contractual limitations.</p>
      </>
    ),
  },
  {
    id: "children",
    title: "12. Children's Privacy",
    body: (
      <>
        <p>
          Our website and services described on this website are intended primarily for businesses, organizations,
          political parties and campaign professionals.
        </p>
        <p>Our website is not specifically designed or directed towards children.</p>
        <p>
          We do not knowingly collect personal information from children through our website for independent business
          or marketing purposes.
        </p>
        <p>
          If we become aware that personal information has been collected from a child in circumstances that violate
          applicable law, we will take reasonable steps to address the situation, including deletion where appropriate.
        </p>
      </>
    ),
  },
  {
    id: "third-party",
    title: "13. Third-Party Websites and Services",
    body: (
      <>
        <p>
          Our website may contain links to external websites and third-party platforms, including WhatsApp and other
          communication services.
        </p>
        <p>
          These external platforms operate independently and have their own privacy policies, terms and data handling
          practices.
        </p>
        <p>We do not control how third-party websites or services collect, use or protect your information.</p>
        <p>
          Visiting or interacting with any third-party platform is subject to that platform&apos;s applicable terms and
          privacy policies.
        </p>
        <p>We encourage you to review the relevant policies before sharing personal information with external services.</p>
      </>
    ),
  },
  {
    id: "client-processing",
    title: "14. Information Processed on Behalf of Clients",
    body: (
      <>
        <p>
          My Leader provides technology and communication solutions that may support large-scale political campaigns and
          organizational outreach.
        </p>
        <p>Depending on the services engaged by a client, our platforms and systems may process information such as:</p>
        <ul>
          <li>Contact and communication records.</li>
          <li>Survey and feedback responses.</li>
          <li>Campaign-related information.</li>
          <li>Data supplied by clients for outreach and communication activities.</li>
          <li>Information required for AI-powered communication and automation services.</li>
        </ul>
        <p>
          The information processed in these circumstances is distinct from the information collected through our public
          website.
        </p>
        <p>
          Where we process personal information on behalf of clients, the relevant client engagement agreements, statements
          of work and data processing arrangements will govern the respective responsibilities of the parties.
        </p>
        <p>
          Clients are responsible for ensuring that they have the necessary authority, permissions and lawful basis to
          provide personal information to us and to use our services for their intended purposes.
        </p>
        <p>
          Nothing in this Privacy Policy should be interpreted as making our website contact form a channel for collecting
          voter databases or other campaign datasets.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    title: "15. Changes to This Privacy Policy",
    body: (
      <>
        <p>
          We may update this Privacy Policy from time to time to reflect changes in our business operations, website
          functionality, technology, third-party service providers or applicable legal requirements.
        </p>
        <p>
          Whenever we make changes, we will update the &quot;Last Updated&quot; date displayed at the beginning of this
          document.
        </p>
        <p>
          If significant changes are made to how we collect or process personal information, we may provide additional
          notice where required by applicable law.
        </p>
        <p>We encourage you to review this page periodically to stay informed about our privacy practices.</p>
      </>
    ),
  },
  {
    id: "applicable-laws",
    title: "16. Applicable Laws",
    body: (
      <>
        <p>
          This Privacy Policy is intended to operate in accordance with applicable laws and regulations in India,
          including, where applicable:
        </p>
        <ul>
          <li>The Information Technology Act, 2000.</li>
          <li>The Digital Personal Data Protection Act, 2023.</li>
          <li>Applicable rules, regulations and directions issued under relevant legislation.</li>
        </ul>
        <p>
          The applicability and implementation of specific legal requirements will depend on the nature of the processing
          activities and the laws in force at the relevant time.
        </p>
        <p>Nothing in this Privacy Policy limits any rights available to individuals under applicable law.</p>
      </>
    ),
  },
  {
    id: "contact",
    title: "17. Contact Us",
    body: (
      <>
        <p>
          If you have questions, concerns, complaints or requests relating to this Privacy Policy or the handling of your
          personal information, you can contact us using the following details:
        </p>
        <ul className="legal-contact-list">
          <li>
            <strong>Website / Brand:</strong> My Leader
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
            <strong>Registered Legal Entity:</strong>{" "}
            <span className="text-white/45">[INSERT REGISTERED LEGAL ENTITY NAME]</span>
          </li>
          <li>
            <strong>Registered Office Address:</strong>{" "}
            <span className="text-white/45">[INSERT COMPLETE REGISTERED ADDRESS]</span>
          </li>
          <li>
            <strong>Grievance Officer / Privacy Contact:</strong>{" "}
            <span className="text-white/45">[INSERT NAME AND DESIGNATION]</span>
          </li>
          <li>
            <strong>Grievance Email:</strong>{" "}
            <span className="text-white/45">[CONFIRM WHETHER abhijit@my-leader.in WILL BE USED]</span>
          </li>
        </ul>
        <p>
          We will review privacy-related inquiries and take appropriate action in accordance with applicable laws.
        </p>
      </>
    ),
  },
];