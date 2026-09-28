const PARTIES = [
  "Telugu Desam Party",
  "YSR Congress Party",
  "Jana Sena Party",
  "Bharat Rashtra Samithi",
  "All India Majlis-e-Ittehadul Muslimeen",
  "Telangana Jagruthi",
  "Communist Party of India",
  "Communist Party of India (Marxist)",
  "Bahujan Samaj Party",
  "Aam Aadmi Party",
  "Indian National Congress",
  "Bharatiya Janata Party",
  "Pattali Makkal Katchi",
  "Desiya Murpokku Dravida Kazhagam",
  "All India Forward Bloc",
  "Samajwadi Party",
  "Janata Dal (United)",
  "Rashtriya Janata Dal",
];

const ROW_A = PARTIES.slice(0, Math.ceil(PARTIES.length / 2));
const ROW_B = PARTIES.slice(Math.ceil(PARTIES.length / 2));

function TickerLane({ names }: { names: string[] }) {
  return (
    <div className="flex shrink-0 items-center gap-8 sm:gap-10 pr-8 sm:pr-10" aria-hidden="true">
      {names.map((name) => (
        <span
          key={name}
          className="font-display text-[12px] sm:text-[16.8px] md:text-[19.2px] font-semibold text-black whitespace-nowrap"
        >
          {name}
          <span className="ml-8 sm:ml-10 text-electric">•</span>
        </span>
      ))}
    </div>
  );
}

function Marquee({
  names,
  reverse = false,
}: {
  names: string[];
  reverse?: boolean;
}) {
  return (
    <div
      className={
        reverse
          ? "flex w-max animate-marquee-reverse hover:[animation-play-state:paused]"
          : "flex w-max animate-marquee hover:[animation-play-state:paused]"
      }
    >
      <TickerLane names={names} />
      <TickerLane names={names} />
    </div>
  );
}

export default function TrustedPartner() {
  return (
    <section
      className="relative overflow-hidden bg-light border-y border-navy/10 py-4 sm:py-5"
      aria-labelledby="trusted-partner-heading"
    >
      <div className="hidden sm:block">
        <Marquee names={PARTIES} />
      </div>
      <div className="flex flex-col gap-6 sm:hidden">
        <Marquee names={ROW_A} />
        <Marquee names={ROW_B} reverse />
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 sm:w-16 md:w-28 bg-gradient-to-r from-light to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 sm:w-16 md:w-28 bg-gradient-to-l from-light to-transparent" />

      <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center">
        <h2
          id="trusted-partner-heading"
          className="font-display rounded-full bg-gradient-to-r from-electric to-violet px-2 py-0.5 sm:px-2.5 sm:py-1 text-[7px] sm:text-[10px] font-semibold uppercase tracking-[0.16em] text-white shadow-[0_0_20px_12px_#edf1fa]"
        >
          Partners we work with
        </h2>
      </div>

      <ul className="sr-only">
        {PARTIES.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </section>
  );
}
