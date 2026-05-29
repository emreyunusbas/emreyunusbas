import { useLang } from "@/i18n/LangContext";
import type { Lang } from "@/data/content";

const OPTIONS: Lang[] = ["tr", "en"];

/**
 * Compact TR / EN pill switch. The active language sits on a stroke fill;
 * clicking the inactive one switches (preference persisted in localStorage).
 */
export default function LangToggle() {
  const { lang, setLang } = useLang();

  return (
    <div className="inline-flex items-center rounded-full bg-stroke/40 p-0.5 text-xs">
      {OPTIONS.map((opt) => (
        <button
          key={opt}
          onClick={() => setLang(opt)}
          aria-pressed={lang === opt}
          className={`rounded-full px-2.5 py-1 uppercase tracking-wider transition-colors duration-200 ${
            lang === opt
              ? "bg-text-primary text-bg"
              : "text-muted hover:text-text-primary"
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}
