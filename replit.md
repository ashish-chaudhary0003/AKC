# Portfolio Application

## Overview

This is a modern, interactive portfolio website for Ashish Kumar Chaudhary, built as a full-stack React application. The portfolio showcases professional experience, projects, skills, and includes interactive elements like a binary puzzle game. It features a clean, responsive design with smooth animations and a professional presentation of tech leadership and social impact work.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **React 18** with TypeScript for type safety and modern React features
- **Vite** as the build tool for fast development and optimized production builds
- **Wouter** for lightweight client-side routing instead of React Router
- **Framer Motion** for smooth animations and interactive elements
- **Tailwind CSS** with shadcn/ui component library for consistent, modern styling
- **TanStack React Query** for state management and data fetching (though currently used minimally)

### Component Structure
- Modular component architecture with reusable UI components
- Custom portfolio sections (hero, projects, skills, tools, contact, interactive game)
- Comprehensive shadcn/ui component library integration
- Responsive design patterns with mobile-first approach

### Backend Architecture
- **Express.js** server with TypeScript
- RESTful API structure with route registration system
- In-memory storage implementation with interface for future database integration
- Middleware for request logging and error handling
- Development-specific Vite integration for hot module replacement

### Data Layer
- **Drizzle ORM** configured for PostgreSQL with migrations support
- **Neon Database** as the PostgreSQL provider
- Schema definition with user authentication structure
- Currently using in-memory storage with interface for easy database migration

### Build and Deployment
- Dual build system: Vite for frontend, esbuild for backend
- Production-ready configuration with environment-specific settings
- Static asset handling and SPA routing support
- Development server with HMR and error overlay

### Styling and Design System
- CSS custom properties for theming with light/dark mode support
- Consistent design tokens and spacing system
- Font Awesome icons integration
- Inter font family for modern typography
- Component-based styling with Tailwind utility classes

### Interactive Features
- Binary puzzle game for tech skill demonstration
- Animated metrics counters with intersection observers
- Smooth scroll navigation
- Hover effects and micro-interactions
- Form handling capabilities (though forms not currently implemented)

## External Dependencies

### UI and Styling
- **@radix-ui/react-*** - Comprehensive set of accessible UI primitives
- **tailwindcss** - Utility-first CSS framework
- **framer-motion** - Animation library for React
- **class-variance-authority** - Utility for managing component variants
- **lucide-react** - Icon library

### Development Tools
- **shadcn/ui** - Pre-built component system based on Radix UI
- **@replit/vite-plugin-*** - Replit-specific development enhancements
- **Font Awesome** - Icon library via CDN

### Data and State Management
- **@tanstack/react-query** - Server state management
- **drizzle-orm** - Type-safe ORM for database operations
- **@neondatabase/serverless** - Serverless PostgreSQL driver

### Backend Infrastructure
- **express** - Web application framework
- **connect-pg-simple** - PostgreSQL session store
- **drizzle-zod** - Schema validation integration

### Build and Development
- **vite** - Frontend build tool
- **esbuild** - Fast JavaScript bundler for backend
- **tsx** - TypeScript execution engine for development
- **typescript** - Type system and compiler

### Form and Validation
- **react-hook-form** - Form library
- **@hookform/resolvers** - Validation resolvers
- **zod** - Schema validation (via drizzle-zod)

### Utilities
- **date-fns** - Date manipulation library
- **clsx** - Conditional className utility
- **nanoid** - ID generation utility

The application is structured for easy expansion with proper separation of concerns, type safety throughout, and a foundation for adding authentication, database persistence, and additional interactive features.