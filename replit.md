# Overview

Infinite Enterprises is a corporate website for an authorized TechNova Imaging dealer operating since 2012. The application is a modern React-based single-page website built with TypeScript and styled using Tailwind CSS. It features a professional design showcasing the company's services, leadership team, and contact information with smooth animations and responsive layouts.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

The frontend is built as a React SPA using TypeScript with the following architectural decisions:

- **Routing**: Uses Wouter for lightweight client-side routing instead of React Router to minimize bundle size
- **UI Framework**: Radix UI components with shadcn/ui styling system for accessible, customizable components
- **Styling**: Tailwind CSS with CSS custom properties for theming, using the "new-york" style variant
- **Animation**: GSAP (GreenSock Animation Platform) for advanced animations and smooth scrolling effects
- **State Management**: React Query (TanStack Query) for server state management with custom query client configuration
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture

The backend follows a minimal Express.js architecture:

- **Framework**: Express.js with TypeScript for type safety
- **Storage Layer**: Abstract storage interface with in-memory implementation for user management
- **Development Setup**: Integrated Vite middleware for seamless development experience
- **Error Handling**: Centralized error handling middleware with proper HTTP status codes

## Data Storage

- **Database**: PostgreSQL configured with Drizzle ORM for type-safe database operations
- **Schema**: User table with UUID primary keys, username/password fields
- **Migrations**: Drizzle Kit for database schema management and migrations
- **Connection**: Neon Database serverless PostgreSQL for cloud deployment

## Authentication and Authorization

Basic user schema is defined but no authentication middleware is currently implemented. The storage interface includes methods for user creation and retrieval by username/ID, suggesting preparation for future authentication features.

## External Dependencies

- **Database Provider**: Neon Database serverless PostgreSQL
- **Font Provider**: Google Fonts (Funnel Sans family)
- **Animation Library**: GSAP with ScrollTrigger plugin
- **Image Assets**: Unsplash for placeholder images
- **Development Tools**: Replit-specific plugins for development environment integration
- **Replit Integration**: Custom Vite plugins for error modal and cartographer features in development mode

The architecture emphasizes developer experience with TypeScript throughout, modern React patterns, and a clean separation between frontend and backend concerns while maintaining simplicity for a corporate website use case.