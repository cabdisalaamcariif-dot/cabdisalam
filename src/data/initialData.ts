import { ProfileData, Skill, Project, Education, ContactMessage } from '../types';

export const initialProfile: ProfileData = {
  name: 'Cabdisalaam Maxamed',
  title: 'Dhisaha Mareegaha (Web Developer)',
  subTitle: 'Khabiir ku takhasusay Frontend & Naqshadeynta UI oo dhisa mareego casri ah oo degdeg badan',
  shortIntro:
    'Ku soo dhawoow! Waxaan ahay Cabdisalaam Maxamed, dhisaha mareegaha (Web Developer) oo aad u jecel dhisidda degellada casriga ah, kuwa taleefannada iyo kombuyuutarrada ku habboon, kana jawaaba baahiyaha dhabta ah ee isticmaalaha.',
  bioParagraph1:
    'Asc! Magacaygu waa Cabdisalaam Maxamed. Waxaan ahay injineer dhisa mareegaha (Web Developer) oo u heellan tignoolajiyada, mabaadi\'da naqshadaynta casriga ah, iyo dhisidda degellada internet-ka ee firfircoon. Socdaalkaygu wuxuu ku bilowday xiise qoto dheer oo aan u qabay sida barnaamijyadu u beddelaan nolosheenna maalinlaha ah, tan iyo xilligaasna waxaan si joogto ah u kobcinayay xirfaddayda.',
  bioParagraph2:
    'Waxaan si gaar ah ugu takhasusay xirfadaha Frontend-ka, anigoo adeegsanaya HTML, CSS, JavaScript, React, iyo Tailwind CSS si aan u abuuro naqshado aad u qurux badan, fudud in la isticmaalo, isla markaana ku habboon shaashad kasta. Diiraddaydu waa qoridda koodh nadiif ah oo nidaamsan, xawaare sare, iyo khibrad isticmaale oo aan carqalad lahayn.',
  bioParagraph3:
    'Koodh qorista ka sokow, waxaan mar kasta baaraa heerarka cusub ee web-ka, qalabka casriga ah ee horumarinta, iyo hababka ugu wanaagsan ee UI/UX. Waxaa i dhiirrigeliya xallinta caqabadaha dhabta ah iyo dhisidda adeegyo faa\'iido weyn u leh bulshada iyo ganacsiyada.',
  phone: '0619602701',
  email: 'cabdisalaamcariif@gmail.com',
  location: 'Muqdisho, Soomaaliya (Diyaar u ah Shaqooyinka Meel Fog / Remote)',
  // User profile photos
  avatarUrl: '/images/hhhh.jpeg',
  aboutPhotoUrl: '/images/hhhh.jpeg',
  availableForHire: true,
  experienceYears: 2,
  projectsCompleted: 14,
  happyClients: 10,
  socialLinks: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    whatsapp: 'https://wa.me/252619602701',
    twitter: 'https://twitter.com',
    telegram: 'https://t.me',
  },
};

// Strictly ordered from highest percentage to lowest percentage
export const initialSkills: Skill[] = [
  {
    id: 'skill-html',
    name: 'HTML',
    percentage: 90,
    category: 'Luqadda Aasaasiga ah',
    description: 'Qoridda qaab-dhismeedka bogagga, kor u qaadista matoorada raadinta (SEO), u fududaynta dadka baahiyaha gaarka ah qaba (a11y), iyo adeegsiga HTML5 APIs.',
    color: '#E34F26',
  },
  {
    id: 'skill-css',
    name: 'CSS',
    percentage: 70,
    category: 'Naqshadaynta Muuqaalka',
    description: 'Habaynta muuqaalka iyo midabada, qaabaynta Flexbox iyo CSS Grid, animations-ka casriga ah, iyo u habaynta taleefannada (Media Queries).',
    color: '#1572B6',
  },
  {
    id: 'skill-js',
    name: 'JavaScript',
    percentage: 60,
    category: 'Luqadda Barnaamijyada',
    description: 'Luqadda aasaasiga ah ee firfircoonida web-ka, qoridda ES6+, maamulidda xogta (Async/Await), iyo xiriirinta adeegyada internet-ka (APIs).',
    color: '#F7DF1E',
  },
  {
    id: 'skill-react',
    name: 'React',
    percentage: 50,
    category: 'Qaab-dhismeedka (Framework)',
    description: 'Dhisidda qaybo dib loo isticmaali karo (Components), maaraynta xaaladda (React Hooks - useState, useEffect), iyo dhisidda mareego degdeg u jawaaba.',
    color: '#61DAFB',
  },
  {
    id: 'skill-tailwind',
    name: 'Tailwind CSS',
    percentage: 40,
    category: 'Naqshadaynta Casriga ah',
    description: 'Naqshadaynta degdegga ah ee Utility-first, habaynta shaashadaha kala duwan, qaabka mugdiga (Dark Mode), iyo habaynta UI-da casriga ah.',
    color: '#06B6D4',
  },
];

export const initialProjects: Project[] = [
  {
    id: 'proj-1',
    title: 'Hodan E-Commerce Storefront',
    category: 'Frontend',
    description: 'Mareeg casri ah oo loogu talagalay dukaamaysiga internet-ka oo leh kala shaandhaynta alaabta, gaariga dukaanka, iyo nidaamka iibsashada.',
    longDescription:
      'Dukaanka internet-ka oo si gaar ah loogu habeeyay taleefannada gacanta laguna dhisay React iyo Tailwind CSS. Isticmaalayaashu waxay alaabta ku kala saari karaan qaybaha, baari karaan alaabta si toos ah, maamuli karaan gaariga dukaamaysiga, iyo nidaamka bixinta lacagta.',
    image: 'https://images.unsplash.com/photo-1556742049-0a67e55722c0?auto=format&fit=crop&w=1000&q=80',
    tags: ['React', 'Tailwind CSS', 'JavaScript', 'HTML5'],
    demoUrl: 'https://example.com/demo/hodan-store',
    githubUrl: 'https://github.com/cabdisalaamcariif/hodan-ecommerce',
    featured: true,
    completionDate: '2024',
  },
  {
    id: 'proj-2',
    title: 'TaskFlow - Nidaamka Maareynta Shaqooyinka',
    category: 'Full Stack',
    description: 'Barnaamij casri ah oo lagu maareeyo hawlaha iyo mashaariicda maalinlaha ah oo leh daba-gal xaaladeed iyo xog-ururin hufan.',
    longDescription:
      'TaskFlow wuxuu ka caawiyaa shakhsiyaadka iyo kooxaha inay si hufan u habeeyaan shaqooyinkooda. Waxaa lagu dhisay JavaScript iyo React Hooks, wuxuuna leeyahay keydinta xogta, shaandhaynta muhiimada, habka habeenka (Dark Mode), iyo garaafyo muujinaya horumarka.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1000&q=80',
    tags: ['React', 'JavaScript', 'Tailwind CSS', 'CSS Grid'],
    demoUrl: 'https://example.com/demo/taskflow',
    githubUrl: 'https://github.com/cabdisalaamcariif/taskflow-app',
    featured: true,
    completionDate: '2024',
  },
  {
    id: 'proj-3',
    title: 'Somali Business Directory & Hub',
    category: 'Frontend',
    description: 'Bog bulsho oo isku xira ganacsatada maxalliga ah, dukaamada, iyo adeegyada magaalada Muqdisho oo leh khariidad iyo raadin fudud.',
    longDescription:
      'Diiwaanka ganacsiyada oo loogu talagalay in lagu caawiyo ganacsatada iyo shirkadaha cusub. Waxaa ku jira liiska ganacsiyada oo qaybsan, kaarar casri ah, wicitaan toos ah oo taleefan, iyo hagaajinta goobaha.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80',
    tags: ['HTML5', 'CSS', 'JavaScript', 'Tailwind CSS'],
    demoUrl: 'https://example.com/demo/somali-business',
    githubUrl: 'https://github.com/cabdisalaamcariif/somali-business-hub',
    featured: true,
    completionDate: '2023',
  },
  {
    id: 'proj-4',
    title: 'Aura - Barnaamijka Saadaasha Hawada',
    category: 'Frontend',
    description: 'Dashboard toos ah oo soo bandhiga cimilada, saadaasha 7-da maalmood ee soo socota, iyo heerkulka xilliyada kala duwan.',
    longDescription:
      'Degel fudud oo soo qaata xogta tooska ah ee cimilada (OpenWeather API). Wuxuu leeyahay muuqaallo isbeddelaya marka qorraxdu soo baxdo ama dhacdo, heerka qorraxda (UV Index), iyo saadaasha dabaysha.',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&w=1000&q=80',
    tags: ['JavaScript', 'HTML', 'CSS', 'REST APIs'],
    demoUrl: 'https://example.com/demo/aura-weather',
    githubUrl: 'https://github.com/cabdisalaamcariif/aura-weather',
    featured: false,
    completionDate: '2023',
  },
  {
    id: 'proj-5',
    title: 'Pulse - Maareeyaha Kharashaadka & Dhaqaalaha',
    category: 'Frontend',
    description: 'Qalab lagu maareeyo miisaaniyadda shaqsiga ah, diiwaangelinta kharashaadka, iyo sawiridda garaafyada dakhliga iyo kharashka.',
    longDescription:
      'Barnaamij maaliyadeed oo nadiif ah oo loogu talagalay inuu dadka ka caawiyo fahamka kharashaadkooda. Wuxuu xisaabiyaa hadhaaga bisha, wuxuuna muujiyaa xariiqyada horumarka ee qayb kasta oo miisaaniyad ah.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1000&q=80',
    tags: ['React', 'JavaScript', 'Tailwind CSS', 'HTML5'],
    demoUrl: 'https://example.com/demo/pulse-finance',
    githubUrl: 'https://github.com/cabdisalaamcariif/pulse-finance',
    featured: false,
    completionDate: '2023',
  },
  {
    id: 'proj-6',
    title: 'Lumina - Portfolio-ga Sawirqaadayaasha',
    category: 'UI/UX',
    description: 'Naqshad heersare ah oo loogu talagalay sawirqaadayaasha iyo hal-abuurayaasha dijitaalka ah oo leh bandhig sawirro qurux badan.',
    longDescription:
      'Naqshad xawaare sare leh oo soo bandhigta sawirrada, fikradaha macaamiisha, adeegyada la bixiyo, iyo foomamka xiriirka tooska ah. Waxaa lagu farsameeyay HTML5 iyo qaabeynta CSS Grid.',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=80',
    tags: ['HTML5', 'CSS', 'JavaScript'],
    demoUrl: 'https://example.com/demo/lumina-studio',
    githubUrl: 'https://github.com/cabdisalaamcariif/lumina-studio',
    featured: false,
    completionDate: '2023',
  },
];

export const initialEducation: Education[] = [
  {
    id: 'edu-1',
    institution: 'Jaamacadda Soomaaliya (UNISO)',
    degree: 'Shahaadada Koowaad / Diploma ee Sayniska Kumbuyuutarka & IT',
    period: '2021 — 2024',
    description:
      'Diiradda waxaa la saaray aasaaska horumarinta barnaamijyada, nidaamyada keydka xogta (Databases), alxorithm-yada, qaab-dhismeedka xogta, iyo shabakadaha kombuyuutarka.',
    skillsAcquired: ['Aasaaska Sayniska Kumbuyuutarka', 'Naqshadaynta Web-ka', 'Injineernimada Barnaamijyada', 'Nidaamyada Keydka Xogta'],
    type: 'University',
  },
  {
    id: 'edu-2',
    institution: 'Bootcamp-ka Tababarka Casriga ah ee Frontend-ka',
    degree: 'Shahaadada Horumarinta Frontend-ka & React.js',
    period: '2023 — 2024',
    description:
      'Tababar ficil ah oo lagu bartay HTML5, CSS3, JavaScript-ka casriga ah (ES6+), dhisidda barnaamijyada React, maaraynta xaaladaha (Hooks), iyo adeegsiga Tailwind CSS.',
    skillsAcquired: ['React.js', 'Tailwind CSS', 'ES6+ JavaScript', 'Naqshadeynta Shaashadaha Kala Duwan', 'Git & GitHub'],
    type: 'Bootcamp',
  },
  {
    id: 'edu-3',
    institution: 'freeCodeCamp & Heerarka Furan ee Web-ka',
    degree: 'Shahaadada Naqshadeynta Web-ka & Xallinta Caqabadaha JavaScript',
    period: '2022 — 2023',
    description:
      'Dhameystirka in ka badan 300+ saacadood oo koodh qoris ficil ah, qaabeynta CSS Grid & Flexbox, u fududaynta isticmaalka dadka oo dhan, iyo xallinta algorithms-ka.',
    skillsAcquired: ['HTML-ka Saxda ah', 'CSS Flexbox & Grid', 'Fududaynta Isticmaalka (a11y)', 'DOM Scripting'],
    type: 'Certification',
  },
];

export const initialMessages: ContactMessage[] = [
  {
    id: 'msg-1',
    name: 'Mustafe Xasan',
    email: 'mustafe.hassan@example.com',
    subject: 'Codsi Mashruuc - Dhisidda Mareeg Ganacsi',
    message:
      'Asc Cabdisalaam, waxaan arkay portfolio-gaaga waana ka helay shaqadaada. Waxaan doonaynaa inaan dhisno degel casri ah oo u habaysan shirkaddayada saadka ee Muqdisho. Ma heli kartaa wakhti gaaban oo aan ku wada hadalno toddobaadkan?',
    date: '2026-08-12 14:32',
    read: false,
    replied: false,
  },
  {
    id: 'msg-2',
    name: 'Aamina Warsame',
    email: 'amina.design@example.com',
    subject: 'Fursad Wada-shaqeyn Frontend',
    message:
      'Asc Cabdisalaam! Waxaan ahay naqshadeeye UI/UX waxaana jira mashaariic React iyo Tailwind ah oo aan gacanta ku hayno. Xirfadahaaga HTML, CSS iyo React waxay si fiican ugu habboon yihiin qaab-dhismeedkayaga. Fadlan nala soo xiriir haddii aad diyaar u tahay wada-shaqeyn.',
    date: '2026-08-10 09:15',
    read: true,
    replied: true,
  },
];
