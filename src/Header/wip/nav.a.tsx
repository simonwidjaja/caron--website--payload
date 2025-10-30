import {
  AcademicCapIcon,
  ChartPieIcon,
  ChatBubbleLeftRightIcon,
  CircleStackIcon,
  CubeIcon,
  CursorArrowRaysIcon,
  CursorArrowRippleIcon,
  FilmIcon,
  FireIcon,
  FunnelIcon,
  HeartIcon,
  LanguageIcon,
  PencilSquareIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline'

export const navData = [
  // First Level: Technische Kommunikation
  {
    name: 'Technische Kommunikation',
    items: [
      {
        name: 'Technische Kommunikation',
        items: [
          {
            name: 'Technische Redaktion',
            description: 'Präzise Dokumentation für komplexe Produkte und Systeme',
            href: '#',
            icon: PencilSquareIcon,
          },
          {
            name: 'Visualisierung',
            description: 'Komplexe Sachverhalte anschaulich dargestellt',
            href: '#',
            icon: CursorArrowRaysIcon,
          },
          {
            name: 'Technische Übersetzung',
            description: 'Präzise Übersetzungen technischer Dokumente',
            href: '#',
            icon: LanguageIcon,
          },
        ],
      },
      {
        name: 'Visualisierung und Rich Content',
        items: [
          {
            name: 'XXX',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            href: '#',
            icon: ChartPieIcon,
          },
        ],
      },
      {
        name: 'Interaktive Wissenswelten',
        items: [
          {
            name: 'ZZZ',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            href: '#',
            icon: ChartPieIcon,
          },
        ],
      },
    ],
  },
  // First Level: Web & Experiences
  {
    name: 'Web & Experiences',
    items: [
      {
        name: 'Web & Experiences',
        items: [
          {
            name: 'Webseiten und Portale',
            description: 'Für Marketing, Wissen & Support',
            href: '/websites',
            icon: CursorArrowRaysIcon,
          },
          {
            name: 'Web & Software Entwicklung',
            description: 'Custom Solutions für Ihre speziellen Anforderungen',
            href: '#',
            icon: CircleStackIcon,
          },
          {
            name: 'Wissenwelten',
            description: 'Explorative Lernerfahrungen',
            href: '/e-learning',
            icon: AcademicCapIcon,
          },
        ],
      },
      {
        name: 'Rich Content & Marketing',
        items: [
          {
            name: 'Produktwelten',
            description: 'Interaktive, begehbare 3D-Produktwelten', // 38 Zeichen
            href: '#',
            icon: CubeIcon,
          },
          {
            name: 'Interaktive Infografiken',
            description: 'Fesselndes Storytelling durch Rich Content', // 39 Zeichen
            href: '#',
            icon: CursorArrowRippleIcon,
          },
          {
            name: 'Marketing Experiences',
            description: 'Maßgeschneiderte interaktive Erlebnisse', // 38 Zeichen
            href: '#',
            icon: FunnelIcon,
          },
          {
            name: 'Video und Animation',
            description: 'Visuelles Storytelling (Video, 3D, Animation)', // 40 Zeichen
            href: '#',
            icon: FilmIcon,
          },
          {
            name: 'Conversion Boosters',
            description: 'Interaktive Tools zur Conversion-Steigerung', // 40 Zeichen
            href: '#',
            icon: ChatBubbleLeftRightIcon
          },
        ],
      },
      {
        name: 'Konzeption und UX',
        items: [
          {
            name: 'User Experience Design (UX)',
            description: 'UX-getriebene Beratung und Konzeption',
            href: '#',
            icon: HeartIcon,
          },
          {
            name: 'Bedarfs- und Potenzialanalyse',
            description: 'Ganzheitliche Analyse von Bedarf und Potenzial',
            href: '#',
            icon: FireIcon,
          },
          {
            name: 'Künstliche Intelligenz (KI)',
            description: 'AI-gestützte Chatbots und Smart Solutions',
            href: '#',
            icon: RocketLaunchIcon,
          },
        ],
      },
    ],
  },
  // First Level: E-Learning
  {
    name: 'E-Learning',
    href: '/e-learning',
  },
  // First Level: Referenzen
  {
    name: 'Referenzen',
    href: '#',
  },
  // First Level: About
  {
    name: 'Über Caron',
    href: '#',
  },
];