# Portfolio Website

A retro-futuristic terminal-themed portfolio website inspired by Fallout aesthetics, built with React, TypeScript, and TailwindCSS. Features interactive backgrounds, a Snake minigame, and a highly stylized terminal interface.

## Features

- **Fallout Terminal Aesthetic**: Retro-futuristic design with CRT effects, scanlines, and phosphor glow
- **Interactive Backgrounds**: Toggle between ASCII rain and 3D sticks backgrounds
- **Snake Minigame**: Pixel-art Snake game integrated into the terminal interface
- **Localized Content**: Full Polish/English language support with toggle
- **Contact Form**: Netlify Forms integration with terminal-styled UI
- **Project Showcase**: Interactive project cards with glitch image reveals
- **Responsive Design**: Works across all device sizes

## Tech Stack

### Frontend
- **React 18** - Modern React with hooks and concurrent features
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **TailwindCSS** - Utility-first styling
- **Framer Motion** - Animations and motion effects
- **Three.js** - 3D interactive backgrounds
- **Lucide React** - Consistent SVG icon set
- **React Router DOM** - Client-side routing

### Fonts
- **VT323** - Terminal-style monospace font for readable text
- **Major Mono Display** - Stylized font for titles and UI elements

### Backend/Deployment
- **Netlify Forms** - Contact form processing
- **Express.js** - Node.js backend (light usage)

### Development Tools
- **PNPM** - Efficient package management
- **Prettier** - Code formatting
- **ESLint** - Code linting

## Project Structure

```
portfolio/
├── client/                      # Frontend (React/TypeScript) source code
│   ├── components/              # Reusable UI components
│   │   ├── ui/                  # UI primitives (buttons, dialogs, etc.)
│   │   ├── ContactForm.tsx      # Contact form component
│   │   ├── GlitchImage.tsx      # Pixelated image reveal for project cards
│   │   ├── Navigation.tsx       # Main navigation sidebar/mobile bar
│   │   ├── ProjectCard.tsx      # Interactive project display cards
│   │   └── SnakeGame.tsx        # The pixel-art Snake minigame component
│   ├── hooks/                   # Custom React hooks (e.g., useTheme, useBackground, useLanguage)
│   ├── lib/                     # Utility functions, constants, data definitions
│   │   └── data.tsx             # Centralized project data and translations
│   └── pages/                   # Top-level page components (Index, Contact, CV, NotFound)
├── public/                      # Static assets (images, favicon, robots.txt)
├── scripts/                     # Utility scripts (e.g., for screenshot capture)
├── server/                      # Backend (Node.js/Express) source code (currently light)
│   └── routes/                  # API routes (e.g., contact form endpoint)
├── .github/                     # GitHub specific configurations (e.g., workflows for GitHub Actions)
│   └── workflows/
│       └── deploy.yml           # GitHub Actions workflow for deployment (currently reverted)
├── package.json                 # Project dependencies and scripts
├── netlify.toml                 # Netlify specific configuration
├── postcss.config.js            # PostCSS configuration (TailwindCSS)
├── tailwind.config.ts           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
└── vite.config.ts               # Vite build configuration
```

## Installation & Setup

### Prerequisites
- **Node.js** (v18 or higher)
- **PNPM** (recommended)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/your-username/portfolio-website.git
cd portfolio-website
```

2. **Install dependencies**
```bash
pnpm install
```

3. **Start development server**
```bash
pnpm dev
```

Visit `http://localhost:8080` to view the website.

## Key Features

### Terminal Aesthetic
- CRT scanlines and flicker effects
- Green terminal color scheme with amber/yellow accents
- VT323 and Major Mono Display fonts for authentic terminal feel
- Corner brackets and industrial styling

### Interactive Backgrounds
- **ASCII Mode**: Matrix-style falling characters with varying speeds and colors
- **Sticks Mode**: 3D falling stick-like objects rendered with Three.js
- Background preference saved in localStorage

### Project Cards
- Terminal-styled frames with corner brackets
- Glitch image reveal effects with scanlines
- 3D tilt and CRT jitter on hover
- Smooth expansion animations

### Snake Minigame
- Pixel-art implementation with terminal styling
- Animated snake with directional eyes
- Score tracking and increasing difficulty
- Modal interface with confirmation dialog

### Localization
- Polish (default) and English language support
- Translation hook with centralized string management
- Language toggle in navigation

## Scripts

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Type checking
pnpm typecheck

# Code formatting
pnpm format.fix
```

## Customization

### Personal Information
1. Update content in `client/lib/data.tsx` - Modify project data and translations
2. Update `client/pages/Index.tsx` - Adjust hero section if needed
3. Update navigation links in `client/components/Navigation.tsx`

### Styling
1. Modify `client/global.css` for color scheme changes
2. Update `tailwind.config.ts` for theme customization
3. Adjust font usage in components as needed

### Content
1. Replace project data in `client/lib/data.tsx`
2. Update contact form fields and validation rules
3. Customize the footer with your links and information

## Deployment

The project is configured for Netlify deployment:
1. Connect your repository to Netlify
2. Set build command to `pnpm build`
3. Set publish directory to `dist`
4. Netlify Forms will handle contact form submissions

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Developer

**Dawid Czerwiński**
- GitHub: [Profile](https://github.com/Gzyms69)

---

Built with modern web technologies and retro-futuristic aesthetics