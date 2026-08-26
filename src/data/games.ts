export interface Game {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  genres: string[];
  size: string;
  rating: string;
  downloads: string;
  isHot: boolean;
  version: string;
  bounty: string;
  releaseDate: string;
  developer: string;
  publisher: string;
  accentColor: 'orange' | 'red' | 'cyan';
  banner: string;
  screenshots: string[];
  gameplayVideo?: string; // Optional YouTube embed URL
  gameplayVideo: "https://www.youtube-nocookie.com/embed/j-jMtzZl1yE",
  downloadUrl: string;
  mirrors: {
    name: string;
    speed: string;
    url: string;
    type: string;
  }[];
  systemRequirements: {
    os: string;
    processor: string;
    memory: string;
    graphics: string;
    storage: string;
  };
  features: string[];
}

export const games: Game[] = [
  {
    id: "1",
    slug: "black-myth-wukong",
    title: "Black Myth: Wukong",
    tagline: "Unleash the Destined One across mythical Chinese landscapes in this groundbreaking action RPG.",
    description: "Black Myth: Wukong is an action RPG rooted in Chinese mythology. The story is based on Journey to the West, one of the Four Great Classical Novels of Chinese literature. You shall set out as the Destined One to venture into the challenges and marvels ahead, to uncover the obscured truth beneath the veil of a glorious legend from the past.",
    genres: ["Shinobi Wars", "Action RPG", "Soulslike"],
    size: "128.4 GB",
    rating: "4.95",
    downloads: "54.2K",
    isHot: true,
    version: "v1.0.9 + All DLCs",
    bounty: "1,500,000,000 ฿",
    releaseDate: "August 20, 2024",
    developer: "Game Science",
    publisher: "Game Science",
    accentColor: "red",
    banner: "https://m.media-amazon.com/images/M/MV5BNGVmZTVjZDMtMzkyZi00MTczLWE4OTUtY2Y1ODBlMGFlYTAxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    screenshots: [
      "https://images.squarespace-cdn.com/content/v1/55ef0e29e4b099e22cdc9eea/1724155901658-AAU2DMRJAM54LDJNGH1I/b1-Win64-Shipping_2024_08_19_21_26_31_693.jpg",
      "https://www.dsogaming.com/wp-content/uploads/2024/06/Black-Myth-Wukong-screenshot_02.jpg",
      "https://sm.pcmag.com/pcmag_me/review/b/black-myth/black-myth-wukong_e8hc.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy477rl51OFDDFkIggPO38YO_oUG-cH6VsPdRnhwhXlFmnASQB5OyyXZhU&s=10"
    ],
    gameplayVideo: "https://youtu.be/pnSsgRJmsCc?si=Q4qgzZFhDPsAEvfu",
    downloadUrl: "https://www.swiftuploads.com/gXeGO6lAzAa7/file", 
    mirrors: [
      { name: "Direct Gigabit Mirror (Kyuubi CDN)", speed: "Unthrottled (10 Gbps)", url: "https://uploadhaven.com/download", type: "Direct DDL" },
      { name: "Mega.nz Encrypted Cloud", speed: "High Speed", url: "https://www.swiftuploads.com/gXeGO6lAzAa7/file", type: "Cloud Mirror" },
      { name: "Qiwi / 1Fichier Multi-Part", speed: "Fast", url: "https://www.swiftuploads.com/gXeGO6lAzAa7/file", type: "Part Files" }
    ],
    systemRequirements: {
      os: "Windows 10 / 11 (64-bit)",
      processor: "Intel Core i7-9700 / AMD Ryzen 5 5500",
      memory: "16 GB RAM",
      graphics: "NVIDIA GeForce RTX 2060 / AMD Radeon RX 5700 XT (6 GB VRAM)",
      storage: "130 GB available space (SSD recommended)"
    },
    features: [
      "Full Game Repack updated to latest patch v1.0.9",
      "Pre-activated DLC pack with soundtrack & digital artbook",
      "Direct single-link or split-archive download options",
      "Zero malware, SHA-256 checksum certified"
    ]
  },
  {
    id: "2",
    slug: "elden-ring-shadow-of-the-erdtree",
    title: "Elden Ring: Shadow of the Erdtree",
    tagline: "Journey into the Land of Shadow to seek the footprints of Miquella.",
    description: "The Shadow of the Erdtree expansion features an all-new story set in the Land of Shadow imbued with mystery, perilous dungeons, and new enemies, weapons and equipment. Discover uncharted territory, face formidable adversaries, and revel in the satisfying triumph of victory.",
    genres: ["Jutsu RPG", "Open World", "Dark Fantasy"],
    size: "62.1 GB",
    rating: "4.98",
    downloads: "94.5K",
    isHot: true,
    version: "v1.12.3 Repack",
    bounty: "2,200,000,000 ฿",
    releaseDate: "June 21, 2024",
    developer: "FromSoftware Inc.",
    publisher: "Bandai Namco Entertainment",
    accentColor: "orange",
    banner: "https://static0.thegamerimages.com/wordpress/wp-content/uploads/sharedimages/2024/06/elden-ring-shadow-of-the-erdtree-tag-page-cover-art.jpg",
    screenshots: [
      "https://i.ytimg.com/vi/a8k8R0Q2ubY/maxresdefault.jpg",
      "https://www.gameskinny.com/wp-content/uploads/2024/06/elden-ring-shadow-of-the-ertree-black-knight.jpg?w=1200",
      "https://assetsio.gnwcdn.com/Valley-view.jpg?width=1200&height=1200&fit=crop&quality=100&format=png&enable=upscale&auto=webp",
      "https://assetsio.gnwcdn.com/elden-ring-erdtree-review-header-(1).jpg?width=1200&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp"
    ],
    gameplayVideo: "https://www.youtube.com/watch?v=qLZenOn7WUo",
    downloadUrl: "https://www.swiftuploads.com/rk9zKRVQ30lY/file",
    mirrors: [
      { name: "Direct Gigabit Mirror (Kyuubi CDN)", speed: "Unthrottled (10 Gbps)", url: "https://uploadhaven.com/download", type: "Direct DDL" },
      { name: "GoFile Direct Stream", speed: "Maximum", url: "https://uploadhaven.com/download", type: "Direct Link" },
      { name: "Torrent Magnet Mirror", speed: "P2P Ultra", url: "https://uploadhaven.com/download", type: "P2P Magnet" }
    ],
    systemRequirements: {
      os: "Windows 10 / 11 64-bit",
      processor: "Intel Core i7-8700K or AMD Ryzen 5 3600X",
      memory: "16 GB RAM",
      graphics: "NVIDIA GeForce GTX 1070 8 GB or AMD Radeon RX Vega 56 8 GB",
      storage: "65 GB SSD space required"
    },
    features: [
      "Base Game + Shadow of the Erdtree expansion included",
      "Seamless Co-op mod compatibility ready",
      "High framerate unlocker utility included in crack directory",
      "100% VirusTotal tested"
    ]
  },
  {
    id: "3",
    slug: "naruto-shippuden-ultimate-ninja-storm-connections",
    title: "Naruto x Boruto Ultimate Ninja STORM CONNECTIONS",
    tagline: "Celebrate the 20th anniversary of Naruto's anime debut with the largest roster in Storm history.",
    description: "Legendary ninjas reunite in the next exciting entry of the STORM series! NARUTO X BORUTO Ultimate Ninja STORM CONNECTIONS is an action/fighting game featuring fast-paced ninja battles and two different story modes, including an original story centered around Boruto.",
    genres: ["Shinobi Wars", "Fighting", "Anime"],
    size: "34.8 GB",
    rating: "4.87",
    downloads: "38.2K",
    isHot: false,
    version: "Deluxe + Season Pass",
    bounty: "850,000,000 ฿",
    releaseDate: "November 17, 2023",
    developer: "CyberConnect2 Co. Ltd.",
    publisher: "Bandai Namco Entertainment",
    accentColor: "orange",
    banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcuIOtRfv3KDOFyIased7_WHKHAkXbajiLBYe6UTQ8fWuZKIl7aQdLFdo&s=10",
    screenshots: [
      "https://images.sftcdn.net/images/t_app-cover-s,f_auto/p/790d6aa4-fb43-4270-be95-e8023f69ecf0/4165513299/naruto-x-boruto-ultimate-ninja-storm-connections-enjoy-naruto-x-boruto-ultimate-ninja-storm-connections-for-windows.jpg",
      "https://steamdeckhq.com/wp-content/uploads/2023/11/NarutoXBorutoUNSC1-1024x640.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlseAujW3ZTY7Z3n5H6wSXOIROdJl-mVlBIsJOOryshgiv52Fl70OQn8k&s=10",
      "https://p325k7wa.twic.pics/high/naruto/naruto-storm-connections/00-page-setup/NSC-header-mobile.jpg?twic=v1/resize=760/step=10/quality=80"
    ],
    gameplayVideo: "https://www.youtube.com/watch?v=UqJgPGT99Wg",
    downloadUrl: "https://ankergames.net/game/naruto-x-boruto-ultimate-ninja-storm-connections#",
    mirrors: [
      { name: "Direct Gigabit Mirror (Kyuubi CDN)", speed: "Unthrottled (10 Gbps)", url: "https://uploadhaven.com/download", type: "Direct DDL" },
      { name: "PixelDrain Server", speed: "High Speed", url: "https://uploadhaven.com/download", type: "Direct Link" }
    ],
    systemRequirements: {
      os: "Windows 10 (64-bit)",
      processor: "Intel Core i5-6600K / AMD Ryzen 5 1600",
      memory: "8 GB RAM",
      graphics: "NVIDIA GeForce GTX 1060 / AMD Radeon RX 480",
      storage: "36 GB available space"
    },
    features: [
      "Over 130 playable Shinobi characters unlocked",
      "Custom Jutsu Voiceover DLCs included",
      "Local 2-Player Versus Controller ready"
    ]
  },
  {
    id: "4",
    slug: "one-piece-odyssey",
    title: "ONE PIECE ODYSSEY: Deluxe Grand Fleet",
    tagline: "A new RPG project from the world-famous manga and anime series ONE PIECE!",
    description: "During their voyage, the Straw Hats, led by Monkey D. Luffy are swallowed by a huge storm at sea. They end up on a mysterious island full of nature amidst the storm and become separated from each other. Explore Memoria, fight powerful foes, and reclaim your lost powers in classic JRPG tactical turn-based combat.",
    genres: ["Grand Fleet", "JRPG", "Turn-Based"],
    size: "35.2 GB",
    rating: "4.79",
    downloads: "29.6K",
    isHot: false,
    version: "v1.04 + Reunion of Memories",
    bounty: "900,000,000 ฿",
    releaseDate: "January 13, 2023",
    developer: "ILCA, Inc.",
    publisher: "Bandai Namco Entertainment",
    accentColor: "cyan",
    banner: "https://upload.wikimedia.org/wikipedia/en/0/0b/One_Piece_Odyssey_Steam_artwork.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
    screenshots: [
      "https://gpstatic.com/acache/55/79/1/uk/s3.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwWnFqZI8PA66X1OANZrOTGuMXlEUNktzvMRcAsOQO65CxUEIfowx0DoQ&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrdYPqydb8pq4f41p4G5WIwANZlZcWcPnybtlYJr6nN8Y_qBu0N8pAkx7i&s=10",
      "https://cdn.oneesports.gg/wp-content/uploads/2022/03/OnePieceOdyssey_cast-1024x576.webp"
    ],
    gameplayVideo: "https://www.youtube.com/watch?v=BI2Ryx2q3HY",
    downloadUrl: "https://ankergames.net/game/one-piece-odyssey#",
    mirrors: [
      { name: "Direct Gigabit Mirror (Kyuubi CDN)", speed: "Unthrottled (10 Gbps)", url: "https://uploadhaven.com/download", type: "Direct DDL" },
      { name: "Mega.nz Encrypted Cloud", speed: "High Speed", url: "https://uploadhaven.com/download", type: "Cloud Mirror" }
    ],
    systemRequirements: {
      os: "Windows 10 64-bit",
      processor: "Intel Core i7-3770 or AMD FX-8350",
      memory: "8 GB RAM",
      graphics: "GeForce GTX 1060 (3GB) or Radeon RX 580 (4GB)",
      storage: "35 GB available space"
    },
    features: [
      "Straw Hat traveling outfit set included",
      "Reunion of Memories Expansion DLC",
      "Full 4K Ultra-HD Texture packs enabled"
    ]
  },
  {
    id: "5",
    slug: "ghost-of-tsushima-directors-cut",
    title: "Ghost of Tsushima: Director's Cut",
    tagline: "Forge a new path and wage an unconventional war for the freedom of Tsushima.",
    description: "In the late 13th century, the Mongol empire has laid waste to entire nations along their campaign to conquer the East. Tsushima Island is all that stands between mainland Japan and a massive Mongol invasion fleet. Jin Sakai must set aside his samurai traditions to become the Ghost.",
    genres: ["Shinobi Wars", "Open World", "Stealth"],
    size: "52.0 GB",
    rating: "4.96",
    downloads: "71.1K",
    isHot: true,
    version: "v1053.4.0520 Multi-18",
    bounty: "1,800,000,000 ฿",
    accentColor: "red",
    banner: "https://cdn2.steamgriddb.com/grid/25fdaf56f9818e10497f7dc070186bed.png",
    screenshots: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_rViVqukkh1hYcHR62FU1JUBIrxojsSHTaaQom9ZXr6FVmQvsN56G_vI&s=10",
      "https://i.gadgets360cdn.com/large/Ghost_of_Tsushima__Directors_Cut_Screenshot_20240524_-_09163429_1716894141769.png",
      "https://sm.ign.com/ign_in/gallery/g/ghost-of-t/ghost-of-tsushima-directors-cut-screenshots_n9h2.jpg",
      "https://www.cgmagonline.com/wp-content/uploads/2024/05/ghost-of-tsushima-directors-cut-pc-review-2024-05-17_23-07-11_853055.jpg"
    ],
    gameplayVideo: "https://www.youtube.com/watch?v=A5gVt028Hww",
    downloadUrl: "https://www.swiftuploads.com/LK0G1Kwe3917/file",
    mirrors: [
      { name: "Direct Gigabit Mirror (Kyuubi CDN)", speed: "Unthrottled (10 Gbps)", url: "https://uploadhaven.com/download", type: "Direct DDL" },
      { name: "Torrent P2P High-Seed", speed: "Fast P2P", url: "https://uploadhaven.com/download", type: "Torrent" }
    ],
    systemRequirements: {
      os: "Windows 10 64-bit",
      processor: "Intel Core i5-8600 or AMD Ryzen 5 3600",
      memory: "16 GB RAM",
      graphics: "NVIDIA GeForce RTX 2060 or AMD Radeon RX 5600 XT",
      storage: "75 GB SSD space required"
    },
    features: [
      "Iki Island expansion story DLC included",
      "Legends cooperative multiplayer bypass",
      "PlayStation DualSense haptics fully supported on PC"
    ]
  },
  {
    id: "6",
    slug: "cyberpunk-2077-phantom-liberty",
    title: "Cyberpunk 2077: Phantom Liberty",
    tagline: "Enter the shadowy world of espionage in Dogtown as mercenary V.",
    description: "Phantom Liberty is a spy-thriller adventure for the open-world RPG Cyberpunk 2077. As cyber-enhanced mercenary V, join secret agent Solomon Reed to untangle a web of shattered loyalties and sinister political machinations in the dangerous district of Dogtown.",
    genres: ["Grand Fleet", "Sci-Fi", "Action RPG"],
    size: "76.4 GB",
    rating: "4.92",
    downloads: "82.3K",
    isHot: false,
    version: "v2.13 Complete",
    bounty: "1,200,000,000 ฿",
    releaseDate: "September 26, 2023",
    developer: "CD PROJEKT RED",
    publisher: "CD PROJEKT RED",
    accentColor: "cyan",
    banner: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1091500/library_600x900_2x.jpg",
    screenshots: [
      "/images/cyberpunk-2077-phantom-liberty/ss1.jpg",
      "/images/cyberpunk-2077-phantom-liberty/ss2.jpg",
      "/images/cyberpunk-2077-phantom-liberty/ss3.jpg",
      "/images/cyberpunk-2077-phantom-liberty/ss4.jpg"
    ],
    gameplayVideo: "https://www.youtube.com/watch?v=l2k9KD-0xOs",
    downloadUrl: "https://store.steampowered.com/app/2138330/Cyberpunk_2077_Phantom_Liberty/",
    mirrors: [
      { name: "Direct Gigabit Mirror (Kyuubi CDN)", speed: "Unthrottled (10 Gbps)", url: "https://uploadhaven.com/download", type: "Direct DDL" },
      { name: "Qiwi Mirror Direct", speed: "High Speed", url: "https://uploadhaven.com/download", type: "Cloud Mirror" }
    ],
    systemRequirements: {
      os: "Windows 10 64-bit",
      processor: "Intel Core i7-12700 / AMD Ryzen 7 7800X3D",
      memory: "16 GB RAM",
      graphics: "GeForce RTX 2060 SUPER / Radeon RX 5700 XT",
      storage: "70 GB SSD space required"
    },
    features: [
      "Full 2.13 update with Ray Tracing Overdrive support",
      "REDmod tool and mod engine pre-configured",
      "No DRM, instant unzip and launch"
    ]
  },
  {
    id: "7",
    slug: "persona-5-royal",
    title: "Persona 5 Royal - Phantom Thieves Cut",
    tagline: "Wear the mask. Reveal your truth. Steal the hearts of corrupt adults.",
    description: "Don the mask of Joker and join the Phantom Thieves of Hearts. Break free from the chains of modern society and stage grand heists to infiltrate the minds of the corrupt and make them change their ways! Includes all 40+ DLC packs from the original release.",
    genres: ["Grand Fleet", "JRPG", "Story-Rich"],
    size: "41.5 GB",
    rating: "4.97",
    downloads: "48.8K",
    isHot: false,
    version: "v1.02 Multi-12",
    bounty: "950,000,000 ฿",
    releaseDate: "October 21, 2022",
    developer: "ATLUS",
    publisher: "SEGA",
    accentColor: "red",
    banner: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1687950/library_600x900_2x.jpg",
    screenshots: [
      "/images/persona-5-royal-phantom-thieves-cut/ss1.jpg",
      "/images/persona-5-royal-phantom-thieves-cut/ss2.jpg",
      "/images/persona-5-royal-phantom-thieves-cut/ss3.jpg",
      "/images/persona-5-royal-phantom-thieves-cut/ss4.jpg"
    ],
    gameplayVideo: "https://www.youtube.com/watch?v=wV4lCiCBCKM",
    downloadUrl: "https://store.steampowered.com/app/1687950/Persona_5_Royal/",
    mirrors: [
      { name: "Direct Gigabit Mirror (Kyuubi CDN)", speed: "Unthrottled (10 Gbps)", url: "https://uploadhaven.com/download", type: "Direct DDL" },
      { name: "Mega.nz Encrypted Cloud", speed: "High Speed", url: "https://uploadhaven.com/download", type: "Cloud Mirror" }
    ],
    systemRequirements: {
      os: "Windows 10 64-bit",
      processor: "Intel Core i7-4790, 3.4 GHz | AMD Ryzen 5 1500X, 3.5 GHz",
      memory: "8 GB RAM",
      graphics: "NVIDIA GeForce GTX 650 Ti, 2 GB | AMD Radeon R7 360, 2 GB",
      storage: "41 GB available space"
    },
    features: [
      "All 45 Costume, BGM, and Persona DLCs included",
      "Uncapped 120 FPS high refresh rate support",
      "Japanese & English full dual audio"
    ]
  },
  {
    id: "8",
    slug: "sekiro-shadows-die-twice",
    title: "Sekiro: Shadows Die Twice - GOTY Edition",
    tagline: "Carve your own clever path to vengeance in this critically acclaimed shinobi masterpiece.",
    description: "In Sekiro: Shadows Die Twice you are the 'one-armed wolf', a disgraced and disfigured warrior rescued from the brink of death. Bound to protect a young lord who is the descendant of an ancient bloodline, you become the target of many vicious enemies, including the dangerous Ashina clan.",
    genres: ["Shinobi Wars", "Action", "Stealth"],
    size: "14.2 GB",
    rating: "4.99",
    downloads: "99.0K",
    isHot: true,
    version: "v1.06 GOTY Update",
    bounty: "2,000,000,000 ฿",
    releaseDate: "March 22, 2019",
    developer: "FromSoftware Inc.",
    publisher: "Activision",
    accentColor: "orange",
    banner: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/814380/library_600x900_2x.jpg",
    screenshots: [
      "/images/sekiro-shadows-die-twice-goty-edition/ss1.jpg",
      "/images/sekiro-shadows-die-twice-goty-edition/ss2.jpg",
      "/images/sekiro-shadows-die-twice-goty-edition/ss3.jpg",
      "/images/sekiro-shadows-die-twice-goty-edition/ss4.jpg"
    ],
    gameplayVideo: "https://www.youtube.com/watch?v=-dadVBScH64",
    downloadUrl: "https://store.steampowered.com/app/814380/Sekiro_Shadows_Die_Twice__GOTY_Edition/",
    mirrors: [
      { name: "Direct Gigabit Mirror (Kyuubi CDN)", speed: "Unthrottled (10 Gbps)", url: "https://uploadhaven.com/download", type: "Direct DDL" },
      { name: "GoFile Direct Stream", speed: "Maximum", url: "https://uploadhaven.com/download", type: "Direct Link" }
    ],
    systemRequirements: {
      os: "Windows 7 64-bit | Windows 8 64-bit | Windows 10 64-bit",
      processor: "Intel Core i5-2500K | AMD FX-6300",
      memory: "8 GB RAM",
      graphics: "NVIDIA GeForce GTX 970 | AMD Radeon RX 570",
      storage: "25 GB available space"
    },
    features: [
      "Game of the Year update with Reflections of Strength boss rush",
      "New Prosthetic Shinobi form unlockables",
      "FPS Unlocker and 21:9 Ultrawide patches included"
    ]
  },
  {
    id: "9",
    slug: "god-of-war-ragnarok",
    title: "God of War Ragnarök: Valhalla",
    tagline: "Embark on an epic and heartfelt journey as Kratos and Atreus struggle with holding on and letting go.",
    description: "Kratos and Atreus must journey to each of the Nine Realms in search of answers as Asgardian forces prepare for a prophesied battle that will end the world. Along the way they will explore stunning mythical landscapes, and face fearsome enemies in the form of Norse gods and monsters.",
    genres: ["Shinobi Wars", "Action RPG", "Hack and Slash"],
    size: "115.0 GB",
    rating: "4.97",
    downloads: "68.4K",
    isHot: true,
    version: "v1.0.612 + Valhalla DLC",
    bounty: "1,950,000,000 ฿",
    releaseDate: "September 19, 2024",
    developer: "Santa Monica Studio",
    publisher: "PlayStation Publishing",
    accentColor: "red",
    banner: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1593500/library_600x900_2x.jpg",
    screenshots: [
      "/images/god-of-war-ragnarok-valhalla/ss1.jpg",
      "/images/god-of-war-ragnarok-valhalla/ss2.jpg",
      "/images/god-of-war-ragnarok-valhalla/ss3.jpg",
      "/images/god-of-war-ragnarok-valhalla/ss4.jpg"
    ],
    gameplayVideo: "https://www.youtube.com/watch?v=trnpvr0YjlY",
    downloadUrl: "https://store.steampowered.com/app/2322010/God_of_War_Ragnarok/",
    mirrors: [
      { name: "Direct Gigabit Mirror (Kyuubi CDN)", speed: "Unthrottled (10 Gbps)", url: "https://uploadhaven.com/download", type: "Direct DDL" },
      { name: "Torrent Magnet P2P", speed: "High Speed", url: "https://uploadhaven.com/download", type: "Torrent" }
    ],
    systemRequirements: {
      os: "Windows 10 64-bit",
      processor: "Intel i5-8600 / AMD Ryzen 5 3600",
      memory: "16 GB RAM",
      graphics: "NVIDIA RTX 2060 Super / AMD RX 5700",
      storage: "190 GB SSD space required"
    },
    features: [
      "Full Valhalla Roguelite Expansion DLC included",
      "DLSS 3.7 Frame Generation and FSR 3.1 enabled",
      "All pre-order armor sets and weapon hilts pre-activated"
    ]
  },
  {
    id: "10",
    slug: "hollow-knight-silksong",
    title: "Hollow Knight: Silksong (Grand Archive)",
    tagline: "Discover a vast, haunted kingdom in Hollow Knight: Silksong! The sequel to the award-winning action-adventure.",
    description: "Explore, fight and survive as Hornet, princess-protector of Hallownest, who has been captured and brought to this unfamiliar world. Bound by thread, you must conquer a kingdom ruled by silk and song.",
    genres: ["Grand Fleet", "Metroidvania", "Indie"],
    size: "9.5 GB",
    rating: "4.99",
    downloads: "110.0K",
    isHot: true,
    version: "v1.0 Early Access Repack",
    bounty: "2,500,000,000 ฿",
    releaseDate: "Coming Soon Archive",
    developer: "Team Cherry",
    publisher: "Team Cherry",
    accentColor: "cyan",
    banner: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1030300/library_600x900_2x.jpg",
    screenshots: [
      "/images/hollow-knight-silksong-grand-archive/ss1.jpg",
      "/images/hollow-knight-silksong-grand-archive/ss2.jpg",
      "/images/hollow-knight-silksong-grand-archive/ss3.jpg",
      "/images/hollow-knight-silksong-grand-archive/ss4.jpg"
    ],
    gameplayVideo: "https://www.youtube.com/watch?v=uUAVNVzT2xE",
    downloadUrl: "https://store.steampowered.com/app/1030300/Hollow_Knight_Silksong/",
    mirrors: [
      { name: "Direct Gigabit Mirror (Kyuubi CDN)", speed: "Unthrottled (10 Gbps)", url: "https://uploadhaven.com/download", type: "Direct DDL" },
      { name: "Mega.nz Encrypted Cloud", speed: "High Speed", url: "https://uploadhaven.com/download", type: "Cloud Mirror" }
    ],
    systemRequirements: {
      os: "Windows 10 64-bit",
      processor: "Intel Core i5-3470",
      memory: "8 GB RAM",
      graphics: "GeForce GTX 760 or AMD Radeon R9 280X",
      storage: "15 GB available space"
    },
    features: [
      "Over 165 all-new insect enemies and bosses",
      "Silkweaver abilities and acrobatic combat system",
      "Full orchestral score by Christopher Larkin"
    ]
  },
  {
    id: "11",
    slug: "dragon-ball-sparking-zero",
    title: "DRAGON BALL: Sparking! ZERO",
    tagline: "Takes the legendary gameplay of the Budokai Tenkaichi series to historic new levels.",
    description: "DRAGON BALL: Sparking! ZERO features an incredible number of playable characters, each with signature abilities, transformations, and techniques. Unleash the fighting spirit within you and take the fight to arenas that crumble and react to your power.",
    genres: ["Shinobi Wars", "Fighting", "Anime"],
    size: "30.0 GB",
    rating: "4.93",
    downloads: "74.8K",
    isHot: true,
    version: "Ultimate Edition + Pre-order Goku (Mini)",
    bounty: "1,750,000,000 ฿",
    releaseDate: "October 11, 2024",
    developer: "Spike Chunsoft",
    publisher: "Bandai Namco Entertainment",
    accentColor: "orange",
    banner: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1790600/library_600x900_2x.jpg",
    screenshots: [
      "/images/dragon-ball-sparking-zero/ss1.jpg",
      "/images/dragon-ball-sparking-zero/ss2.jpg",
      "/images/dragon-ball-sparking-zero/ss3.jpg",
      "/images/dragon-ball-sparking-zero/ss4.jpg"
    ],
    gameplayVideo: "https://www.youtube.com/watch?v=XTvBSY0YMyg",
    downloadUrl: "https://store.steampowered.com/app/1790600/DRAGON_BALL_Sparking_ZERO/",
    mirrors: [
      { name: "Direct Gigabit Mirror (Kyuubi CDN)", speed: "Unthrottled (10 Gbps)", url: "https://uploadhaven.com/download", type: "Direct DDL" },
      { name: "PixelDrain Fast Cloud", speed: "High Speed", url: "https://uploadhaven.com/download", type: "Cloud Mirror" }
    ],
    systemRequirements: {
      os: "Windows 10 / 11 64-bit",
      processor: "Intel Core i7-9700K / AMD Ryzen 5 3600",
      memory: "16 GB RAM",
      graphics: "NVIDIA GeForce RTX 2060 / AMD Radeon RX Vega 64",
      storage: "35 GB available space"
    },
    features: [
      "Over 182 characters from Z, Super, GT, and Movies",
      "Custom Battles and branching Episode Battles",
      "Full English & Japanese dubs included"
    ]
  },
  {
    id: "12",
    slug: "monster-hunter-wilds",
    title: "Monster Hunter Wilds: Fleet Hunter",
    tagline: "Dynamic, ever-changing environments where monsters roam in packs in this next-gen hunting saga.",
    description: "The unbridled force of nature runs wild and relentless, with environments transforming drastically from one moment to the next. This is a story of monsters and humans and their dual struggles to live in harmony in a world of duality.",
    genres: ["Grand Fleet", "Action RPG", "Co-op"],
    size: "140.0 GB",
    rating: "4.91",
    downloads: "59.2K",
    isHot: true,
    version: "Open Beta Repack v0.98",
    bounty: "1,600,000,000 ฿",
    releaseDate: "February 28, 2025",
    developer: "CAPCOM",
    publisher: "CAPCOM",
    accentColor: "red",
    banner: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2246340/library_600x900_2x.jpg",
    screenshots: [
      "/images/monster-hunter-wilds-fleet-hunter/ss1.jpg",
      "/images/monster-hunter-wilds-fleet-hunter/ss2.jpg",
      "/images/monster-hunter-wilds-fleet-hunter/ss3.jpg",
      "/images/monster-hunter-wilds-fleet-hunter/ss4.jpg"
    ],
    gameplayVideo: "https://www.youtube.com/watch?v=jQdFe0Wiugw",
    downloadUrl: "https://store.steampowered.com/app/2246340/Monster_Hunter_Wilds/",
    mirrors: [
      { name: "Direct Gigabit Mirror (Kyuubi CDN)", speed: "Unthrottled (10 Gbps)", url: "https://uploadhaven.com/download", type: "Direct DDL" },
      { name: "Qiwi Split Archive", speed: "High Speed", url: "https://uploadhaven.com/download", type: "Direct Link" }
    ],
    systemRequirements: {
      os: "Windows 10 / 11 (64-bit)",
      processor: "Intel Core i5-11600K / AMD Ryzen 5 5600X",
      memory: "16 GB RAM",
      graphics: "NVIDIA GeForce RTX 2070 Super / AMD Radeon RX 6700 XT",
      storage: "140 GB SSD required"
    },
    features: [
      "Focus Mode targeting system and Seikret mount support",
      "Seamless expedition transitions without loading screens",
      "Direct bypass fix for offline and LAN sessions"
    ]
  },
  {
    id: "13",
    slug: "bleach-rebirth-of-souls",
    title: "BLEACH Rebirth of Souls",
    tagline: "Awaken your blade, reverse the fate and unleash the power of your Zanpakuto.",
    description: "Experience all-out sword battles with iconic characters from the legendary anime franchise BLEACH. Master thrilling Zanpakuto actions, Bankai awakenings, and reverse fatal situations with powerful counter-mechanics.",
    genres: ["Shinobi Wars", "Fighting", "Anime"],
    size: "28.5 GB",
    rating: "4.86",
    downloads: "28.3K",
    isHot: false,
    version: "v1.01 Deluxe + Soundtrack",
    bounty: "780,000,000 ฿",
    releaseDate: "Early 2025 Archive",
    developer: "Tamsoft Corporation",
    publisher: "Bandai Namco Entertainment",
    accentColor: "cyan",
    banner: "https://us-east-1-bandai.graphassets.com/AXzioIclSWilEjFtsMJPwz/GfSPPHCpTniUAvbxLUBg",
    screenshots: [
      "/images/bleach-rebirth-of-souls/ss1.jpg",
      "/images/bleach-rebirth-of-souls/ss2.jpg",
      "/images/bleach-rebirth-of-souls/ss3.jpg",
      "/images/bleach-rebirth-of-souls/ss4.jpg"
    ],
    gameplayVideo: "https://www.youtube.com/watch?v=f-35CFD31Ko",
    downloadUrl: "https://store.steampowered.com/app/2415130/BLEACH_Rebirth_of_Souls/",
    mirrors: [
      { name: "Direct Gigabit Mirror (Kyuubi CDN)", speed: "Unthrottled (10 Gbps)", url: "https://uploadhaven.com/download", type: "Direct DDL" },
      { name: "Mega.nz Encrypted Cloud", speed: "High Speed", url: "https://uploadhaven.com/download", type: "Cloud Mirror" }
    ],
    systemRequirements: {
      os: "Windows 10 64-bit",
      processor: "Intel Core i5-7500 / AMD Ryzen 3 3300X",
      memory: "8 GB RAM",
      graphics: "NVIDIA GeForce GTX 1050 Ti 4GB",
      storage: "30 GB available space"
    },
    features: [
      "Awakening & Bankai transformation mechanics",
      "Kikon Kengeki dynamic clash system",
      "Thousand-Year Blood War arc music pack"
    ]
  },
  {
    id: "14",
    slug: "final-fantasy-xvi",
    title: "FINAL FANTASY XVI - Complete Edition",
    tagline: "An epic dark fantasy world where the fate of the land is decided by mighty Eikons and their Dominants.",
    description: "Enter the dark fantasy world of Valisthea in this acclaimed action RPG. Clive Rosfield, First Shield of Rosaria and guardian to his younger brother Joshua, is drawn into a great tragedy and swears revenge on the Dark Eikon Ifrit.",
    genres: ["Jutsu RPG", "Action RPG", "Story-Rich"],
    size: "155.0 GB",
    rating: "4.94",
    downloads: "51.7K",
    isHot: true,
    version: "v1.0.1 + Echoes of the Fallen + The Rising Tide",
    bounty: "1,850,000,000 ฿",
    releaseDate: "September 17, 2024",
    developer: "Square Enix",
    publisher: "Square Enix",
    accentColor: "red",
    banner: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2515020/library_600x900_2x.jpg",
    screenshots: [
      "/images/final-fantasy-xvi-complete-edition/ss1.jpg",
      "/images/final-fantasy-xvi-complete-edition/ss2.jpg",
      "/images/final-fantasy-xvi-complete-edition/ss3.jpg",
      "/images/final-fantasy-xvi-complete-edition/ss4.jpg"
    ],
    gameplayVideo: "https://www.youtube.com/watch?v=GA1C9mghADo",
    downloadUrl: "https://store.steampowered.com/app/2515020/FINAL_FANTASY_XVI/",
    mirrors: [
      { name: "Direct Gigabit Mirror (Kyuubi CDN)", speed: "Unthrottled (10 Gbps)", url: "https://uploadhaven.com/download", type: "Direct DDL" },
      { name: "Torrent Magnet P2P Multi-Track", speed: "High Speed", url: "https://uploadhaven.com/download", type: "Torrent" }
    ],
    systemRequirements: {
      os: "Windows 10 / 11 64-bit",
      processor: "AMD Ryzen 7 5700X / Intel Core i7-10700",
      memory: "16 GB RAM",
      graphics: "AMD Radeon RX 6700 XT / NVIDIA GeForce RTX 2080",
      storage: "170 GB SSD space required"
    },
    features: [
      "Both Chapter DLCs included (Echoes of the Fallen + The Rising Tide)",
      "Ultrawide 21:9 and 32:9 cutscene fix included",
      "Direct storage acceleration support"
    ]
  },
  {
    id: "15",
    slug: "armored-core-vi-fires-of-rubicon",
    title: "ARMORED CORE VI FIRES OF RUBICON",
    tagline: "Combining FromSoftware’s longstanding expertise in mech games with signature action gameplay.",
    description: "A mysterious new substance called Coral was discovered on the remote planet Rubicon 3. As an energy source, this substance was expected to dramatically advance humanity’s technological and communications capabilities. Instead, it caused a catastrophe that engulfed the planet in flames.",
    genres: ["Shinobi Wars", "Sci-Fi", "Mecha"],
    size: "54.8 GB",
    rating: "4.92",
    downloads: "43.1K",
    isHot: false,
    version: "v1.07 Ranked Match Patch",
    bounty: "1,100,000,000 ฿",
    releaseDate: "August 25, 2023",
    developer: "FromSoftware Inc.",
    publisher: "Bandai Namco Entertainment",
    accentColor: "orange",
    banner: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1888160/library_600x900_2x.jpg",
    screenshots: [
      "/images/armored-core-vi-fires-of-rubicon/ss1.jpg",
      "/images/armored-core-vi-fires-of-rubicon/ss2.jpg",
      "/images/armored-core-vi-fires-of-rubicon/ss3.jpg",
      "/images/armored-core-vi-fires-of-rubicon/ss4.jpg"
    ],
    gameplayVideo: "https://www.youtube.com/watch?v=SlSfr6Wa5sc",
    downloadUrl: "https://store.steampowered.com/app/1888160/ARMORED_CORE_VI_FIRES_OF_RUBICON/",
    mirrors: [
      { name: "Direct Gigabit Mirror (Kyuubi CDN)", speed: "Unthrottled (10 Gbps)", url: "https://uploadhaven.com/download", type: "Direct DDL" },
      { name: "GoFile Direct Link", speed: "High Speed", url: "https://uploadhaven.com/download", type: "Direct Link" }
    ],
    systemRequirements: {
      os: "Windows 10 64-bit",
      processor: "Intel Core i7-4790K | AMD Ryzen 5 2600",
      memory: "12 GB RAM",
      graphics: "NVIDIA GeForce GTX 1060, 6GB | AMD Radeon RX 590, 8GB",
      storage: "60 GB available space"
    },
    features: [
      "120 FPS high-velocity 3D omnidirectional combat",
      "Full AC assembly part unlocking savefile options",
      "Offline PvP arena mode unlocked"
    ]
  },
  {
    id: "16",
    slug: "attack-on-titan-2-final-battle",
    title: "Attack on Titan 2: Final Battle",
    tagline: "Abandon all fear. Experience the immense speed and omnidirectional mobility gear action!",
    description: "A.O.T. 2: Final Battle contains the latest content for the tactical hunting action game based on the hit anime series 'Attack on Titan.' Includes the story from seasons 1-3 of the anime and original episodes!",
    genres: ["Shinobi Wars", "Action", "Anime"],
    size: "42.0 GB",
    rating: "4.84",
    downloads: "36.5K",
    isHot: false,
    version: "Final Battle Complete Edition",
    bounty: "820,000,000 ฿",
    releaseDate: "July 5, 2019",
    developer: "KOEI TECMO GAMES CO., LTD.",
    publisher: "KOEI TECMO GAMES CO., LTD.",
    accentColor: "cyan",
    banner: "https://m.media-amazon.com/images/I/81IXTtFKL4L._AC_UF894,1000_QL80_.jpg",
    screenshots: [
      "/images/attack-on-titan-2-final-battle/ss1.jpg",
      "/images/attack-on-titan-2-final-battle/ss2.jpg",
      "/images/attack-on-titan-2-final-battle/ss3.jpg",
      "/images/attack-on-titan-2-final-battle/ss4.jpg"
    ],
    gameplayVideo: "https://www.youtube.com/watch?v=pV90QJEBtMU",
    downloadUrl: "https://store.steampowered.com/app/601050/Attack_on_Titan_2__AOT2/",
    mirrors: [
      { name: "Direct Gigabit Mirror (Kyuubi CDN)", speed: "Unthrottled (10 Gbps)", url: "https://uploadhaven.com/download", type: "Direct DDL" },
      { name: "Mega.nz Cloud", speed: "High Speed", url: "https://uploadhaven.com/download", type: "Cloud Mirror" }
    ],
    systemRequirements: {
      os: "Windows 10 64-bit",
      processor: "Core i7 3770 or higher",
      memory: "8 GB RAM",
      graphics: "NVIDIA GeForce GTX 960 / AMD Radeon R9 280",
      storage: "45 GB available space"
    },
    features: [
      "Omnidirectional Mobility Gear flight mechanics",
      "Character Episode mode covering all of Season 3",
      "Anti-Personnel ODM and Thunder Spears arsenal included"
    ]
  },
  {
    id: "17",
    slug: "metaphor-refantazio",
    title: "Metaphor: ReFantazio",
    tagline: "From the creators of Persona 3, 4, and 5 comes a unique fantasy world where your journey begins in a tournament for the throne.",
    description: "Write your destiny and rise above fear as you step into a fantasy world unlike anything you've seen before. Fraught with unsettling mystery, the kingdom stands on a precipice. Now, you must embark on a journey, overcoming obstacles and forging bonds with friends.",
    genres: ["Jutsu RPG", "JRPG", "Story-Rich"],
    size: "86.2 GB",
    rating: "4.96",
    downloads: "49.0K",
    isHot: true,
    version: "v1.0.4 Atlus Repack",
    bounty: "1,700,000,000 ฿",
    releaseDate: "October 11, 2024",
    developer: "Studio Zero (ATLUS)",
    publisher: "SEGA",
    accentColor: "red",
    banner: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2679460/library_600x900_2x.jpg",
    screenshots: [
      "/images/metaphor-refantazio/ss1.jpg",
      "/images/metaphor-refantazio/ss2.jpg",
      "/images/metaphor-refantazio/ss3.jpg",
      "/images/metaphor-refantazio/ss4.jpg"
    ],
    gameplayVideo: "https://www.youtube.com/watch?v=vQWMI-Vh8-Y",
    downloadUrl: "https://store.steampowered.com/app/2679460/Metaphor_ReFantazio/",
    mirrors: [
      { name: "Direct Gigabit Mirror (Kyuubi CDN)", speed: "Unthrottled (10 Gbps)", url: "https://uploadhaven.com/download", type: "Direct DDL" },
      { name: "Qiwi Direct Stream", speed: "High Speed", url: "https://uploadhaven.com/download", type: "Cloud Mirror" }
    ],
    systemRequirements: {
      os: "Windows 10 / 11 64-bit",
      processor: "Intel Core i7-9700 / AMD Ryzen 5 2600X",
      memory: "16 GB RAM",
      graphics: "NVIDIA GeForce GTX 1660 / AMD Radeon RX 580",
      storage: "93 GB SSD space required"
    },
    features: [
      "Dynamic real-time and squad turn-based combat transition",
      "Archetype awakening system with 40+ classes",
      "Gauntlet Runner traversal overworld"
    ]
  },
  {
    id: "18",
    slug: "one-piece-pirate-warriors-4",
    title: "ONE PIECE: PIRATE WARRIORS 4 - Ultimate Edition",
    tagline: "Fight through hordes of enemies and adventure with your allies in this authentic One Piece Musou experience!",
    description: "The PIRATE WARRIORS series has successfully combined the popular anime ONE PIECE with the thrilling action of the WARRIORS series to create a worldwide phenomenon. Based on the concept of 'experiencing a real ONE PIECE battlefield,' buildings will come crashing down during the action and attacks will throw up smoke and dust.",
    genres: ["Grand Fleet", "Action", "Musou"],
    size: "26.4 GB",
    rating: "4.88",
    downloads: "44.7K",
    isHot: false,
    version: "v1.0.8 + Gear 5 Luffy + Character Pass 2",
    bounty: "880,000,000 ฿",
    releaseDate: "March 27, 2020",
    developer: "KOEI TECMO GAMES CO., LTD.",
    publisher: "Bandai Namco Entertainment",
    accentColor: "orange",
    banner: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1089090/library_600x900_2x.jpg",
    screenshots: [
      "/images/one-piece-pirate-warriors-4-ultimate-edition/ss1.jpg",
      "/images/one-piece-pirate-warriors-4-ultimate-edition/ss2.jpg",
      "/images/one-piece-pirate-warriors-4-ultimate-edition/ss3.jpg",
      "/images/one-piece-pirate-warriors-4-ultimate-edition/ss4.jpg"
    ],
    gameplayVideo: "https://www.youtube.com/results?search_query=ONE+PIECE%3A+PIRATE+WARRIORS+4+-+Ultimate+Edition+Trailer",
    downloadUrl: "https://store.steampowered.com/app/1089090/ONE_PIECE_PIRATE_WARRIORS_4/",
    mirrors: [
      { name: "Direct Gigabit Mirror (Kyuubi CDN)", speed: "Unthrottled (10 Gbps)", url: "https://uploadhaven.com/download", type: "Direct DDL" },
      { name: "PixelDrain Server", speed: "High Speed", url: "https://uploadhaven.com/download", type: "Direct Link" }
    ],
    systemRequirements: {
      os: "Windows 10 64-bit",
      processor: "Intel Core i7 3770 / AMD FX-8350",
      memory: "8 GB RAM",
      graphics: "NVIDIA GeForce GTX 1060 (3GB)",
      storage: "28 GB available space"
    },
    features: [
      "Gear 5 Sun God Nika Luffy transformation unlocked",
      "Wano Country Arc & Onigashima Battle stages",
      "Co-op 4-player online & local split-screen modes"
    ]
  }
];
