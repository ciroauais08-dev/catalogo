/* ======= CONFIGURE AQUI ======= */
const WHATSAPP_NUMBER = "5531991924908"; // troque pelo seu número, formato 55DDDNUMERO
const ITEMS_PER_PAGE = 12;

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
    name: "Chuveiro Lorenzetti Acqua duo flex 127v + resistência extra",
    ativo: true,
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
    name: "Duas Mesinhas de cabeceira",
    ativo: true,
    category: "moveis",
    type: "venda",
    price: "R$ 100,00",
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
    category: "outros",
    type: "venda",
    price: "R$ 5,00 cada",
    desc: [
        "25 livros variados - R$ 10,00 cada - levando todos faço por 200,00",
        "A Cabana - William P. Young",
        "A Travessia - William P. Young",
        "A Vingança - Christopher Reich",
        "A Hospedeira - Stephenie Meyer",
        "Harry Potter e a Pedra Filosofal - J.K. Rowling",
        "Harry Potter e a Câmara Secreta - J.K. Rowling",
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
        "Como Fazer Amigos e Influenciar Pessoas - Dale Carnegie",
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
    name: "Mesa de Centro",
    ativo: true,
    category: "moveis",
    type: "venda",
    price: "R$ 250,00",
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
    ativo: false,
    category: "eletro",
    type: "venda",
    price: "R$ 400,00",
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
    name: "Rack de Madeira",
    ativo: false,
    category: "moveis",
    type: "venda",
    price: "R$ 300,00",
    desc: [
        "Medidas: 180cm x 47cm x 56cm.",
        "Possui 4 gavetas",
        "Algumas marcas de uso"
    ],
    photos: [
        "fotos/Rack 4 gavetas (1).jpeg",
        "fotos/Rack 4 gavetas (2).jpeg"
    ]
  },
  {
    name: "Quadro a Criação de Adão",
    ativo: true,
    category: "decoracao",
    type: "venda",
    price: "R$ 80,00",
    desc: [
        "Medidas: 47,5cm x 33,5cm",
        "Quebra cabeça de 1000 peças mini do quadro de Michelangelo da capela cistina",
        "Moldura de madeira",
        "Vidro frontal fosco"
    ],
    photos: [
        "fotos/Quadro Criação do Homem (2).jpeg",
        "fotos/Quadro Criação do Homem (1).jpeg"
    ]
  },

  {
    name: "Quadro a Dolomitas",
    ativo: true,
    category: "decoracao",
    type: "venda",
    price: "R$ 100,00",
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
    ativo: true,
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
    name: "Mesa de 6 Lugares",
    ativo: false,
    category: "moveis",
    type: "venda",
    price: "R$ 2500,00",
    desc: [
        "Medidas: 180cm x 90cm x 80cm",
        "Mesa de Laca Preto",
        "6 lugares",
        "quinas arredondadas",
        "Pé em X de madeira maciça",
        "Tecido das cadeiras com marcas de uso"
    ],
    photos: [
        "fotos/Mesa (1).jpeg",
        "fotos/Mesa (3).jpeg",
        "fotos/Mesa (4).jpeg",
        "fotos/Mesa (2).jpeg",
        "fotos/Mesa (5).jpeg",
        "fotos/Mesa (6).jpeg",
        "fotos/Mesa (7).jpeg"
    ]
  },
  {
    name: "Escova Rotativa",
    ativo: true,
    category: "eletro",
    type: "venda",
    price: "R$ 100,00",
    desc: [
        "Secador de cabelo giratório",
        "Marca: MONDIAL",
        "Modelo: ER-11-AR",
        "Potência: 1000W",
        "Voltagem: 127V"
    ],
    photos: [
        "fotos/Secador Giratório (1).jpeg",
        "fotos/Secador Giratório (2).jpeg",
        "fotos/Secador Giratório (3).jpeg"
    ]
  },
  {
    name: "Caçarola Master Chef",
    ativo: true,
    category: "cozinha",
    type: "venda",
    price: "R$ 1400,00",
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
    price: "R$ 400,00",
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
    price: "R$ 400,00",
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
    name: "Capacete EBF Spark Spider 58",
    ativo: true,
    category: "cozinha",
    type: "venda",
    price: "R$ 180,00",
    desc: [
        "Tamanho 58",
        "Muito novo, usado poucas vezes (comprei recente)",
        "Infelizmente acabou arranhando nas laterais atrás por ter ficado no baú"
    ],
    photos: [
        "fotos/Capacete (5).jpeg",
        "fotos/Capacete (1).jpeg",
        "fotos/Capacete (6).jpeg",
        "fotos/Capacete (7).jpeg",
        "fotos/Capacete (2).jpeg",
        "fotos/Capacete (3).jpeg",
    ]
  },
  {
    name: "Carregador Digital Inteligente de Pilhas Nitecore D4",
    ativo: true,
    category: "outros",
    type: "venda",
    price: "R$ 200,00",
    desc: [
        "Principais Características",
        "- Quatro canais: Carrega até quatro baterias ao mesmo tempo. Cada slot funciona de modo independente.",
        "- Tela LCD: Mostra o status da carga, a voltagem, a corrente e o tempo de uso em tempo real.",
        "- Segurança: Protege contra inversão de polaridade, curto-circuito e excesso de carga. O aparelho desliga sozinho quando o processo termina.",
        "- Botões laterais: Permitem mudar configurações ou escolher o tipo de bateria manualmente, se necessário.",
        "Baterias Compatíveis",
        "- Líthium (Li-ion e IMR): 26650, 18650, 14500, 16340 e outras medidas comuns.",
        "- Níquel (Ni-MH e Ni-Cd): Tamanhos AA, AAA, AAAA e C.",
        "- LiFePO4: Exige seleção manual pelo botão de modo"
    ],      
    photos: [
        "fotos/Vaper Carregador.jpeg"
    ]
  },
  {
    name: "Computador de 32GB de memória",
    ativo: true,
    category: "outros",
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
    category: "outros",
    type: "venda",
    price: "R$ 150,00",
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
    name: "Alisador de barba",
    ativo: true,
    category: "outros",
    type: "venda",
    price: "R$ 15,00",
    desc: [
        "Usado pouquíssimas vezes",
        "Voltagem: 220v/60Hz"
    ],      
    photos: [
        "fotos/Alisador Barba (3).jpeg",
        "fotos/Alisador Barba (2).jpeg"
    ]
  },
  {
    name: "Limpador de Telas Lacrado",
    ativo: true,
    category: "outros",
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
    name: "Power Bank 30000mah Turbo 22.5w",
    ativo: true,
    category: "outros",
    type: "venda",
    price: "R$ 100,00",
    desc: [
        "Turbo 3000mah",
        "Conector USB-c e lightning.",
        "Lanterna traseira"
    ],      
    photos: [
        "fotos/PowerBank (1).jpeg",
        "fotos/PowerBank (2).jpeg",
        "fotos/PowerBank (3).jpeg",
        "fotos/PowerBank (5).jpeg",
        "fotos/PowerBank (4).jpeg"
    ]
  },
  {
    name: "Alça Traseira Titan Original",
    ativo: true,
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
    name: "Arroz Japonês TaiChiMai 5kg",
    ativo: true,
    category: "outros",
    type: "venda",
    price: "R$ 120,00",
    desc: [
        "Grãos curtos ideais para sushi e pratos orientais.",
        "Embalagem de 5kg para maior conveniência e economia."
    ],      
    photos: [
        "fotos/Arroz Japones (2).jpeg",
        "fotos/Arroz Japones (1).jpeg",
        "fotos/Arroz Japones (3).jpeg"
    ]
  },
  {
    name: "Xiaomi Mi 8 Lite 128 Gb e 6 Gb Ram",
    ativo: true,
    category: "outros",
    type: "venda",
    price: "R$ 530,00",
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
    name: "Bandeja com pé",
    ativo: true,
    category: "cozinha",
    type: "venda",
    price: "R$ 25,00",
    desc: [
        "Usado 2x apenas"
    ],      
    photos: [
        "fotos/Bandeja (1).jpeg",
        "fotos/Bandeja (2).jpeg"
    ]
  },
  {
    name: "Caixa e Garrafa Vazia",
    ativo: true,
    category: "cozinha",
    type: "venda",
    price: "R$ 25,00",
    desc: [
        "Vazia"
    ],      
    photos: [
        "fotos/Caixa e Garrafa Vazia.jpeg"
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
    name: "Copos de Cerveja",
    ativo: true,
    category: "cozinha",
    type: "venda",
    price: "R$ 50,00",
    desc: [
        "Vários copos de cerveja estilos diferentes"
    ],      
    photos: [
        "fotos/Copos Cerveja (2).jpeg",
        "fotos/Copos Cerveja (1).jpeg"
    ]
  },
  {
    name: "Copos de Cerveja",
    ativo: true,
    category: "cozinha",
    type: "venda",
    price: "R$ 50,00",
    desc: [
        "Vários copos de cerveja estilos diferentes"
    ],      
    photos: [
        "fotos/Copos (2).jpeg",
        "fotos/Copos (1).jpeg"
    ]
  },
  {
    name: "Mochila Philips",
    ativo: true,
    category: "outros",
    type: "venda",
    price: "R$ 180,00",
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
    category: "outros",
    type: "venda",
    price: "R$ 350,00",
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
        "fotos/Peças Drone (2).jpeg",
        "fotos/Peças Drone (1).jpeg"
    ]
  },
  {
    name: "Quadro branco pequeno + apagador",
    ativo: true,
    category: "outros",
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
    name: "First Quest - Advanced Dungeons & Dragons 2a Edition",
    ativo: true,
    category: "jogos",
    type: "venda",
    price: "R$ 1200,00",
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
    name: "A Tale of Pirates",
    ativo: true,
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
    name: "Coloretto",
    ativo: true,
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
    name: "Bananagrama",
    ativo: true,
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
    name: "Futuropia",
    ativo: true,
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
    ativo: true,
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
    name: "Vilage Green",
    ativo: true,
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
    name: "War Vikings",
    ativo: true,
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
    name: "San Juan",
    ativo: true,
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
    name: "Dedín",
    ativo: true,
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
  }
];