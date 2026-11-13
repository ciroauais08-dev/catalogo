/* ======= CONFIGURE AQUI ======= */
const WHATSAPP_NUMBER = "5531991924908"; // troque pelo seu número, formato 55DDDNUMERO
const ITEMS_PER_PAGE = 24;

const ICONS = {
  jogos: `<svg viewBox="0 0 64 64" fill="none" stroke="#2b241c" stroke-width="2.5"><rect x="10" y="10" width="44" height="34" rx="2"/><path d="M10 34l12-12 10 10 10-14 12 16"/><circle cx="20" cy="20" r="3"/></svg>`,
  moveis: `<svg viewBox="0 0 64 64" fill="none" stroke="#2b241c" stroke-width="2.5"><rect x="8" y="26" width="48" height="18" rx="2"/><path d="M10 44v8M54 44v8"/><path d="M8 26v-6a6 6 0 0 1 6-6h36a6 6 0 0 1 6 6v6"/></svg>`,
  eletro: `<svg viewBox="0 0 64 64" fill="none" stroke="#2b241c" stroke-width="2.5"><rect x="14" y="8" width="36" height="48" rx="3"/><circle cx="32" cy="34" r="10"/><path d="M20 16h6"/></svg>`,
  cozinha: `<svg viewBox="0 0 64 64" fill="none" stroke="#2b241c" stroke-width="2.5"><path d="M18 8v20a10 10 0 0 0 10 10v18M18 8v14M26 8v14"/><path d="M46 8c-6 4-6 12-2 16l2 2v30"/></svg>`,
  decoracao: `<svg viewBox="0 0 64 64" fill="none" stroke="#2b241c" stroke-width="2.5"><rect x="10" y="10" width="44" height="34" rx="2"/><path d="M10 34l12-12 10 10 10-14 12 16"/><circle cx="20" cy="20" r="3"/></svg>`,
  tecnologia: `<svg viewBox="0 0 64 64" fill="none" stroke="#2b241c" stroke-width="2.5"><rect x="8" y="10" width="48" height="32" rx="3"/><path d="M24 54h16M32 42v12"/></svg>`,
  casa: `<svg viewBox="0 0 64 64" fill="none" stroke="#2b241c" stroke-width="2.5"><path d="M8 30L32 10l24 20"/><path d="M14 26v28h36V26"/><path d="M27 54V38h10v16"/></svg>`,
  ferramentas: `<svg viewBox="0 0 64 64" fill="none" stroke="#2b241c" stroke-width="2.5"><path d="M42 10a12 12 0 0 0-9 17L12 48a5 5 0 0 0 7 7l21-21a12 12 0 0 0 17-9l-7 7-6-2-2-6 7-7a12 12 0 0 0-7-4z"/></svg>`,
  livros: `<svg viewBox="0 0 64 64" fill="none" stroke="#2b241c" stroke-width="2.5"><path d="M10 12h18a4 4 0 0 1 4 4 4 4 0 0 1 4-4h18v38H36a4 4 0 0 0-4 4 4 4 0 0 0-4-4H10z"/><path d="M32 16v38"/></svg>`,
  drones: `<svg viewBox="0 0 64 64" fill="none" stroke="#2b241c" stroke-width="2.5"><rect x="26" y="28" width="12" height="8" rx="2"/><path d="M26 30l-12-8M38 30l12-8M26 34l-12 8M38 34l12 8"/><circle cx="12" cy="20" r="5"/><circle cx="52" cy="20" r="5"/><circle cx="12" cy="44" r="5"/><circle cx="52" cy="44" r="5"/></svg>`,
  esporte: `<svg viewBox="0 0 64 64" fill="none" stroke="#2b241c" stroke-width="2.5"><circle cx="32" cy="32" r="22"/><path d="M10 32h44M32 10c-10 8-10 36 0 44M32 10c10 8 10 36 0 44"/></svg>`,
  cuidados: `<svg viewBox="0 0 64 64" fill="none" stroke="#2b241c" stroke-width="2.5"><circle cx="32" cy="26" r="16"/><path d="M32 42v14M26 56h12"/></svg>`,
  pets: `<svg viewBox="0 0 64 64" fill="none" stroke="#2b241c" stroke-width="2.5"><circle cx="18" cy="26" r="5"/><circle cx="32" cy="18" r="5"/><circle cx="46" cy="26" r="5"/><path d="M32 30c-9 0-14 10-12 16 2 5 8 4 12 4s10 1 12-4c2-6-3-16-12-16z"/></svg>`,
  outros: `<svg viewBox="0 0 64 64" fill="none" stroke="#2b241c" stroke-width="2.5"><path d="M32 8l24 12v24L32 56 8 44V20z"/><path d="M8 20l24 12 24-12M32 32v24"/></svg>`
};

const CATEGORIES = {
  jogos:       "Jogos",
  eletro:      "Eletrodomésticos",
  tecnologia:  "Tecnologia",
  moveis:      "Móveis",
  cozinha:     "Cozinha",
  decoracao:   "Decoração",
  casa:        "Casa e utilidades",
  ferramentas: "Ferramentas",
  livros:      "Livros e leitura",
  drones:      "Drones e bonsai",
  esporte:     "Esporte e acessórios",
  cuidados:    "Cuidados pessoais",
  pets:        "Pets",
  outros:      "Outros"
};

/* Adicione, edite ou remova itens aqui.
   ativo: true para o item aparecer na página, false para ficar escondido
   (útil pra já cadastrar o item com antecedência e só publicar quando quiser).
   category: uma das chaves de CATEGORIES acima (adicione novas categorias nos objetos ICONS e CATEGORIES se quiser).
   type: "venda" ou "doacao".
   desc: pode ser um texto simples ("Usado poucas vezes.") ou uma lista de itens
   (ex: ["FarCry", "Age of Mythology"]), que aparece como marcadores no card.
   photos: lista de fotos do item, ex: photos: ["fotos/sofa-1.jpg", "fotos/sofa-2.jpg"]
   Coloque só uma foto na lista se tiver apenas uma. Deixe photos: []
   (lista vazia) pra usar o ícone da categoria quando não tiver foto nenhuma.
   Com mais de uma foto, o card mostra um carrossel (setas, bolinhas e arraste no celular). */
const ITEMS = [
  /* ===== JOGOS ===== */
  {
    name: "First Quest - Advanced Dungeons & Dragons 2a Edition",
    ativo: true,
    category: "jogos",
    type: "venda",
    price: "R$ 1000,00",
    desc: [
        "Completo",
        "sem a caixa"
    ],      
    photos: [
        "fotos/First Quest (2).jpeg",
        "fotos/First Quest (1).jpeg"
    ]
  },
  {
    name: "Jogos de Tabuleiro",
    ativo: true,
    category: "Jogos",
    type: "venda",
    price: "Variados",
    desc: [
        "- Pega em 6! - 80,00",
        "- Viticulture - 500,00",
        "- Exploding Kittens - Inglês - 200,00",
        "- Streaking Kitten Espansão - Inglês - 50,00",
        "- Fields of Green - 180,00",
        "- Caverna: Cave vs Cave - 250,00",
        "- Coloretto - 120,00",
        "- Zombicide Rue Morgue - 450,00",
        "- War Vikings - 150,00",
        "- San Juan (2ª Edição) - 150,00",
        "- The Mind - 65,00",
        "- Deckscape - Ameaça em Londres - 30,00",
        "- Lobisomem Por Uma Noite - Montros - 50,00",
        "- Dedín + 2 cartas extras - 30,00",
        "- A Tale of Pirates - 250,00",
        "- 7 Wonders Duel - 200,00",
        "- Fields of Green Promo Pack - 65,00",
        "- Viticulture: Visitantes do Charco - 65,00",
        "- Viticulture: Visitantes do Vale do Reno - 65,00",
        "- Arkham Horror - 400,00",
        "- Futuropia - 180,00",
        "- Expansão Zombicide: Oksana, The Stunt Woman - 50,00",
        "- Expansão Zombicide: Miss Trish The Kindergarten Teacher - 50,00",
        "- Expansão Zombicide: Nikki The Gator Wrangler - 50,00",
        "- Expansão Zombicide: Patrick The Hipster - 50,00",
        "- Expansão Zombicide: Gaming Night #5: Protocolo Bluehand - 200,00",
        "- Fungi - 100,00",
        "- Village Green - 80,00",
        "- Bananagrams - 90,00",
        "- Jaipur - 150,00",
        "- Exploding Kittens - Português - 110,00",
        "- Unstable Unicorns - 100,00",
    ],
    photos: [
        "fotos/Jogos (3).jpeg",
        "fotos/Jogos (4).jpeg",
        "fotos/Jogos (5).jpeg"
    ]
  },
  {
    name: "A Tale of Pirates",
    ativo: true,
    category: "jogos",
    type: "venda",
    price: "R$ 250,00",
    desc: [
        "Jogo caótico que monta um barco na mesa",
        "Jogado até a missão 3",
        "A partir da missão 4 lacradas"
    ],
    photos: [
        "fotos/Boardgame/A Tale of Pirates.jpeg"
    ]
  },
  {
    name: "Coloretto",
    ativo: true,
    category: "jogos",
    type: "venda",
    price: "R$ 120,00",
    desc: [
        "Jogo de cartas",
        "Você precisa coletar cartas de cores diferentes para ganhar pontos",
        "Jogado umas 3 vezes"
    ],
    photos: [
        "fotos/Boardgame/coloretto.jpg"
    ]
  },
  {
    name: "Bananagrama",
    ativo: true,
    category: "jogos",
    type: "venda",
    price: "R$ 110,00",
    desc: [
        "Jogo de palavras cruzadas",
        "Jogado 1 vez"
    ],
    photos: [
        "fotos/Boardgame/Bananagrama.jpeg"
    ]
  },
  {
    name: "Futuropia",
    ativo: true,
    category: "jogos",
    type: "venda",
    price: "R$ 180,00",
    desc: [
        "Jogo de planejamento econômico. A mecânica de otimização de recursos é desafiadora e proporciona partidas estratégicas e envolventes",
        "Jogado 1 vez"
    ],
    photos: [
        "fotos/Boardgame/futuropia.jpg"
    ]
  },
  {
    name: "Lobisomem por uma Noite - Monstros",
    ativo: true,
    category: "jogos",
    type: "venda",
    price: "R$ 50,00",
    desc: [
        "Pra jogar de galera, com mecânica de dedução social. O jogo é rápido e divertido, ideal para grupos grandes.",
        "Jogado 2 vez"
    ],
    photos: [
        "fotos/Boardgame/Lobisomem por uma noite montros.jpeg"
    ]
  },
  {
    name: "The Mind",
    ativo: true,
    category: "jogos",
    type: "venda",
    price: "R$ 50,00",
    desc: [
        "Jogo de fazer sequencia númerica mas sem se comunicar. O jogo é rápido e divertido",
    ],
    photos: [
        "fotos/Boardgame/the mind.jpg"
    ]
  },
  {
    name: "Tiny Epic Dinosaur",
    ativo: false,
    category: "jogos",
    type: "venda",
    price: "R$ 200,00",
    desc: [
        "Jogo de construir um parque de dinossauros.",
        "Jogado 3 vezes"
    ],
    photos: [
        "fotos/Boardgame/tiny epic dinosaurs.jpeg"
    ]
  },
  {
    name: "Vilage Green",
    ativo: true,
    category: "jogos",
    type: "venda",
    price: "R$ 80,00",
    desc: [
        "Jogo de cartas",
        "Contruir um Jardim com as cartas",
        "Jogado 2 vezes"
    ],
    photos: [
        "fotos/Boardgame/village green.jpg"
    ]
  },
  {
    name: "War Vikings",
    ativo: true,
    category: "jogos",
    type: "venda",
    price: "R$ 150,00",
    desc: [
        "Jogo de war na tematica viking.",
        "Jogo para até 4 pessoas",
        "Jogado 2 vezes"
    ],
    photos: [
        "fotos/Boardgame/war vikings.jpg"
    ]
  },
  {
    name: "San Juan",
    ativo: true,
    category: "jogos",
    type: "venda",
    price: "R$ 150,00",
    desc: [
        "Jogo de construir uma vila com as cartas.",
        "Jogo para até 4 pessoas",
        "Jogado 3 vezes"
    ],
    photos: [
        "fotos/Boardgame/San Juan.jpeg"
    ]
  },
  {
    name: "Dedín",
    ativo: true,
    category: "jogos",
    type: "venda",
    price: "R$ 30,00",
    desc: [
        "Jogo de cartas bem rápido e divertido.",
        "Jogo para até 4 pessoas",
        "Jogado 2 vezes"
    ],
    photos: [
        "fotos/Boardgame/dedin.jpg"
    ]
  },

  /* ===== DEMAIS ITENS ===== */
  {
    name: "Duas Mesinhas de cabeceira",
    ativo: true,
    category: "moveis",
    type: "venda",
    price: "R$ 80,00",
    desc: [
        "Algumas marcas de uso (descascado)",
        "Medidas: 56cm de altura, 45cm de largura e 45cm de profundidade."
    ],
    photos: [
        "fotos/Mesinha de Cabeceira.jpeg",
        "fotos/Mesinha de Cabeceira 2.jpeg"
    ]
  },
  {
    name: "Livros",
    ativo: true,
    category: "livros",
    type: "venda",
    price: "R$ 10,00 cada",
    desc: [
        "25 livros variados - R$ 10,00 cada - levando todos faço por 200,00",
        "A Cabana - William P. Young",
        "A Travessia - William P. Young",
        "A Vingança - Christopher Reich",
        "A Hospedeira - Stephenie Meyer",
        "A Batalha do Apocalipse - Eduardo Spohr",
        "Filhos do Eden - Anjos da Morte - Eduardo Spohr",
        "Filhos do Eden - Herdeiros de Atlântida - Eduardo Spohr",
        "Ruas Estranhas - George R.R. Martin",
        "A Lei do Triunfo - Napoleon Hill",
        "Azincourt - Bernard Cornwell",
        "O Caçador de Pipas - Khaled Hosseini",
        "O Discupulo da Madrugada - Fabio de Melo",
        "Jogada Mortal - Harlan Coben",
        "Não Conte a Ninguém - Harlan Coben",
        "Os Homens que não Amavam as Mulheres - Stieg Larsson",
        "Essencial Da Estratégia - A Arte da Guerra de Sun Tzu, O Príncipe de Nicolau Maquiavel e O Livro dos Cinco Anéis de Miyamoto Musashi",
        "As Aventuras de Sherlock Holmes - Arthur Conan Doyle",
        "Ficção Científica - Isaac Asimov",
        "Eu, Robô - Isaac Asimov",
        "Tuareg - Alberto Vázquez-Figueroa",
        "O Homem mais Rico da Babilônia - George S. Clason",
        "Todos se comunicam, poucos se conectam - John C. Maxwell",
        "Mitologia Nórdica - Neil Gaiman"
    ],
    photos: [
        "fotos/Livros.jpeg"
    ]
  },
  {
    name: "Quadrinhos",
    ativo: true,
    category: "livros",
    type: "venda",
    price: "Variados",
    desc: [
        "Coleção Ragnarok - 17 volumes - Lee Myung-Jin - R$ 50,00",
        "Neon Genesis Evangelion Volume 1 - Yoshiyuki Sadamoto - R$ 20,00",
        "Batman Arkham City - Paul Dini - R$ 20,00",
        "Batman Caos em Arkham City - R$ 20,00",
        "Batman Ano Um - Frank Miller - R$ 100,00",
        "Constantine Hellblazer - Passagens Sombrias - Ian Rankin - R$ 15,00",
        "Hellblazer - Jamie Delano - R$ 50,00",
        "Hellblazer - Pandemônio - Jamie Delano - R$ 40,00",
        "Coleção Histórica Marvel - Capitão América VOlume 1 - R$ 20,00",
        "Classics Illustrated - Volume 01 - Moby Dick - R$ 15,00",
        "Classics Illustrated - Volume 07 - A Queda da Casa de Usher - R$ 15,00"
    ],
    photos: [
        "fotos/Quadrinhos.jpeg"
    ]
  },
  {
    name: "Mesa de Centro de Madeira Maciça",
    ativo: false,
    category: "moveis",
    type: "venda",
    price: "R$ 200,00",
    desc: [
        "Mesa de madeira",
        "Medidas: 60cm x 90cm x 41cm.",
        "Algumas marcas de uso"
    ],
    photos: [
        "fotos/Mesa de Centro (1).jpeg",
        "fotos/Mesa de Centro (2).jpeg",
        "fotos/Mesa de Centro (3).jpeg"
    ]
  },
  {
    name: "Adega Climatizada",
    ativo: true,
    category: "eletro",
    type: "venda",
    price: "R$ 500,00",
    desc: [
        "Adega Climatizada Electrolux 8 garrafas",
        "Medidas: 51cm x 25,5cm x 41,5cm."
    ],
    photos: [
        "fotos/Adega Climatizada (1).jpeg",
        "fotos/Adega Climatizada (5).jpeg",
        "fotos/Adega Climatizada (6).jpeg",
        "fotos/Adega Climatizada (7).jpeg",
        "fotos/Adega Climatizada (4).jpeg",
        "fotos/Adega Climatizada (3).jpeg",
        "fotos/Adega Climatizada (2).jpeg"
    ]
  },
  {
    name: "Quadro a Criação de Adão em Quebra cabeça",
    ativo: true,
    category: "decoracao",
    type: "venda",
    price: "R$ 100,00",
    desc: [
        "Medidas: 47,5cm x 33,5cm",
        "Quebra cabeça de 1000 peças mini do quadro de Michelangelo da capela sistina",
        "Moldura de madeira",
        "Vidro frontal fosco"
    ],
    photos: [
        "fotos/Quadro Criação do Homem (2).jpeg",
        "fotos/Quadro Criação do Homem (1).jpeg"
    ]
  },

  {
    name: "Quadro a Dolomitas em Quebra cabeça",
    ativo: true,
    category: "decoracao",
    type: "venda",
    price: "R$ 130,00",
    desc: [
        "Medidas: 126,5cm x 82cm",
        "Quebra cabeça de 3000 peças da montanha Dolomita",
        "Moldura de madeira",
        "Vidro frontal fosco"
    ],
    photos: [
        "fotos/Quadro Dolomita (2).jpeg",
        "fotos/Quadro Dolomita (1).jpeg"
    ]
  },
  {
    name: "Armário de Quina",
    ativo: false,
    category: "moveis",
    type: "venda",
    price: "R$ 250,00",
    desc: [
        "Armário de quina de madeira",
        "Medidas: 72,5cm x 38cm x 52,5cm e 160cm altura",
    ],
    photos: [
        "fotos/Estante de Quina (1).jpeg",
        "fotos/Estante de Quina (2).jpeg"
    ]
  },
  {
    name: "Caçarola Master Chef",
    ativo: true,
    category: "cozinha",
    type: "venda",
    price: "R$ 800,00",
    desc: [
        "Panela caçarola ferro fundido 24cm Masterchef  esmaltado vermelha",
        "NUNCA USADO"
    ],
    photos: [
        "fotos/Caçarola (2).jpeg",
        "fotos/Caçarola (1).jpeg"
    ]
  },
  {
    name: "Acessório de cozimento a vapor da linha Master Chef",
    ativo: true,
    category: "cozinha",
    type: "venda",
    price: "R$ 300,00",
    desc: [
        "Acessório de cozimento a vapor da linha MasterChef",
        "Material: Feito inteiramente em aço inoxidável de alta qualidade.",
        "Compatibilidade: Possui encaixe sob medida para panelas de 20 cm e 24 cm.",
        "Uso: Ideal para o cozimento saudável de legumes e outros alimentos, preservando nutrientes e sabores.",
        "NUNCA USADO"
    ],
    photos: [
        "fotos/Acessorio a vapor (1).jpeg",
        "fotos/Acessorio a vapor (2).jpeg"
    ]
  },
  {
    name: "Panela Wok Cuisinox 28cm",
    ativo: true,
    category: "cozinha",
    type: "venda",
    price: "R$ 300,00",
    desc: [
        "Panela Wok Cuisinox 28cm",
        "USADO POUCAS VEZES"
    ],
    photos: [
        "fotos/Wok (2).jpeg",
        "fotos/Wok (1).jpeg"
    ]
  },
  {
    name: "Computador de 32GB de memória",
    ativo: true,
    category: "tecnologia",
    type: "venda",
    price: "R$ 900,00",
    desc: [
        "- Placa mãe: Asus H170M-E D3",
        "- Fonte: Xigmatek 600w X Calibre 80 Plus Xcp A600",
        "- Processador: Intel core i5-6600",
        "- Memória 32GB: ",
        "-- Corsair vengeance ddr3 1600mhz 2x8gb  CMY16GX3M2A1600C9B",
        "-- Kingston HyperX FURY 16GB (2x8GB) 1600Mhz DDR3 CL10 Red Series - HX316C10FRK2/16."
    ],      
    photos: [
        "fotos/PC 2 (5).jpeg",
        "fotos/PC 2 (3).jpeg",
        "fotos/PC 2 (4).jpeg",
        "fotos/PC 2 (2).jpeg",
        "fotos/PC 2 (6).jpeg",
        "fotos/PC 2 (7).jpeg",
    ]
  },
  {
    name: "Cortador de Cabelo Wahl",
    ativo: true,
    category: "cuidados",
    type: "venda",
    price: "R$ 120,00",
    desc: [
        "- Cortador de Cabelo com Fio",
        "- Marca: Wahl",
        "- Com vários tamanho de pentes",
        "- Bolsa para guardar"
    ],      
    photos: [
        "fotos/Cortador de Cabelo Walh (4).jpeg",
        "fotos/Cortador de Cabelo Walh (2).jpeg",
        "fotos/Cortador de Cabelo Walh (3).jpeg",
        "fotos/Cortador de Cabelo Walh (1).jpeg"
    ]
  },
  {
    name: "Limpador de Telas Lacrado",
    ativo: true,
    category: "casa",
    type: "venda",
    price: "R$ 20,00",
    desc: [
        "Lacrado",
        "com Pano"
    ],      
    photos: [
        "fotos/Limpador de Telas (2).jpeg",
        "fotos/Limpador de Telas (1).jpeg"
    ]
  },
  {
    name: "Alça Traseira Titan Original",
    ativo: false,
    category: "outros",
    type: "venda",
    price: "R$ 100,00",
    desc: [
        "Com poucos arranhões"
    ],      
    photos: [
        "fotos/Alça traseira Titan (2).jpeg",
        "fotos/Alça traseira Titan (1).jpeg"
    ]
  },
  {
    name: "Xiaomi Mi 8 Lite 128 Gb e 6 Gb Ram",
    ativo: true,
    category: "tecnologia",
    type: "venda",
    price: "R$ 450,00",
    desc: [
        "Memória RAM: 6 GB",
        "Tem 2 câmeras traseiras de 12Mpx/5Mpx",
        "Câmera frontal de 24Mpx",
        "Memória interna de 128GB",
        "Com reconhecimento facial e sensor de impressão digital"
    ],      
    photos: [
        "fotos/xiaomi mi 8.jpeg",
        "fotos/xiaomi mi 8 (4).jpeg",
        "fotos/xiaomi mi 8 (2).jpeg",
        "fotos/xiaomi mi 8 (1).jpeg",
        "fotos/xiaomi mi 8 (3).jpeg",
    ]
  },
  {
    name: "Cantil",
    ativo: true,
    category: "cozinha",
    type: "venda",
    price: "R$ 20,00",
    desc: [
        ""
    ],      
    photos: [
        "fotos/Cantil (4).jpeg",
        "fotos/Cantil (1).jpeg",
        "fotos/Cantil (3).jpeg"
    ]
  },
  {
    name: "Mochila",
    ativo: true,
    category: "esporte",
    type: "venda",
    price: "R$ 150,00",
    desc: [
        "Nunca usado"
    ],      
    photos: [
        "fotos/Mochila (1).jpeg",
        "fotos/Mochila (2).jpeg",
        "fotos/Mochila (3).jpeg"
    ]
  },
  {
    name: "Peças Drone",
    ativo: true,
    category: "drones",
    type: "venda",
    price: "R$ 300,00",
    desc: [
        "Peças para drone",
        "nunca usado",
        "alguns pacotes aberto para conferência.",
        "Frame F330",
        "Controladora Sp Racing F3",
        "Cabo Conector Masculino XT60H-M",
        "UBEC 3A",
        "4 Racerstar RS30A Lite",
        "5 fitas 220mm para bateria",
        "4 hélices"
    ],      
    photos: [
        "fotos/Peças Drone (1).jpeg",
        "fotos/Peças Drone (2).jpeg"
    ]
  },
  {
    name: "Quadro branco pequeno + apagador",
    ativo: true,
    category: "casa",
    type: "venda",
    price: "R$ 25,00",
    desc: [
        ""
    ],      
    photos: [
        "fotos/Quadro Branco.jpeg"
    ]
  },
  {
    name: "Prateleira MDF",
    ativo: true,
    category: "moveis",
    type: "venda",
    price: "R$ 50,00",
    desc: [
        "Medidas: 80cm x 40cm x 15mm."
    ],
    photos: [
        "fotos/Prateleira (1).jpeg",
        "fotos/Prateleira (2).jpeg"
    ]
  },
  {
    name: "Alisador de barba 220v",
    ativo: false,
    category: "cuidados",
    type: "venda",
    price: "R$ 15,00",
    desc: [
        "Usado pouquíssimas vezes",
        "Tensão: 220v/60Hz"
    ],
    photos: [
        "fotos/alisador.png",
        "fotos/Alisador Barba (3).jpeg",
        "fotos/Alisador Barba (2).jpeg",
        "fotos/Alisador Barba (1).jpeg"
    ]
  },
  {
    name: "Amigurumi Peso de porta - Cartman",
    ativo: true,
    category: "decoracao",
    type: "venda",
    price: "R$ 80,00",
    desc: [
        "Amigurumi do personagem Cartman de South Park."
    ],
    photos: [
        "fotos/Amigurumi cartman (3).jpeg",
        "fotos/Amigurumi cartman (2).jpeg",
        "fotos/Amigurumi cartman (1).jpeg"
    ]
  },
  {
    name: "Arame",
    ativo: false,
    category: "drones",
    type: "venda",
    price: "R$ ",
    desc: [
        ""
    ],
    photos: [
        "fotos/Arame (2).jpeg",
        "fotos/Arame (1).jpeg"
    ]
  },
  {
    name: "Aspirador de pó Britania",
    ativo: true,
    category: "eletro",
    type: "venda",
    price: "R$ 90,00",
    desc: [
        ""
    ],
    photos: [
        "fotos/Aspirador de pó (2).jpeg",
        "fotos/Aspirador de pó (1).jpeg"
    ]
  },
  {
    name: "Bola de Futebol Americano Raiders",
    ativo: true,
    category: "esporte",
    type: "venda",
    price: "R$ 80,00",
    desc: [
        ""
    ],
    photos: [
        "fotos/Bota Futebol Americano (3).jpeg",
        "fotos/Bota Futebol Americano (2).jpeg",
        "fotos/Bota Futebol Americano (1).jpeg"
    ]
  },
  {
    name: "Cooler Retrô Wine 2 garrafas",
    ativo: true,
    category: "casa",
    type: "venda",
    price: "R$ 80,00",
    desc: [
        ""
    ],
    photos: [
        "fotos/cooler wine (1).jpeg",
        "fotos/cooler wine (3).jpeg",
        "fotos/cooler wine (2).jpeg"
    ]
  },
  {
    name: "Plugue de Tomada Inteligente Multilaser",
    ativo: true,
    category: "tecnologia",
    type: "venda",
    price: "R$ 60,00",
    desc: [
        ""
    ],
    photos: [
        "fotos/Tomada Inteligente (2).jpeg",
        "fotos/Tomada Inteligente (1).jpeg"
    ]
  },
  {
    name: "Purificador/Esterilizador de ar Sterilair Bivolt PRETO",
    ativo: true,
    category: "eletro",
    type: "venda",
    price: "R$ 420,00",
    desc: [
        ""
    ],
    photos: [
        "fotos/Purificador de ar (1).jpeg",
        "fotos/Purificador de ar (2).jpeg",
        "fotos/Purificador de ar (5).jpeg",
        "fotos/Purificador de ar (4).jpeg",
        "fotos/Purificador de ar (3).jpeg"
    ]
  },
  {
    name: "Tênis Asics Gel-Backhand Masculino",
    ativo: true,
    category: "esporte",
    type: "venda",
    price: "R$ 280,00",
    desc: [
        "tamanho 39"
    ],
    photos: [
        "fotos/Tênis de jgar tennis (1).jpeg",
        "fotos/Tênis de jgar tennis (4).jpeg",
        "fotos/Tênis de jgar tennis (2).jpeg",
        "fotos/Tênis de jgar tennis (3).jpeg",
        "fotos/Tênis de jgar tennis (6).jpeg",
        "fotos/Tênis de jgar tennis (5).jpeg"
    ]
  },
  {
    name: "Pulseira Life Vivara Placa em Couro Marrom com Aço",
    ativo: true,
    category: "esporte",
    type: "venda",
    price: "R$ 450",
    desc: [
        ""
    ],
    photos: [
        "fotos/Pulseira (3).jpeg",
        "fotos/Pulseira (4).jpeg",
        "fotos/Pulseira (1).jpeg"
    ]
  },
  {
    name: "Porta Xícara de metal",
    ativo: true,
    category: "casa",
    type: "venda",
    price: "R$ 20,00",
    desc: [
        ""
    ],
    photos: [
        "fotos/Porta Xícara.jpeg",
        "fotos/Porta Xícara (1).jpeg",
        "fotos/Porta Xícara (2).jpeg"
    ]
  },
  {
    name: "Kindle Paperwhite de 7a geração",
    ativo: true,
    category: "livros",
    type: "venda",
    price: "R$ 500,00",
    desc: [
        "- Tela: 6 polegadas com tecnologia E-Ink antirreflexo.",
        "- Resolução: 300 ppi.",
        "- Iluminação: Luz frontal integrada para leitura no escuro.",
        "- Armazenamento: 4 GB.",
        "- Conectividade: Wi-Fi e porta Micro-USB."
    ],
    photos: [
        "fotos/kindle (7).jpeg",
        "fotos/kindle (6).jpeg",
        "fotos/kindle (5).jpeg",
        "fotos/kindle (4).jpeg",
        "fotos/kindle (3).jpeg"
    ]
  },
  {
    name: "Chuveiro Eletrônico Top Jet Lorenzetti 127V (110V) 5500w Branco",
    ativo: true,
    category: "eletro",
    type: "venda",
    price: "R$ 100",
    desc: [
        "Resistência nova trocada para venda."
    ],
    photos: [
        "fotos/Chuveiro (5).jpeg",
        "fotos/Chuveiro (1).jpeg",
        "fotos/Chuveiro (4).jpeg",
        "fotos/Chuveiro (3).jpeg",
        "fotos/Chuveiro (2).jpeg"
    ]
  },
  {
    name: "Cortina 1,40 x 1,80",
    ativo: true,
    category: "casa",
    type: "venda",
    price: "R$ 40,00",
    desc: [
        ""
    ],
    photos: [
        "fotos/Cortina 1 (1).jpeg",
        "fotos/Cortina 1 (2).jpeg"
    ]
  },
  {
    name: "3 Rolos tira pêlos de silicone lavável",
    ativo: true,
    category: "casa",
    type: "venda",
    price: "R$ 45,00",
    desc: [
        ""
    ],
    photos: [
        "fotos/Removedor de pêlos (1).jpeg",
        "fotos/Removedor de pêlos (2).jpeg",
        "fotos/Removedor de pêlos (3).jpeg",
        "fotos/Removedor de pêlos (4).jpeg",
        "fotos/Removedor de pêlos pequeno (1).jpeg",
        "fotos/Removedor de pêlos pequeno (2).jpeg"
    ]
  },
  {
    name: "Utensilhos para bonsai",
    ativo: true,
    category: "drones",
    type: "venda",
    price: "R$ 150,00",
    desc: [
        "- 1kg caqueira",
        "- 2kg pedrisco",
        "- Arame 06,11 e 14 100g",
        "- 15 Porta adubos",
        "- Osmocote 15-09-12",
        "- Sementes de caliandra, piteco",
        "- Vasos de plastico",
        "- Rolo tela de drenagem"
    ],
    photos: [
        "fotos/Kit Bonsai (6).jpeg",
        "fotos/Kit Bonsai (1).jpeg",
        "fotos/Kit Bonsai (2).jpeg",
        "fotos/Kit Bonsai (3).jpeg",
        "fotos/Kit Bonsai (4).jpeg",
        "fotos/Kit Bonsai (5).jpeg",
        "fotos/Kit Bonsai (7).jpeg"
    ]
  },
  {
    name: "Drone Visuo Xs809 + Baterias",
    ativo: true,
    category: "drones",
    type: "venda",
    price: "R$ 275,00",
    desc: [
        "- Baterias extras",
        "- Hélices extras",
        "- Protetor de hélice"
    ],
    photos: [
        "fotos/Drone Visuo (1).jpeg",
        "fotos/Drone Visuo (6).jpeg",
        "fotos/Drone Visuo (4).jpeg",
        "fotos/Drone Visuo (5).jpeg",
        "fotos/Drone Visuo (3).jpeg",
        "fotos/Drone Baterias (1).jpeg",
        "fotos/Drone Visuo (2).jpeg",
        "fotos/Drone Controle (4).jpeg",
        "fotos/Drone Controle (2).jpeg",
        "fotos/Drone Controle (3).jpeg",
    ]
  },
  {
    name: "2 pré bonsais - Pitanga e Serissa",
    ativo: true,
    category: "drones",
    type: "venda",
    price: "R$ 100,00",
    desc: [
        "pré bonsai de Serissa Chinesa - 4 anos",
        "pré bonsai de Pitanga - 2,5 anos"
    ],
    photos: [
        "fotos/Bonsai Pitanga (1).jpeg",
        "fotos/Bonsai Pitanga (2).jpeg",
        "fotos/Bonsai Pitanga (3).jpeg",
        "fotos/Bonsai Pitanga (4).jpeg",
        "fotos/Bonsai Pitanga (5).jpeg",
        "fotos/Bonsai Pitanga (6).jpeg",
        "fotos/Bonsai Serissa (1).jpeg",
        "fotos/Bonsai Serissa (2).jpeg",
        "fotos/Bonsai Serissa (3).jpeg",
        "fotos/Bonsai Serissa (4).jpeg"
    ]
  },
  {
    name: "Velas de led + parafina",
    ativo: true,
    category: "decoracao",
    type: "venda",
    price: "R$ 45,00",
    desc: [
        "24 velas amarelas de led",
        "3 velas vermelhas de led",
        "10 velas brancas de parafina pequenas"
    ],
    photos: [
        "fotos/Velas Led (1).jpeg",
        "fotos/Velas Led (2).jpeg",
        "fotos/Velas Led (3).jpeg",
        "fotos/Velas Led (4).jpeg",
        "fotos/Velas.jpeg"
    ]
  },
  {
    name: "Moto Lego",
    ativo: true,
    category: "decoracao",
    type: "venda",
    price: "R$ 40,00",
    desc: [
        ""
    ],
    photos: [
        "fotos/Moto Lego (1).jpeg",
        "fotos/Moto Lego (2).jpeg"
    ]
  },
  {
    name: "Labubu",
    ativo: true,
    category: "decoracao",
    type: "venda",
    price: "R$ 20,00",
    desc: [
        ""
    ],
    photos: [
        "fotos/Labubu (1).jpeg",
        "fotos/Labubu (2).jpeg"
    ]
  },
  {
    name: "Proteção de costela e de pescoço para kart",
    ativo: true,
    category: "esporte",
    type: "venda",
    price: "R$ 200,00",
    desc: [
        ""
    ],
    photos: [
        "fotos/Protetor de costela (1).jpeg",
        "fotos/Protetor de costela (2).jpeg",
        "fotos/Protetor de costela (3).jpeg",
        "fotos/Protetor de costela (4).jpeg",
        "fotos/Protetor cervical (1).jpeg",
        "fotos/Protetor cervical (2).jpeg",
    ]
  },
  {
    name: "Bebedouro automático",
    ativo: true,
    category: "pets",
    type: "venda",
    price: "R$ ",
    desc: [
        "cabe 2 Litros de água"
    ],
    photos: [
        "fotos/Bebedouro automático.jpeg"
    ]
  },
  {
    name: "Dispensor automático de ração",
    ativo: true,
    category: "pets",
    type: "venda",
    price: "R$ ",
    desc: [
        "possui 2 tigelas separadas ideal para 2 pets",
    ],
    photos: [
        "fotos/Comedor automático.jpeg"
    ]
  },
  {
    name: "Chuveiro Acqua Duo Ultra Branco Lorenzetti",
    ativo: true,
    category: "eletro",
    type: "venda",
    price: "R$ 380,00",
    desc: [
        "- 220V 7800W"
    ],
    photos: [
        "fotos/Chuveiro 220v.jpeg",
        "fotos/Chuveiro 220v (3).jpeg"
    ]
  },
  {
    name: "Furadeira Parafusadeira Impacto Sem Fio GSB 185-LI 18V  + Pontas e Brocas",
    ativo: true,
    category: "ferramentas",
    type: "venda",
    price: "R$ 600,00",
    desc: [
        "- Kit de Pontas e Brocas Bosch V-Line 41 pçs",
        "- Maleta Bosch"
    ],
    photos: [
        "fotos/Furadeira (4).jpeg",
        "fotos/Furadeira (3).jpeg",
        "fotos/Furadeira (2).jpeg",
        "fotos/Furadeira (1).jpeg"
    ]
  },
  {
    name: "Caixa de Som Tomate mts 2026",
    ativo: true,
    category: "tecnologia",
    type: "venda",
    price: "R$ 500,00",
    desc: [
        "- Potência: 100W RMS/total",
        "- Conectividade: Bluetooth (alcance de até 12m), entrada óptica digital, RCA, Auxiliar P2 e USB",
        "- Componentes: Woofer de 116 mm e tweeter com domo de seda de 13 mm",
        "- Construção: Gabinete em MDF com acabamento madeirado e face plate removível"
    ],
    photos: [
        "fotos/Caixa de som (3).jpeg",
        "fotos/Caixa de som (2).jpeg",
        "fotos/Caixa de som (1).jpeg",
        "fotos/Caixa de som (4).jpeg"
    ]
  },
  {
    name: "Suporte de Mesa Articulado ELG F196 ",
    ativo: true,
    category: "tecnologia",
    type: "venda",
    price: "R$ 250,00",
    desc: [
        "- Possui 2 saídas USB",
        "- Suporta 2 monitores de 17 a 35 polegadas"
    ],
    photos: [
        "fotos/Braço 2 monitores (2).jpeg",
        "fotos/Braço 2 monitores (1).jpeg"
    ]
  },
  {
    name: "Naquile Pequeno Triton",
    ativo: true,
    category: "outros",
    type: "venda",
    price: "R$ 360,00",
    desc: [
        "- Rosh Artisan Prime - Marca : SAKAMOTO",
        "- Papel Alumínio - Predator Skin Edition - 50 Folhas",
        "- Papel Alumínio - Predator Classic Edition - 30 Folhas",
        "- Tela p/ Rosh - Marca : Sultan",
        "- Kit Limpeza com 2 escovas",
        "- Tapete",
        "- Naquile Pequeno Triton",
        "- Vaso",
        "- Fogareiro 110v",
        "- Abafador",
        "- Pegador"
    ],
    photos: [
        "fotos/Narguile (6).jpeg",
        "fotos/Narguile (4).jpeg",
        "fotos/Narguile (2).jpeg",
        "fotos/Narguile (3).jpeg",
        "fotos/Narguile (5).jpeg",
        "fotos/Narguile (1).jpeg",
        "fotos/Narguile (11).jpeg",
        "fotos/Narguile (12).jpeg",
        "fotos/fogareiro (1).jpeg",
        "fotos/fogareiro (2).jpeg",
        "fotos/Narguile (7).jpeg",
        "fotos/Narguile (8).jpeg",
        "fotos/Narguile (9).jpeg",
        "fotos/Narguile (10).jpeg"
    ]
  }
];