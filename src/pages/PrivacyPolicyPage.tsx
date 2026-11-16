import { useEffect } from "react";
import LegalDocument from "../components/legal/LegalDocument";
import {
  privacyPolicyFooter,
  privacyPolicyIntro,
  privacyPolicyLastUpdated,
  privacyPolicySections,
} from "../content/privacyPolicy";

export default function PrivacyPolicyPage() {
  useEffect(() => {
    document.title = "Privacy Policy | CampaignTech";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-navy pt-40 pb-20 md:pb-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <LegalDocument
          title="Privacy Policy"
          lastUpdated={privacyPolicyLastUpdated}
          intro={privacyPolicyIntro}
          sections={privacyPolicySections}
          footer={privacyPolicyFooter}
        />
      </div>
    </main>
  );
}