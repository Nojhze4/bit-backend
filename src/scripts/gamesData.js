const playstationGames = [
  {
    name: "Marvel's Spider-Man 2",
    consola: "PlayStation",
    genero: "Acción",
    descripcion: "Peter Parker y Miles Morales unen fuerzas en una nueva aventura.",
    precio: 279960,
    stock: 30,
    developer: "Insomniac Games",
    publisher: "Sony Interactive Entertainment",
    releaseYear: 2023,
    rating: "T",
    multiplayer: false
  },
  {
    name: "Final Fantasy XVI",
    consola: "PlayStation",
    genero: "RPG",
    descripcion: "Nueva entrega de la legendaria saga de rol.",
    precio: 279960,
    stock: 25,
    developer: "Square Enix",
    publisher: "Square Enix",
    releaseYear: 2023,
    rating: "M",
    multiplayer: false
  },
  {
    name: "God of War Ragnarök",
    consola: "PlayStation",
    genero: "Acción",
    descripcion: "La épica continuación de la saga nórdica de Kratos.",
    precio: 279960,
    stock: 28,
    developer: "Santa Monica Studio",
    publisher: "Sony Interactive Entertainment",
    releaseYear: 2022,
    rating: "M",
    multiplayer: false
  },
  {
    name: "Horizon Forbidden West",
    consola: "PlayStation",
    genero: "Acción",
    descripcion: "Explora un mundo post-apocalíptico lleno de máquinas.",
    precio: 239960,
    stock: 22,
    developer: "Guerrilla Games",
    publisher: "Sony Interactive Entertainment",
    releaseYear: 2022,
    rating: "T",
    multiplayer: false
  },
  {
    name: "Gran Turismo 7",
    consola: "PlayStation",
    genero: "Carreras",
    descripcion: "Simulación de carreras realista con cientos de autos.",
    precio: 239960,
    stock: 30,
    developer: "Polyphony Digital",
    publisher: "Sony Interactive Entertainment",
    releaseYear: 2022,
    rating: "E",
    multiplayer: true
  },
  {
    name: "Ratchet & Clank: Rift Apart",
    consola: "PlayStation",
    genero: "Plataformas",
    descripcion: "Aventura interdimensional con gráficos de nueva generación.",
    precio: 279960,
    stock: 20,
    developer: "Insomniac Games",
    publisher: "Sony Interactive Entertainment",
    releaseYear: 2021,
    rating: "E10+",
    multiplayer: false
  },
  {
    name: "Demon's Souls",
    consola: "PlayStation",
    genero: "RPG",
    descripcion: "Remake del clásico juego de rol y acción.",
    precio: 279960,
    stock: 18,
    developer: "Bluepoint Games",
    publisher: "Sony Interactive Entertainment",
    releaseYear: 2020,
    rating: "M",
    multiplayer: true
  },
  {
    name: "Returnal",
    consola: "PlayStation",
    genero: "Shooter",
    descripcion: "Roguelike de acción en tercera persona.",
    precio: 279960,
    stock: 15,
    developer: "Housemarque",
    publisher: "Sony Interactive Entertainment",
    releaseYear: 2021,
    rating: "M",
    multiplayer: false
  },
  {
    name: "Sackboy: A Big Adventure",
    consola: "PlayStation",
    genero: "Plataformas",
    descripcion: "Aventura cooperativa de plataformas.",
    precio: 239960,
    stock: 25,
    developer: "Sumo Digital",
    publisher: "Sony Interactive Entertainment",
    releaseYear: 2020,
    rating: "E",
    multiplayer: true
  },
  {
    name: "Astro's Playroom",
    consola: "PlayStation",
    genero: "Plataformas",
    descripcion: "Juego de demostración de las capacidades del DualSense.",
    precio: 0,
    stock: 100,
    developer: "Team Asobi",
    publisher: "Sony Interactive Entertainment",
    releaseYear: 2020,
    rating: "E",
    multiplayer: false
  },
  {
    name: "Death Stranding Director's Cut",
    consola: "PlayStation",
    genero: "Aventura",
    descripcion: "Versión mejorada del juego de Hideo Kojima.",
    precio: 159960,
    stock: 12,
    developer: "Kojima Productions",
    publisher: "Sony Interactive Entertainment",
    releaseYear: 2021,
    rating: "M",
    multiplayer: false
  },
  {
    name: "Ghost of Tsushima Director's Cut",
    consola: "PlayStation",
    genero: "Acción",
    descripcion: "Aventura samurái en la isla de Tsushima.",
    precio: 239960,
    stock: 20,
    developer: "Sucker Punch Productions",
    publisher: "Sony Interactive Entertainment",
    releaseYear: 2021,
    rating: "M",
    multiplayer: true
  },
  {
    name: "The Last of Us Part I",
    consola: "PlayStation",
    genero: "Acción",
    descripcion: "Remake del clásico juego de Naughty Dog.",
    precio: 279960,
    stock: 18,
    developer: "Naughty Dog",
    publisher: "Sony Interactive Entertainment",
    releaseYear: 2022,
    rating: "M",
    multiplayer: false
  },
  {
    name: "Uncharted: Legacy of Thieves Collection",
    consola: "PlayStation",
    genero: "Aventura",
    descripcion: "Colección remasterizada de Uncharted 4 y Lost Legacy.",
    precio: 199960,
    stock: 15,
    developer: "Naughty Dog",
    publisher: "Sony Interactive Entertainment",
    releaseYear: 2022,
    rating: "T",
    multiplayer: false
  },
  {
    name: "Resident Evil 4 Remake",
    consola: "PlayStation",
    genero: "Acción",
    descripcion: "Remake del clásico survival horror.",
    precio: 239960,
    stock: 25,
    developer: "Capcom",
    publisher: "Capcom",
    releaseYear: 2023,
    rating: "M",
    multiplayer: false
  },
  {
    name: "Street Fighter 6",
    consola: "PlayStation",
    genero: "Lucha",
    descripcion: "Nueva entrega de la legendaria saga de lucha.",
    precio: 239960,
    stock: 20,
    developer: "Capcom",
    publisher: "Capcom",
    releaseYear: 2023,
    rating: "T",
    multiplayer: true
  },
  {
    name: "Mortal Kombat 1",
    consola: "PlayStation",
    genero: "Lucha",
    descripcion: "Reinicio de la saga Mortal Kombat.",
    precio: 279960,
    stock: 22,
    developer: "NetherRealm Studios",
    publisher: "Warner Bros. Games",
    releaseYear: 2023,
    rating: "M",
    multiplayer: true
  },
  {
    name: "Dead Space Remake",
    consola: "PlayStation",
    genero: "Acción",
    descripcion: "Remake del clásico survival horror espacial.",
    precio: 279960,
    stock: 16,
    developer: "Motive Studio",
    publisher: "Electronic Arts",
    releaseYear: 2023,
    rating: "M",
    multiplayer: false
  },
  {
    name: "Call of Duty: Modern Warfare III",
    consola: "PlayStation",
    genero: "Shooter",
    descripcion: "Nueva entrega de la saga Call of Duty.",
    precio: 279960,
    stock: 35,
    developer: "Sledgehammer Games",
    publisher: "Activision",
    releaseYear: 2023,
    rating: "M",
    multiplayer: true
  },
  {
    name: "Assassin's Creed Mirage",
    consola: "PlayStation",
    genero: "Acción",
    descripcion: "Regreso a las raíces de la saga Assassin's Creed.",
    precio: 239960,
    stock: 28,
    developer: "Ubisoft",
    publisher: "Ubisoft",
    releaseYear: 2023,
    rating: "M",
    multiplayer: false
  }
];

const xboxGames = [
  {
    name: "Starfield",
    consola: "Xbox",
    genero: "RPG",
    descripcion: "Explora el espacio en el nuevo RPG de Bethesda.",
    precio: 279960,
    stock: 28,
    developer: "Bethesda Game Studios",
    publisher: "Bethesda Softworks",
    releaseYear: 2023,
    rating: "M",
    multiplayer: false
  },
  {
    name: "Forza Motorsport",
    consola: "Xbox",
    genero: "Carreras",
    descripcion: "Simulación de carreras de nueva generación.",
    precio: 279960,
    stock: 32,
    developer: "Turn 10 Studios",
    publisher: "Xbox Game Studios",
    releaseYear: 2023,
    rating: "E",
    multiplayer: true
  },
  {
    name: "Halo Infinite",
    consola: "Xbox",
    genero: "Shooter",
    descripcion: "La última entrega de la saga Halo con multijugador gratuito.",
    precio: 239960,
    stock: 28,
    developer: "343 Industries",
    publisher: "Xbox Game Studios",
    releaseYear: 2021,
    rating: "T",
    multiplayer: true
  },
  {
    name: "Forza Horizon 5",
    consola: "Xbox",
    genero: "Carreras",
    descripcion: "Mundo abierto de carreras ambientado en México.",
    precio: 239960,
    stock: 32,
    developer: "Playground Games",
    publisher: "Xbox Game Studios",
    releaseYear: 2021,
    rating: "E",
    multiplayer: true
  },
  {
    name: "Gears 5",
    consola: "Xbox",
    genero: "Shooter",
    descripcion: "Acción en tercera persona con Kait Diaz.",
    precio: 159960,
    stock: 20,
    developer: "The Coalition",
    publisher: "Xbox Game Studios",
    releaseYear: 2019,
    rating: "M",
    multiplayer: true
  },
  {
    name: "Microsoft Flight Simulator",
    consola: "Xbox",
    genero: "Simulación",
    descripcion: "Simulador de vuelo más realista del mundo.",
    precio: 239960,
    stock: 15,
    developer: "Asobo Studio",
    publisher: "Xbox Game Studios",
    releaseYear: 2021,
    rating: "E",
    multiplayer: true
  },
  {
    name: "Sea of Thieves",
    consola: "Xbox",
    genero: "Aventura",
    descripcion: "Aventura pirata multijugador en mundo abierto.",
    precio: 159960,
    stock: 25,
    developer: "Rare",
    publisher: "Xbox Game Studios",
    releaseYear: 2018,
    rating: "T",
    multiplayer: true
  },
  {
    name: "State of Decay 3",
    consola: "Xbox",
    genero: "Acción",
    descripcion: "Survival horror con gestión de comunidad.",
    precio: 239960,
    stock: 18,
    developer: "Undead Labs",
    publisher: "Xbox Game Studios",
    releaseYear: 2024,
    rating: "M",
    multiplayer: true
  },
  {
    name: "Fable",
    consola: "Xbox",
    genero: "RPG",
    descripcion: "Nueva entrega de la saga de rol fantástico.",
    precio: 279960,
    stock: 22,
    developer: "Playground Games",
    publisher: "Xbox Game Studios",
    releaseYear: 2024,
    rating: "T",
    multiplayer: false
  },
  {
    name: "Avowed",
    consola: "Xbox",
    genero: "RPG",
    descripcion: "RPG de fantasía de Obsidian Entertainment.",
    precio: 279960,
    stock: 20,
    developer: "Obsidian Entertainment",
    publisher: "Xbox Game Studios",
    releaseYear: 2024,
    rating: "M",
    multiplayer: false
  },
  {
    name: "Hellblade II: Senua's Saga",
    consola: "Xbox",
    genero: "Acción",
    descripcion: "Secuela del aclamado Hellblade: Senua's Sacrifice.",
    precio: 279960,
    stock: 16,
    developer: "Ninja Theory",
    publisher: "Xbox Game Studios",
    releaseYear: 2024,
    rating: "M",
    multiplayer: false
  },
  {
    name: "Perfect Dark",
    consola: "Xbox",
    genero: "Shooter",
    descripcion: "Reinicio de la saga Perfect Dark.",
    precio: 279960,
    stock: 18,
    developer: "The Initiative",
    publisher: "Xbox Game Studios",
    releaseYear: 2024,
    rating: "M",
    multiplayer: true
  },
  {
    name: "Everwild",
    consola: "Xbox",
    genero: "Aventura",
    descripcion: "Aventura mágica de Rare.",
    precio: 239960,
    stock: 20,
    developer: "Rare",
    publisher: "Xbox Game Studios",
    releaseYear: 2024,
    rating: "E",
    multiplayer: true
  },
  {
    name: "Contraband",
    consola: "Xbox",
    genero: "Acción",
    descripcion: "Juego de contrabando cooperativo.",
    precio: 239960,
    stock: 15,
    developer: "Avalanche Studios",
    publisher: "Xbox Game Studios",
    releaseYear: 2024,
    rating: "M",
    multiplayer: true
  },
  {
    name: "Redfall",
    consola: "Xbox",
    genero: "Shooter",
    descripcion: "Shooter cooperativo de vampiros.",
    precio: 279960,
    stock: 12,
    developer: "Arkane Studios",
    publisher: "Bethesda Softworks",
    releaseYear: 2023,
    rating: "M",
    multiplayer: true
  },
  {
    name: "Deathloop",
    consola: "Xbox",
    genero: "Acción",
    descripcion: "Juego de acción con mecánicas de bucle temporal.",
    precio: 239960,
    stock: 18,
    developer: "Arkane Studios",
    publisher: "Bethesda Softworks",
    releaseYear: 2021,
    rating: "M",
    multiplayer: false
  },
  {
    name: "Psychonauts 2",
    consola: "Xbox",
    genero: "Plataformas",
    descripcion: "Aventura de plataformas psicodélica.",
    precio: 239960,
    stock: 22,
    developer: "Double Fine",
    publisher: "Xbox Game Studios",
    releaseYear: 2021,
    rating: "T",
    multiplayer: false
  },
  {
    name: "Ori and the Will of the Wisps",
    consola: "Xbox",
    genero: "Plataformas",
    descripcion: "Aventura de plataformas metroidvania.",
    precio: 119960,
    stock: 25,
    developer: "Moon Studios",
    publisher: "Xbox Game Studios",
    releaseYear: 2020,
    rating: "E",
    multiplayer: false
  },
  {
    name: "Grounded",
    consola: "Xbox",
    genero: "Supervivencia",
    descripcion: "Survival horror donde eres del tamaño de un insecto.",
    precio: 159960,
    stock: 20,
    developer: "Obsidian Entertainment",
    publisher: "Xbox Game Studios",
    releaseYear: 2022,
    rating: "T",
    multiplayer: true
  },
  {
    name: "Pentiment",
    consola: "Xbox",
    genero: "Aventura",
    descripcion: "Juego narrativo ambientado en la Alemania del siglo XVI.",
    precio: 79960,
    stock: 15,
    developer: "Obsidian Entertainment",
    publisher: "Xbox Game Studios",
    releaseYear: 2022,
    rating: "T",
    multiplayer: false
  },
  {
    name: "Hi-Fi Rush",
    consola: "Xbox",
    genero: "Acción",
    descripcion: "Juego de acción rítmico con estética cel-shaded.",
    precio: 119960,
    stock: 18,
    developer: "Tango Gameworks",
    publisher: "Bethesda Softworks",
    releaseYear: 2023,
    rating: "T",
    multiplayer: false
  }
];

export const nintendoGames = [
  {
    name: "The Legend of Zelda: Tears of the Kingdom",
    consola: "Nintendo",
    genero: "Aventura",
    descripcion: "La esperada secuela de Breath of the Wild",
    precio: 279960,
    stock: 40,
    developer: "Nintendo",
    publisher: "Nintendo",
    releaseYear: 2023,
    rating: "E10+",
    multiplayer: false
  },
  {
    name: "Super Mario Bros. Wonder",
    consola: "Nintendo",
    genero: "Plataformas",
    descripcion: "Nueva aventura de Mario con gráficos 2D mejorados",
    precio: 239960,
    stock: 35,
    developer: "Nintendo",
    publisher: "Nintendo",
    releaseYear: 2023,
    rating: "E",
    multiplayer: true
  },
  {
    name: "Pokémon Scarlet & Violet",
    consola: "Nintendo",
    genero: "RPG",
    descripcion: "Nueva generación de Pokémon en mundo abierto",
    precio: 239960,
    stock: 45,
    developer: "Game Freak",
    publisher: "Nintendo",
    releaseYear: 2022,
    rating: "E",
    multiplayer: true
  },
  {
    name: "Splatoon 3",
    consola: "Nintendo",
    genero: "Shooter",
    descripcion: "Juego de pintura competitivo multijugador",
    precio: 239960,
    stock: 30,
    developer: "Nintendo",
    publisher: "Nintendo",
    releaseYear: 2022,
    rating: "E10+",
    multiplayer: true
  },
  {
    name: "Mario Kart 8 Deluxe",
    consola: "Nintendo",
    genero: "Carreras",
    descripcion: "El mejor Mario Kart con todos los DLC incluidos",
    precio: 199960,
    stock: 50,
    developer: "Nintendo",
    publisher: "Nintendo",
    releaseYear: 2017,
    rating: "E",
    multiplayer: true
  },
  {
    name: "Animal Crossing: New Horizons",
    consola: "Nintendo",
    genero: "Simulación",
    descripcion: "Construye tu isla perfecta en este juego de simulación",
    precio: 199960,
    stock: 40,
    developer: "Nintendo",
    publisher: "Nintendo",
    releaseYear: 2020,
    rating: "E",
    multiplayer: true
  },
  {
    name: "Metroid Dread",
    consola: "Nintendo",
    genero: "Acción",
    descripcion: "Nueva aventura de Samus Aran en 2D",
    precio: 239960,
    stock: 25,
    developer: "MercurySteam",
    publisher: "Nintendo",
    releaseYear: 2021,
    rating: "T",
    multiplayer: false
  },
  {
    name: "Fire Emblem Engage",
    consola: "Nintendo",
    genero: "Estrategia",
    descripcion: "Nueva entrega de la saga de estrategia por turnos",
    precio: 239960,
    stock: 28,
    developer: "Intelligent Systems",
    publisher: "Nintendo",
    releaseYear: 2023,
    rating: "T",
    multiplayer: false
  }
]; 