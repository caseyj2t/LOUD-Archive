import { useMemo, useState } from "react";
import {
  Award,
  CalendarDays,
  Flag,
  Headphones,
  ShieldHalf,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import {
  initialsFor,
  playerCategories,
  playerModalities,
  players,
  type Player,
} from "../data/playerData";

const playerThemeClassMap: Record<string, string> = {
  "#A3FF12|#0a3a05": "player-theme-0",
  "#84cc16|#1a2e05": "player-theme-1",
  "#A3FF12|#1f2937": "player-theme-2",
  "#65a30d|#052e16": "player-theme-3",
  "#bef264|#1c1917": "player-theme-4",
  "#A3FF12|#000000": "player-theme-5",
};

function getPlayerThemeClass(player: Player) {
  return playerThemeClassMap[player.signaturePalette.join("|")] ?? "player-theme-0";
}

function PlayerAvatar({ player, size = "md" }: { player: Player; size?: "sm" | "md" | "lg" }) {
  const [accent] = player.signaturePalette;
  const themeClass = getPlayerThemeClass(player);
  const dimension = size === "lg" ? "h-32 w-32" : size === "sm" ? "h-12 w-12" : "h-20 w-20";
  const fontSize = size === "lg" ? "text-4xl" : size === "sm" ? "text-base" : "text-2xl";

  return (
    <div
      className={`relative ${dimension} shrink-0 overflow-hidden rounded-2xl border border-white/10 shadow-lg shadow-black/30 player-avatar ${themeClass}`}
      aria-hidden="true"
    >
      <div className="absolute inset-0 opacity-30 player-avatar-pattern" />
      <div className={`relative flex h-full w-full items-center justify-center ${fontSize} font-black text-white`}>
        <span className="player-avatar-text">{initialsFor(player.nickname)}</span>
      </div>
      <div className="absolute bottom-1 right-1 rounded-md px-1.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-zinc-950 player-avatar-caption">
        {player.flag}
      </div>
    </div>
  );
}

function PlayerCard({ player, onSelect }: { player: Player; onSelect: (player: Player) => void }) {
  const RoleIcon =
    player.roleCategory === "coach"
      ? ShieldHalf
      : player.roleCategory === "staff"
      ? Headphones
      : Sparkles;

  return (
    <button
      type="button"
      onClick={() => onSelect(player)}
      className="group relative flex h-full flex-col rounded-[26px] border border-white/10 bg-white/[0.03] p-5 text-left transition hover:border-[#A3FF12]/40 hover:bg-white/[0.06]"
    >
      <div className="flex items-start gap-4">
        <PlayerAvatar player={player} />
        <div className="min-w-0 flex-1">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-500">{player.modality}</p>
          <h3 className="mt-1 truncate text-xl font-black uppercase text-white">{player.nickname}</h3>
          <p className="mt-1 truncate text-sm text-zinc-400">{player.realName}</p>
          <div className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-[#A3FF12]/25 bg-[#A3FF12]/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#A3FF12]">
            <RoleIcon className="h-3 w-3" aria-hidden="true" />
            {player.role}
          </div>
        </div>
      </div>

      <p className="mt-4 line-clamp-3 text-sm leading-6 text-zinc-300">{player.highlight}</p>

      <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-4 text-xs text-zinc-500">
        <span className="inline-flex items-center gap-1.5">
          <Flag className="h-3.5 w-3.5" aria-hidden="true" />
          {player.nationality}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
          Desde {player.joinDate}
        </span>
      </div>
    </button>
  );
}

function PlayerModal({ player, onClose }: { player: Player; onClose: () => void }) {
  const RoleIcon =
    player.roleCategory === "coach"
      ? ShieldHalf
      : player.roleCategory === "staff"
      ? Headphones
      : Sparkles;
  const themeClass = getPlayerThemeClass(player);

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-labelledby={`player-${player.id}-title`}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl overflow-hidden rounded-[28px] border border-white/10 bg-zinc-950 shadow-2xl shadow-black/60"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-zinc-900 text-white transition hover:border-[#A3FF12]/50 hover:text-[#A3FF12]"
          aria-label="Fechar perfil do jogador"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>

        <div className={`relative h-40 w-full player-modal-hero ${themeClass}`} aria-hidden="true" />

        <div className="-mt-16 px-6 pb-6 sm:px-8 sm:pb-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end">
            <PlayerAvatar player={player} size="lg" />
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#A3FF12]">{player.modality}</p>
              <h3 id={`player-${player.id}-title`} className="text-4xl font-black uppercase text-white">
                {player.nickname}
              </h3>
              <p className="text-sm text-zinc-300">{player.realName}</p>
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <p className="text-[11px] font-bold uppercase tracking-wider text-zinc-500">Função</p>
              <p className="mt-2 inline-flex items-center gap-2 text-sm font-bold text-white">
                <RoleIcon className="h-4 w-4 text-[#A3FF12]" aria-hidden="true" />
                {player.role}
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <p className="text-[11px] font-bold uppercase tracking-wider text-zinc-500">Nacionalidade</p>
              <p className="mt-2 inline-flex items-center gap-2 text-sm font-bold text-white">
                <Flag className="h-4 w-4 text-[#A3FF12]" aria-hidden="true" />
                {player.nationality}
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <p className="text-[11px] font-bold uppercase tracking-wider text-zinc-500">Na LOUD desde</p>
              <p className="mt-2 inline-flex items-center gap-2 text-sm font-bold text-white">
                <CalendarDays className="h-4 w-4 text-[#A3FF12]" aria-hidden="true" />
                {player.joinDate}
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-[#A3FF12]/25 bg-[#A3FF12]/10 p-5">
            <div className="flex items-center gap-2 text-[#A3FF12]">
              <Award className="h-4 w-4" aria-hidden="true" />
              <p className="text-[11px] font-black uppercase tracking-[0.22em]">Destaque na trajetória</p>
            </div>
            <p className="mt-3 text-sm leading-7 text-zinc-100">{player.highlight}</p>
          </div>

          <p className="mt-6 text-xs leading-6 text-zinc-500">
            Avatar gerado de forma estilizada para preservar o uso correto de imagem dos atletas. Para fotos
            oficiais, consulte os canais oficiais da LOUD.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function PlayersHub() {
  const [activeModality, setActiveModality] = useState("all");
  const [activeCategory, setActiveCategory] = useState("all");
  const [selected, setSelected] = useState<Player | null>(null);

  const filtered = useMemo(() => {
    return players.filter((player) => {
      const modalityOk = activeModality === "all" || player.modalityId === activeModality;
      const categoryOk = activeCategory === "all" || player.roleCategory === activeCategory;
      return modalityOk && categoryOk;
    });
  }, [activeModality, activeCategory]);

  const grouped = useMemo(() => {
    const map = new Map<string, Player[]>();
    for (const player of filtered) {
      const list = map.get(player.modality) ?? [];
      list.push(player);
      map.set(player.modality, list);
    }
    return Array.from(map.entries());
  }, [filtered]);

  return (
    <section id="players-hub" className="border-b border-white/10 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[#A3FF12]">
            Players Hub
          </span>
          <h2 className="text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
            Conheça quem veste a camisa da LOUD
          </h2>
          <p className="text-sm leading-7 text-zinc-300 sm:text-base">
            Cada card abaixo abre a ficha completa do atleta, com função, nacionalidade, data de entrada e
            destaque de carreira. Filtre por modalidade ou categoria (jogadores, coaches e staff) para
            visualizar a estrutura competitiva atual da organização.
          </p>
        </div>

        <div className="mt-10 grid gap-4 rounded-[26px] border border-white/10 bg-white/[0.03] p-5 lg:grid-cols-2">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-500">Filtrar por modalidade</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {playerModalities.map((modality) => {
                const isActive = modality.id === activeModality;
                return (
                  <button
                    key={modality.id}
                    type="button"
                    onClick={() => setActiveModality(modality.id)}
                    className={`rounded-full px-4 py-2 text-xs font-black uppercase tracking-[0.18em] transition ${
                      isActive
                        ? "bg-[#A3FF12] text-zinc-950"
                        : "border border-white/10 bg-zinc-950/80 text-zinc-300 hover:border-[#A3FF12]/40 hover:text-[#A3FF12]"
                    }`}
                  >
                    {modality.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-500">Filtrar por papel</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {playerCategories.map((category) => {
                const isActive = category.id === activeCategory;
                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => setActiveCategory(category.id)}
                    className={`rounded-full px-4 py-2 text-xs font-black uppercase tracking-[0.18em] transition ${
                      isActive
                        ? "bg-[#A3FF12] text-zinc-950"
                        : "border border-white/10 bg-zinc-950/80 text-zinc-300 hover:border-[#A3FF12]/40 hover:text-[#A3FF12]"
                    }`}
                  >
                    {category.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-10 space-y-12">
          {grouped.length === 0 ? (
            <div className="rounded-[26px] border border-white/10 bg-white/[0.03] px-6 py-10 text-center text-sm text-zinc-300">
              Nenhum integrante encontrado para o filtro selecionado.
            </div>
          ) : (
            grouped.map(([modality, list]) => (
              <div key={modality}>
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#A3FF12]/15 text-[#A3FF12]">
                      <Users className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-500">Roster</p>
                      <h3 className="text-2xl font-black uppercase text-white">{modality}</h3>
                    </div>
                  </div>
                  <p className="hidden text-xs font-bold uppercase tracking-[0.22em] text-zinc-500 sm:block">
                    {list.length} {list.length === 1 ? "integrante" : "integrantes"}
                  </p>
                </div>

                <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                  {list.map((player) => (
                    <PlayerCard key={player.id} player={player} onSelect={setSelected} />
                  ))}
                </div>
              </div>
            ))
          )}
        </div>

        {selected && <PlayerModal player={selected} onClose={() => setSelected(null)} />}
      </div>
    </section>
  );
}
