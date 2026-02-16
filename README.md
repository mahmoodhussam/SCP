# Premium Plastic Surgery Clinic Website

A modern, premium single-page website for a plastic surgery clinic built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 **Luxury Design**: Elegant, minimal aesthetic with soft color palette
- 🚀 **Performance Optimized**: Next.js App Router with optimized images
- ✨ **Smooth Animations**: Framer Motion for elegant transitions
- 🎭 **3D Elements**: React Three Fiber for subtle background effects
- 📱 **Fully Responsive**: Mobile-first design approach
- ♿ **Accessible**: Semantic HTML and proper ARIA labels
- 🔍 **SEO Optimized**: Proper meta tags and structured data

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Graphics**: React Three Fiber
- **UI Components**: Custom components with Shadcn UI patterns
- **Carousel**: Embla Carousel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles
├── components/
│   ├── ui/                 # Reusable UI components
│   ├── Navbar.tsx          # Sticky navigation bar
│   ├── Hero.tsx            # Hero section with 3D background
│   ├── About.tsx           # About section with stats
│   ├── Procedures.tsx     # Procedures grid
│   ├── Gallery.tsx         # Before/After gallery
│   ├── Testimonials.tsx    # Patient testimonials
│   ├── Contact.tsx         # Contact form and info
│   ├── Footer.tsx          # Footer component
│   └── Scene3D.tsx         # 3D background element
├── lib/
│   └── utils.ts            # Utility functions
└── public/                 # Static assets
```

## Sections

1. **Hero Section**: Full-width hero with 3D floating shape
2. **About Section**: Doctor bio with animated statistics
3. **Procedures Section**: Grid of procedure cards with hover effects
4. **Gallery Section**: Before/After comparison with lightbox
5. **Testimonials Section**: Patient reviews carousel
6. **Contact Section**: Appointment booking form with map
7. **Footer**: Links and contact information

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color palette:

- `beige`: Warm beige tones
- `gold`: Soft gold accents
- `primary`: Primary brand color

### Content

Update content in each component file:
- `components/About.tsx` - Doctor information
- `components/Procedures.tsx` - Procedure listings
- `components/Gallery.tsx` - Before/After images
- `components/Testimonials.tsx` - Patient reviews
- `components/Contact.tsx` - Contact information

### Images

Replace placeholder images with actual clinic photos. Update image URLs in:
- Hero background
- About section doctor image
- Procedure cards
- Gallery before/after images

## Build for Production

```bash
npm run build
npm start
```

## Performance

- Images optimized with Next.js Image component
- 3D components lazy loaded
- Code splitting with dynamic imports
- Optimized fonts with `next/font`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is private and proprietary.
