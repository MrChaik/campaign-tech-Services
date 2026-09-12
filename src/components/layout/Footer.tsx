const cols = [
    { title: "Company", links: ["About", "Careers", "Contact"] },
    { title: "Services", links: ["AI Calling", "Messaging", "Voice / IVR", "Automation"] },
    { title: "Resources", links: ["Case Studies", "Security", "Support"] },
  ];
  
  export default function Footer() {
    return (
      <footer className="bg-[#050910] border-t border-white/10 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-4 gap-10 pb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 rounded-md bg-gradient-to-br from-electric to-violet" />
                <span className="font-display text-white font-semibold">CampaignTech</span>
              </div>
              <p className="font-body text-sm text-slate-500 max-w-xs">
                Technology infrastructure for political organizations and campaigns.
              </p>
            </div>
            {cols.map((c) => (
              <div key={c.title}>
                <p className="font-display text-sm text-white mb-4">{c.title}</p>
                <ul className="space-y-2">
                  {c.links.map((l) => (
                    <li key={l}>
                      <a href="#" className="font-body text-sm text-slate-500 hover:text-slate-300 transition-colors">
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-body text-xs text-slate-600">
              © {new Date().getFullYear()} CampaignTech. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="font-body text-xs text-slate-600 hover:text-slate-400 transition-colors">
                Privacy
              </a>
              <a href="#" className="font-body text-xs text-slate-600 hover:text-slate-400 transition-colors">
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }