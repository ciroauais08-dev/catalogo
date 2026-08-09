/* ======= CONFIGURE AQUI ======= */
const WHATSAPP_NUMBER = "5531991924908"; // troque pelo seu número, formato 55DDDNUMERO
const ITEMS_PER_PAGE = 10;

const ICONS = {
  moveis: `<svg viewBox="0 0 64 64" fill="none" stroke="#2b241c" stroke-width="2.5"><rect x="8" y="26" width="48" height="18" rx="2"/><path d="M10 44v8M54 44v8"/><path d="M8 26v-6a6 6 0 0 1 6-6h36a6 6 0 0 1 6 6v6"/></svg>`,
  eletro: `<svg viewBox="0 0 64 64" fill="none" stroke="#2b241c" stroke-width="2.5"><rect x="14" y="8" width="36" height="48" rx="3"/><circle cx="32" cy="34" r="10"/><path d="M20 16h6"/></svg>`,
  cozinha: `<svg viewBox="0 0 64 64" fill="none" stroke="#2b241c" stroke-width="2.5"><path d="M18 8v20a10 10 0 0 0 10 10v18M18 8v14M26 8v14"/><path d="M46 8c-6 4-6 12-2 16l2 2v30"/></svg>`,
  decoracao: `<svg viewBox="0 0 64 64" fill="none" stroke="#2b241c" stroke-width="2.5"><rect x="10" y="10" width="44" height="34" rx="2"/><path d="M10 34l12-12 10 10 10-14 12 16"/><circle cx="20" cy="20" r="3"/></svg>`,
  jogos: `<svg viewBox="0 0 64 64" fill="none" stroke="#2b241c" stroke-width="2.5"><rect x="10" y="10" width="44" height="34" rx="2"/><path d="M10 34l12-12 10 10 10-14 12 16"/><circle cx="20" cy="20" r="3"/></svg>`,
  outros: `<svg viewBox="0 0 64 64" fill="none" stroke="#2b241c" stroke-width="2.5"><path d="M32 8l24 12v24L32 56 8 44V20z"/><path d="M8 20l24 12 24-12M32 32v24"/></svg>`
};

const CATEGORIES = {
  moveis:   "Móveis",
  eletro:   "Eletrodomésticos",
  cozinha:  "Cozinha",
  decoracao:"Decoração",
  jogos:    "Jogos",
  outros:   "Outros"
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
  {
    ativo: true,
    name: "Jogos de pc",
    category: "jogos",
    type: "venda",
    price: "R$ 5,00 cada",
    desc: [
        "FarCry",
        "Senhor dos Anéis - O Retorno do Rei",
        "Age of Mythology",
        "Byzantine",
        "Lego Indiana Jones"
    ],
    photos: [
        "fotos/Jogos PC.jpeg"
    ]
  },
  {
    ativo: true,
    name: "Chuveiro Lorenzetti Acqua duo flex 127v + resistência extra",
    category: "eletro",
    type: "venda",
    price: "R$ 450,00",
    desc: [
        "Nunca usado, funcionando perfeitamente",
        "1 resistência extra."
    ],
    photos: [
        "fotos/Chuveiro.jpeg",
        "fotos/Chuveiro 2.jpeg"
    ]
  },
  {
    ativo: true,
    name: "Duas Mesinhas de cabeceira",
    category: "moveis",
    type: "venda",
    price: "R$ 50,00",
    desc: [
        "Algumas marcas de uso (descascado)",
        "Medidas: 50cm de altura, 40cm de largura e 30cm de profundidade."
    ],
    photos: [
        "fotos/Mesinha de Cabeceira.jpeg",
        "fotos/Mesinha de Cabeceira 2.jpeg"
    ]
  },
  {
    ativo: true,
    name: "Monitor AOC LCD",
    category: "eletro",
    type: "venda",
    price: "R$ 100,00",
    desc: [
        "50/60Hz",
        "19,5 polegadas",
        "Resolução: ",
        "Entrada VGA e HDMI"
    ],
    photos: [
        "fotos/Monitor.jpeg",
        "fotos/Monitor2.jpeg",
        "fotos/Monitor3.jpeg"
    ]
  },
  {
    ativo: true,
    name: "Poltronas Estofadas Azul",
    category: "moveis",
    type: "venda",
    price: "R$ 200,00",
    desc: [
        "Poltrona de 1 lugar",
        "Namoradeira de 2 lugares",
        "Pé palito em madeira",
        "Tecido suede azul", 
        "Estrutura de madeira",
        "Medidas da poltrona: 0,80m x 0,80m x 0,90m",
        "Medidas da namoradeira: 1,40m x 0,80m x 0,90m",
        "Assento da namoradeira deformado",
        "Tecido da poltrona levemente desbotado"
    ],
    photos: [
        "fotos/Namoradeira.jpeg",
        "fotos/Poltrona.jpeg"
    ]
  },
  {
    ativo: true,
    name: "Ukulele",
    category: "outros",
    type: "venda",
    price: "R$ 200,00",
    desc: [
        "Usado poucas vezes",
        "Funcionando perfeitamente",
        "Marca: SHELBY",
        "Modelo SU23M",
        "Cordas: Nylon",
        "Dimensões: 23",
        "Concerto: acústico (23)"
    ],
    photos: [
        "fotos/Ukulele 1.jpeg",
        "fotos/Ukulele.jpeg",
        "fotos/Ukulele 2.jpeg"
    ]
  },
  {
    ativo: true,
    name: "Violão Gianini",
    category: "outros",
    type: "venda",
    price: "R$ 200,00",
    desc: [
        "Usado poucas vezes",
        "Marca: GIANINI",
        "Série estudo",
        "Modelo: GCE-14",
        "Cordas: Nylon",
        "Cavalete descolado",
        "Acomapanha capa protetora"
    ],
    photos: [
        "fotos/Violão 1.jpeg",
        "fotos/Violão 2.jpeg",
        "fotos/Violão 3.jpeg"
    ]
  },
  {
    ativo: true,
    name: "Livros",
    category: "outros",
    type: "venda",
    price: "R$ 5,00 cada",
    desc: [
        "A Cabana - William P. Young",
        "A Travessia - William P. Young",
        "A Vingança - Christopher Reich",
        "A Hospedeira - Stephenie Meyer",
        "Harry Potter e a Pedra Filosofal - J.K. Rowling",
        "Harry Potter e a Câmara Secreta - J.K. Rowling",
        "A Batalha do Apocalipse - Eduardo Spohr",
        "Filhos do Edenm - Anjos da Morte - Eduardo Spohr",
        "Filhops do Eden - Herdeiros de Atlântida - Eduardo Spohr",
        "Ruas Estranhas - George R.R. Martin",
        "A Lei do Triunfo - Napoleon Hill",
        "Azincourt - Bernard Cornwell",
        "O Caçador de Pipas - Khaled Hosseini",
        "O Discupulo da Madrugada - Fabio de Melo",
        "Jogada Mortal - Harlan Coben",
        "Não Conte a Ninguém - Harlan Coben",
        "Os Homens que não Amavam as Mulheres - Stieg Larsson",
        "Como Fazer Amigos e Influenciar Pessoas - Dale Carnegie",
        "Essencial Da Estratégia - A Arte da Guerra de Sun Tzu, O Príncipe de Nicolau Maquiavel e O Livro dos Cinco Anéis de Miyamoto Musashi",
        "As Aventuras de Sherlock Holmes - Arthur Conan Doyle",
        "Ficção Científica - Isaac Asimov",
        "Eu, Robô - Isaac Asimov",
        "Tuareg - Alberto Vázquez-Figueroa",
        "O Homem mais Rico da Babilônia - George S. Clason",
        "Todos se comunicam, poucos se conectam - John C. Maxwell",
    ],
    photos: [
        "fotos/Livros.jpeg"
    ]
  },
  {
    ativo: true,
    name: "Quadrinhos",
    category: "outros",
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
    ativo: true,
    name: "A Tale of Pirates",
    category: "jogos",
    type: "venda",
    price: "R$ 450,00",
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
    ativo: true,
    name: "Coloretto",
    category: "jogos",
    type: "venda",
    price: "R$ 20,00",
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
    ativo: true,
    name: "Bananagrama",
    category: "jogos",
    type: "venda",
    price: "R$ 50,00",
    desc: [
        "Jogo de palavras cruzadas",
        "Jogado 1 vez"
    ],
    photos: [
        "fotos/Boardgame/Bananagrama.jpeg"
    ]
  },
  {
    ativo: true,
    name: "Futuropia",
    category: "jogos",
    type: "venda",
    price: "R$ 50,00",
    desc: [
        "Jogo de planejamento econômico. A mecânica de otimização de recursos é desafiadora e proporciona partidas estratégicas e envolventes",
        "Jogado 1 vez"
    ],
    photos: [
        "fotos/Boardgame/futuropia.jpg"
    ]
  },
  {
    ativo: true,
    name: "Lobisomem por uma Noite - Monstros",
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
    ativo: true,
    name: "Saboteur",
    category: "jogos",
    type: "venda",
    price: "R$ 50,00",
    desc: [
        "Pra jogar de galera, com mecânica de dedução social. O jogo é rápido e divertido, ideal para grupos grandes.",
    ],
    photos: [
        "fotos/Boardgame/Saboteur.jpeg"
    ]
  },
  {
    ativo: true,
    name: "The Mind",
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
    ativo: true,
    name: "Tiny Epic Dinosaur",
    category: "jogos",
    type: "venda",
    price: "R$ 50,00",
    desc: [
        "Jogo de construir um parque de dinossauros.",
        "Jogado 3 vezes"
    ],
    photos: [
        "fotos/Boardgame/tiny epic dinosaurs.jpeg"
    ]
  },
  {
    ativo: true,
    name: "Vilage Green",
    category: "jogos",
    type: "venda",
    price: "R$ 50,00",
    desc: [
        "Jogo de cartas",
        "Contruir um Jardimcom as cartas",
        "Jogado 2 vezes"
    ],
    photos: [
        "fotos/Boardgame/village green.jpg"
    ]
  },
  {
    ativo: true,
    name: "War Vikings",
    category: "jogos",
    type: "venda",
    price: "R$ 50,00",
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
    ativo: true,
    name: "San Juan",
    category: "jogos",
    type: "venda",
    price: "R$ 50,00",
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
    ativo: true,
    name: "Dedin",
    category: "jogos",
    type: "venda",
    price: "R$ 50,00",
    desc: [
        "Jogo de cartas bem rápido e divertido.",
        "Jogo para até 4 pessoas",
        "Jogado 2 vezes"
    ],
    photos: [
        "fotos/Boardgame/dedin.jpg"
    ]
  },
];