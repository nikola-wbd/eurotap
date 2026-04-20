# EuroTap - Next.js Landing Page

High-end furniture manufacturer landing page based in Tešanj, Bosnia and Herzegovina.

## Project Structure

```
eurotap-next/
├── src/
│   └── app/
│       ├── components/       # React components
│       │   ├── Loader.tsx    # Page loading animation
│       │   ├── Cursor.tsx    # Custom cursor
│       │   ├── Progress.tsx  # Scroll progress bar
│       │   ├── Nav.tsx       # Navigation
│       │   ├── Hero.tsx      # Hero section
│       │   ├── Manifesto.tsx # About section
│       │   ├── Craft.tsx     # Craftsmanship section
│       │   ├── Portfolio.tsx # Portfolio grid
│       │   ├── Categories.tsx # Product categories
│       │   ├── Process.tsx   # Work process
│       │   ├── Stats.tsx     # Statistics with counters
│       │   ├── Contact.tsx   # Contact form
│       │   ├── Footer.tsx    # Footer
│       │   ├── WordReveal.tsx # Word animation component
│       │   └── ScrollReveal.tsx # Scroll reveal component
│       ├── utils.ts          # Utilities and constants
│       ├── globals.css       # Global styles
│       ├── layout.tsx        # Root layout
│       └── page.tsx          # Main page
├── php-version/              # PHP files for client hosting
│   ├── contact.php           # PHP contact form handler
│   └── README.md             # Instructions for PHP setup
├── dist/                     # Build output (for deployment)
└── next.config.ts            # Next.js config
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

This creates a static export in the `dist/` folder, ready for deployment.

## Contact Form Setup

### Option 1: EmailJS (For Vercel Demo)

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Update these values in `src/app/components/Contact.tsx`:

```typescript
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";
```

### Option 2: PHP (For Client's Shared Hosting)

1. Build the project: `npm run build`
2. Upload contents of `dist/` to hosting
3. Upload `php-version/contact.php` to the same folder
4. Update the email in `contact.php`: `$RECIPIENT_EMAIL = "euro.tap6@gmail.com";`

## Deployment

### Vercel (Recommended for Demo)

```bash
npx vercel --prod
```

### Static Hosting

Upload the contents of `dist/` folder to any static hosting provider.

## Features

- Custom cursor with hover effects
- Smooth scroll animations
- Word reveal animations
- Image parallax effects
- Animated statistics counters
- Responsive navigation
- Contact form with EmailJS/PHP support
- Optimized for performance

## Design System

### Colors

- `--sand`: #F0E6D3 - Primary background
- `--linen`: #E5D4BC - Alternate background
- `--oat`: #CEBA9E - Accent
- `--walnut`: #9B7545 - Primary accent
- `--walnut-deep`: #7A5730 - Hover states
- `--bark`: #3D2010 - Text color
- `--espresso`: #1E0F04 - Dark sections
- `--stone`: #8A7260 - Secondary text
- `--cream`: #FAF6EE - Light text
- `--mink`: #C4A880 - Muted accent

### Typography

- **Display**: Cormorant Garamond (serif)
- **Body**: Jost (sans-serif)

## License

© 2026 EuroTap. All rights reserved.
