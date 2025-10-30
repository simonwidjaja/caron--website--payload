import {
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

export const navData = [
  // First Level: Services
  {
    name: 'Services',
    items: [
      {
        name: 'Technische Kommunikation',
        items: [
          {
            name: 'Technische Redaktion',
            description: 'Get a better understanding where your traffic is coming from',
            href: '#',
            icon: ChartPieIcon,
          },
          {
            name: 'Visualisierung',
            description: 'Speak directly to your customers with our engagement tool',
            href: '#',
            icon: CursorArrowRaysIcon,
          },
          {
            name: 'Technische Übersetzung',
            description: 'Your customers data will be safe and secure',
            href: '#',
            icon: FingerPrintIcon,
          },
        ],
      },
      {
        name: 'Visualisierung und Rich Content',
        items: [
          {
            name: 'XXX',
            description: 'Get a better understanding where your traffic is coming from',
            href: '#',
            icon: ChartPieIcon,
          },
        ],
      },
      {
        name: 'Interaktive Experiences',
        items: [
          {
            name: 'ZZZ',
            description: 'Get a better understanding where your traffic is coming from',
            href: '#',
            icon: ChartPieIcon,
          },
        ],
      },
    ],
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