export interface GridItem {
  id: number;
  type: "video" | "image";
  src: string;
  title: string;
  tag: string;
  isPremium: boolean;
  likes: number;
  prompt: string;
}

export const contentData: GridItem[] = [
  {
    id: 1,
    type: "image",
    src: "/echelon.png",
    title: "Echelon — Architectural Lighting",
    tag: "Hero Section",
    isPremium: false,
    prompt: `
     Here's the complete project without markdown, ready to copy paste:

next.config.js
/ @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

module.exports = nextConfig;

tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages//*.{js,ts,jsx,tsx,mdx}',
    './src/components//*.{js,ts,jsx,tsx,mdx}',
    './src/app//*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(30, 8%, 6%)',
        surface: 'hsl(30, 6%, 9%)',
        foreground: 'hsl(40, 15%, 92%)',
        'foreground-dim': 'hsl(30, 8%, 54%)',
        'foreground-faint': 'hsl(30, 5%, 28%)',
        accent: 'hsl(42, 100%, 68%)',
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
        mono: ['var(--font-mono)'],
      },
    },
  },
  plugins: [],
};
export default config;

src/app/globals.css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --font-display: 'DM Serif Display', Georgia, 'Times New Roman', serif;
  --font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;
}

body {
  font-family: var(--font-body);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

src/app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Echelon — Architectural Lighting',
  description:
    'Light is the material. Shadow is the form. Ultra-premium architectural lighting atelier.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Inter:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

src/app/page.tsx
import HeroSection from '@/components/hero/HeroSection';

export default function Home() {
  return <HeroSection />;
}

src/components/hero/HeroImage.tsx
'use client';

import Image from 'next/image';

interface HeroImageProps {}

export default function HeroImage({}: HeroImageProps) {
  return (
    <div className="absolute inset-0 z-0">
      <Image
        src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=2400&q=95&auto=format&fit=crop"
        alt="Dramatically lit curved plaster wall with monolithic stone console in a minimalist interior"
        fill
        priority
        className="object-cover object-[65%_center] md:object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipseatcenter,transparent60%,hsl(30,8%,6%)100%)] opacity-30 pointer-events-none" />
    </div>
  );
}

src/components/hero/ScrollIndicator.tsx
'use client';

import { motion } from 'framer-motion';

interface ScrollIndicatorProps {}

export default function ScrollIndicator({}: ScrollIndicatorProps) {
  return (
    <div className="flex flex-col items-center gap-3">
      <motion.div
        className="w-1 h-12 bg-foreground-faint/40 origin-top"
        animate={{ scaleY: [1, 0.4, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-foreground-faint/50 rotate-90 mt-4 select-none">
        SCROLL
      </span>
    </div>
  );
}

src/components/hero/HeroContent.tsx
'use client';

import { motion } from 'framer-motion';

interface HeroContentProps {}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function HeroContent({}: HeroContentProps) {
  return (
    <motion.div
      className="flex flex-col max-w-2xl"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/ Metadata Line /}
      <motion.p
        className="font-mono text-[11px] md:text-xs tracking-[0.18em] uppercase text-foreground-dim mb-4"
        variants={itemVariants}
      >
        ARCHITECTURAL LIGHTING — SERIES 07
      </motion.p>

      {/ Primary Heading — Two Lines /}
      <div className="flex flex-col gap-y-0.5">
        <motion.h1
          className="font-display font-normal text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-[-0.015em]"
          variants={itemVariants}
        >
          <span
            className="text-white"
            style={{ textShadow: '0 0 40px rgba(245,185,61,0.15)' }}
          >
            Light
          </span>{' '}
          <span className="text-foreground">is the material.</span>
        </motion.h1>
        <motion.h1
          className="font-display font-normal text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-[-0.015em]"
          variants={itemVariants}
        >
          <span
            className="text-white"
            style={{ textShadow: '0 0 40px rgba(245,185,61,0.15)' }}
          >
            Shadow
          </span>{' '}
          <span className="text-foreground">is the form.</span>
        </motion.h1>
      </div>

      {/ Subtitle Paragraph /}
      <motion.p
        className="font-body font-light text-base md:text-lg text-foreground-dim leading-relaxed max-w-lg mt-6 md:mt-8"
        variants={itemVariants}
      >
        We design illumination systems for spaces that demand reverence. Every
        fixture is a deliberate act of subtraction.
      </motion.p>

      {/ CTA Button Row /}
      <motion.div
        className="flex flex-wrap gap-4 mt-8"
        variants={itemVariants}
      >
        <motion.button
          className="bg-white text-background px-7 py-3.5 rounded-sm font-body text-sm tracking-[0.04em] font-medium focus-visible:outline-2 outline-offset-2 outline-accent transition-all duration-300"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          View Collection
        </motion.button>
        <motion.button
          className="border border-foreground-faint text-foreground px-7 py-3.5 rounded-sm font-body text-sm tracking-[0.04em] font-medium hover:border-foreground hover:bg-foreground/5 focus-visible:outline-2 outline-offset-2 outline-accent transition-all duration-300"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          Book Consultation
        </motion.button>
      </motion.div>

      {/ Quiet Assurance Line /}
      <motion.p
        className="font-body text-xs md:text-sm text-foreground-faint mt-6 tracking-[0.03em]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.35 }}
      >
        Trusted by 140+ architecture firms across 32 countries.
      </motion.p>
    </motion.div>
  );
}

src/components/hero/MobileMenu.tsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <nav className="flex flex-col items-center gap-8">
            {['Work', 'Philosophy', 'Atelier', 'Journal'].map((link) => (
              <a
                key={link}
                href="#"
                className="text-2xl md:text-3xl font-display tracking-[0.04em] text-foreground hover:text-accent transition-colors duration-300 focus-visible:outline-2 outline-offset-2 outline-accent"
                onClick={onClose}
              >
                {link}
              </a>
            ))}
          </nav>
          <button
            className="border border-foreground-faint text-foreground text-sm tracking-[0.06em] uppercase px-5 py-2.5 rounded-sm font-body font-medium w-48 hover:border-foreground hover:bg-foreground/5 transition-all duration-300 focus-visible:outline-2 outline-offset-2 outline-accent"
            onClick={onClose}
          >
            Enquire
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

src/components/hero/Navbar.tsx
'use client';

import { useState } from 'react';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import MobileMenu from './MobileMenu';

interface NavbarProps {}

const navLinks = ['Work', 'Philosophy', 'Atelier', 'Journal'];

export default function Navbar({}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Work');
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 60);
  });

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-16 py-5 md:py-6 flex items-center justify-between"
        animate={{
          background: isScrolled
            ? 'rgba(24, 22, 21, 0.72)'
            : 'transparent',
          backdropFilter: isScrolled ? 'blur(20px)' : 'blur(0px)',
          WebkitBackdropFilter: isScrolled ? 'blur(20px)' : 'blur(0px)',
          borderBottom: isScrolled
            ? '1px solid hsl(30, 5%, 28%)'
            : '1px solid transparent',
        }}
        transition={{ duration: 0.3 }}
      >
        {/ Logo /}
        <a
          href="#"
          className="font-display text-xl md:text-2xl tracking-[0.08em] text-white no-underline cursor-pointer"
        >
          ECHELON
        </a>

        {/ Desktop Navigation Links /}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => (
            <div key={link} className="flex flex-col items-center">
              <a
                href="#"
                className={text-sm tracking-[0.06em] uppercase font-body font-medium transition-colors duration-300 focus-visible:outline-2 outline-offset-2 outline-accent 
                  activeLink === link
                    ? "text-foreground"
                    : "text-foreground-dim hover:text-foreground"
                }}
                onClick={() => setActiveLink(link)}
              >
                {link}
              </a>
              {activeLink === link && (
                <motion.span
                  layoutId="nav-indicator"
                  className="w-1 h-1 rounded-full bg-accent mt-1"
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </div>
          ))}
        </div>

        {/ Desktop CTA Button /}
        <div className="hidden md:block">
          <motion.button
            className="border border-foreground-faint text-foreground text-sm tracking-[0.06em] uppercase px-5 py-2.5 rounded-sm font-body font-medium hover:bg-white hover:text-black hover:border-white transition-all duration-300 focus-visible:outline-2 outline-offset-2 outline-accent"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Enquire
          </motion.button>
        </div>

        {/ Mobile Hamburger Button /}
        <button
          className="md:hidden flex flex-col gap-1.25 w-5 h-5 items-center justify-center"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
        >
          <motion.span
            className="w-5 h-[1.5px] bg-foreground block"
            animate={
              isMobileMenuOpen
                ? { rotate: 45, y: 6.5 }
                : { rotate: 0, y: 0 }
            }
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="w-5 h-[1.5px] bg-foreground block"
            animate={
              isMobileMenuOpen
                ? { rotate: -45, y: -6.5 }
                : { rotate: 0, y: 0 }
            }
            transition={{ duration: 0.3 }}
          />
        </button>
      </motion.nav>

      {/ Mobile Menu /}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}

src/components/hero/HeroSection.tsx
'use client';

import Navbar from './Navbar';
import HeroImage from './HeroImage';
import HeroContent from './HeroContent';
import ScrollIndicator from './ScrollIndicator';

interface HeroSectionProps {}

export default function HeroSection({}: HeroSectionProps) {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-background">
      {/ Image Layer /}
      <HeroImage />

      {/ Content Layer /}
      <div className="relative z-10 flex h-full flex-col">
        <Navbar />
        <div className="flex-1 flex items-end px-6 md:px-12 lg:px-16 pb-16 md:pb-20 lg:pb-24">
          <HeroContent />
        </div>
      </div>

      {/ Scroll Indicator Layer /}
      <div className="absolute bottom-8 right-8 md:bottom-10 md:right-12 lg:right-16 z-20">
        <ScrollIndicator />
      </div>
    </section>
  );
}

package.json
{
  "name": "echelon-hero",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "14.2.29",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "framer-motion": "^11.15.0",
    "lucide-react": "^0.468.0"
  },
  "devDependencies": {
    "@types/node": "^20.17.12",
    "@types/react": "^18.3.18",
    "@types/react-dom": "^18.3.5",
    "typescript": "^5.7.3",
    "tailwindcss": "^3.4.17",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.49"
  }
}

tsconfig.json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/": ["./src/"]
    }
  },
  "include": ["next-env.d.ts", "/.ts", "/.tsx", ".next/types//*.ts"],
  "exclude": ["node_modules"]
}

postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

next-env.d.ts
/// <reference types="next" />
/// <reference types="next/image-types/global" />
     
     `,
    likes: 10,
  },
  {
    id: 2,
    type: "image",
    src: "/peoplesync.png",
    title: "PeopleSync",
    tag: "Landing Page",
    isPremium: false,
    prompt: `
    PeopleSync — HR & Payroll Platform Landing Page

Project Overview
A single-page premium landing experience for PeopleSync, a next-generation HR and payroll platform built for distributed teams. The design communicates precision, trust, and human-centered technology through a clean, data-informed aesthetic. No generic corporate blue. No stock photos of handshakes. Instead, the page uses abstract geometric data visualizations, warm neutral tones, and a single deliberate accent color to signal modernity, empathy, and enterprise reliability. Every interaction feels considered. Typography follows a strict hierarchy that balances technical authority with approachable warmth. Built for immediate deployment in Lovable, Bolt, v0, Cursor, or any Next.js AI builder.

Tech Stack
Next.js 14 (App Router)
TypeScript (strict mode)
Tailwind CSS 3.4+
shadcn/ui (Button component, customized)
Framer Motion 11.x
Lucide React (icons)
next/image (optimized images)
Recharts (lightweight, for decorative data visualization in hero background)

Fonts
Import from Google Fonts via layout.tsx:

html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Familjen+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500&display=swap" rel="stylesheet">

CSS Variable Setup (globals.css):
css
:root {
  --font-display: 'Familjen Grotesk', 'Inter', system-ui, sans-serif;
  --font-body: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}
body {
  font-family: var(--font-body);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-feature-settings: 'ss01', 'ss03', 'cv01';
}

Tailwind Config Extension:
js
fontFamily: {
  display: ['var(--font-display)'],
  body: ['var(--font-body)'],
}

Usage Rules:
All headings use font-display with tracking-[-0.02em]
All body text, UI labels, and form elements use font-body
Numerical data (stats, percentages) use font-display with tabular-nums for monospaced digit alignment
Familjen Grotesk has a distinctive, slightly technical character—use its weight range deliberately: 400 for subheadings, 500 for section labels, 600 for card titles, 700 for primary headings

Color System (HSL Values for Tailwind)

A warm, grounded palette. No cool blues. The accent is a vibrant coral-vermillion that signals energy and human focus without corporate sterility. Backgrounds use warm grays with subtle brown undertones.

| Token | HSL Value | Hex Equivalent | Usage |
|-------|-----------|----------------|-------|
| --background | 30 12% 98% | #faf8f6 | Page background |
| --surface | 30 8% 95% | #f2efed | Card backgrounds, elevated sections |
| --surface-hover | 30 6% 91% | #eae6e3 | Card hover states |
| --foreground | 30 10% 12% | #1f1b18 | Primary text, headings |
| --foreground-secondary | 30 5% 38% | #635e59 | Body text, descriptions |
| --foreground-tertiary | 30 4% 56% | #918b84 | Muted labels, placeholders |
| --border | 30 8% 88% | #e3ded8 | Card borders, dividers |
| --border-light | 30 6% 93% | #eeebe7 | Subtle separators |
| --accent | 8 92% 62% | #f2493b | Primary accent (vermillion-coral) |
| --accent-foreground | 0 0% 100% | #ffffff | Text on accent backgrounds |
| --accent-subtle | 8 92% 62% / 0.06 | — | Accent wash backgrounds |
| --success | 160 60% 42% | #2a9d7a | Positive indicators, payroll status |
| --warning | 38 85% 55% | #e8a42c | Attention states |
| --white | 0 0% 100% | #ffffff | Cards on white, nav background |

Tailwind Config Color Extension:
js
colors: {
  background: 'hsl(30, 12%, 98%)',
  surface: 'hsl(30, 8%, 95%)',
  'surface-hover': 'hsl(30, 6%, 91%)',
  foreground: 'hsl(30, 10%, 12%)',
  'foreground-secondary': 'hsl(30, 5%, 38%)',
  'foreground-tertiary': 'hsl(30, 4%, 56%)',
  border: 'hsl(30, 8%, 88%)',
  'border-light': 'hsl(30, 6%, 93%)',
  accent: 'hsl(8, 92%, 62%)',
  'accent-foreground': 'hsl(0, 0%, 100%)',
  success: 'hsl(160, 60%, 42%)',
  warning: 'hsl(38, 85%, 55%)',
}

Layout Structure

┌──────────────────────────────────────────────────────┐
│  NAVBAR (fixed, z-50, white/80 backdrop-blur)        │
│  Logo · Nav Links · Demo CTA · Sign In              │
├──────────────────────────────────────────────────────┤
│                                                      │
│  ┌────────────────────────────────────────────────┐  │
│  │  HERO SECTION (min-h-screen, relative)         │  │
│  │                                                │  │
│  │  [LEFT COLUMN]        [RIGHT COLUMN]           │  │
│  │  Badge                Animated Data Dashboard  │  │
│  │  Heading              (abstract payroll viz)   │  │
│  │  Subtitle             - Bar charts             │  │
│  │  CTA Row              - Radial progress        │  │
│  │  Trust Signals        - Animated counters      │  │
│  │  Stats Row            - Floating cards         │  │
│  │                                                │  │
│  └────────────────────────────────────────────────┘  │
│                                                      │
│  ┌────────────────────────────────────────────────┐  │
│  │  TRUST BAR (full-width, surface bg)            │  │
│  │  Logo Marquee: "Trusted by 2,400+ companies"   │  │
│  └────────────────────────────────────────────────┘  │
│                                                      │
│  ┌────────────────────────────────────────────────┐  │
│  │  FEATURES GRID (3-column, staggered cards)     │  │
│  │  Payroll · Compliance · Time Tracking · ...    │  │
│  └────────────────────────────────────────────────┘  │
│                                                      │
│  ┌────────────────────────────────────────────────┐  │
│  │  SOCIAL PROOF (testimonial, large quote)       │  │
│  └────────────────────────────────────────────────┘  │
│                                                      │
│  ┌────────────────────────────────────────────────┐  │
│  │  CTA BANNER (dark surface, full-width)         │  │
│  └────────────────────────────────────────────────┘  │
│                                                      │
│  ┌────────────────────────────────────────────────┐  │
│  │  FOOTER (5-column link grid)                   │  │
│  └────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────┘

Navigation Bar

Container: Fixed to top, z-50, full width. Padding: px-6 md:px-10 lg:px-16 py-4. Flex row, items-center justify-between. max-w-[1440px] mx-auto.

Background: bg-white/80 backdrop-blur-xl backdrop-saturate-150 with border-b border-border-light. On scroll past 20px, a subtle shadow appears via Framer Motion useScroll: box-shadow: 0 1px 3px rgba(0,0,0,0.04).

Logo (Left):
Combination mark. A small icon (4 interconnected circles forming a node graph, using Lucide Network icon or custom SVG) followed by wordmark "PeopleSync" in font-display text-xl font-semibold tracking-[-0.03em] text-foreground. The icon uses text-accent. Logo links to /.

Navigation Links (Center, hidden mobile, visible md:flex):
Five links in horizontal row with gap-8:
1. "Platform" — with a small chevron-down icon, triggers a dropdown on hover
2. "Payroll"
3. "Compliance"
4. "Pricing"
5. "Resources"

Link Styling:
Each link: text-sm font-body font-medium text-foreground-secondary
Hover: text-foreground transition via transition-colors duration-200
Active link (current page): text-foreground with a subtle border-b-2 border-accent pb-1 -mb-1 indicator
Dropdown chevron rotates 180deg on hover via transition-transform duration-200

Platform Dropdown (appears on hover, md:block hidden by default):
absolute top-full left-0 mt-2 bg-white border border-border rounded-xl shadow-lg shadow-foreground/5 p-2 min-w-[240px]
Grid of options: "HR Management", "Time & Attendance", "Benefits Admin", "Performance", "Analytics"
Each item: px-4 py-2.5 rounded-lg text-sm hover:bg-surface transition-colors duration-150
Enter/exit animation via Framer Motion AnimatePresence: fades in + slides down 8px over 0.2s

CTA Buttons (Right, visible on all screens):
"Sign In" link: text-sm font-medium text-foreground-secondary hover:text-foreground transition-colors, no border, no background
"Book a Demo" button: bg-accent text-accent-foreground text-sm font-semibold px-5 py-2.5 rounded-lg, hover: brightness-110 with transition-all duration-200, Framer Motion whileHover={{ scale: 1.02 }}

Mobile Menu (visible below md):
Hamburger: Two-line icon (w-5 h-[1.5px] bg-foreground each, gap-[5px]). Animate to X on toggle using Framer Motion rotate and translateY.
Overlay: fixed inset-0 z-40 bg-white/98 backdrop-blur-md, flex column, pt-24 px-8
Links at text-2xl font-display font-medium text-foreground, stacked with gap-6
"Book a Demo" full-width button at bottom of overlay
Enter animation: slides in from right (x: '100%' → x: 0, duration: 0.35, ease: [0.32, 0.72, 0, 1])

Hero Section

Container: relative min-h-screen w-full overflow-hidden bg-background, flex items-center. Padding: px-6 md:px-10 lg:px-16 pt-24 pb-16 md:pb-20. max-w-[1440px] mx-auto.

Grid Layout: On md: and above, two columns: grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center. On mobile, content stacks vertically with the visual element appearing below the text.

Left Column — Text Content

1. Status Badge:
A small pill indicating platform reliability.

🟢 99.9% Uptime — Processing payroll in 40+ countries
inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-subtle border border-accent/10
text-xs font-body font-medium text-accent
Green dot is a w-1.5 h-1.5 rounded-full bg-success with a subtle pulse animation (animate-pulse with duration: 2s)
Framer Motion: enters from opacity: 0, y: 8, duration: 0.5, delay: 0.1

2. Primary Heading:
Three lines, each a separate <h1> span, progressively emphasized.

Run global payroll
like you've got an entire
finance team on autopilot.
font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] tracking-[-0.025em] text-foreground
Line 1 weight: font-semibold (sets context)
Line 2 weight: font-bold (builds momentum)
Line 3 weight: font-bold, words "on autopilot" wrapped in a <span> with a subtle accent underline effect: bg-gradient-to-r from-accent/30 to-accent/10 bg-no-repeat bg-bottom, background-size: 100% 6px, padding-bottom: 2px
Each line enters via Framer Motion staggered: opacity: 0, y: 24 → opacity: 1, y: 0
Line 1 delay: 0.25s, Line 2: 0.35s, Line 3: 0.45s, each duration: 0.6, ease: [0.25, 0.1, 0.25, 1]

3. Subtitle Paragraph:

PeopleSync unifies payroll, HR, and compliance in one platform. 
Onboard in 14 days. Automate tax filings across jurisdictions. 
Give your people a pay experience they actually love.
font-body text-base md:text-lg text-foreground-secondary leading-relaxed max-w-[520px] mt-6
Framer Motion: opacity: 0, y: 16 → opacity: 1, y: 0, delay: 0.6, duration: 0.5

4. CTA Row:
Horizontal flex with gap-3 mt-8, flex-wrap.
Primary CTA: "Start your demo" — bg-accent text-accent-foreground px-7 py-3.5 rounded-lg text-sm font-semibold tracking-[0.01em], hover: brightness-110 shadow-lg shadow-accent/20, transition-all duration-200, Framer Motion whileHover={{ scale: 1.03 }}. Enter delay: 0.75s.
Secondary CTA: "View pricing" — border border-border text-foreground px-7 py-3.5 rounded-lg text-sm font-medium tracking-[0.01em], hover: bg-surface border-foreground-tertiary, transition-all duration-200. Enter delay: 0.85s.
Tertiary link (inline): "or talk to sales →" — text-sm text-foreground-tertiary hover:text-foreground transition-colors ml-2 self-center, no underline until hover. Enter delay: 0.9s.

5. Trust Signal Row:

✓ SOC 2 Type II certified   ✓ GDPR compliant   ✓ ISO 27001
flex flex-wrap gap-x-5 gap-y-1 mt-6 text-xs font-body text-foreground-tertiary
Each checkmark is text-success text-xs mr-1
Framer Motion: opacity: 0 → opacity: 1, delay: 1.05s, duration: 0.5

6. Stats Row:
Three key metrics, horizontal with gap-8 mt-8 pt-8 border-t border-border-light:

| Metric | Value | Label |
|--------|-------|-------|
| Processing | $4.2B+ | Payroll annually |
| Companies | 2,400+ | Active teams |
| Accuracy | 99.97% | Filing accuracy |
Each stat card: flex flex-col gap-1
Value: font-display text-2xl md:text-3xl font-bold text-foreground tracking-[-0.02em] tabular-nums
Label: text-xs font-body text-foreground-tertiary tracking-[0.02em] uppercase
Values animate on scroll into view using Framer Motion useInView + useMotionValue + useSpring for a counting effect from 0 to the target number over 1.5 seconds
Stat row enters: opacity: 0, y: 20 → opacity: 1, y: 0, delay: 1.2s

Right Column — Animated Data Dashboard

Container: relative w-full h-[400px] md:h-[520px] lg:h-[600px], flex items-center justify-center. Hidden on mobile unless the user taps a "See Platform Preview" toggle button (visible only below md), which reveals it as an expandable section.

Background Plate:
A rounded-2xl card floating in space: bg-white border border-border shadow-xl shadow-foreground/5, w-full max-w-[480px] aspect-[4/3], slightly rotated (rotate-[-0.5deg]) for a natural, non-clinical feel. The card contains a stylized dashboard mockup.

Dashboard Mockup Content (Illustrative, built with divs and Recharts):

1. Top Bar: A slim bar with "PeopleSync Dashboard" label in font-display text-xs font-medium text-foreground-tertiary, and three colored dots (red, yellow, green, each w-2 h-2 rounded-full)

2. Bar Chart (Payroll by Region):
6 vertical bars of varying heights using Recharts <BarChart> or pure Tailwind divs with h-16, h-24, h-20, h-28, h-12, h-22 respectively
Bars colored in bg-accent/20 with the tallest bar in bg-accent/60
Animated entry: bars grow from scaleY: 0 to their full height on scroll into view, staggered by 80ms each
Below each bar, tiny labels: "US", "UK", "DE", "FR", "SG", "AU" in text-[9px] text-foreground-tertiary

3. Radial Progress Ring (Payroll Completion):
A circular progress indicator showing 94%
Built with two overlapping SVG circles (track + progress), stroke-dasharray animated from 0 to the target value on scroll
Centered text: "94%" in font-display text-lg font-bold text-foreground, below it "Q4 Payroll" in text-[9px] text-foreground-tertiary
Ring color: stroke-accent, track: stroke-border

4. Floating Mini Cards (Animated):
Three small cards float around the main dashboard plate with subtle parallax-like drift animation using Framer Motion animate={{ y: [0, -8, 0] }} with different durations and delays
Card 1: "Payroll Run ✓" in green, bg-surface border border-border rounded-lg px-3 py-2 text-xs font-medium, positioned absolute -top-6 -right-4
Card 2: "Tax Filed ✓" with a timestamp, positioned absolute -bottom-4 -left-6, animation delay 1.5s
Card 3: "2,847 Employees" with a small Lucide Users icon, positioned absolute top-1/3 -right-8, animation delay 2.5s

Entrance Animation for Dashboard:
The entire dashboard plate enters from the right: opacity: 0, x: 60 → opacity: 1, x: 0, duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1]. The floating cards appear after with staggered delays.

Trust Bar (Logo Marquee)

Container: w-full bg-surface border-y border-border-light, py-10 md:py-12, overflow hidden.

Inner Content: max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16, flex column, gap-6.

Heading: "Trusted by finance teams at" — text-center text-sm font-body font-medium text-foreground-tertiary tracking-[0.04em] uppercase

Logo Row:
A horizontal scrolling marquee of 8 placeholder company logos. Each logo is a simple text-based placeholder (company name in font-display text-foreground-tertiary/40 text-lg font-semibold tracking-[-0.02em]):

Stripe · Shopify · Notion · Figma · Vercel · Linear · Ramp · Mercury

The row scrolls infinitely leftward using CSS animation: marquee 25s linear infinite. On hover, animation pauses (animation-play-state: paused).

css
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

The logo set is duplicated twice to create a seamless loop. Each logo separated by · dot with mx-6 text-foreground-tertiary/20.

Features Grid Section

Container: max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 py-20 md:py-28 lg:py-32

Section Label: "PLATFORM CAPABILITIES" — text-xs font-body font-semibold text-accent tracking-[0.15em] uppercase mb-4, Framer Motion fade-up on scroll.

Section Heading: "Everything HR and payroll,\nin one connected system." — font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-[1.15] tracking-[-0.02em] max-w-2xl mb-12

Grid: grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6

Each feature card is an individual motion.div with staggered scroll-triggered entrance:

Card Base Styling:
bg-white border border-border rounded-2xl p-6 md:p-8, hover:border-foreground-tertiary hover:shadow-md hover:shadow-foreground/5
transition-all duration-300 ease-out
group class for child hover effects

Card Structure:
1. Icon: A Lucide icon in a w-11 h-11 rounded-xl bg-accent-subtle flex items-center justify-center mb-5, icon color: text-accent, size: 22px. On hover, icon container scales to 105% via group-hover:scale-105 transition-transform.
2. Title: font-display text-lg font-semibold text-foreground tracking-[-0.01em] mb-2
3. Description: font-body text-sm text-foreground-secondary leading-relaxed
4. Learn More Link: inline-flex items-center gap-1 text-sm font-medium text-accent mt-4, with an arrow icon that translates 4px right on group hover (group-hover:translate-x-1 transition-transform)

Six Feature Cards:

| Icon (Lucide) | Title | Description |
|---------------|-------|-------------|
| WalletCards | Global Payroll | Process payroll in 40+ countries with automatic tax calculations and local compliance built in. |
| ShieldCheck | Compliance Engine | Stay ahead of changing regulations with real-time alerts and auto-generated filing reports. |
| Clock | Time & Attendance | Capture hours, manage PTO, and sync timesheets directly to payroll without manual entry. |
| HeartHandshake | Benefits Administration | Offer competitive benefits packages, manage enrollments, and handle carrier connections seamlessly. |
| BarChart3 | Analytics & Reporting | Drill into payroll costs, headcount trends, and workforce data with customizable dashboards. |
| Users | Employee Self-Service | Give your team a beautiful portal to access pay stubs, update info, and request time off. |

Card Entrance Animation:
Each card: opacity: 0, y: 40 → opacity: 1, y: 0, duration: 0.55, ease: [0.25, 0.1, 0.25, 1]. Staggered by 80ms per card using Framer Motion variants with staggerChildren.

Social Proof Section (Single Testimonial)

Container: w-full bg-foreground (dark background for contrast), py-20 md:py-28 lg:py-32

Inner: max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16, max-w-4xl mx-auto text-center

Quotation Mark: A large decorative quote mark: "“" rendered in font-display text-[120px] md:text-[160px] leading-none text-white/8 select-none pointer-events-none, absolutely positioned behind the quote text. Framer Motion: opacity: 0, scale: 0.8 → opacity: 1, scale: 1, delay: 0.2.

Quote Text:

"PeopleSync cut our payroll processing time from 3 days 
to 45 minutes. Our finance team got their Fridays back."
font-display text-2xl md:text-3xl lg:text-4xl font-medium text-white leading-[1.3] tracking-[-0.015em]
Framer Motion: opacity: 0, y: 20 → opacity: 1, y: 0, delay: 0.4, duration: 0.6

Attribution:
Headshot placeholder: w-12 h-12 rounded-full bg-white/10 border border-white/20, with initials "SR" centered in text-white/60 text-sm font-medium
Name: "Sarah Reeves" — font-body text-white font-medium mt-3
Title: "VP of Finance, Monogram" — font-body text-sm text-white/50
Framer Motion: opacity: 0 → opacity: 1, delay: 0.7

Stats Row (below quote):
Three quantitative results, flex flex-wrap justify-center gap-10 mt-12 pt-10 border-t border-white/10:

| Stat | Label |
|------|-------|
| 94% | Faster payroll close |
| 18 min | Avg. support response |
| 40+ | Countries supported |
Stat value: font-display text-2xl md:text-3xl font-bold text-white tabular-nums
Label: text-xs font-body text-white/50 uppercase tracking-[0.06em] mt-1
Count-up animation on scroll

CTA Banner Section

Container: max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-20

Card: bg-accent rounded-3xl p-8 md:p-12 lg:p-16, relative, overflow-hidden. Flex column on mobile, md:flex-row md:items-center md:justify-between gap-8.

Background Decoration:
Abstract geometric shapes in bg-white/10 positioned absolutely. A large circle (w-64 h-64 rounded-full) in top-right, a smaller circle in bottom-left. These shapes have a subtle floating animation via Framer Motion: animate={{ y: [0, -12, 0], rotate: [0, 3, 0] }} with duration: 8s, repeat: Infinity. pointer-events-none.

Left Content:
Heading: "Ready to simplify\nhow you pay your people?" — font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-[-0.02em]
Subtitle: "Book a 25-minute walkthrough tailored to your team's size and payroll complexity." — font-body text-white/80 text-base md:text-lg mt-4 max-w-lg
Framer Motion: heading and subtitle fade up on scroll

Right CTA:
"Schedule Your Demo" button: bg-white text-accent px-8 py-4 rounded-xl text-base font-semibold tracking-[0.01em], hover: bg-white/95 shadow-xl shadow-black/10, transition-all duration-200
Framer Motion whileHover={{ scale: 1.04 }}
Below button: "No commitment · 25 minutes · Tailored to you" — text-white/60 text-xs mt-3 text-center

Footer

Container: bg-foreground text-white, pt-16 md:pt-20 pb-10

Inner: max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16

Top Section: 5-column grid: grid grid-cols-2 md:grid-cols-5 gap-8 mb-12

Columns:

| Column | Links |
|--------|-------|
| Platform | Payroll, HR Management, Time Tracking, Benefits, Compliance |
| Solutions | Startups, Mid-Market, Enterprise, Remote Teams, EOR |
| Resources | Blog, Guides, Webinars, API Docs, Help Center |
| Company | About, Careers, Press, Partners, Contact |
| Compare | vs. Gusto, vs. Rippling, vs. Deel, vs. ADP, vs. Paychex |
Column headings: font-body text-xs font-semibold text-white/40 uppercase tracking-[0.1em] mb-4
Links: font-body text-sm text-white/60 hover:text-white transition-colors duration-200, stacked with gap-2.5

Bottom Bar: border-t border-white/10 pt-8 mt-8, flex column on mobile, md:flex-row md:justify-between md:items-center gap-4:
Logo + copyright: "© 2025 PeopleSync, Inc." — text-white/40 text-sm
Social icons row: 5 Lucide icons (Twitter, Linkedin, Youtube, Instagram, Github) each w-5 h-5 text-white/40 hover:text-white transition-colors cursor-pointer
Legal links: "Privacy Policy · Terms of Service · Cookie Settings" — text-white/40 text-sm hover:text-white transition-colors, separated by ·

Animations & Motion System

Scroll-Triggered Entrance Pattern
All below-the-fold sections use a consistent scroll-triggered animation pattern via Framer Motion's useInView:

tsx
const ref = useRef(null);
const isInView = useInView(ref, { once: true, margin: '-80px' });

<motion.div
  ref={ref}
  initial={{ opacity: 0, y: 30 }}
  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
  transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
  {/ content /}
</motion.div>

Staggered Children
For grids and lists, use container variants:

tsx
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] },
  },
};

Count-Up Animation
For stat numbers, use a custom hook useCountUp:

tsx
const useCountUp = (target: number, duration: number = 1.5, start: boolean = false) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const display = useSpring(rounded, { duration: duration * 1000 });

  useEffect(() => {
    if (start) {
      const controls = animate(count, target, { duration, ease: 'easeOut' });
      return controls.stop;
    }
  }, [start, target, duration, count]);

  return display;
};

Reduced Motion
css
@media (prefers-reduced-motion: reduce) {
  , ::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

For Framer Motion components, use useReducedMotion() hook and conditionally set initial and animate to the visible state when reduced motion is preferred.

Hover States Summary

| Element | Default | Hover |
|---------|---------|-------|
| Nav links | text-foreground-secondary | text-foreground |
| Sign In link | text-foreground-secondary | text-foreground |
| Accent buttons | bg-accent text-white | brightness-110 shadow-lg shadow-accent/20 |
| Outline buttons | border-border text-foreground | bg-surface border-foreground-tertiary |
| White on accent buttons | bg-white text-accent | bg-white/95 shadow-xl |
| Feature cards | border-border | border-foreground-tertiary shadow-md |
| Footer links | text-white/60 | text-white |
| Social icons | text-white/40 | text-white |
| Logo marquee | animation-play-state: running | animation-play-state: paused |

All transitions use duration-200 or duration-300 with ease-out timing.

Responsive Behavior

| Breakpoint | Navbar | Hero | Features | Testimonial | Footer |
|------------|--------|------|----------|-------------|--------|
| Base (<640px) | Logo + hamburger + Demo CTA | Stacked, no dashboard, text-4xl heading | 1 column, full-width cards | text-2xl quote | 2-column link grid |
| sm (640px) | Same | Heading text-5xl, stats row wraps | Same | Same | Same |
| md (768px) | Full nav links + Sign In, hamburger hidden | 2-column grid, dashboard visible, heading text-6xl | 2 columns | text-3xl quote | 5 columns |
| lg (1024px) | Increased padding | Heading text-7xl, max-widths applied | 3 columns | text-4xl quote | Full layout |
| xl (1280px) | Centered with max-width | Full layout | Full grid | Centered with max-width | Full layout |

Dashboard Visibility on Mobile:
On screens below md, the right column dashboard is hidden by default. A toggle button "Preview Platform ↗" appears below the stats row. Tapping it reveals the dashboard in an expandable section with a smooth height animation via Framer Motion AnimatePresence and motion.div with animate={{ height: 'auto' }}.

Component File Structure

src/
├── app/
│   ├── layout.tsx                    (fonts, metadata, globals.css)
│   ├── page.tsx                      (composes full landing page)
│   └── globals.css                   (CSS variables, keyframes, reduced-motion)
├── components/
│   ├── landing/
│   │   ├── HeroSection.tsx           (hero composition with left/right columns)
│   │   ├── Navbar.tsx                (desktop + mobile, scroll background)
│   │   ├── MobileMenu.tsx            (overlay with AnimatePresence)
│   │   ├── HeroContent.tsx           (left column: badge, heading, CTAs, stats)
│   │   ├── HeroDashboard.tsx         (right column: animated dashboard mockup)
│   │   ├── TrustBar.tsx              (logo marquee)
│   │   ├── FeaturesGrid.tsx          (6 feature cards)
│   │   ├── FeatureCard.tsx           (individual feature card)
│   │   ├── TestimonialSection.tsx    (dark background quote + stats)
│   │   ├── CTABanner.tsx             (accent background call to action)
│   │   └── Footer.tsx                (5-column link grid + bottom bar)
├── hooks/
│   ├── useCountUp.ts                 (animated counter hook)
│   └── useScrollPosition.ts         (scroll tracking for navbar)
├── lib/
│   └── utils.ts                      (cn() helper, formatting)

Accessibility Requirements
All interactive elements have visible focus-visible rings: focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent
h1 used once on the page (hero heading)
Semantic heading hierarchy: h1 → h2 for section headings → h3 for card titles
All images have descriptive alt text
Mobile menu toggle has aria-label="Toggle navigation menu" and aria-expanded
Platform dropdown is operable via keyboard (Enter/Space to open, Escape to close, arrow keys to navigate items)
Color contrast meets WCAG AA minimums (4.5:1 for text, 3:1 for large text)
prefers-reduced-motion respected globally
Marquee animation respects prefers-reduced-motion by displaying logos statically in a grid
Form-related CTA buttons use descriptive labels (no ambiguous "Click here")
Dashboard mockup is decorative and uses aria-hidden="true" — it does not contain real interactive elements

Implementation Notes for AI Builders

1. This is a full landing page, not just a hero. Every section described above must be implemented as a complete, scrollable page.
2. Use next/image for any bitmap images. For the dashboard mockup, since it's built with divs and Recharts, standard DOM elements are fine.
3. Recharts is used only in the hero dashboard. Import only BarChart, Bar, ResponsiveContainer from Recharts. Keep the bundle impact minimal. If Recharts adds too much weight, replicate the bar chart with pure Tailwind divs and Framer Motion.
4. The count-up hook must clean up animations on unmount using the returned stop function from Framer Motion's animate().
5. The logo marquee uses pure CSS animation via @keyframes in globals.css. The content is duplicated in the JSX to create a seamless loop.
6. Navbar scroll background transition uses Framer Motion's useMotionValueEvent on scrollY to toggle a boolean state, then conditionally applies the backdrop-blur classes via motion.nav animate prop.
7. Mobile dashboard toggle uses local React state. When expanded, the dashboard renders with AnimatePresence and a motion.div that animates height from 0 to auto. For smooth height: auto animation, use a measured height approach or a CSS grid trick (grid-template-rows: 0fr → grid-template-rows: 1fr).
8. The platform dropdown in the navbar uses onMouseEnter/onMouseLeave with a small delay before closing (150ms) to prevent accidental closure when the cursor moves between the trigger and the dropdown panel.
9. All TypeScript interfaces must be explicitly defined. No any types. Use React.FC only where children are expected; otherwise, use standard function components with typed props.
10. The page layout.tsx must include the font links and apply Inter to the body via a CSS class or the Tailwind font-body utility on the <body> or top-level wrapper.
11. No external UI libraries beyond shadcn/ui, Lucide React, and Recharts. shadcn/ui Button is the only pre-built component used. All other UI is custom Tailwind.
12. Responsive images in the testimonial section (headshot placeholders) should use a simple div with initials and background color. No need for actual image assets.
13. The color system uses CSS custom properties (HSL values) defined in globals.css and referenced in tailwind.config.ts via the colors extension. This ensures consistency between Tailwind utilities and any inline styles.
14. Framer Motion layoutId is not used in this design (unlike some previous prompts). The navbar active indicator uses a simple conditional class rather than an animated layout indicator, keeping complexity manageable.

End of Prompt. This specification is complete and production-ready. Implement every section as described. The result should feel like a premium SaaS product landing page—warm, trustworthy, technically sophisticated, and distinctly human. No generic stock photography. No unnecessary decoration. Every element earns its place.
    `,
    likes: 200,
  },
  {
    id: 3,
    type: "video",
    src: "linkflow.png",
    title: "LinkFlow",
    tag: "Hero Section",
    isPremium: false,
    likes: 230,
    prompt: `
    LinkFlow — AI Workflow Platform Hero Section

Project Overview
A single-page hero section for LinkFlow, an AI-driven workflow automation platform that connects disparate business systems into coherent, automated data pipelines. The design centers on a seamless boomerang-looping background video created by capturing frames from a source video and playing them forward then backward in an infinite, fluid cycle. No Framer Motion. All animations use pure CSS transitions with carefully tuned cubic-bezier curves. The aesthetic is organic-tech: deep forest greens, frosted glass, and Neue Haas Grotesk typography conveying grounded intelligence and quiet capability. Built for Vite + React 18 + TypeScript + Tailwind CSS 3.4. Ready for immediate use in Lovable, Bolt, v0, Cursor, or any React AI builder.

Tech Stack
Vite 5.x (build tool)
React 18.3 (UI library)
TypeScript 5.5 (strict mode)
Tailwind CSS 3.4 (utility-first styling)
lucide-react 0.344 (icons: LogIn, UserPlus, Play, Sparkles, Menu, X)
No Framer Motion — all animations are CSS transition-* classes
No additional UI libraries

Fonts
Loaded in index.html via <link> tags in <head>:

html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
<link href="https://db.onlinewebfonts.com/c/6e47ef470dd19698c911332a9b4d1cf4?family=Neue+Haas+Grotesk+Text+Pro" rel="stylesheet" />
<link href="https://db.onlinewebfonts.com/c/dec0d9b4e22ca588dc20e1e2e09a59b5?family=Neue+Haas+Grotesk+Display+Pro+55+Roman" rel="stylesheet" />

CSS Font Stack (index.css):
css
html, body, #root {
  height: 100%;
  margin: 0;
  font-family: 'Neue Haas Grotesk Display Pro 55 Roman', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

Font Hierarchy:
Primary Display: 'Neue Haas Grotesk Display Pro 55 Roman' — used for the hero heading, logo, and primary navigation labels. Weight is inherently 400–500 (55 Roman is a medium weight). Applied globally via body font-family.
Secondary Text: 'Neue Haas Grotesk Text Pro' — fallback within the stack for body copy, used automatically by the font-family cascade when Display Pro is unavailable.
System Fallback: 'Helvetica Neue', Helvetica, Arial, sans-serif — final fallback tier.
Inter (Google Fonts, weights 300/400/500/600/700) — loaded and available for use via Tailwind's font-sans if needed for specific UI elements, though the primary stack uses Neue Haas Grotesk throughout.

Tailwind Config Extension:
js
theme: {
  extend: {
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      display: ['"Neue Haas Grotesk Display Pro 55 Roman"', '"Neue Haas Grotesk Text Pro"', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
      body: ['"Neue Haas Grotesk Text Pro"', '"Neue Haas Grotesk Display Pro 55 Roman"', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
    },
  },
}

The body uses the global font-family stack. Individual elements can override via font-display or font-body Tailwind classes as needed.

Background Video System (BoomerangVideoBg)

Video Source URL:

https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260511_131941_d136af49-e243-493a-be14-6ff3f24e09e6.mp4

Concept:
A custom React component (BoomerangVideoBg.tsx) captures individual frames from a source <video> element into an array of <canvas> elements during the video's first playback. Once the video reaches its end, capturing stops, and those captured frames are rendered onto a display canvas in a forward-then-backward loop, creating a seamless infinite boomerang effect at 30 frames per second. This eliminates visible seams, prevents jarring loop resets, and ensures the background feels fluid and alive.

Component Props:
tsx
type Props = {
  src: string;       // CloudFront video URL
  className?: string; // Optional additional classes for the wrapper div
};

Video Element:
<video> ref: videoRef
Attributes: src={src}, muted, playsInline, preload="auto", crossOrigin="anonymous"
CSS: w-full h-full object-cover
Visibility: display: block while capturing; display: none once framesReady is true (canvas takes over)

Display Canvas:
<canvas> ref: displayCanvasRef
CSS: w-full h-full object-cover
Visibility: display: none while capturing; display: block once framesReady is true

Wrapper Div:
Default className: absolute inset-0 w-full h-full (overridable via className prop)
Renders both video and canvas elements; CSS visibility toggling swaps between them seamlessly

Capture Logic (useEffect #1):

1. On mount, access videoRef.current.
2. If video.readyState >= 1, begin capture immediately. Otherwise, listen for loadedmetadata event.
3. Start video playback via video.play().catch(() => {}).
4. Determine frame capture method:
If browser supports requestVideoFrameCallback (Chrome, Edge), use it for per-frame capture.
Otherwise, fall back to requestAnimationFrame loop.
5. captureFrame() function:
Skip if capturing is false, video.readyState < 2, or video.currentTime hasn't changed since last capture.
Get video.videoWidth and video.videoHeight. If either is 0, return early.
Compute scale: Math.min(1, MAXWIDTH / videoWidth) where MAXWIDTH = 960.
Create an offscreen <canvas> with dimensions Math.round(videoWidth  scale) x Math.round(videoHeight  scale).
Draw the current video frame onto the canvas via ctx.drawImage(video, 0, 0, w, h).
Push the canvas into the frames array.
6. Listen for video ended event:
Set capturing = false.
If frames.length > 0, store frames in framesRef.current and set framesReady = true.
7. Cleanup: cancel any active requestAnimationFrame, remove event listeners.

Playback Loop (useEffect #2):

1. Triggered when framesReady becomes true.
2. Access displayCanvasRef.current and its 2D context.
3. Set canvas dimensions to match the first captured frame.
4. Initialize index = 0, direction = 1 (forward).
5. Track last timestamp; render at 30fps (interval = 1000 / 30).
6. Each frame:
Draw frames[index] onto the display canvas at (0, 0).
Increment index by direction.
If index >= frames.length - 1: clamp to last frame, reverse direction to -1.
If index <= 0: clamp to first frame, reverse direction to 1.
7. Use requestAnimationFrame for the render loop. Cleanup on unmount or when dependencies change.

Component Return JSX:
tsx
<div className={props.className ?? 'absolute inset-0 w-full h-full'}>
  <video
    ref={videoRef}
    src={props.src}
    className="w-full h-full object-cover"
    style={{ display: framesReady ? 'none' : 'block' }}
    muted
    playsInline
    preload="auto"
    crossOrigin="anonymous"
  />
  <canvas
    ref={displayCanvasRef}
    className="w-full h-full object-cover"
    style={{ display: framesReady ? 'block' : 'none' }}
  />
</div>

Key Technical Notes:
MAX_WIDTH = 960 ensures reasonable memory usage. The canvas scales to fit the viewport via CSS w-full h-full object-cover, so visual quality remains high on standard screens.
crossOrigin="anonymous" is required on the video element to avoid taint on the capture canvas when the video source is from a different origin (CloudFront).
Frame capture stops when the video ends; the boomerang loop plays from the captured array, independent of the original video element lifecycle.

Color Palette

A refined, nature-inspired green palette. Deep forest tones for text and interactive elements, soft sage for accents, and frosted white for glass surfaces.

| Token | Hex Value | Tailwind Usage | Purpose |
|-------|-----------|----------------|---------|
| Dark Green | #1f2a1d | text-[#1f2a1d], bg-[#1f2a1d] | Primary text on light backgrounds, solid buttons, active nav link |
| Medium Dark Green | #2d3a2a | text-[#2d3a2a] | Logo color, secondary text, link hover baseline |
| Button Hover Green | #2a3827 | bg-[#2a3827] | Solid button hover state (slightly lighter than #1f2a1d) |
| Body Text Green | #4b5b47 | text-[#4b5b47] | Body paragraph text, subdued nav links |
| Heading Primary Green | #336443 | text-[#336443] | Hero heading main text color |
| Heading Accent Sage | #85AB8B | text-[#85AB8B] | Hero heading accent span color (lighter, airy) |
| Bottom-Left Text Green | #3d5638 | text-[#3d5638] | Bottom CTA block text, label |
| Bottom-Left Button Green | #3d5638 | bg-[#3d5638] | Bottom CTA block button background (mobile/desktop variant) |
| Bottom-Left Button Hover | #2d4228 | hover:bg-[#2d4228] | Bottom CTA button hover state |
| White/Glass | white, white/70, white/95 | Various | Navbar glass background, mobile overlay, bottom text on dark areas |

Color Application Rules:
Text on white/light glass backgrounds uses dark greens (#1f2a1d, #2d3a2a, #4b5b47).
Text positioned over the video (bottom-left CTA on desktop) uses white or near-white (white/85, white/95) for readability against the moving background.
Buttons on white glass backgrounds use #1f2a1d fill with white text.
Buttons over video areas (desktop bottom-left) use white fill with dark green text.
The hero heading splits color: "Close the rift" in #336443, "linking signals and action" in #85AB8B for a two-tone, depth-creating effect.

Layout Structure

┌──────────────────────────────────────────────────────┐
│  SECTION (relative, min-h-screen, overflow-hidden)   │
│                                                      │
│  ┌────────────────────────────────────────────────┐  │
│  │  BOOMERANG VIDEO BG (absolute, inset-0, z-0)   │  │
│  │  Full viewport canvas, object-cover            │  │
│  └────────────────────────────────────────────────┘  │
│                                                      │
│  ┌────────────────────────────────────────────────┐  │
│  │  NAVBAR (absolute, top-0, z-30)                │  │
│  │  Logo · Desktop Pill Nav · Auth Links · Menu   │  │
│  └────────────────────────────────────────────────┘  │
│                                                      │
│  ┌────────────────────────────────────────────────┐  │
│  │  HERO COPY (relative, z-10, centered)          │  │
│  │  H1 Heading · Subtitle Paragraph               │  │
│  └────────────────────────────────────────────────┘  │
│                                                      │
│  ┌────────────────────────────────────────────────┐  │
│  │  BOTTOM-LEFT CTA (absolute, z-10)              │  │
│  │  Label · Description · Buttons                 │  │
│  └────────────────────────────────────────────────┘  │
│                                                      │
│  ┌────────────────────────────────────────────────┐  │
│  │  BOTTOM-RIGHT LINK (absolute, z-10)            │  │
│  │  Play Button · "How we build?" · Duration       │  │
│  └────────────────────────────────────────────────┘  │
│                                                      │
│  ┌────────────────────────────────────────────────┐  │
│  │  MOBILE OVERLAY (fixed, z-20, conditional)     │  │
│  │  Semi-transparent backdrop                     │  │
│  └────────────────────────────────────────────────┘  │
│                                                      │
│  ┌────────────────────────────────────────────────┐  │
│  │  MOBILE DRAWER (fixed, z-20, conditional)      │  │
│  │  Slides from right, full-height, white glass   │  │
│  └────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────┘

Navigation Bar

Container:
absolute top-0 left-0 right-0 z-30
Flex row, items-center justify-between
Padding: px-4 sm:px-6 md:px-10 py-4 sm:py-6

Logo (Left):
Flex row, items-center gap-2
Text color: text-[#2d3a2a]
Mark: "LinkFlow" — text-lg sm:text-xl md:text-2xl font-semibold tracking-tight
Superscript: "TM" — text-[10px] sm:text-xs font-medium in <sup> tag

Desktop Pill Navigation (Center, hidden below lg):
Container: hidden lg:flex items-center gap-1 bg-white/70 backdrop-blur-md rounded-full pl-6 pr-1 py-1 shadow-sm border border-white/60
Three navigation links inside the pill:
  1. "Purpose" (href: #mission) — active by default: font-semibold text-[#1f2a1d]
  2. "The Process" (href: #how) — font-medium text-[#4b5b47] hover:text-[#1f2a1d]
  3. "Tariffs" (href: #pricing) — font-medium text-[#4b5b47] hover:text-[#1f2a1d]
Each link: text-sm px-3 py-2 transition-colors
CTA button inside pill (rightmost): "Try it Live" — bg-[#1f2a1d] hover:bg-[#2a3827] text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors ml-2

Auth Links (Right, hidden below sm):
Flex row, items-center gap-3 sm:gap-6
Text color: text-[#2d3a2a]
"Sign Me Up!" link: hidden sm:flex items-center gap-2 text-sm font-medium hover:opacity-80 transition-opacity, with <UserPlus> icon (w-4 h-4)
"Enter" link: hidden sm:flex items-center gap-2 text-sm font-medium hover:opacity-80 transition-opacity, with <LogIn> icon (w-4 h-4)

Hamburger Menu Button (Right, visible below lg):
lg:hidden relative flex items-center justify-center w-10 h-10 rounded-full bg-white/70 backdrop-blur-md border border-white/60 text-[#1f2a1d] transition-all duration-300 hover:bg-white/90
aria-label toggles between "Open menu" and "Close menu" based on menuOpen state
aria-expanded={menuOpen}
Contains two icons absolutely positioned, opacity/toggle animated:
<Menu> icon: w-5 h-5. When closed: opacity-100 rotate-0 scale-100. When open: opacity-0 rotate-90 scale-50. Transition: transition-all duration-300.
<X> icon: w-5 h-5. When closed: opacity-0 -rotate-90 scale-50. When open: opacity-100 rotate-0 scale-100. Transition: transition-all duration-300.
On click: setMenuOpen((v) => !v)

Mobile Menu System

State: const [menuOpen, setMenuOpen] = useState(false)

Body Scroll Lock:
tsx
useEffect(() => {
  if (menuOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
  return () => {
    document.body.style.overflow = '';
  };
}, [menuOpen]);

Overlay Backdrop:
lg:hidden fixed inset-0 z-20
Transition: transition-opacity duration-300
Open: opacity-100 pointer-events-auto
Closed: opacity-0 pointer-events-none
Background: bg-[#1f2a1d]/40 backdrop-blur-sm
On click: setMenuOpen(false) (closes menu when tapping outside drawer)

Slide-In Drawer:
lg:hidden fixed top-0 right-0 bottom-0 z-20
Width: w-[85%] max-w-sm
Background: bg-white/95 backdrop-blur-xl shadow-2xl
Transition: transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
Open: translate-x-0
Closed: translate-x-full

Drawer Content:
Flex column, h-full pt-24 px-8 pb-8
Navigation links section: flex flex-col gap-1
Three links: "Purpose", "The Process", "Tariffs" (same hrefs)
Each: text-2xl font-semibold text-[#1f2a1d] py-4 border-b border-[#1f2a1d]/10
Staggered entrance animation via inline style delay:
Base transition: transition-all duration-500
Open state: translate-x-0 opacity-100
Closed state: translate-x-8 opacity-0
Delay per link: transitionDelay: menuOpen ? $150 + i * 70}ms : '0ms'
Each link closes menu on click: onClick={() => setMenuOpen(false)}
Auth links and CTA section (below nav links, mt-8):
Container: flex flex-col gap-4
Same transition as nav links, delay: 400ms when opening, 0ms when closing
"Sign Me Up!" link: flex items-center gap-2 text-sm font-medium text-[#2d3a2a] sm:hidden with <UserPlus> icon
"Enter" link: flex items-center gap-2 text-sm font-medium text-[#2d3a2a] sm:hidden with <LogIn> icon
"Try it Live" button: mt-2 bg-[#1f2a1d] hover:bg-[#2a3827] text-white text-sm font-semibold px-5 py-3 rounded-full transition-colors

Hero Copy Section

Container:
relative z-10 flex flex-col items-center text-center
Padding: pt-24 sm:pt-28 md:pt-32 px-4 sm:px-6

Primary Heading (H1):
Text content (two-tone):
Part 1: "Close the rift" — color text-[#336443]
Part 2: "linking signals and action" — color text-[#85AB8B]
The line break occurs after "linking" on sm: screens and above: <br className="hidden sm:block" /> between "linking" and "signals and action"
Font: Inherits the global body font stack (Neue Haas Grotesk Display Pro 55 Roman)
Explicit inline style on the <h1>:
  css
  font-family: "Neue Haas Grotesk Display Pro 55 Roman", "Neue Haas Grotesk Text Pro", "Helvetica Neue", Helvetica, Arial, sans-serif;
  letter-spacing: -0.035em;
Font weight: font-normal
Line height: leading-[0.95]
Responsive font sizes:
Base: text-[2rem] (~32px)
sm: text-4xl (~36px)
md: text-5xl (~48px)
lg: text-[4.75rem] (~76px)
xl: text-[5.25rem] (~84px)
Max width: max-w-5xl

Subtitle Paragraph:
Text: "Shape scattered signals into meaningful outcomes via AI-driven workflows."
Color: text-[#4b5b47]
Font size: text-sm sm:text-base md:text-lg
Line height: leading-relaxed
Max width: max-w-md
Horizontal padding: px-2
Margin top: mt-6 sm:mt-8

Animation Note:
No entrance animations (fade, rise, stagger) are specified for the hero copy. Text renders immediately on load. This maintains the raw, immediate feel of the design and aligns with the "no Framer Motion, CSS transitions only" constraint.

Bottom-Left CTA Block

Container:
absolute left-4 right-4 sm:right-auto sm:left-6 md:left-10 bottom-6 sm:bottom-8 md:bottom-10 z-10
Max width: max-w-sm
On mobile (< sm): spans full width with left-4 right-4. On sm: and above: right auto, left positioned, constrained width.

Label Row:
Flex row, items-center gap-2
Text color: text-[#3d5638] sm:text-white/95 (green on mobile, near-white on desktop over video)
Margin bottom: mb-3
Content:
<Sparkles> icon: w-4 h-4
Text: "FluxEngine" with "TM" superscript: <sup className="text-[10px]">TM</sup>
Font: text-sm font-semibold sm:font-medium

Description Paragraph:
Text: "LinkFlow smoothly unites your company systems, streamlining data paths between services without having to write custom scripts."
Color: text-[#3d5638]/90 sm:text-white/85 (green at 90% opacity on mobile, white at 85% on desktop)
Font size: text-xs leading-relaxed
Max width: max-w-xs
Font weight: font-medium sm:font-normal
Margin bottom: mb-6

Button Row:
Flex row, items-center gap-4 flex-wrap

Primary Button ("Try it Live"):
Text: "Try it Live"
Background: bg-[#3d5638] sm:bg-white (green on mobile, white on desktop)
Hover: hover:bg-[#2d4228] sm:hover:bg-white/90
Text color: text-white sm:text-[#1f2a1d] (white on mobile, dark green on desktop)
Font: text-sm font-semibold
Padding: px-5 sm:px-6 py-2.5 sm:py-3
Border radius: rounded-full
Shadow: shadow-sm
Transition: transition-colors

Secondary Button ("Know More."):
Text: "Know More."
Color: text-[#3d5638] sm:text-white
Font: text-sm font-semibold sm:font-medium
Hover: hover:opacity-80 transition-opacity
No background, no border — pure text link

Bottom-Right Video Link

Container:
hidden sm:flex absolute right-6 md:right-10 bottom-8 md:bottom-10 z-10
Flex row, items-center gap-2
Text color: text-white/90
Font size: text-sm

Play Button:
flex items-center justify-center w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors
Contains <Play> icon: w-3 h-3 fill-white text-white ml-0.5 (small triangle, fill for solid look, slight right offset for optical centering)

Label:
Text: "How we build?"
Font weight: font-medium

Duration:
Text: "1:35"
Color: text-white/60

Animation Summary (All CSS Transitions)

No Framer Motion. No JavaScript animation libraries. Every animation uses Tailwind's transition-* utility classes combined with state-toggled CSS classes.

| Element | Property | Duration | Easing | States |
|---------|----------|----------|--------|--------|
| Hamburger Menu icon | transition-all | duration-300 | default ease | Closed: opacity-100 rotate-0 scale-100. Open: opacity-0 rotate-90 scale-50 |
| Hamburger X icon | transition-all | duration-300 | default ease | Closed: opacity-0 -rotate-90 scale-50. Open: opacity-100 rotate-0 scale-100 |
| Hamburger button bg | transition-all | duration-300 | default ease | Hover: bg-white/90 |
| Mobile overlay backdrop | transition-opacity | duration-300 | default ease | Open: opacity-100 pointer-events-auto. Closed: opacity-0 pointer-events-none |
| Mobile drawer | transition-transform | duration-500 | cubic-bezier(0.22,1,0.36,1) | Open: translate-x-0. Closed: translate-x-full |
| Mobile nav links | transition-all | duration-500 | default ease | Open: translate-x-0 opacity-100. Closed: translate-x-8 opacity-0. Delays: 150ms, 220ms, 290ms for links 0–2 |
| Mobile CTA group | transition-all | duration-500 | default ease | Open: translate-x-0 opacity-100 (delay 400ms). Closed: translate-x-8 opacity-0 (delay 0ms) |
| Nav auth links (opacity) | transition-opacity | default (~150ms) | default ease | Hover: opacity-80 |
| All buttons (color) | transition-colors | default (~150ms) | default ease | Background/color changes on hover |
| Desktop pill nav links | transition-colors | default (~150ms) | default ease | text-[#4b5b47] → text-[#1f2a1d] |

Staggered Delay Implementation:
Inline style attribute with dynamic transitionDelay:
tsx
style={{ transitionDelay: menuOpen ? $150 + index * 70}ms : '0ms' }}

This creates a cascading entrance effect when the drawer opens. All links snap back simultaneously when closing (delay 0ms).

Cubic-Bezier Note:
The mobile drawer uses ease-[cubic-bezier(0.22,1,0.36,1)] — a custom ease-out curve that mimics material design's deceleration, providing a smooth, premium-feeling slide. This is applied via Tailwind's arbitrary easing syntax.

Responsive Behavior

| Breakpoint | Navbar | Hero Heading | Bottom-Left CTA | Bottom-Right Link | Mobile Menu |
|------------|--------|--------------|-----------------|-------------------|-------------|
| Base (<640px) | Logo + hamburger + auth icons hidden | text-[2rem], full-width, no forced line break | Full-width (left-4 right-4), green text, green button | Hidden | Available via hamburger |
| sm (640px) | Auth links (Sign Me Up, Enter) appear, hamburger still visible | text-4xl, line break active after "linking" | Right-edge auto, left-anchored, white text, white button | Visible | Available via hamburger |
| md (768px) | Larger logo, more padding | text-5xl | Left: md:left-10, Bottom: md:bottom-10 | Right: md:right-10, Bottom: md:bottom-10 | Available via hamburger |
| lg (1024px) | Desktop pill nav appears, hamburger hidden | text-[4.75rem] | Full desktop positioning | Full desktop positioning | Hidden (desktop nav active) |
| xl (1280px) | Full layout | text-[5.25rem] | No change | No change | Hidden |

Mobile-Specific Color Adaptations:
Bottom-left CTA block switches from green-on-transparent (mobile, over the video but with lighter visual weight) to white-on-video (desktop, where the text needs to pop against the moving background).
This is achieved via the sm: prefix on color classes: text-[#3d5638] sm:text-white/95, bg-[#3d5638] sm:bg-white, etc.

Accessibility
Hamburger button: aria-label toggles between "Open menu" and "Close menu". aria-expanded={menuOpen} reflects current state.
Mobile overlay backdrop: Clicking it closes the menu. onClick={() => setMenuOpen(false)} on the backdrop div.
Body scroll lock: document.body.style.overflow = 'hidden' when menu is open; restored on close or unmount.
Focus management: When mobile menu opens, focus should move to the first link in the drawer. When it closes, focus returns to the hamburger button. (Implement with useRef and useEffect watching menuOpen.)
Keyboard navigation: All links and buttons are natively focusable. The hamburger is a <button>. Navigation links are <a> tags with href attributes.
Color contrast: Dark green (#1f2a1d) on white glass achieves ~12:1 contrast ratio, exceeding WCAG AAA. White text on the video background may have variable contrast depending on the frame content; the semi-transparent button backgrounds and frosted glass provide sufficient backing for readability.
prefers-reduced-motion: Wrap CSS animation classes in a media query:
  css
  @media (prefers-reduced-motion: no-preference) {
    / transition and animation classes apply naturally via Tailwind /
  }
  @media (prefers-reduced-motion: reduce) {
    , ::before, *::after {
      transition-duration: 0.01ms !important;
      animation-duration: 0.01ms !important;
    }
  }
  
  This disables all transition-based animations when the user prefers reduced motion. The mobile drawer will appear/disappear instantly.

Component & File Structure

project-root/
├── index.html                    (font preconnects and stylesheet links)
├── src/
│   ├── main.tsx                  (ReactDOM.createRoot, renders <App />)
│   ├── App.tsx                   (full hero section, all state, all JSX)
│   ├── BoomerangVideoBg.tsx      (video capture + boomerang canvas component)
│   └── index.css                 (Tailwind directives, global font stack, reduced-motion media query)
├── tailwind.config.js            (Tailwind config with fontFamily extension)
├── postcss.config.js             (PostCSS with Tailwind + autoprefixer)
├── tsconfig.json                 (TypeScript strict mode config)
├── vite.config.ts                (Vite with React plugin)
└── package.json                  (dependencies as specified)

Two primary component files:
1. BoomerangVideoBg.tsx — self-contained, handles all video capture and canvas rendering logic. Exported as default. Accepts src and optional className props.
2. App.tsx — imports BoomerangVideoBg, manages menuOpen state, renders the entire hero layout.

No additional components are needed. The mobile drawer, navigation, and all content blocks are rendered inline within App.tsx.

Package Dependencies

json
{
  "dependencies": {
    "lucide-react": "^0.344.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.1",
    "autoprefixer": "^10.4.18",
    "postcss": "^8.4.35",
    "tailwindcss": "^3.4.1",
    "typescript": "^5.5.3",
    "vite": "^5.4.2"
  }
}

No additional libraries. No Framer Motion. No shadcn/ui. Pure React + Tailwind + Lucide icons.

Implementation Notes for AI Builders

1. The boomerang video component is the hero's defining feature. Implement BoomerangVideoBg.tsx exactly as specified. The forward-backward frame loop must be seamless. Test with the provided CloudFront video URL.
2. Video element requires crossOrigin="anonymous" to allow canvas frame capture without tainting. If this attribute is missing, ctx.drawImage will fail silently.
3. Frame capture uses requestVideoFrameCallback when available. This is supported in Chromium-based browsers. The requestAnimationFrame fallback works everywhere. Both paths must be implemented.
4. Canvas CSS sizing: The canvas element is styled with w-full h-full object-cover. Its internal resolution is determined by the captured frame dimensions (scaled to max 960px width). The browser scales the canvas to fill the viewport while maintaining aspect ratio via object-cover.
5. Mobile menu animation delays are applied via inline style={{ transitionDelay: ... }}. These delays must be calculated per element and respond to menuOpen state changes.
6. Body scroll lock in the useEffect cleanup must restore document.body.style.overflow to its previous value, not just an empty string. Consider storing the original value. The current implementation sets it to '' which is acceptable for most cases.
7. The hamburger icon swap uses absolute positioning within the button. Both <Menu> and <X> icons exist in the DOM simultaneously; their visibility is toggled via opacity and transform. This avoids mount/unmount animation complexity.
8. Color values are applied as arbitrary Tailwind values (e.g., text-[#336443], bg-[#1f2a1d]). These are used directly in className strings. No Tailwind config color extension is necessary beyond the font family.
9. The hero heading uses an explicit inline style for fontFamily and letterSpacing. This is intentional to guarantee correct font rendering regardless of CSS cascade issues.
10. TypeScript strict mode is enabled. All component props must have explicit type definitions. The BoomerangVideoBg component uses a named Props type. App has no props.
11. Lucide React imports: Only LogIn, UserPlus, Play, Sparkles, Menu, X are used. Tree-shaking will eliminate unused icons.
12. The bottom-left CTA text color changes from green to white at the sm: breakpoint. This is because on wider screens, the text overlays the video and needs higher contrast against potentially dark frames. On mobile, the text sits lower and may overlap lighter areas, so green provides better contrast.

End of Prompt. This specification is complete and production-ready. Implement every element as described. The result should feel organic, fluid, and quietly powerful—an AI workflow platform that communicates capability through motion and restraint rather than flash. The boomerang video loop is the hero; all other elements serve to frame it.
    `,
  },
  {
    id: 4,
    type: "video",
    src: "fluxtype.png",
    title: "FluxType",
    tag: "Hero Section",
    isPremium: false,
    prompt: `
FluxType — Hero Section with Live Text Rewrite Animation & Stats Bar

Project Overview
A single-page hero section for FluxType, a conceptual AI writing platform. The design centers on a fullscreen looping background video overlaid with a central text block that performs a continuous, infinite live-type animation: text writes character by character, pauses briefly, then deletes character by character, pauses, and begins again with a new phrase. No Framer Motion. All animation logic is handled via custom React hooks using setTimeout and setInterval. The aesthetic is dark, minimal, and cinematic—letting the video and the living text command full attention. Below the hero, a crisp stats bar provides quantitative proof points. Built for Vite + React 18 + TypeScript + Tailwind CSS 3.4. Ready for immediate use in Lovable, Bolt, v0, Cursor, or any React AI builder.

Tech Stack
Vite 5.x (build tool)
React 18.3 (UI library)
TypeScript 5.5 (strict mode)
Tailwind CSS 3.4 (utility-first styling)
No icon library required (pure text and minimal UI)
No Framer Motion — all animations are JavaScript-driven via setTimeout/setInterval + CSS transitions
No additional UI libraries

Fonts
Loaded in index.html via <link> tags in <head>:

html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />

CSS Font Stack (index.css):
css
:root {
  --font-display: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', 'Courier New', monospace;
}

html, body, #root {
  height: 100%;
  margin: 0;
  font-family: var(--font-display);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #0a0a0a;
  color: #ffffff;
}

Tailwind Config Extension:
js
theme: {
  extend: {
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
    },
  },
}

Font Hierarchy:
Body & Headings: Inter (weights 300–700) — clean, neutral, highly readable at all sizes.
Animated Placeholder Text & Cursor: JetBrains Mono (weights 400–600) — monospace for the typewriter effect, ensuring each character occupies equal width for smooth, jitter-free animation.
Stats Bar Numbers: Inter weight 600 — tabular figures via font-feature-settings: "tnum" for aligned numerical columns.

Video Background

Video Source URL:

https://d8j0ntlcm91z4.cloudfront.net/user38xzZboKViGWJOttwIXH07lWA1P/hf2026040517152125968ba2-b594-4b32-aab7-f6b69398a6fa.mp4

Video Element:
<video> positioned absolute inset-0 w-full h-full object-cover z-0
Attributes: autoPlay, loop, muted, playsInline, preload="auto"
No overlay, no gradient, no dimming layer
The video plays raw at full brightness and saturation
CSS: pointer-events-none select-none (video is decorative, not interactive)

Implementation:
tsx
<video
  className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none select-none"
  src={VIDEO_URL}
  autoPlay
  loop
  muted
  playsInline
  preload="auto"
/>

The video is a dark, abstract cinematic clip with subtle motion—organic particle drift, soft lens flares, or fluid light movements. It provides depth without distraction.

Color Palette

Monochromatic dark scheme with warm white text and a single accent for the blinking cursor.

| Token | Hex Value | Tailwind Usage | Purpose |
|-------|-----------|----------------|---------|
| Background | #0a0a0a | bg-[#0a0a0a] | Page background behind video |
| Text Primary | #ffffff | text-white | Main heading, stats numbers |
| Text Secondary | #a0a0a0 | text-[#a0a0a0] | Subtitle, placeholder label, stat labels |
| Text Tertiary | #666666 | text-[#666666] | Muted elements, stat bar dividers |
| Cursor Accent | #3b82f6 | bg-[#3b82f6] | Blinking typewriter cursor (blue for visibility) |
| Button Background | #ffffff | bg-white | CTA button fill |
| Button Text | #0a0a0a | text-[#0a0a0a] | CTA button label |
| Button Hover | #e5e5e5 | hover:bg-[#e5e5e5] | CTA button hover state |
| Stats Bar Background | rgba(255,255,255,0.03) | bg-white/[0.03] | Stats bar subtle surface |
| Stats Bar Border | rgba(255,255,255,0.06) | border-white/[0.06] | Stats bar top/bottom borders |

Color Application Rules:
All text over the video is white or near-white for maximum contrast.
The animated placeholder text uses text-[#a0a0a0] for the label and text-white for the dynamically typing content.
The cursor is blue (#3b82f6) to stand out against both dark backgrounds and white text.
Stats bar sits on a subtle bg-white/[0.03] surface with thin border-white/[0.06] separators.

Layout Structure

┌──────────────────────────────────────────────────────┐
│  SECTION (relative, h-screen, overflow-hidden)       │
│                                                      │
│  ┌────────────────────────────────────────────────┐  │
│  │  BACKGROUND VIDEO (absolute, inset-0, z-0)     │  │
│  │  Full viewport, object-cover, raw, no overlay  │  │
│  └────────────────────────────────────────────────┘  │
│                                                      │
│  ┌────────────────────────────────────────────────┐  │
│  │  HERO CONTENT (relative, z-10, centered)       │  │
│  │                                                │  │
│  │  [Small Label]                                 │  │
│  │  [Large Heading — static]                      │  │
│  │  [Animated Placeholder Block]                  │  │
│  │    ├─ Label: "I want to..."                    │  │
│  │    ├─ Dynamic text with cursor                 │  │
│  │    └─ Cycles through phrases endlessly         │  │
│  │  [CTA Button]                                  │  │
│  └────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────┐
│  STATS BAR (full-width, below hero)                  │
│  ┌────────────────────────────────────────────────┐  │
│  │  Stat 1  │  Stat 2  │  Stat 3  │  Stat 4      │  │
│  │  Number  │  Number  │  Number  │  Number       │  │
│  │  Label   │  Label   │  Label   │  Label        │  │
│  └────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────┘

Hero Content Section

Container:
relative z-10 flex flex-col items-center justify-center h-full text-center
Padding: px-6 sm:px-8 md:px-10
Vertical centering: justify-center (content is perfectly centered in viewport)

Inner Wrapper:
flex flex-col items-center gap-6 md:gap-8
Max width: max-w-3xl

1. Small Label (Top)

AI-POWERED WRITING
font-sans text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-[#a0a0a0]
No animation. Static. Serves as a quiet category marker.

2. Primary Heading (Static)

Write faster. Think deeper.
Create without friction.
Two lines, separated by a <br /> or wrapped in two <span> elements with block display.
font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-[-0.025em]
Line 1: "Write faster. Think deeper."
Line 2: "Create without friction."
Both lines render immediately on page load. No entrance animation. The power comes from the live text below, not from staggered reveals.

3. Animated Placeholder Block (The Core Feature)
This is the defining interactive element of the hero. It simulates a text input field where phrases are continuously typed, deleted, and retyped in an infinite loop.

Container:
flex items-center justify-center gap-0
bg-white/[0.05] backdrop-blur-md border border-white/[0.08] rounded-2xl px-6 py-4 md:px-8 md:py-5
min-w-[300px] sm:min-w-[400px] md:min-w-[500px]
The glass-morphism surface evokes a text input field without actually being interactive.

Internal Layout:
Flex row, items-center, gap-1
Left label: "I want to..." — static, font-sans text-lg sm:text-xl md:text-2xl text-[#a0a0a0] font-light, no animation
Animated text span: dynamically changes character by character
Blinking cursor: a thin vertical bar that pulses

Label Text:
tsx
<span className="font-sans text-lg sm:text-xl md:text-2xl text-[#a0a0a0] font-light whitespace-nowrap">
  I want to...
</span>

Animated Text:
tsx
<span className="font-mono text-lg sm:text-xl md:text-2xl text-white font-medium">
  {displayedText}
</span>

Blinking Cursor:
tsx
<span className="inline-block w-[2.5px] h-[1.2em] bg-[#3b82f6] align-middle ml-0.5 animate-pulse" />
The cursor uses Tailwind's animate-pulse for a smooth opacity blink: opacity: 1 ↔ opacity: 0 over ~1.5s.
Width: 2.5px — thin enough to feel like a text cursor, thick enough to be visible on video backgrounds.
Height: 1.2em — matches the line height of the monospace text.
Color: #3b82f6 (vivid blue) — the only non-monochrome element on the page.

4. Typewriter Animation Logic (Custom Hook: useTypewriterCycle)

Hook Signature:
tsx
function useTypewriterCycle(phrases: string[], options?: {
  typeSpeed?: number;      // ms per character when typing (default: 80)
  deleteSpeed?: number;    // ms per character when deleting (default: 50)
  pauseAfterType?: number; // ms to wait after full phrase is typed (default: 2000)
  pauseAfterDelete?: number; // ms to wait after full phrase is deleted (default: 600)
}): { displayedText: string; isTyping: boolean; currentPhraseIndex: number }

Phrases Array (4 rotating phrases):
tsx
const PHRASES = [
  "draft a business proposal",
  "rewrite this in a warmer tone",
  "summarize the quarterly report",
  "generate 10 headline ideas",
];

Animation Sequence (per phrase):
1. Type phase: Characters appear one by one at typeSpeed (80ms) intervals.
2. Pause: After the full phrase is typed, wait pauseAfterType (2000ms).
3. Delete phase: Characters disappear one by one from the end at deleteSpeed (50ms) intervals.
4. Pause: After the full phrase is deleted, wait pauseAfterDelete (600ms).
5. Advance: Move to the next phrase in the array (loop back to index 0 after the last).
6. Repeat infinitely.

Implementation Details:

tsx
import { useState, useEffect, useRef, useCallback } from 'react';

function useTypewriterCycle(
  phrases: string[],
  options?: {
    typeSpeed?: number;
    deleteSpeed?: number;
    pauseAfterType?: number;
    pauseAfterDelete?: number;
  }
) {
  const {
    typeSpeed = 80,
    deleteSpeed = 50,
    pauseAfterType = 2000,
    pauseAfterDelete = 600,
  } = options ?? {};

  const [displayedText, setDisplayedText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const timeoutRef = useRef<number | null>(null);

  const currentPhrase = phrases[currentPhraseIndex];

  const clearTimer = useCallback(() => {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  useEffect(() => {
    clearTimer();

    const fullPhrase = currentPhrase;

    if (isTyping) {
      // TYPING PHASE
      if (displayedText.length < fullPhrase.length) {
        timeoutRef.current = window.setTimeout(() => {
          setDisplayedText(fullPhrase.slice(0, displayedText.length + 1));
        }, typeSpeed);
      } else {
        // Finished typing. Pause, then start deleting.
        timeoutRef.current = window.setTimeout(() => {
          setIsTyping(false);
        }, pauseAfterType);
      }
    } else {
      // DELETING PHASE
      if (displayedText.length > 0) {
        timeoutRef.current = window.setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, deleteSpeed);
      } else {
        // Finished deleting. Pause, then advance to next phrase.
        timeoutRef.current = window.setTimeout(() => {
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
          setIsTyping(true);
        }, pauseAfterDelete);
      }
    }

    return clearTimer;
  }, [
    displayedText,
    isTyping,
    currentPhraseIndex,
    currentPhrase,
    typeSpeed,
    deleteSpeed,
    pauseAfterType,
    pauseAfterDelete,
    phrases.length,
    clearTimer,
  ]);

  // Reset if phrases array changes externally
  useEffect(() => {
    setDisplayedText('');
    setCurrentPhraseIndex(0);
    setIsTyping(true);
  }, [phrases]);

  return { displayedText, isTyping, currentPhraseIndex };
}

Key Behaviors:
The hook cleans up all setTimeout calls on unmount and dependency changes.
Deleting is faster than typing (50ms vs 80ms) — this feels more natural, as deletion is a "correction" action.
The pause after a full phrase is long enough (2s) for users to read it.
The pause after deletion is short (600ms) — just enough to feel like a breath before the next phrase begins.
If the phrases prop changes, the hook resets to the first phrase.

Usage in Component:
tsx
const { displayedText } = useTypewriterCycle(PHRASES);

5. CTA Button

Start writing free →
Positioned below the animated placeholder block, mt-4 md:mt-6
bg-white text-[#0a0a0a] px-8 py-3.5 rounded-full text-base md:text-lg font-semibold tracking-[-0.01em]
Hover: hover:bg-[#e5e5e5] transition-colors duration-200
Arrow is the literal character → (rightwards arrow, Unicode U+2192), styled with slight right margin offset for optical balance.
No icon library needed. Pure text.
This button is static. No animation. It anchors the composition with stillness while the text above it lives and breathes.

Stats Bar Section

Position: Directly below the hero section, or positioned absolutely at the bottom of the hero section on desktop. For clarity: implement as a separate section that sits immediately after the hero in the DOM flow.

Container:
relative z-10 w-full bg-white/[0.03] backdrop-blur-sm border-t border-b border-white/[0.06]
Padding: py-8 md:py-10

Inner Grid:
max-w-5xl mx-auto px-6 sm:px-8 md:px-10
grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8
On mobile: 2 columns × 2 rows. On md: and above: 4 columns in a single row.

Stat Item Structure:
Each stat is a flex flex-col items-center text-center gap-1 block.

Stat Number:
font-sans text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-[-0.02em]
Uses font-feature-settings: "tnum" for tabular (monospaced) digits, ensuring numbers align cleanly across columns.
Apply via inline style or Tailwind's [font-feature-settings:"tnum"] arbitrary syntax.

Stat Label:
font-sans text-xs sm:text-sm text-[#a0a0a0] font-medium tracking-[0.04em] uppercase

Stat Divider (between items on mobile/tablet):
Vertical dividers between columns on md: screens: hidden md:block w-[1px] h-12 bg-white/[0.06] placed between stat items.
Horizontal dividers on mobile: block md:hidden w-full h-[1px] bg-white/[0.06] between rows.
Alternatively, rely on the grid gap and border on individual items.

Cleaner approach: Each stat item has border-r border-white/[0.06] on md: screens, except last:border-r-0. On mobile, items in the first row get border-b border-white/[0.06].

Stats Content (4 items):

| Number | Label |
|--------|-------|
| 10M+ | Documents created |
| 50K+ | Active teams |
| 140+ | Languages supported |
| 99.9% | Uptime guarantee |

Stat Numbers — Static Display:
All numbers render immediately as static text. No count-up animation. The clean, direct presentation reinforces the "no fluff" brand positioning.

Entrance Animation (Optional, Subtle):
The entire stats bar fades in on scroll using a simple intersection observer:
  tsx
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
Apply CSS transition: transition-opacity duration-700 + opacity-0 → opacity-100 via conditional class opacity-$isVisible ? "100" : "0"}.

Animation Summary

| Element | Method | Timing | Behavior |
|---------|--------|--------|----------|
| Placeholder text — typing | setTimeout via custom hook | 80ms per character | Characters appear one by one forward |
| Placeholder text — pause | setTimeout via custom hook | 2000ms delay | Full phrase visible, cursor blinking |
| Placeholder text — deleting | setTimeout via custom hook | 50ms per character | Characters disappear one by one backward |
| Placeholder text — pause | setTimeout via custom hook | 600ms delay | Text fully deleted, cursor blinking on empty |
| Phrase cycling | State increment via hook | After delete pause | Advances to next phrase, loop to start |
| Cursor blink | Tailwind animate-pulse | ~1.5s cycle | Opacity oscillates 1 ↔ 0 |
| CTA button hover | CSS transition-colors | 200ms | Background shifts white → light gray |
| Stats bar entrance | Intersection Observer + CSS transition-opacity | 700ms | Fades in on first scroll into view |

No Framer Motion. No CSS @keyframes beyond Tailwind's built-in animate-pulse. All typing/deleting logic is purely JavaScript-driven via setTimeout chains managed by the custom hook.

Responsive Behavior

| Breakpoint | Hero Heading | Placeholder Block | Stats Bar | CTA Button |
|------------|-------------|-------------------|-----------|------------|
| Base (<640px) | text-4xl, two lines stacking naturally | min-w-[300px], text text-lg | 2 columns × 2 rows | Full width, px-8 |
| sm (640px) | text-5xl | min-w-[400px], text text-xl | 2 × 2 grid | Auto width |
| md (768px) | text-6xl | min-w-[500px], text text-2xl | 4 columns, single row | text-lg |
| lg (1024px) | text-7xl | Full size, py-5 | Full horizontal layout | Larger padding |
| xl (1280px) | Max text-7xl, constrained width | Full size | Centered, max-w-5xl | No change |

Mobile Placeholder Block:
The glass container shrinks to min-w-[300px] on small screens.
Font sizes for the label and dynamic text reduce to text-lg to prevent overflow.
The flex layout ensures the label "I want to..." and the typing text remain on the same line when possible. On very narrow screens (<360px), the block may stack; whitespace-nowrap on the label prevents wrapping, and the typing text can wrap naturally as it grows.

Accessibility
Video is decorative: pointer-events-none select-none on the <video> element. No aria-label needed. It is purely atmospheric.
Placeholder block is not a real input: It's a visual simulation. It should have aria-hidden="true" to prevent screen readers from attempting to interact with it. The entire animated block can be wrapped in a div with role="presentation" and aria-hidden="true".
Alternative text for the animation: Provide a visually hidden span that screen readers can access:
  tsx
  <span className="sr-only">
    AI writing assistant that helps you draft business proposals, rewrite content, summarize reports, and generate ideas.
  </span>
  
  This gives screen reader users the equivalent information without the distracting character-by-character announcements.
CTA button: Uses standard <a> or <button> element. Clear label: "Start writing free".
Color contrast: White text on dark video achieves >10:1 contrast. Gray text (#a0a0a0) on dark achieves ~5:1. All meet WCAG AA.
Focus states: CTA button has focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white.
prefers-reduced-motion: 
  css
  @media (prefers-reduced-motion: reduce) {
    , ::before, *::after {
      animation-duration: 0.01ms !important;
      transition-duration: 0.01ms !important;
    }
  }
  
  The typewriter animation should also respect this preference. In the hook, check window.matchMedia('(prefers-reduced-motion: reduce)').matches and, if true, display the full phrase statically without animation.

Component & File Structure

project-root/
├── index.html                       (font links, meta tags)
├── src/
│   ├── main.tsx                     (ReactDOM.createRoot, renders <App />)
│   ├── App.tsx                      (composes HeroSection + StatsBar)
│   ├── components/
│   │   ├── HeroSection.tsx          (video background, hero content, placeholder)
│   │   └── StatsBar.tsx             (stats grid with intersection observer)
│   ├── hooks/
│   │   └── useTypewriterCycle.ts    (custom hook for type/delete/cycle logic)
│   └── index.css                    (Tailwind directives, global styles, reduced-motion)
├── tailwind.config.js               (fontFamily extension)
├── postcss.config.js                (PostCSS with Tailwind + autoprefixer)
├── tsconfig.json                    (TypeScript strict mode)
├── vite.config.ts                   (Vite with React plugin)
└── package.json                     (dependencies)

File Responsibilities:

1. useTypewriterCycle.ts — Self-contained hook. Manages all typing/deleting state and setTimeout scheduling. Exports the displayedText string and internal state (isTyping, currentPhraseIndex).
2. HeroSection.tsx — Renders the fullscreen video, the hero copy, the animated placeholder block using useTypewriterCycle, and the CTA button. Accepts no props (self-contained).
3. StatsBar.tsx — Renders the stats grid. Uses IntersectionObserver for fade-in entrance. Stat data can be defined as a constant array within the component or passed as props for reusability.
4. App.tsx — Minimal composition. Renders <HeroSection /> followed by <StatsBar /> inside a root <main> or fragment.

Package Dependencies

json
{
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.1",
    "autoprefixer": "^10.4.18",
    "postcss": "^8.4.35",
    "tailwindcss": "^3.4.1",
    "typescript": "^5.5.3",
    "vite": "^5.4.2"
  }
}

No icon library. No Framer Motion. No additional packages. Pure React, TypeScript, Tailwind CSS, Vite.

Implementation Notes for AI Builders

1. The useTypewriterCycle hook is the heart of this design. Implement it exactly as specified. The type-delete-pause-cycle sequence must run infinitely without memory leaks. Clean up all setTimeout calls on unmount and dependency changes.
2. clearTimer() is called at the start of each effect execution and returned as the cleanup function. This prevents timer stacking and ensures only one timeout is active at any moment.
3. The hook resets if the phrases array reference changes. This allows dynamic phrase updates if needed, though for this implementation the array is static.
4. Reduced motion check in the hook: use useState + useEffect with window.matchMedia to detect the preference. If active, bypass the animation loop and set displayedText to the full current phrase immediately. Return a static string.
5. The blinking cursor uses Tailwind's animate-pulse. This is a CSS animation built into Tailwind. It oscillates opacity. No custom keyframes needed.
6. Video preload="auto" ensures the video starts loading immediately, minimizing blank frames on page load. Combined with autoPlay, the video should be playing within the first second.
7. playsInline is critical for iOS Safari. Without it, the video will open in fullscreen player mode, breaking the background effect.
8. The placeholder glass block uses backdrop-blur-md. This requires the video to be behind it. Ensure the z-index stacking is correct: video z-0, content z-10.
9. Stats bar uses IntersectionObserver with threshold: 0.2. The observer disconnects after first intersection to avoid repeated triggers. The isVisible state toggles a CSS opacity class.
10. All TypeScript types must be explicit. The hook's return type, component props (even if empty {}), and event handler types must be defined.
11. The hero heading is two distinct lines. Use either two <span> elements with block display inside a single <h1>, or two separate elements wrapped in a semantically appropriate container. The <h1> should contain both lines.
12. "Start writing free →" uses the literal arrow character, not an icon. This keeps the button lightweight and avoids importing an icon library for a single glyph.

End of Prompt. This specification is complete and production-ready. Implement the hero section with the live typewriter placeholder and the stats bar exactly as described. The result should feel alive, minimal, and hypnotic—the continuously typing and deleting text draws the eye and holds attention, while the video provides cinematic depth and the stats bar grounds the experience with credibility. No decorative excess. Every element earns its place through motion, contrast, or information.
    `,
    likes: 110,
  },
];
