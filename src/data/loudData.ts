export type ResultItem = {
  date: string;
  place: string;
  event: string;
  note: string;
};

export type GameData = {
  id: string;
  label: string;
  description: string;
  status: string;
  currentRoster: string[];
  staff: string[];
  achievements: string[];
  recentMoves: string[];
  marketWatch: string;
  results: ResultItem[];
  archiveUrl: string;
};

export const siteMeta = {
  updatedAt: "junho de 2026",
  headline: "LOUD — a maior potência de e-sports e gaming lifestyle da América Latina",
  summary:
    "Dossiê visual e interativo com história, conquistas, elencos ativos, redes oficiais, marcos institucionais e panorama competitivo da LOUD em Free Fire, League of Legends, VALORANT, Brawl Stars, Rainbow Six e Fortnite.",
};

export const quickFacts = [
  {
    label: "Fundação",
    value: "28 fev 2019",
    detail: "Criada por PlayHard, Jean Ortega e Matthew Ho em São Paulo.",
  },
  {
    label: "Alcance digital",
    value: "+50 mi",
    detail: "A LOUD ultrapassou a marca de 50 milhões de seguidores nas plataformas da marca, segundo registros públicos consultados.",
  },
  {
    label: "Marco histórico",
    value: "1 bi de views",
    detail: "Primeira marca de e-sports a bater 1 bilhão de visualizações no YouTube em 2020.",
  },
  {
    label: "Título global",
    value: "Champions 2022",
    detail: "A LOUD venceu o mundial de VALORANT em Istambul e entrou definitivamente na elite global.",
  },
];

export const institutionalHighlights = [
  "A LOUD nasceu como uma organização orientada por conteúdo, comunidade e competitividade — e não apenas por performance em campeonato.",
  "Foi a primeira grande org brasileira de e-sports a transformar jogadores, streamers e creators em personagens centrais do produto de mídia.",
  "A marca ampliou sua estrutura para lifestyle, collabs, vestuário, embaixadores e novos negócios esportivos, incluindo a entrada da LOUD Sports Club.",
  "Vinícius Júnior entrou como sócio e embaixador em dezembro de 2023; Coringa passou a integrar a sociedade em 2024.",
  "Entre parceiros e patrocinadores já associados à marca em ciclos recentes aparecem H2bet, Snickers, Uniasselvi, AOC, POCO, Aztro Energy, Itaú, Mentos, Samsung, TIM Brasil e oBoticário.",
];

export const organizationMilestones = [
  {
    year: "2019",
    title: "Nascimento da LOUD",
    description:
      "Fundação em 28 de fevereiro. A primeira grande frente competitiva foi no Free Fire, modalidade que ajudou a construir a identidade da organização.",
  },
  {
    year: "2020",
    title: "Explosão de alcance e primeiro grande título continental",
    description:
      "A LOUD venceu a Copa América de Free Fire e virou a primeira marca de e-sports a ultrapassar 1 bilhão de views no YouTube.",
  },
  {
    year: "2021",
    title: "Fortalecimento competitivo",
    description:
      "A org consolidou o Free Fire em cenário internacional com vice mundial no FFWS 2021 e seguiu ganhando tração nas redes e no streaming.",
  },
  {
    year: "2022",
    title: "Ano de virada global",
    description:
      "Entrada no VALORANT, título mundial no Champions 2022, primeiro CBLOL da história da LOUD e prêmios internacionais de melhor equipe/creative team.",
  },
  {
    year: "2023",
    title: "Domínio regional e expansão de legado",
    description:
      "Títulos consecutivos no CBLOL, título do VCT Americas, vice do LOCK//IN São Paulo, bronze no Champions 2023 e entrada de Vinícius Júnior na sociedade.",
  },
  {
    year: "2024",
    title: "EWC, novas modalidades e fortalecimento de marca",
    description:
      "A LOUD voltou/entrou em Fortnite, Rocket League e EA FC para a EWC, venceu o CBLOL Split 1 e seguiu ampliando sua presença institucional.",
  },
  {
    year: "2025",
    title: "Chegada ao Brawl Stars e Rainbow Six",
    description:
      "A organização abriu novas frentes competitivas, levou a divisão de Brawl Stars ao World Finals e iniciou sua trajetória no Rainbow Six.",
  },
  {
    year: "2026",
    title: "Nova fase de reconstrução e títulos recentes",
    description:
      "No início de 2026, a LOUD venceu a CBLOL Cup, conquistou a FFWS Brazil Split 1 e manteve a renovação de elencos em várias modalidades.",
  },
];

export const socialLinks = [
  {
    label: "Site oficial",
    handle: "loud.gg",
    url: "https://loud.gg/",
    kind: "Oficial",
  },
  {
    label: "Notícias oficiais",
    handle: "News / Blog",
    url: "https://loud.gg/blogs/news",
    kind: "Oficial",
  },
  {
    label: "X / Twitter",
    handle: "@LOUDgg",
    url: "https://x.com/LOUDgg",
    kind: "Oficial",
  },
  {
    label: "Instagram",
    handle: "@loudgg",
    url: "https://www.instagram.com/loudgg",
    kind: "Oficial",
  },
  {
    label: "TikTok",
    handle: "@loudgg",
    url: "https://www.tiktok.com/@loudgg",
    kind: "Oficial",
  },
  {
    label: "YouTube",
    handle: "@LOUDgg",
    url: "https://www.youtube.com/@LOUDgg",
    kind: "Oficial",
  },
  {
    label: "YouTube LOUD Coringa",
    handle: "@LOUDCoringa",
    url: "https://www.youtube.com/@LOUDCoringa",
    kind: "Creator associado",
  },
  {
    label: "Twitch Coringa",
    handle: "loud_coringa",
    url: "https://www.twitch.tv/loud_coringa",
    kind: "Creator associado",
  },
];

export const securityChecklist = [
  "Sem formulários, cadastros, trackers invasivos ou embeds de terceiros: o site é estático e informativo, reduzindo a superfície de risco para o usuário.",
  "Links externos devem ser abertos com proteção contra tabnabbing (noopener/noreferrer), evitando acesso indevido à aba original.",
  "Política de segurança de conteúdo via meta (CSP), política de referência restrita e permissões do navegador reduzidas no documento HTML.",
  "Nada de HTML inseguro injetado dinamicamente: todo o conteúdo exibido é estruturado em dados estáticos dentro da aplicação.",
];

export const loudGames: GameData[] = [
  {
    id: "free-fire",
    label: "Free Fire",
    description:
      "Modalidade fundadora da história competitiva da LOUD e uma das maiores responsáveis pelo crescimento da marca no Brasil.",
    status: "Ativa — equipe joga sob a nomenclatura LOUD Snickers em 2026 por motivo de patrocínio.",
    currentRoster: ["Bzp10", "GUAXA7", "Hak", "Nickz7", "Trap"],
    staff: ["JOKER (coach) ", "Jhan (assistant coach)"],
    achievements: [
      "Campeã da Copa América 2020.",
      "Vice-campeã do Free Fire World Series 2021 Singapore.",
      "Campeã da LBFF 2022 Série A - Etapa 1.",
      "Campeã da LBFF 2023 Série A - Etapa 1.",
      "Campeã da Free Fire World Series Brazil 2026 Split 1.",
    ],
    recentMoves: [
      "16/12/2025: grande reformulação do elenco anterior.",
      "28/01/2026: entrada de Bzp10, Hak, Trap, GUAXA7, Nickz7 e JOKER.",
      "31/05/2026: título da FFWS Brazil 2026 Split 1.",
      "16/06/2026: Jhan, novo assistant coach, entrou no dia 16 de junho de 2026, logo após a conquista da FFWS Brazil Split 1.",
    ],
    marketWatch:
      "A apuração pública até junho de 2026 mostra a LOUD já reconstruída para a temporada; não apareceu rumor confiável e amplamente corroborado de novo reforço além do elenco oficial de janeiro.",
    archiveUrl: "https://liquipedia.net/freefire/LOUD/Results",
    results: [
      {
        date: "09/11/2019",
        place: "Vice",
        event: "Free Fire Pro League Brazil Season 3",
        note: "Primeiro grande pódio competitivo da história da LOUD no jogo.",
      },
      {
        date: "16/11/2019",
        place: "9º",
        event: "Free Fire World Series 2019",
        note: "Primeira aparição mundial da organização no Free Fire.",
      },
      {
        date: "11/01/2020",
        place: "Campeã",
        event: "Copa América 2020",
        note: "Primeiro grande título internacional/continental da LOUD no Free Fire.",
      },
      {
        date: "15/03/2020",
        place: "3º",
        event: "LBFF 2020 Série A - Etapa 1",
        note: "Top 3 nacional em ano de forte crescimento da marca.",
      },
      {
        date: "20/03/2021",
        place: "Vice",
        event: "LBFF 2021 Série A - Etapa 1",
        note: "A LOUD voltou a disputar título nacional em alto nível.",
      },
      {
        date: "30/05/2021",
        place: "Vice",
        event: "Free Fire World Series 2021 Singapore",
        note: "Melhor campanha internacional da LOUD no Free Fire até hoje.",
      },
      {
        date: "16/04/2022",
        place: "Campeã",
        event: "LBFF 2022 Série A - Etapa 1",
        note: "Título histórico da LOUD no principal circuito brasileiro.",
      },
      {
        date: "21/05/2022",
        place: "7º",
        event: "Free Fire World Series 2022 Sentosa",
        note: "Representação mundial após a conquista da LBFF.",
      },
      {
        date: "02/07/2022",
        place: "Vice",
        event: "C.O.P.A. Free Fire 2022",
        note: "A equipe seguiu brigando por finais nacionais em 2022.",
      },
      {
        date: "25/03/2023",
        place: "Vice",
        event: "C.O.P.A. Free Fire 2023",
        note: "Nova final importante no calendário nacional.",
      },
      {
        date: "01/07/2023",
        place: "Campeã",
        event: "LBFF 2023 Série A - Etapa 1",
        note: "Segundo título de LBFF da organização.",
      },
      {
        date: "26/11/2023",
        place: "7º",
        event: "Free Fire World Series 2023",
        note: "Mais uma presença internacional na história da org.",
      },
      {
        date: "05/10/2025",
        place: "4º",
        event: "FFWS Brazil 2025 Split 2",
        note: "Competitividade mantida na transição de elencos.",
      },
      {
        date: "22/02/2026",
        place: "4º",
        event: "C.O.P.A. Free Fire 2026",
        note: "Início do novo projeto competitivo da temporada.",
      },
      {
        date: "31/05/2026",
        place: "Campeã",
        event: "FFWS Brazil 2026 Split 1",
        note: "Título mais recente em mapa aberto e um dos registros centrais da LOUD em 2026.",
      },

      {
        date: "05/07/2026",
        place: "Campeã",
        event: "FFCM 2026",
        note: "A LOUD conquistou o título do Free Fire Clash Masters 2026, sendo campeã invicta, sem perder uma partida.",
      },
    ],
  },
  {
    id: "lol",
    label: "League of Legends",
    description:
      "A divisão de LoL transformou a LOUD em referência de franquia no Brasil, com uma sequência histórica de títulos no CBLOL.",
    status: "Ativa — disputa o ecossistema regional sul-americano em meio à transição do CBLOL para o modelo LTA.",
    currentRoster: ["Xyno", "Sinatra", "Kaze", "Rabelo", "uZent"],
    staff: ["Raise (head coach)", "Sephis (assistant/strategic staff)"],
    achievements: [
      "Campeã do CBLOL 2022 Split 2.",
      "Campeã do CBLOL 2023 Split 1.",
      "Campeã do CBLOL 2023 Split 2.",
      "Campeã do CBLOL 2024 Split 1.",
      "Campeã da CBLOL Cup 2026.",
    ],
    recentMoves: [
      "19/12/2025: chegaram Xyno, Youngjae e Bull para a temporada 2026.",
      "19/02/2026: Envy entrou no mid lane.",
      "24/04/2026: uZent assumiu o suporte após a saída de RedBert.",
      "16/06/2026: Sinatra, o mais novo jogador da LOUD, se junta a equipe para seguir no lugar de Youngjae para o 2º split do CBLOL.",
      "01/07/2026: saídas confirmadas de Envy (mid) e Bull (ADC) da equipe.",
      "10/07/2026: Chegada de Kaze, o novo mid laner da LOUD, para substituir Envy e Rabelo para o lugar do Bull."

    ],
    marketWatch:
      "Até junho de 2026, o que existe em fonte pública é basicamente janela já concluída: a LOUD já oficializou as últimas entradas e não apareceu rumor sólido extra que mereça ser tratado como provável reforço.",
    archiveUrl: "https://liquipedia.net/leagueoflegends/LOUD/Results",
    results: [
      {
        date: "27/03/2021",
        place: "5º-6º",
        event: "CBLOL 2021 Split 1",
        note: "Estreia da LOUD no topo do LoL brasileiro com campanha de playoffs.",
      },
      {
        date: "07/08/2021",
        place: "5º-6º",
        event: "CBLOL 2021 Split 2",
        note: "Primeiro ano serviu de base para a reconstrução campeã posterior.",
      },
      {
        date: "20/03/2022",
        place: "7º",
        event: "CBLOL 2022 Split 1",
        note: "Semifase difícil antes da virada de chave histórica do segundo split.",
      },
      {
        date: "03/09/2022",
        place: "Campeã",
        event: "CBLOL 2022 Split 2",
        note: "Primeiro título de LoL da LOUD, com 3-0 sobre a paiN Gaming.",
      },
      {
        date: "03/10/2022",
        place: "19º-20º",
        event: "World Championship 2022",
        note: "Primeira participação da LOUD em Worlds.",
      },
      {
        date: "15/04/2023",
        place: "Campeã",
        event: "CBLOL 2023 Split 1",
        note: "Início da sequência de títulos consecutivos da organização.",
      },
      {
        date: "06/05/2023",
        place: "10º-11º",
        event: "MSI 2023",
        note: "Representação internacional no Mid-Season Invitational.",
      },
      {
        date: "09/09/2023",
        place: "Campeã",
        event: "CBLOL 2023 Split 2",
        note: "Terceiro troféu nacional da LOUD no LoL e novo passe para Worlds.",
      },
      {
        date: "14/10/2023",
        place: "19º-20º",
        event: "World Championship 2023",
        note: "Segunda aparição consecutiva no mundial.",
      },
      {
        date: "20/04/2024",
        place: "Campeã",
        event: "CBLOL 2024 Split 1",
        note: "Quarto título importante em sequência no LoL brasileiro.",
      },
      {
        date: "04/05/2024",
        place: "11º-12º",
        event: "MSI 2024",
        note: "Novo internacional, agora com a base campeã de 2024.",
      },
      {
        date: "23/08/2024",
        place: "4º",
        event: "CBLOL 2024 Split 2",
        note: "Fim da hegemonia absoluta, mas mantendo-se entre os protagonistas.",
      },
      {
        date: "09/02/2025",
        place: "3º",
        event: "LTA South 2025 Split 1",
        note: "Transição para o novo ecossistema competitivo regional.",
      },
      {
        date: "01/03/2026",
        place: "Campeã",
        event: "CBLOL Cup 2026",
        note: "Título mais recente do LoL da LOUD, com 3-0 sobre a RED Canids.",
      },
      {
        date: "19/03/2026",
        place: "7º-8º",
        event: "First Stand 2026",
        note: "Participação internacional em 2026.",
      },
      {
        date: "25/05/2026",
        place: "5º",
        event: "CBLOL 2026 Split 1",
        note: "Campanha instável após a nova reformulação do elenco.",
      },
    ],
  },
  {
    id: "valorant",
    label: "VALORANT",
    description:
      "A divisão mais internacionalmente vitoriosa da LOUD e um dos capítulos mais importantes da história do esporte eletrônico brasileiro.",
    status: "Ativa — segue no circuito VCT Americas, mesmo após grande reformulação em 2025 e 2026.",
    currentRoster: ["Davih", "lukxo", "Tkzin", "Darker", "erde"],
    staff: ["Romanilly (head coach)", "Bati (assistant coach)", "Wenty (manager)"],
    achievements: [
      "Campeã do VCT Brazil Stage 1 2022.",
      "Vice do Masters Reykjavík 2022.",
      "Campeã do VCT Brazil Stage 2 2022.",
      "Campeã do VALORANT Champions 2022.",
      "Vice do LOCK//IN São Paulo 2023.",
      "Campeã do VCT Americas 2023.",
      "3º lugar no VALORANT Champions 2023.",
    ],
    recentMoves: [
      "05/12/2025: Darker foi oficializado como flex.",
      "04/03/2026: erde entrou no elenco principal.",
      "01/04/2026: Bati chegou como assistant coach.",
      "04/05/2026: pANcada encerrou o ciclo mais recente com a organização.",
      "15/07/2026: Virtyy encerra ciclo no time e Tkzin entra por empréstimo no lugar como o novo duelista da equipe.",
      "16/07/2026: Davih é oficializado como novo Iniciador da LOUD, substituindo Cauanzin no roster principal.",
    ],
    marketWatch:
      "É a modalidade com mercado mais sensível da LOUD neste momento. Há sinais de janela ainda viva após a saída de pANcada, mas, até junho de 2026, a apuração pública não encontrou um novo nome fortemente confirmado além das entradas já oficializadas de Darker e erde. Este site não trata especulação fraca como fato.",
    archiveUrl: "https://liquipedia.net/valorant/LOUD/Results",
    results: [
      {
        date: "27/03/2022",
        place: "Campeã",
        event: "VCT 2022 Brazil Stage 1 Challengers",
        note: "Início avassalador do projeto comandado por saadhak e companhia.",
      },
      {
        date: "24/04/2022",
        place: "Vice",
        event: "Masters Reykjavík 2022",
        note: "Primeira final internacional da história da LOUD no VALORANT.",
      },
      {
        date: "26/06/2022",
        place: "Campeã",
        event: "VCT 2022 Brazil Stage 2 Challengers",
        note: "A equipe confirmou domínio doméstico no primeiro ano.",
      },
      {
        date: "12/07/2022",
        place: "11º-12º",
        event: "Masters Copenhagen 2022",
        note: "Resultado abaixo do esperado antes da redenção no mundial.",
      },
      {
        date: "18/09/2022",
        place: "Campeã",
        event: "VALORANT Champions 2022",
        note: "Título mundial em Istambul, derrotando a OpTic por 3-1.",
      },
      {
        date: "04/03/2023",
        place: "Vice",
        event: "VCT 2023 LOCK//IN São Paulo",
        note: "Final épica contra a Fnatic diante da torcida brasileira.",
      },
      {
        date: "28/05/2023",
        place: "Campeã",
        event: "VCT 2023 Americas League",
        note: "LOUD campeã da liga das Américas com 3-0 sobre a NRG.",
      },
      {
        date: "18/06/2023",
        place: "7º-8º",
        event: "Masters Tokyo 2023",
        note: "Queda precoce no internacional do meio de temporada.",
      },
      {
        date: "25/08/2023",
        place: "3º",
        event: "VALORANT Champions 2023",
        note: "A LOUD voltou ao top 3 do mundo um ano após o título.",
      },
      {
        date: "03/03/2024",
        place: "Vice",
        event: "VCT 2024 Americas Kickoff",
        note: "Campanha forte na abertura da temporada internacional.",
      },
      {
        date: "22/03/2024",
        place: "4º",
        event: "Masters Madrid 2024",
        note: "Melhor resultado internacional da LOUD em 2024.",
      },
      {
        date: "08/05/2024",
        place: "5º-6º",
        event: "VCT 2024 Americas Stage 1",
        note: "Temporada de oscilação e perda de fôlego competitivo.",
      },
      {
        date: "14/07/2024",
        place: "10º",
        event: "VCT 2024 Americas Stage 2",
        note: "Ano abaixo do padrão histórico do projeto.",
      },
      {
        date: "03/02/2025",
        place: "5º-6º",
        event: "VCT 2025 Americas Kickoff",
        note: "Reinício com nova base, mas sem vaga internacional.",
      },
      {
        date: "20/04/2025",
        place: "11º-12º",
        event: "VCT 2025 Americas Stage 1",
        note: "Campanha fraca que acelerou novas mudanças no roster.",
      },
      {
        date: "17/08/2025",
        place: "11º-12º",
        event: "VCT 2025 Americas Stage 2",
        note: "A LOUD terminou 2025 sem classificar para internacionais.",
      },
      {
        date: "31/01/2026",
        place: "11º-12º",
        event: "VCT 2026 Americas Kickoff",
        note: "Começo de 2026 ainda em processo de reconstrução.",
      },
      {
        date: "16/05/2026",
        place: "7º-8º",
        event: "VCT 2026 Americas Stage 1",
        note: "Melhora relativa, mas ainda abaixo da elite continental.",
      },
      {
        date: "01/06/2026",
        place: "4º",
        event: "Esports World Cup 2026 Americas Qualifier",
        note: "A equipe ficou perto da vaga, mas caiu na fase final da classificatória.",
      },
    ],
  },
  {
    id: "brawl-stars",
    label: "Brawl Stars",
    description:
      "Frente competitiva recente e já extremamente relevante, com classificação para o World Finals logo no primeiro ano do projeto.",
    status: "Ativa — projeto estreou em 2025 e já colocou a LOUD entre os nomes fortes da América do Sul.",
    currentRoster: ["Edinho", "FireCrow", "KaioDog"],
    staff: ["Trekking (assistant coach)", "Role (coach)"],
    achievements: [
      "Vice da South America Monthly Finals de fevereiro de 2025.",
      "Campeã da South America Monthly Finals de abril de 2025.",
      "Campeã da CBBS Season 8.",
      "Campeã da South America Monthly Finals de junho de 2025.",
      "Campeã da CBBS Season 10.",
      "Top 8 do Brawl Stars World Finals 2025.",
      "Campeã do Pre-Season Invitational South America 2026.",
    ],
    recentMoves: [
      "08/02/2025: aquisição da line da Calabresos.",
      "11/12/2025: Role anunciou aposentadoria.",
      "25/01/2026: Trekking passou a atuar como coach.",
      "10/07/2026: Role de volta como coach da equipe de Brawl Stars.",
    ],
    marketWatch:
      "O projeto está relativamente estável. Até a data da apuração, não há rumor público forte e recorrente de nova contratação; o cenário mais claro é a continuidade do trio competitivo com suporte técnico do Trekking.",
    archiveUrl: "https://liquipedia.net/brawlstars/LOUD/Results",
    results: [
      {
        date: "22/02/2025",
        place: "Vice",
        event: "Brawl Stars Championship 2025: February SA Monthly Finals",
        note: "Primeira final importante da LOUD no cenário.",
      },
      {
        date: "27/04/2025",
        place: "Campeã",
        event: "Brawl Stars Championship 2025: April SA Monthly Finals",
        note: "Primeiro grande título da organização no Brawl Stars.",
      },
      {
        date: "02/05/2025",
        place: "Campeã",
        event: "Copa Brasileira Brawl Stars Season 8",
        note: "Troféu nacional relevante no circuito brasileiro.",
      },
      {
        date: "21/06/2025",
        place: "Campeã",
        event: "Brawl Stars Championship 2025: June SA Monthly Finals",
        note: "A equipe confirmou consistência continental.",
      },
      {
        date: "19/07/2025",
        place: "Vice",
        event: "Brawl Stars Championship 2025: July SA Monthly Finals",
        note: "LOUD seguiu em decisão atrás de decisão.",
      },
      {
        date: "28/07/2025",
        place: "Campeã",
        event: "Copa Brasileira Brawl Stars Season 10",
        note: "Outro título doméstico no primeiro ano do projeto.",
      },
      {
        date: "16/08/2025",
        place: "Vice",
        event: "Brawl Stars Championship 2025: August SA Monthly Finals",
        note: "Último grande pódio continental antes do mundial.",
      },
      {
        date: "30/11/2025",
        place: "5º-8º",
        event: "Brawl Stars World Finals 2025",
        note: "Participação mundial da LOUD logo na temporada inaugural da modalidade.",
      },
      {
        date: "26/01/2026",
        place: "Campeã",
        event: "Brawl Stars Championship 2026: Pre-Season Invitational SA",
        note: "Título de abertura da temporada 2026.",
      },
      {
        date: "21/03/2026",
        place: "Vice",
        event: "Brawl Stars Championship 2026: March SA Monthly Finals",
        note: "A LOUD continua entre as candidatas mais fortes da região.",
      },
      {
        date: "15/08/2026",
        place: "Campeã",
        event: "Brawl Stars Championship 2026: August SA Monthly Finals",
        note: "Mais um título continental para a LOUD em 2026 e vaga na LCQ para tentar disputar o mundial.",
      }
    ],
  },
  {
    id: "rainbow-six",
    label: "Rainbow Six",
    description:
      "Entrada recente da LOUD no R6, ainda em fase de consolidação, mas com várias mudanças de roster em pouco tempo.",
    status: "Ativa — projeto iniciado em 2025 e ainda buscando estabilização no cenário sul-americano.",
    currentRoster: ["live", "Flastry", "Gabu", "resetz", "Stemp"],
    staff: ["GdNN1 (coach)", "GU1LZ (manager)", "Septe (manager)"],
    achievements: [
      "Top 3 da Copa Sul-Americana 2025.",
      "6º lugar no South America League 2025 Regional Finals.",
      "4º lugar no Six Invitational 2026 South America LCQ.",
    ],
    recentMoves: [
      "24/03/2025: aquisição do roster da RazaH Company Academy.",
      "21/08/2025: entrada de Flastry.",
      "03/03/2026: saídas de Bassetto e peres.",
      "20/03/2026: chegaram Gabu, resetz e Stemp.",
    ],
    marketWatch:
      "O R6 é uma das frentes mais mutáveis da LOUD. Mesmo assim, até junho de 2026, o que aparece de forma pública e sólida são as mudanças já confirmadas em março; não surgiu, na apuração, um novo nome tratado amplamente como contratação iminente.",
    archiveUrl: "https://liquipedia.net/rainbowsix/LOUD",
    results: [
      {
        date: "18/05/2025",
        place: "campanha de estreia internacional",
        event: "RE:L0:AD 2025",
        note: "A primeira base do projeto ganhou visibilidade e prêmios individuais na fase de grupos.",
      },
      {
        date: "23/11/2025",
        place: "3º",
        event: "Copa Sul-Americana 2025",
        note: "Melhor resultado competitivo relevante do projeto até aqui.",
      },
      {
        date: "04/12/2025",
        place: "6º",
        event: "South America League 2025 Regional Finals",
        note: "Fechamento do primeiro ano competitivo no R6.",
      },
      {
        date: "17/01/2026",
        place: "4º",
        event: "Six Invitational 2026: South America LCQ",
        note: "A LOUD bateu na trave por vaga no principal torneio do calendário.",
      },
      {
        date: "19/04/2026",
        place: "9º",
        event: "South America League 2026 Kickoff",
        note: "Projeto ainda em busca de estabilidade após novas trocas de lineup.",
      },
    ],
  },
  {
    id: "fortnite",
    label: "Fortnite",
    description:
      "Uma modalidade em ciclos: a LOUD entrou em 2020, saiu em 2022 e voltou em 2024 mirando a Esports World Cup e o alto nível competitivo brasileiro.",
    status: "Ativa — retomada oficial em 2024, com foco em atletas de ponta do cenário brasileiro.",
    currentRoster: ["Diguera", "mack"],
    staff: ["Histórico recente: Diguera e Mack foram Campeões da FNCS Major 2 em 2026, com destaque para a performance individual e coletiva."],
    achievements: [
      "Campeã do Twitch Rivals LATAM Showdown 2021.",
      "Vice da FNCS Chapter 2 Season 7 Brasil.",
      "Campeã do Twitch Rivals Zero Build Showdown LATAM 2022.",
      "Vice da FNCS 2024 Major 3 Brasil.",
      "Vice da FNCS 2025 Major 1 Brasil.",
      "Campeã da Unreal Cup Brazil 2025.",
      "Campeã da FNCS Major 2 em 2026.",
    ],
    recentMoves: [
      "13/06/2024: retorno oficial da LOUD ao Fortnite para a EWC.",
      "10/02/2025: saídas de Night e Gabzera.",
      "30/04/2026: mack entrou para a line atual.",
    ],
    marketWatch:
      "A LOUD voltou a trabalhar com um núcleo menor. Na apuração pública não apareceram rumores fortes de terceira peça permanente para o projeto além do Diguera e do mack como faces mais visíveis do momento.",
    archiveUrl: "https://liquipedia.net/fortnite/LOUD",
    results: [
      {
        date: "01/11/2020",
        place: "3º",
        event: "FNCS Chapter 2 Season 4 Brasil",
        note: "Primeira grande campanha da LOUD no Fortnite competitivo.",
      },
      {
        date: "03/07/2021",
        place: "Campeã",
        event: "Twitch Rivals: LATAM Showdown",
        note: "Título importante no ciclo inicial da modalidade.",
      },
      {
        date: "05/09/2021",
        place: "Vice",
        event: "FNCS Chapter 2 Season 7 Brasil",
        note: "Um dos melhores resultados históricos da org no jogo.",
      },
      {
        date: "31/10/2021",
        place: "7º",
        event: "FNCS Chapter 2 Season 8 Brasil",
        note: "A LOUD permaneceu entre os nomes relevantes do país.",
      },
      {
        date: "01/05/2022",
        place: "Campeã",
        event: "Twitch Rivals Zero Build Showdown LATAM",
        note: "Vitória expressiva antes da primeira saída do cenário no fim de 2022.",
      },
      {
        date: "14/08/2022",
        place: "5º",
        event: "FNCS Chapter 3 Season 3 Brasil",
        note: "Encerramento competitivo do primeiro ciclo da LOUD no jogo.",
      },
      {
        date: "28/07/2024",
        place: "Vice",
        event: "FNCS 2024 Major 3 Brasil",
        note: "Retorno muito forte após a reentrada oficial da organização.",
      },
      {
        date: "16/02/2025",
        place: "Vice",
        event: "FNCS 2025 Major 1 Brasil",
        note: "Diguera manteve a LOUD em topo regional.",
      },
      {
        date: "28/06/2025",
        place: "Campeã",
        event: "FNCS Divisional Cup Finals Week 2 Brasil",
        note: "Mais um troféu relevante no circuito brasileiro.",
      },
      {
        date: "20/12/2025",
        place: "Campeã",
        event: "Unreal Cup Brasil",
        note: "mack e Diguera fecharam 2025 com título.",
      },
      {
        date: "02/08/2026",
        place: "Campeã",
        event: "FNCS Major 2",
        note: "Título importante para elevar a organização ao topo do cenário.",
      },
    ],
  },
];

export const resultYears = [
  "Todos",
  "2019",
  "2020",
  "2021",
  "2022",
  "2023",
  "2024",
  "2025",
  "2026",
];

export const sources = [
  {
    name: "LOUD oficial",
    url: "https://loud.gg/",
    note: "Site, loja, metadados da organização e links sociais oficiais.",
  },
  {
    name: "LOUD News / Blog",
    url: "https://loud.gg/blogs/news",
    note: "Comunicados oficiais da marca, inclusive expansões para EWC.",
  },
  {
    name: "Liquipedia Esports: LOUD",
    url: "https://liquipedia.net/esports/LOUD",
    note: "Visão institucional consolidada e linha do tempo macro da organização.",
  },
  {
    name: "Liquipedia Free Fire: LOUD",
    url: "https://liquipedia.net/freefire/LOUD/Results",
    note: "Resultados históricos e composição recente do elenco de Free Fire.",
  },
  {
    name: "Liquipedia LoL: LOUD",
    url: "https://liquipedia.net/leagueoflegends/LOUD/Results",
    note: "Temporadas, títulos e campanhas internacionais de League of Legends.",
  },
  {
    name: "Liquipedia VALORANT: LOUD",
    url: "https://liquipedia.net/valorant/LOUD/Results",
    note: "Resultados do projeto mais internacional da LOUD.",
  },
  {
    name: "Liquipedia Brawl Stars: LOUD",
    url: "https://liquipedia.net/brawlstars/LOUD",
    note: "Entrada da org na modalidade, roster e resultados iniciais.",
  },
  {
    name: "Liquipedia Rainbow Six: LOUD",
    url: "https://liquipedia.net/rainbowsix/LOUD",
    note: "Elenco, trocas e resultados do projeto de R6.",
  },
  {
    name: "Liquipedia Fortnite: LOUD",
    url: "https://liquipedia.net/fortnite/LOUD",
    note: "Retorno ao Fortnite, jogadores e resultados por ciclo.",
  },
  {
    name: "Wikipédia PT/EN sobre a LOUD",
    url: "https://pt.wikipedia.org/wiki/Loud_(organização)",
    note: "Contexto histórico, sócios, modalidades e marcos públicos amplamente citados.",
  },
  {
    name: "VLR: LOUD",
    url: "https://www.vlr.gg/team/6961/loud",
    note: "Apoio para rosters e transações recentes de VALORANT.",
  },
];