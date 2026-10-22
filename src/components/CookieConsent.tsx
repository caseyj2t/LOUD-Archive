import { useEffect, useState } from "react";

export type ConsentChoice = "essential" | "analytics";

const CONSENT_KEY = "loud-archive-consent-v1";

export default function CookieConsent({
  onConsentChange,
}: {
  onConsentChange: (choice: ConsentChoice | null) => void;
}) {
  const [choice, setChoice] = useState<ConsentChoice | null>(null);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    try {
      const storedChoice = window.localStorage.getItem(CONSENT_KEY);
      if (storedChoice === "essential" || storedChoice === "analytics") {
        setChoice(storedChoice);
        setAnalyticsEnabled(storedChoice === "analytics");
        onConsentChange(storedChoice);
      }
    } catch {
      setError("Não foi possível ler sua preferência neste navegador. Nenhuma medição opcional será ativada.");
    }

    const openSettings = () => setSettingsOpen(true);
    window.addEventListener("open-cookie-preferences", openSettings);
    return () => window.removeEventListener("open-cookie-preferences", openSettings);
  }, [onConsentChange]);

  const saveChoice = (nextChoice: ConsentChoice) => {
    try {
      window.localStorage.setItem(CONSENT_KEY, nextChoice);
      setChoice(nextChoice);
      setAnalyticsEnabled(nextChoice === "analytics");
      setSettingsOpen(false);
      setError("");
      onConsentChange(nextChoice);
    } catch {
      setError("Não foi possível salvar sua preferência. As medições opcionais permanecerão desativadas.");
      onConsentChange(null);
    }
  };

  if (choice && !settingsOpen && !error) {
    return (
      <button
        type="button"
        onClick={() => setSettingsOpen(true)}
        className="fixed bottom-4 left-4 z-[80] rounded-full border border-white/20 bg-zinc-900 px-4 py-3 text-sm font-bold text-white shadow-xl hover:border-[#A3FF12] hover:text-[#A3FF12]"
      >
        Preferências de privacidade
      </button>
    );
  }

  return (
    <section
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
      className="fixed inset-x-3 bottom-3 z-[80] mx-auto max-h-[85vh] max-w-2xl overflow-y-auto rounded-2xl border border-white/20 bg-zinc-950 p-5 text-white shadow-2xl sm:inset-x-6 sm:bottom-6 sm:p-6"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 id="cookie-consent-title" className="text-lg font-black">
            Privacidade e medição opcional
          </h2>
          <p id="cookie-consent-description" className="mt-2 text-sm leading-6 text-zinc-200">
            Este site usa armazenamento local apenas para lembrar sua escolha. Não há Google Analytics ou
            cookies publicitários configurados. A medição de desempenho da Vercel só é ativada com sua
            autorização.
          </p>
        </div>
      </div>

      <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm leading-6">
        <p><strong>Necessário:</strong> salvar sua preferência de consentimento; sempre ativo.</p>
        <label className="mt-3 flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            checked={analyticsEnabled}
            onChange={(event) => setAnalyticsEnabled(event.target.checked)}
            className="mt-1 h-4 w-4 accent-[#A3FF12] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A3FF12]"
          />
          <span>
            <strong>Medição de desempenho (opcional):</strong> permite Vercel Speed Insights para métricas
            agregadas de desempenho. Nenhuma medição é carregada antes da autorização.
          </span>
        </label>
      </div>

      {error && <p role="alert" className="mt-3 text-sm font-semibold text-amber-300">{error}</p>}

      <div className="mt-5 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => saveChoice(analyticsEnabled ? "analytics" : "essential")}
          className="rounded-full bg-[#A3FF12] px-5 py-3 text-sm font-black text-zinc-950 hover:brightness-110"
        >
          Salvar preferências
        </button>
        <button
          type="button"
          onClick={() => saveChoice("essential")}
          className="rounded-full border border-white/25 px-5 py-3 text-sm font-bold text-white hover:border-white/60"
        >
          Apenas necessários
        </button>
        <button
          type="button"
          onClick={() => saveChoice("analytics")}
          className="rounded-full border border-white/25 px-5 py-3 text-sm font-bold text-white hover:border-[#A3FF12] hover:text-[#A3FF12]"
        >
          Aceitar medição
        </button>
      </div>
      <a href="#politica-de-privacidade" className="mt-4 inline-block text-sm font-semibold text-[#A3FF12] underline">
        Saiba mais na Política de Privacidade
      </a>
    </section>
  );
}
