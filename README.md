# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and TailwindCSS 3. Features a dark glassmorphism design, smooth animations, and a clean, professional interface.

## Features

- **Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices
- **Dark Glassmorphism Theme**: Modern aesthetic with glass-like card effects
- **Smooth Navigation**: Active state indicators and smooth scrolling
- **Contact Form**: Fully functional form with validation (server integration)
- **CV Download**: Download resume functionality
- **Project Showcase**: Interactive project cards with gradient backgrounds
- **Performance Optimized**: Built with Vite for rapid development and hot reloading

## Tech Stack

### Frontend
- **React 18** - Modern React with hooks and concurrent features
- **TypeScript** - Type-safe development
- **React Router 6** - SPA routing with navigation
- **TailwindCSS 3** - Utility-first styling
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icons
- **Framer Motion** - Smooth animations (future enhancement)

### Backend
- **Express.js** - Lightweight Node.js framework
- **TypeScript** - Server-side type safety
- **CORS** - Cross-origin resource sharing
- **Environment Variables** - Secure configuration

### Development Tools
- **Vite** - Fast build tool and dev server
- **PNPM** - Efficient package management
- **Prettier** - Code formatting
- **TypeScript** - Type checking
- **Vitest** - Unit testing framework (setup ready)

## Project Structure

```
portfolio-website/
├── client/                   # React SPA frontend
│   ├── components/
│   │   ├── ui/              # Reusable UI components (Radix UI)
│   │   ├── Navigation.tsx    # Navigation with active states
│   │   ├── ProjectCard.tsx   # Project showcase cards
│   │   ├── Footer.tsx        # Footer component
│   │   └── GradientBackground.tsx # Animated background components
│   ├── pages/
│   │   ├── Index.tsx         # Home page with project showcase
│   │   ├── Contact.tsx       # Contact form page
│   │   ├── CV.tsx           # Resume/CV page
│   │   └── NotFound.tsx      # 404 error page
│   ├── hooks/                # Custom React hooks
│   ├── lib/                  # Utilities and configurations
│   ├── App.tsx               # Main app component with routing
│   └── global.css            # Global styles and design tokens
├── server/                   # Express API backend
│   ├── routes/
│   │   └── contact.ts        # Contact form API endpoint
│   └── index.ts              # Server setup and middleware
├── shared/                   # Shared types and interfaces
│   └── api.ts                # API response types
└── public/                   # Static assets
```

## Installation & Setup

### Prerequisites
- **Node.js** (v18 or higher)
- **PNPM** (or npm/yarn)

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

3. **Environment Setup**
```bash
cp .env.example .env  # Configure your environment variables
```

4. **Start development server**
```bash
pnpm dev
```

Visit `http://localhost:8080` to view the website.

## Pages

### Home (`/`)
- Hero section with personal introduction
- Project showcase grid with interactive cards
- Clean, modern design with smooth animations

### Contact (`/contact`)
- Professional contact form with validation
- Server-side form processing
- Success/error state feedback

### CV (`/cv`)
- Detailed resume presentation
- Download functionality (TXT format)
- Structured sections (Experience, Education, Skills)

## Design System

### Color Palette
- **Background**: Dark midnight blue (`#15161A`)
- **Cards**: Semi-transparent glass effects
- **Text**: White with opacity variations
- **Gradients**: Custom color combinations for project categories

### Components
- **Buttons**: Consistent variants (default, glass, glassPrimary)
- **Forms**: Styled inputs with focus states
- **Cards**: Glassmorphism effect containers
- **Navigation**: Sidebar (desktop) and top bar (mobile)

## Production Deployment

### Build for Production
```bash
pnpm build
```

### Start Production Server
```bash
pnpm start
```

### Deployment Options
- **Netlify**: Drag-and-drop deployment
- **Vercel**: GitHub integration
- **Docker**: Containerized deployment
- **Traditional hosting**: Static file serving

## Customization

### Personal Information
1. Update `client/pages/Index.tsx` - Modify hero section content
2. Update `client/pages/CV.tsx` - Add your experience, education, skills
3. Update navigation links in `client/components/Navigation.tsx`

### Styling
1. Modify `client/global.css` for color scheme changes
2. Update `tailwind.config.ts` for theme customization
3. Add new components following the established patterns

### Content
1. Replace placeholder project cards in `client/pages/Index.tsx`
2. Update contact form fields and validation rules
3. Customize the footer with your links and information

## Testing

```bash
# Run all tests
pnpm test

# Type checking
pnpm typecheck

# Code formatting
pnpm format.fix
```

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

Built with modern web technologies
