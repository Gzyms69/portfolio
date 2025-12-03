# Portfolio Website - Development Guide

A modern, professional portfolio website built on the Fusion starter template. This is a fully-developed portfolio showcasing work in design, photography, and digital art with a dark glassmorphism design aesthetic.

**Current Development Status**: Actively enhanced - recently added navigation routing, button standardization, and improved design consistency.

While the project includes an Express server, only create endpoints when strictly necessary for server-side logic like private key handling, contact form processing, or database operations.

## Tech Stack

- **PNPM**: Package management
- **Frontend**: React 18 + React Router 6 (SPA) + TypeScript + Vite + TailwindCSS 3
- **Backend**: Express server integrated with Vite dev server
- **Testing**: Vitest
- **UI**: Radix UI component library + TailwindCSS 3 + Lucide React icons

## Project Structure

```
portfolio-website/        # Dawid Czerwiński - Portfolio Project
├── client/                   # React SPA frontend
│   ├── components/
│   │   ├── ui/              # Full Radix UI component library
│   │   ├── Navigation.tsx    # Enhanced navigation with active states
│   │   ├── ProjectCard.tsx   # Project showcase cards
│   │   ├── Footer.tsx        # Footer component
│   │   └── GradientBackground.tsx # Animated gradient backgrounds
│   ├── pages/
│   │   ├── Index.tsx         # Home with hero & project grid
│   │   ├── Contact.tsx       # Functional contact form
│   │   ├── CV.tsx           # Resume download page
│   │   └── NotFound.tsx      # 404 error page
│   ├── hooks/                # Custom React hooks
│   ├── lib/                  # Utilities (cn function, etc.)
│   ├── App.tsx               # Main app with full routing
│   └── global.css            # Dark theme & glassmorphism styles
├── server/                   # Express API backend
│   ├── routes/
│   │   ├── contact.ts        # Contact form API endpoint
│   │   └── demo.ts          # Demo/test API endpoint
│   └── index.ts              # Server setup with CORS, etc.
├── shared/                   # Shared TypeScript types
│   └── api.ts                # API response interfaces
└── public/                   # Static assets (favicon, etc.)
```

## Key Features

### Completed Enhancements

**Navigation Improvements**
- Active state indicators for current page
- Functional routing to Home (/), Contact (/contact), CV (/cv) pages
- External links to LinkedIn and GitHub profiles
- Smooth scroll to projects section
- Responsive design (desktop sidebar + mobile top navigation)

**Button Standardization**
- Unified button variants (glass, glassPrimary, nav, navActive)
- Consistent styling across Contact form and CV download
- Improved contrast with design system color usage
- Type-safe button component with proper TypeScript types

**Design System Polish**
- Enhanced glassmorphism effects
- Improved text contrast using `text-medium` class
- Consistent color palette throughout navigation
- Professional styling for contact forms and UI elements

### Functional Pages

- **Home Page**: Hero section, project showcase grid, responsive cards
- **Contact Page**: Functional contact form with server validation
- **CV Page**: Structured resume with download functionality
- **Navigation**: Active states, external links, smooth scrolling

## SPA Routing System

The routing system is powered by React Router 6:

- `client/pages/Index.tsx` represents the home page.
- Routes are defined in `client/App.tsx` using the `react-router-dom` import
- Route files are located in the `client/pages/` directory

For example, routes can be defined with:

```typescript
import { BrowserRouter, Routes, Route } from "react-router-dom";

<Routes>
  <Route path="/" element={<Index />} />
  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
  <Route path="*" element={<NotFound />} />
</Routes>;
```

### Styling System

- **Primary**: TailwindCSS 3 utility classes
- **Theme and design tokens**: Configure in `client/global.css` 
- **UI components**: Pre-built library in `client/components/ui/`
- **Utility**: `cn()` function combines `clsx` + `tailwind-merge` for conditional classes

```typescript
// cn utility usage
className={cn(
  "base-classes",
  { "conditional-class": condition },
  props.className  // User overrides
)}
```

### Express Server Integration

- **Development**: Single port (8080) for both frontend/backend
- **Hot reload**: Both client and server code
- **API endpoints**: Prefixed with `/api/`

#### Example API Routes
- `GET /api/ping` - Simple ping api
- `GET /api/demo` - Demo endpoint  

### Shared Types
Import consistent types in both client and server:
```typescript
import { DemoResponse } from '@shared/api';
```

Path aliases:
- `@shared/*` - Shared folder
- `@/*` - Client folder

## Development Commands

```bash
pnpm dev        # Start dev server (client + server)
pnpm build      # Production build
pnpm start      # Start production server
pnpm typecheck  # TypeScript validation
pnpm test          # Run Vitest tests
```

## Adding Features

### Add new colors to the theme

Open `client/global.css` and `tailwind.config.ts` and add new tailwind colors.

### New API Route
1. **Optional**: Create a shared interface in `shared/api.ts`:
```typescript
export interface MyRouteResponse {
  message: string;
  // Add other response properties here
}
```

2. Create a new route handler in `server/routes/my-route.ts`:
```typescript
import { RequestHandler } from "express";
import { MyRouteResponse } from "@shared/api"; // Optional: for type safety

export const handleMyRoute: RequestHandler = (req, res) => {
  const response: MyRouteResponse = {
    message: 'Hello from my endpoint!'
  };
  res.json(response);
};
```

3. Register the route in `server/index.ts`:
```typescript
import { handleMyRoute } from "./routes/my-route";

// Add to the createServer function:
app.get("/api/my-endpoint", handleMyRoute);
```

4. Use in React components with type safety:
```typescript
import { MyRouteResponse } from '@shared/api'; // Optional: for type safety

const response = await fetch('/api/my-endpoint');
const data: MyRouteResponse = await response.json();
```

### New Page Route
1. Create component in `client/pages/MyPage.tsx`
2. Add route in `client/App.tsx`:
```typescript
<Route path="/my-page" element={<MyPage />} />
```

## Production Deployment

- **Standard**: `pnpm build`
- **Binary**: Self-contained executables (Linux, macOS, Windows)
- **Cloud Deployment**: Use either Netlify or Vercel via their MCP integrations for easy deployment. Both providers work well with this starter template.

## Architecture Notes

- Single-port development with Vite + Express integration
- TypeScript throughout (client, server, shared)
- Full hot reload for rapid development
- Production-ready with multiple deployment options
- Comprehensive UI component library included
- Type-safe API communication via shared interfaces
