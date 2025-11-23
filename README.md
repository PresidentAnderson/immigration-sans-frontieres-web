# Immigration Sans Frontières

A modern, multilingual website for immigration services built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- **Multilingual Support**: Full French and English translations with easy language switching
- **Responsive Design**: Mobile-first design that works on all devices
- **Modern Stack**: Built with Next.js 15 App Router, TypeScript, and Tailwind CSS
- **Interactive Forms**: Contact form with validation
- **Comprehensive Content**:
  - Home page with services overview
  - About page with mission and values
  - Services page detailing all offerings
  - Resources section with guides and FAQs
  - Contact page with form and information

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Internationalization**: next-intl
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
immigration-sans-frontieres/
├── app/
│   ├── [locale]/          # Locale-specific routes
│   │   ├── about/         # About page
│   │   ├── contact/       # Contact page
│   │   ├── resources/     # Resources page
│   │   ├── services/      # Services page
│   │   ├── layout.tsx     # Locale layout
│   │   └── page.tsx       # Home page
│   └── globals.css        # Global styles
├── components/
│   ├── Navigation.tsx     # Header navigation
│   └── Footer.tsx         # Footer component
├── messages/
│   ├── en.json           # English translations
│   └── fr.json           # French translations
├── middleware.ts         # i18n middleware
└── i18n.ts              # i18n configuration
```

## Languages

The site supports:
- English (en) - Default
- French (fr)

Translations are managed in the `messages/` directory.

## Deployment

This project is configured for easy deployment to Vercel:

1. Push to GitHub
2. Import project in Vercel
3. Deploy

Or use the Vercel CLI:
```bash
vercel
```

## Customization

### Adding Content

Edit translation files in `messages/en.json` and `messages/fr.json` to update content.

### Styling

The project uses Tailwind CSS. Color scheme can be customized in `tailwind.config.ts`.

Primary color palette:
- Primary: Blue (customizable in config)
- Accent colors for sections and CTAs

### Adding Pages

1. Create a new directory in `app/[locale]/`
2. Add `page.tsx` file
3. Add translations to `messages/en.json` and `messages/fr.json`
4. Add navigation link in `components/Navigation.tsx`

## License

© 2025 Immigration Sans Frontières. All rights reserved.
