import { useEffect } from "react";
import LegalDocument from "../components/legal/LegalDocument";
import {
  termsFooter,
  termsIntro,
  termsLastUpdated,
  termsSections,
} from "../content/termsAndConditions";

export default function TermsAndConditionsPage() {
  useEffect(() => {
    document.title = "Terms and Conditions | CampaignTech";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-navy pt-40 pb-20 md:pb-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <LegalDocument
          title="Terms and Conditions"
          lastUpdated={termsLastUpdated}
          intro={termsIntro}
          sections={termsSections}
          footer={termsFooter}
        />
      </div>
    </main>
  );
}