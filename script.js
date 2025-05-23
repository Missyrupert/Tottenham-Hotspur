// -- DATA SECTION --

// Timeline events (add as many as you want, it's easy to expand)
const timelineData = [
  {
    title: "1882: Founded",
    summary: "Tottenham Hotspur was founded by local schoolboys at All Hallows Church.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/45/First_Tottenham_Hotspur_team_1882.jpg"
  },
  {
    title: "1901: FA Cup Victory",
    summary: "First and only non-League club to win the FA Cup since the Football League began.",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9b/TottenhamHotspurFA1901.jpg"
  },
  {
    title: "1951: First League Title",
    summary: "Spurs win the First Division for the first time.",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/19/Tottenham_Hotspur_F.C._1950-51.jpg"
  },
  {
    title: "1961: The Double",
    summary: "First team in the 20th century to win both the League and FA Cup.",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/93/Spurs_Double_Winning_Team.jpg"
  },
  {
    title: "1963: European Glory",
    summary: "Spurs became the first British club to win a major European trophy: the Cup Winners' Cup.",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/89/Spurs_1963_European_Cup_Winners_Cup.jpg"
  },
  {
    title: "1981: FA Cup Triumph",
    summary: "Ricky Villa's wonder goal helps Spurs win the FA Cup in a classic replay.",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/79/Ricardo_Villa_Tottenham_Hotspur_1981.jpg"
  },
  {
    title: "1999: Worthington Cup Win",
    summary: "Spurs beat Leicester City at Wembley for their first major trophy in the Premier League era.",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/George_Graham_Arsenal.jpg"
  },
  {
    title: "2008: League Cup Winners",
    summary: "Spurs beat Chelsea 2–1 in the League Cup final.",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Jonathan_Woodgate.jpg"
  },
  {
    title: "2019: Champions League Final",
    summary: "Spurs reach their first ever UEFA Champions League final after beating Manchester City and Ajax.",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/03/Tottenham_Hotspur_players_celebrate_after_reaching_2019_UEFA_Champions_League_Final.jpg"
  },
  {
    title: "2024: Ange Postecoglou Era",
    summary: "Australian Ange Postecoglou brings a new attacking style and hope for the future.",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Ange_Postecoglou_2021.jpg"
  }
];

// Achievements (recent and classic)
const achievementsData = [
  {
    title: "League & FA Cup Double (1960–61)",
    details: "First team in the 20th century to win both the First Division and the FA Cup.",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/93/Spurs_Double_Winning_Team.jpg"
  },
  {
    title: "FA Cup Winners (8 times)",
    details: "Tottenham have won the FA Cup eight times, most recently in 1991.",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/36/Tottenham_Hotspur_FA_Cup_1991.jpg"
  },
  {
    title: "First British Club to Win Europe (1963)",
    details: "Cup Winners' Cup triumph – the first British side to win a major European trophy.",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/89/Spurs_1963_European_Cup_Winners_Cup.jpg"
  },
  {
    title: "UEFA Cup Winners (1972, 1984)",
    details: "Spurs have lifted the UEFA Cup twice, with thrilling finals in both years.",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Tottenham_Hotspur_European_Cup_1984.jpg"
  },
  {
    title: "Recent Top Four Finishes",
    details: "Regular UEFA Champions League qualification since 2016, including a runners-up finish in 2019.",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/03/Tottenham_Hotspur_players_celebrate_after_reaching_2019_UEFA_Champions_League_Final.jpg"
  }
];

// Famous Players and Managers
const playersData = [
  {
    name: "Bill Nicholson",
    role: "Manager & Player",
    bio: "Mr Tottenham – legendary manager and club man, led Spurs to the Double in 1961 and first European trophy in 1963.",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Bill_Nicholson.jpg"
  },
  {
    name: "Jimmy Greaves",
    role: "Striker",
    bio: "Spurs' greatest ever goalscorer, netting 266 times in 379 appearances.",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Jimmy_Greaves_%281965%29.jpg"
  },
  {
    name: "Glenn Hoddle",
    role: "Midfielder",
    bio: "One of English football's most gifted midfielders – admired for skill, passing, and vision.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/43/Glenn_Hoddle_1981.jpg"
  },
  {
    name: "Gary Lineker",
    role: "Striker",
    bio: "England's World Cup Golden Boot winner who scored regularly for Spurs from 1989–1992.",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Gary_Lineker_2011.jpg"
  },
  {
    name: "Ledley King",
    role: "Defender",
    bio: "Classy one-club captain, renowned for talent and loyalty despite chronic injuries.",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Ledley_King_2011.jpg"
  },
  {
    name: "Harry Kane",
    role: "Striker",
    bio: "Club’s all-time top scorer and England captain, known for finishing and leadership.",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Harry_Kane_2018.jpg"
  },
  {
    name: "Heung-Min Son",
    role: "Forward",
    bio: "South Korean superstar, known for pace, skill, and vital goals, Puskás Award winner.",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Heung-Min_Son_2022.jpg"
  },
  {
    name: "Ange Postecoglou",
    role: "Manager",
    bio: "Appointed in 2023, has brought attacking football and optimism back to North London.",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Ange_Postecoglou_2021.jpg"
  }
];

// Celebrity Fans
const fansData = [
  {
    name: "Adele",
    info: "Singer-songwriter Adele is a lifelong Spurs supporter from Tottenham.",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Adele_2016.jpg"
  },
  {
    name: "Daniel Radcliffe",
    info: "The 'Harry Potter' star has supported Spurs since childhood.",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Daniel_Radcliffe_2015.jpg"
  },
  {
    name: "Lily Allen",
    info: "Pop star Lily Allen is a passionate Spurs fan, often seen at matches.",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Lily_Allen_%28cropped%29.jpg"
  },
  {
    name: "Ricky Gervais",
    info: "Comedian Ricky Gervais is a known Tottenham follower.",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Ricky_Gervais_2010.jpg"
  },
  {
    name: "Rupert Grint",
    info: "Another 'Harry Potter' actor and lifelong Tottenham supporter.",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Rupert_Grint_%282011%29.jpg"
  }
];

// Interesting Facts!
const factsData = [
  {
    fact: "Spurs were the first British club to win a major European competition, winning the Cup Winners’ Cup in 1963.",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/89/Spurs_1963_European_Cup_Winners_Cup.jpg"
  },
  {
    fact: "White Hart Lane, the club’s home from 1899–2017, was built on the site of a former nursery.",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/10/White_Hart_Lane_2007.jpg"
  },
  {
    fact: "The famous cockerel emblem was first perched on the West Stand in 1909, created by a former player.",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Tottenham_Hotspur_logo.svg"
  },
  {
    fact: "Tottenham’s motto is 'Audere est Facere'—'To Dare Is To Do.'",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Tottenham_Hotspur_logo.svg"
  },
  {
    fact: "Spurs have a strong tradition of attacking, entertaining football, especially under Bill Nicholson and now Ange Postecoglou.",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Ange_Postecoglou_2021.jpg"
  },
  {
    fact: "They played in the very first UEFA Cup final in 1972—then won it.",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Tottenham_Hotspur_European_Cup_1984.jpg"
  },
  {
    fact: "Harry Kane is Tottenham’s all-time top goalscorer, surpassing Jimmy Greaves in 2023.",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Harry_Kane_2018.jpg"
  }
];

// --- RENDER FUNCTIONS ---
function showSection(sectionId) {
  document.querySelectorAll('.content-section').forEach(sec => sec.style.display = 'none');
  document.getElementById(sectionId).style.display = 'block';
  document.querySelectorAll('nav button').forEach(btn => btn.classList.remove('active'));
  document.querySelector(`nav button[onclick="showSection('${sectionId}')"]`).classList.add('active');
}

// Timeline
function renderTimeline() {
  const section = document.getElementById('timeline');
  section.innerHTML = `<h2>Timeline</h2
