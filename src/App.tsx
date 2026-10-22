import { useCallback, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import {
  AtSign,
  BadgeCheck,
  CalendarRange,
  ChevronDown,
  CirclePlay,
  ExternalLink,
  Gamepad2,
  Globe,
  Menu,
  MoveRight,
  Newspaper,
  Radar,
  ShieldCheck,
  Star,
  Trophy,
  Tv,
  Users,
  X,
} from "lucide-react";
import {
  institutionalHighlights,
  loudGames,
  organizationMilestones,
  quickFacts,
  resultYears,
  securityChecklist,
  siteMeta,
  socialLinks,
  sources,
} from "./data/loudData";
import PlayersHub from "./components/PlayersHub";
import CookieConsent, { type ConsentChoice } from "./components/CookieConsent";
import LegalPages from "./components/LegalPages";

type SocialIconMap = Record<string, LucideIcon>;

const socialIconMap: SocialIconMap = {
  "Site oficial": Globe,
  "Notícias oficiais": Newspaper,
  "X / Twitter": AtSign,
  Instagram: BadgeCheck,
  TikTok: Star,
  YouTube: CirclePlay,
  "YouTube LOUD Coringa": CirclePlay,
  "Twitch Coringa": Tv,
};

const navItems = [
  { label: "Visão geral", href: "#visao-geral" },
  { label: "Linha do tempo", href: "#linha-do-tempo" },
  { label: "Modalidades", href: "#modalidades" },
  { label: "Players Hub", href: "#players-hub" },
  { label: "Arquivo competitivo", href: "#arquivo-competitivo" },
  { label: "Redes & fontes", href: "#redes-fontes" },
];

function ExternalAnchor({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}

function SectionTitle({
  kicker,
  title,
  description,
}: {
  kicker: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl space-y-4">
      <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[#A3FF12]">
        {kicker}
      </span>
      <h2 className="text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      <p className="text-sm leading-7 text-zinc-300 sm:text-base">{description}</p>
    </div>
  );
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedGameId, setSelectedGameId] = useState("valorant");
  const [selectedYear, setSelectedYear] = useState("Todos");
  const [consentChoice, setConsentChoice] = useState<ConsentChoice | null>(null);
  const handleConsentChange = useCallback((choice: ConsentChoice | null) => {
    setConsentChoice(choice);
  }, []);

  useEffect(() => {
    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const selector = "main section, main section article, main section button.group, footer";
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("scroll-reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px -8% 0px" }
    );

    const observeTargets = (root: ParentNode) => {
      if (root instanceof Element && root.matches(selector) && !root.classList.contains("scroll-reveal")) {
        root.classList.add("scroll-reveal");
        observer.observe(root);
      }

      root.querySelectorAll(selector).forEach((element) => {
        if (!element.classList.contains("scroll-reveal")) {
          element.classList.add("scroll-reveal");
          observer.observe(element);
        }
      });
    };

    observeTargets(document);
    const mutationObserver = new MutationObserver((records) => {
      records.forEach((record) => {
        record.addedNodes.forEach((node) => {
          if (node instanceof Element) observeTargets(node);
        });
      });
    });
    mutationObserver.observe(document.querySelector("main")!, { childList: true, subtree: true });

    return () => {
      mutationObserver.disconnect();
      observer.disconnect();
    };
  }, []);

  const selectedGame = useMemo(
    () => loudGames.find((game) => game.id === selectedGameId) ?? loudGames[0],
    [selectedGameId]
  );

  const filteredResults = useMemo(() => {
    return selectedGame.results.filter((result) => {
      if (selectedYear === "Todos") return true;
      return result.date.endsWith(selectedYear);
    });
  }, [selectedGame, selectedYear]);
  return (
    <>
      {consentChoice === "analytics" && <SpeedInsights />}
      <div className="min-h-screen bg-zinc-950 text-white">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-[#A3FF12] focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-zinc-950"
      >
        Pular para o conteúdo
      </a>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#hero" className="group inline-flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#A3FF12]/35 bg-[#A3FF12]/10">
              <Trophy className="h-5 w-5 text-[#A3FF12]" aria-hidden="true" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#A3FF12]">Casa dos Campeões</p>
              <h1 className="text-lg font-black uppercase tracking-[0.18em] text-white">LOUD Archive</h1>
            </div>
          </a>

          <nav className="hidden items-center gap-6 lg:flex" aria-label="Navegação principal">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-zinc-300 transition hover:text-[#A3FF12]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="#arquivo-competitivo"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-bold text-white transition hover:border-[#A3FF12]/60 hover:text-[#A3FF12]"
            >
              Ver resultados
            </a>
            <a
              href="#redes-fontes"
              className="inline-flex items-center gap-2 rounded-full bg-[#A3FF12] px-5 py-2 text-sm font-black text-zinc-950 shadow-[0_0_0_1px_rgba(163,255,18,0.2)] transition hover:brightness-110"
            >
              Redes oficiais
              <MoveRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 text-white transition hover:border-[#A3FF12]/50 hover:text-[#A3FF12] lg:hidden"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-white/10 bg-zinc-950 lg:hidden">
            <nav id="mobile-navigation" className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6" aria-label="Menu móvel">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-semibold text-zinc-200 transition hover:bg-white/5 hover:text-[#A3FF12]"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#redes-fontes"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#A3FF12] px-5 py-3 text-sm font-black text-zinc-950"
              >
                Redes oficiais
                <MoveRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </nav>
          </div>
        )}
      </header>

      <main id="conteudo">
        <section id="hero" className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(163,255,18,0.14),_transparent_45%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_40%)]" aria-hidden="true" />
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-24">
            <div className="relative space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#A3FF12]/25 bg-[#A3FF12]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-[#A3FF12]">
                <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                Dossiê verificado · {siteMeta.updatedAt}
              </div>

              <div className="space-y-5">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-400">Maior organização de e-sports da América Latina</p>
                <h2 className="max-w-4xl text-4xl font-black uppercase leading-none tracking-tight text-white sm:text-5xl lg:text-7xl">
                  LOUD
                  <span className="mt-2 block text-[#A3FF12]">História, títulos, elencos e legado</span>
                </h2>
                <p className="max-w-3xl text-base leading-8 text-zinc-300 sm:text-lg">
                  {siteMeta.summary} O foco aqui é registrar a trajetória da org com base em fontes públicas,
                  sem inventar boatos e sem mascarar períodos ruins. Quando existe rumor fraco, o site diz
                  claramente que rumor é rumor.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="#arquivo-competitivo"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#A3FF12] px-6 py-3 text-sm font-black text-zinc-950 transition hover:brightness-110"
                >
                  Ver conquistas por modalidade
                  <MoveRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href="#visao-geral"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-bold text-white transition hover:border-[#A3FF12]/50 hover:text-[#A3FF12]"
                >
                  Entender a organização
                </a>
              </div>
            </div>

            <aside className="relative rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/30 backdrop-blur-sm">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.26em] text-zinc-400">Resumo rápido</p>
                  <h3 className="mt-2 text-2xl font-black uppercase text-white">O que faz a LOUD ser gigante</h3>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#A3FF12] text-zinc-950">
                  <Gamepad2 className="h-5 w-5" aria-hidden="true" />
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-3xl border border-white/10 bg-zinc-950/80 p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">Fundadores</p>
                  <p className="mt-2 text-sm leading-7 text-zinc-200">
                    Bruno “PlayHard” Bittencourt, Jean Ortega e Matthew Ho. Mais tarde, Vinícius Júnior e
                    Coringa passaram a integrar a sociedade da marca.
                  </p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-zinc-950/80 p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">Sedes e operação</p>
                  <p className="mt-2 text-sm leading-7 text-zinc-200">
                    Base principal em São Paulo, com operação internacional ligada ao VALORANT nas Américas.
                  </p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-zinc-950/80 p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">Marca</p>
                  <p className="mt-2 text-sm leading-7 text-zinc-200">
                    Conteúdo + competição + creators + lifestyle. Essa mistura é o núcleo do modelo LOUD desde
                    2019.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="border-b border-white/10 bg-black/30 py-10">
          <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:px-6 md:grid-cols-2 xl:grid-cols-4 xl:px-8">
            {quickFacts.map((fact) => (
              <article
                key={fact.label}
                className="rounded-[26px] border border-white/10 bg-white/[0.03] p-5 transition hover:border-[#A3FF12]/35 hover:bg-white/[0.05]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">{fact.label}</p>
                <p className="mt-3 text-3xl font-black uppercase tracking-tight text-white">{fact.value}</p>
                <p className="mt-3 text-sm leading-7 text-zinc-300">{fact.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="visao-geral" className="scroll-mt-28 border-b border-white/10 py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
            <div className="space-y-8">
              <SectionTitle
                kicker="Visão geral"
                title="O fenômeno LOUD em contexto"
                description="A LOUD não virou potência apenas porque venceu campeonatos; ela virou gigante porque combinou performance, creators, linguagem pop e distribuição massiva de conteúdo. Isso moldou a identidade da organização dentro e fora do competitivo."
              />

              <div className="grid gap-4">
                {institutionalHighlights.map((item) => (
                  <div key={item} className="rounded-[26px] border border-white/10 bg-white/[0.03] p-5">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#A3FF12] text-zinc-950">
                        <Star className="h-4 w-4" aria-hidden="true" />
                      </div>
                      <p className="text-sm leading-7 text-zinc-200">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6 rounded-[30px] border border-white/10 bg-white/[0.03] p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#A3FF12] text-zinc-950">
                  <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">Segurança do usuário</p>
                  <h3 className="text-2xl font-black uppercase text-white">Boas práticas aplicadas</h3>
                </div>
              </div>

              <div className="space-y-4">
                {securityChecklist.map((item) => (
                  <div key={item} className="rounded-[24px] border border-white/10 bg-zinc-950/70 p-4">
                    <div className="flex items-start gap-3">
                      <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-[#A3FF12]" aria-hidden="true" />
                      <p className="text-sm leading-7 text-zinc-200">{item}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-[24px] border border-[#A3FF12]/25 bg-[#A3FF12]/10 p-5">
                <p className="text-sm leading-7 text-zinc-100">
                  Este site não solicita dados pessoais por formulários, login ou compras. A hospedagem pode
                  processar registros técnicos de conexão; a medição opcional só funciona após consentimento.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="linha-do-tempo" className="scroll-mt-28 border-b border-white/10 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle
              kicker="Linha do tempo"
              title="Da org de conteúdo à casa dos campeões"
              description="A cronologia abaixo resume os momentos mais importantes da LOUD desde a fundação até a fase atual. O objetivo é mostrar evolução de marca, títulos, novas modalidades e movimentos institucionais que ajudaram a construir o que a LOUD representa hoje."
            />

            <div className="mt-12 grid gap-5 lg:grid-cols-2">
              {organizationMilestones.map((item) => (
                <article
                  key={item.year + item.title}
                  className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] p-6"
                >
                  <div className="absolute inset-y-0 left-0 w-1 bg-[#A3FF12]" aria-hidden="true" />
                  <div className="pl-4">
                    <p className="text-sm font-black uppercase tracking-[0.24em] text-[#A3FF12]">{item.year}</p>
                    <h3 className="mt-3 text-2xl font-black uppercase text-white">{item.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-zinc-300">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="modalidades" className="scroll-mt-28 border-b border-white/10 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle
              kicker="Modalidades"
              title="Onde a LOUD compete hoje"
              description="As modalidades abaixo reúnem elenco atual, staff, conquistas verificadas, últimas movimentações de mercado e contexto competitivo. O bloco em destaque abaixo funciona como um explorador interativo para acompanhar cada frente da org."
            />

            <div className="mt-12 grid gap-5 xl:grid-cols-3">
              {loudGames.map((game) => (
                <article
                  key={game.id}
                  className="flex h-full flex-col rounded-[30px] border border-white/10 bg-white/[0.03] p-6"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">Modalidade</p>
                      <h3 className="mt-2 text-2xl font-black uppercase text-white">{game.label}</h3>
                    </div>
                    <div className="rounded-full border border-[#A3FF12]/30 bg-[#A3FF12]/10 px-3 py-1 text-[11px] font-black uppercase tracking-[0.2em] text-[#A3FF12]">
                      Ativa
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-zinc-300">{game.description}</p>

                  <div className="mt-6 space-y-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">Elenco atual</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {game.currentRoster.map((player) => (
                          <span
                            key={player}
                            className="rounded-full border border-white/10 bg-zinc-950/80 px-3 py-1 text-xs font-bold uppercase text-zinc-100"
                          >
                            {player}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">Principais feitos</p>
                      <ul className="mt-3 space-y-2 text-sm leading-7 text-zinc-200">
                        {game.achievements.slice(0, 3).map((achievement) => (
                          <li key={achievement} className="flex gap-2">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#A3FF12]" aria-hidden="true" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 pt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedGameId(game.id);
                        const archive = document.getElementById("arquivo-competitivo");
                        archive?.scrollIntoView({ behavior: "smooth", block: "start" });
                      }}
                      className="inline-flex items-center gap-2 rounded-full bg-[#A3FF12] px-5 py-3 text-sm font-black text-zinc-950 transition hover:brightness-110"
                    >
                      Explorar modalidade
                      <MoveRight className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <PlayersHub />

        <section id="arquivo-competitivo" className="scroll-mt-28 border-b border-white/10 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle
              kicker="Arquivo competitivo"
              title="Explorador interativo da história da LOUD"
              description="Selecione uma modalidade para ver descrição, status, elenco, staff, radar de mercado e uma tabela de resultados públicos verificados. Para histórico ainda mais extenso, o card também aponta para a base externa da modalidade."
            />

            <div className="mt-12 grid gap-8 lg:grid-cols-[0.34fr_0.66fr]">
              <aside className="space-y-4 rounded-[30px] border border-white/10 bg-white/[0.03] p-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">Escolha a modalidade</p>
                </div>

                <div className="space-y-3">
                  {loudGames.map((game) => {
                    const isActive = selectedGame.id === game.id;
                    return (
                      <button
                        key={game.id}
                        type="button"
                        onClick={() => setSelectedGameId(game.id)}
                        aria-pressed={isActive}
                        className={`w-full rounded-[24px] border px-4 py-4 text-left transition ${
                          isActive
                            ? "border-[#A3FF12]/40 bg-[#A3FF12]/10 text-white"
                            : "border-white/10 bg-zinc-950/80 text-zinc-300 hover:border-[#A3FF12]/25 hover:text-white"
                        }`}
                      >
                        <div className="flex items-center justify-between gap-3">
                          <div>
                            <p className="text-lg font-black uppercase">{game.label}</p>
                            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-zinc-500">{game.currentRoster.length} nomes em destaque</p>
                          </div>
                          <ChevronDown
                            className={`h-4 w-4 transition ${isActive ? "rotate-180 text-[#A3FF12]" : "text-zinc-500"}`}
                            aria-hidden="true"
                          />
                        </div>
                      </button>
                    );
                  })}
                </div>
              </aside>

              <div className="space-y-6">
                <article className="rounded-[30px] border border-white/10 bg-white/[0.03] p-6">
                  <div className="flex flex-col gap-5 border-b border-white/10 pb-6 lg:flex-row lg:items-start lg:justify-between">
                    <div className="space-y-3">
                      <span className="inline-flex items-center rounded-full border border-[#A3FF12]/25 bg-[#A3FF12]/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.22em] text-[#A3FF12]">
                        {selectedGame.status}
                      </span>
                      <h3 className="text-3xl font-black uppercase text-white">{selectedGame.label}</h3>
                      <p className="max-w-3xl text-sm leading-7 text-zinc-300">{selectedGame.description}</p>
                    </div>

                    <ExternalAnchor
                      href={selectedGame.archiveUrl}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#A3FF12] px-5 py-3 text-sm font-black text-zinc-950 transition hover:brightness-110"
                    >
                      Abrir base completa
                      <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    </ExternalAnchor>
                  </div>

                  <div className="mt-6 grid gap-5 xl:grid-cols-2">
                    <div className="rounded-[26px] border border-white/10 bg-zinc-950/70 p-5">
                      <div className="flex items-center gap-3">
                        <Users className="h-5 w-5 text-[#A3FF12]" aria-hidden="true" />
                        <h4 className="text-lg font-black uppercase text-white">Elenco e staff</h4>
                      </div>
                      <div className="mt-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">Jogadores</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {selectedGame.currentRoster.map((player) => (
                            <span
                              key={player}
                              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-bold uppercase text-zinc-100"
                            >
                              {player}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-5">
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">Comissão / apoio</p>
                        <ul className="mt-3 space-y-2 text-sm leading-7 text-zinc-300">
                          {selectedGame.staff.map((person) => (
                            <li key={person} className="flex gap-2">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#A3FF12]" aria-hidden="true" />
                              <span>{person}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="rounded-[26px] border border-white/10 bg-zinc-950/70 p-5">
                      <div className="flex items-center gap-3">
                        <Trophy className="h-5 w-5 text-[#A3FF12]" aria-hidden="true" />
                        <h4 className="text-lg font-black uppercase text-white">Conquistas e radar</h4>
                      </div>
                      <ul className="mt-4 space-y-2 text-sm leading-7 text-zinc-200">
                        {selectedGame.achievements.map((item) => (
                          <li key={item} className="flex gap-2">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#A3FF12]" aria-hidden="true" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-5 rounded-[22px] border border-[#A3FF12]/25 bg-[#A3FF12]/10 p-4">
                        <div className="flex items-center gap-2">
                          <Radar className="h-4 w-4 text-[#A3FF12]" aria-hidden="true" />
                          <p className="text-xs font-black uppercase tracking-[0.22em] text-[#A3FF12]">Possíveis novos players / mercado</p>
                        </div>
                        <p className="mt-3 text-sm leading-7 text-zinc-100">{selectedGame.marketWatch}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 rounded-[26px] border border-white/10 bg-zinc-950/70 p-5">
                    <div className="flex items-center gap-3">
                      <CalendarRange className="h-5 w-5 text-[#A3FF12]" aria-hidden="true" />
                      <h4 className="text-lg font-black uppercase text-white">Últimas movimentações oficiais</h4>
                    </div>
                    <div className="mt-4 grid gap-3 lg:grid-cols-2">
                      {selectedGame.recentMoves.map((move) => (
                        <div key={move} className="rounded-[20px] border border-white/10 bg-white/[0.03] p-4 text-sm leading-7 text-zinc-200">
                          {move}
                        </div>
                      ))}
                    </div>
                  </div>
                </article>

                <article className="rounded-[30px] border border-white/10 bg-white/[0.03] p-6">
                  <div className="flex flex-col gap-5 border-b border-white/10 pb-5 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">Resultados públicos verificados</p>
                      <h4 className="mt-2 text-2xl font-black uppercase text-white">Arquivo resumido de {selectedGame.label}</h4>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {resultYears.map((year) => {
                        const isActive = selectedYear === year;
                        return (
                          <button
                            key={year}
                            type="button"
                            onClick={() => setSelectedYear(year)}
                            aria-pressed={selectedYear === year}
                            className={`rounded-full px-4 py-2 text-xs font-black uppercase tracking-[0.18em] transition ${
                              isActive
                                ? "bg-[#A3FF12] text-zinc-950"
                                : "border border-white/10 bg-zinc-950/80 text-zinc-300 hover:border-[#A3FF12]/30 hover:text-[#A3FF12]"
                            }`}
                          >
                            {year}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mt-6 overflow-hidden rounded-[24px] border border-white/10">
                    <div className="hidden grid-cols-[0.92fr_0.72fr_1.15fr_1.8fr] gap-4 border-b border-white/10 bg-zinc-950/80 px-5 py-4 text-[11px] font-black uppercase tracking-[0.22em] text-zinc-500 md:grid">
                      <span>Data</span>
                      <span>Colocação</span>
                      <span>Evento</span>
                      <span>Leitura rápida</span>
                    </div>

                    <div className="divide-y divide-white/10">
                      {filteredResults.length > 0 ? (
                        filteredResults.map((result) => (
                          <div key={result.date + result.event} className="grid gap-3 bg-white/[0.02] px-5 py-5 md:grid-cols-[0.92fr_0.72fr_1.15fr_1.8fr] md:items-start md:gap-4">
                            <div>
                              <p className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-500 md:hidden">Data</p>
                              <p className="text-sm font-bold text-white">{result.date}</p>
                            </div>
                            <div>
                              <p className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-500 md:hidden">Colocação</p>
                              <p className="inline-flex rounded-full border border-[#A3FF12]/25 bg-[#A3FF12]/10 px-3 py-1 text-xs font-black uppercase text-[#A3FF12]">
                                {result.place}
                              </p>
                            </div>
                            <div>
                              <p className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-500 md:hidden">Evento</p>
                              <p className="text-sm font-bold text-white">{result.event}</p>
                            </div>
                            <div>
                              <p className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-500 md:hidden">Leitura rápida</p>
                              <p className="text-sm leading-7 text-zinc-300">{result.note}</p>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="px-5 py-10 text-sm text-zinc-300">
                          Nenhum resultado dessa modalidade foi encontrado para o filtro de ano selecionado.
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section id="redes-fontes" className="scroll-mt-28 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle
              kicker="Redes & fontes"
              title="Canais oficiais, creators associados e base de pesquisa"
              description="As redes abaixo ajudam o usuário a chegar às páginas legítimas da marca. As fontes listadas são as bases públicas usadas para montar este arquivo. Quando o histórico completo de cada modalidade extrapola o espaço de uma landing page, os links diretos levam para o repositório consultado."
            />

            <div className="mt-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="space-y-5 rounded-[30px] border border-white/10 bg-white/[0.03] p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#A3FF12] text-zinc-950">
                    <Globe className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">Presença digital</p>
                    <h3 className="text-2xl font-black uppercase text-white">Redes e canais relevantes</h3>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {socialLinks.map((item) => {
                    const Icon = socialIconMap[item.label] ?? Globe;
                    return (
                      <ExternalAnchor
                        key={item.label + item.url}
                        href={item.url}
                        className="group rounded-[24px] border border-white/10 bg-zinc-950/70 p-5 transition hover:border-[#A3FF12]/35 hover:bg-zinc-950"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="space-y-3">
                            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#A3FF12]/10 text-[#A3FF12]">
                              <Icon className="h-5 w-5" aria-hidden="true" />
                            </div>
                            <div>
                              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">{item.kind}</p>
                              <h4 className="mt-1 text-lg font-black uppercase text-white">{item.label}</h4>
                              <p className="mt-2 text-sm text-zinc-300">{item.handle}</p>
                            </div>
                          </div>
                          <ExternalLink className="h-4 w-4 text-zinc-500 transition group-hover:text-[#A3FF12]" aria-hidden="true" />
                        </div>
                      </ExternalAnchor>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-5 rounded-[30px] border border-white/10 bg-white/[0.03] p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#A3FF12] text-zinc-950">
                    <Newspaper className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">Transparência editorial</p>
                    <h3 className="text-2xl font-black uppercase text-white">Fontes consultadas</h3>
                  </div>
                </div>

                <div className="space-y-4">
                  {sources.map((source) => (
                    <ExternalAnchor
                      key={source.name}
                      href={source.url}
                      className="block rounded-[24px] border border-white/10 bg-zinc-950/70 p-5 transition hover:border-[#A3FF12]/35 hover:bg-zinc-950"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h4 className="text-base font-black uppercase text-white">{source.name}</h4>
                          <p className="mt-3 text-sm leading-7 text-zinc-300">{source.note}</p>
                        </div>
                        <ExternalLink className="mt-1 h-4 w-4 shrink-0 text-zinc-500" aria-hidden="true" />
                      </div>
                    </ExternalAnchor>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <LegalPages />
      </main>

      <footer className="border-t border-white/10 bg-black/40">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto]">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">LOUD Archive</p>
              <p className="max-w-3xl text-sm leading-7 text-zinc-300">
                Conteúdo consolidado com base em fontes públicas verificáveis até {siteMeta.updatedAt}. Este site
                evita transformar especulação em fato e usa apenas links externos destacados e protegidos.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#hero"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-bold text-white transition hover:border-[#A3FF12]/40 hover:text-[#A3FF12]"
              >
                Voltar ao topo
              </a>
              <a
                href="#politica-de-privacidade"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-bold text-white transition hover:border-[#A3FF12]/40 hover:text-[#A3FF12]"
              >
                Privacidade
              </a>
              <a
                href="#termos-de-servico"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-bold text-white transition hover:border-[#A3FF12]/40 hover:text-[#A3FF12]"
              >
                Termos de serviço
              </a>
              <button
                type="button"
                onClick={() => window.dispatchEvent(new Event("open-cookie-preferences"))}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-bold text-white transition hover:border-[#A3FF12]/40 hover:text-[#A3FF12]"
              >
                Preferências de privacidade
              </button>
              <ExternalAnchor
                href="https://loud.gg/"
                className="inline-flex items-center gap-2 rounded-full bg-[#A3FF12] px-4 py-2 text-sm font-black text-zinc-950 transition hover:brightness-110"
              >
                Acessar LOUD oficial
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </ExternalAnchor>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">Desenvolvido por:</p>
              <div>
                <ExternalAnchor
                  href="https://x.com/nmixbay"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-bold text-zinc-300 transition hover:border-[#A3FF12]/40 hover:bg-white/[0.05] hover:text-[#A3FF12]"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                  nmixbay
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </ExternalAnchor>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <CookieConsent onConsentChange={handleConsentChange} />
    </div>
    </>
  );
}