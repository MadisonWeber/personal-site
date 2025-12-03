# Madison Weber - Personal Portfolio

A modern, responsive personal portfolio website showcasing my software development experience, technical skills, and projects. Built with React, TypeScript, and Tailwind CSS.

🔗 **Live Site:** https://madisonweberdeveloper.netlify.app/

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
- [Contact](#contact)

## ✨ Features

- **Single Page Application** with smooth scrolling navigation
- **Interactive Tech Stack** with hover cards displaying skill details and proficiency levels
- **Project Showcase** with image carousel and filtering capabilities
- **Responsive Design** optimized for desktop, tablet, and mobile devices
- **Contact Form** with email integration via EmailJS
- **Page Tracking** using Intersection Observer API for active section detection
- **Animations** with Tailwind CSS and custom keyframe animations
- **Type Safety** with TypeScript throughout

## 🛠️ Tech Stack

### Core

- **React 18** - UI library with hooks and modern patterns
- **TypeScript** - Type safety and better developer experience
- **Vite** - Fast build tool and dev server

### Styling

- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Re-usable component library built on Radix UI
- **Lucide React** - Icon library

### UI Components

- **Radix UI** - Unstyled, accessible component primitives
  - Dialog
  - Hover Card
  - Tooltip
  - Carousel
- **Embla Carousel** - Carousel functionality

### Form Management

- **React Hook Form** - Performant form validation
- **Zod** - Schema validation
- **EmailJS** - Email service integration

### Utilities

- **clsx** / **tailwind-merge** - Conditional class name management
- **Sonner** - Toast notifications

## 🏗️ Architecture

### Component Structure

The application follows a component-based architecture with clear separation of concerns:

```
src/
├── components/
│   ├── custom/          # Custom business logic components
│   │   ├── ContactMe.tsx
│   │   ├── GithubLink.tsx
│   │   └── LinkedInLink.tsx
│   └── ui/              # Reusable UI primitives (shadcn/ui)
│       ├── button.tsx
│       ├── dialog.tsx
│       ├── carousel.tsx
│       ├── hover-card.tsx
│       └── tooltip.tsx
├── pages/               # Page-level components
│   ├── About/
│   ├── Landing/
│   ├── Projects/
│   │   ├── index.tsx           # Main projects page
│   │   ├── ProjectCard.tsx     # Individual project card
│   │   └── MultiImageDisplay.tsx
│   └── TechStack/
│       ├── index.tsx           # Main tech stack page
│       └── TechItem.tsx        # Individual skill item
├── constants/           # App-wide constants and data
│   └── index.ts        # PROJECTS, STACK_LIST, CATEGORIES
├── hooks/              # Custom React hooks
│   └── usePageTracker.tsx
├── assets/             # Static assets (images, icons)
└── types/              # TypeScript type definitions
    └── project.ts
```

### Key Patterns

#### 1. **Page Tracking with Intersection Observer**

```typescript
// usePageTracker.tsx
- Observes multiple page sections
- Tracks which section is most visible
- Updates navigation state automatically
- Uses 30% visibility threshold for activation
```

#### 2. **Carousel with State Management**

```typescript
// Projects/index.tsx
- Uses Embla Carousel API for programmatic control
- Tracks current slide index
- Custom navigation buttons outside carousel
- Dot indicators for slide position
```

#### 3. **Form Validation with Zod + React Hook Form**

```typescript
// ContactMe.tsx
- Schema-based validation
- Real-time error feedback
- Type-safe form data
- EmailJS integration for contact form
```

#### 4. **Hover Card Pattern**

```typescript
// TechItem.tsx
- Displays detailed skill information on hover
- Skill proficiency levels (1-8)
- Visual level indicators with animated bars
- Professional descriptions and experience metrics
```

## 📁 Project Structure

```
personal-site/
├── public/              # Static files
├── src/
│   ├── App.tsx         # Root component with page refs
│   ├── main.tsx        # Application entry point
│   ├── components/     # Reusable components
│   ├── pages/          # Page components
│   ├── constants/      # Data and configuration
│   ├── hooks/          # Custom hooks
│   ├── assets/         # Images and static assets
│   └── types/          # TypeScript definitions
├── .env                # Environment variables (not committed)
├── index.html          # HTML entry point
├── package.json        # Dependencies and scripts
├── tailwind.config.js  # Tailwind configuration
├── tsconfig.json       # TypeScript configuration
└── vite.config.ts      # Vite configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- Git

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/MadisonWeber/personal-site.git
cd personal-site
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

3. **Set up environment variables**

```bash
cp .env.example .env
```

Add your EmailJS credentials:

```env
VITE_EMAIL_JS_SERVICE_KEY=your_service_key
VITE_EMAIL_JS_TEMPLATE_ID=your_template_id
VITE_EMAIL_JS_PUBLIC_KEY=your_public_key
```

4. **Start development server**

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
# or
yarn build
```

Preview production build:

```bash
npm run preview
# or
yarn preview
```

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```env
# EmailJS Configuration
VITE_EMAIL_JS_SERVICE_KEY=your_service_key_here
VITE_EMAIL_JS_TEMPLATE_ID=your_template_id_here
VITE_EMAIL_JS_PUBLIC_KEY=your_public_key_here
```

Get your EmailJS credentials at [emailjs.com](https://www.emailjs.com/)

## 📦 Key Dependencies

```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "typescript": "^5.6.2",
  "tailwindcss": "^3.4.17",
  "@radix-ui/react-dialog": "^1.1.2",
  "@radix-ui/react-hover-card": "^1.1.2",
  "embla-carousel-react": "^8.5.1",
  "react-hook-form": "^7.54.2",
  "zod": "^3.24.1",
  "@emailjs/browser": "^4.4.1",
  "lucide-react": "^0.468.0",
  "sonner": "^1.7.1"
}
```

## 🎨 Design Decisions

### Styling Approach

- **Tailwind CSS** for rapid UI development and consistency
- **shadcn/ui** for accessible, customizable components
- Custom animations using Tailwind's `animate-*` utilities
- Responsive design with mobile-first approach

### State Management

- **React hooks** (useState, useEffect, useCallback) for local state
- **Refs** for DOM manipulation and Intersection Observer
- **Carousel API** for programmatic carousel control
- No global state management needed (small app scope)

### Performance Optimizations

- Code splitting with dynamic imports (if applicable)
- Image optimization and lazy loading
- Memoization with `useCallback` for expensive operations
- Efficient re-rendering with proper dependency arrays

### Accessibility

- Semantic HTML elements
- ARIA labels and roles via Radix UI primitives
- Keyboard navigation support
- Focus management in dialogs and interactive elements

## 🚢 Deployment

### Netlify (Recommended)

1. **Connect your repository** to Netlify
2. **Build settings:**
   - Build command: `npm run build`
   - Publish directory: `dist`
3. **Add environment variables** in Netlify dashboard
4. **Deploy!**

### Vercel

```bash
npm install -g vercel
vercel
```

Follow the prompts to deploy.

### Manual Deployment

```bash
npm run build
# Upload the dist/ folder to your hosting service
```

## 📱 Pages Overview

### Landing Page

- Hero section with profile image
- Name and title
- Call-to-action buttons
- Social links (GitHub, LinkedIn)
- Contact button

### About Page

- Professional bio
- Background and experience
- Skills overview
- Personal interests

### Tech Stack Page

- Interactive skill cards with hover details
- Categorized by type (Languages, Frameworks, Tools, etc.)
- Proficiency levels (Exposure, Confidence, Experience)
- Animated skill level indicators
- Professional descriptions

### Projects Page

- Image carousel with navigation
- Project cards with screenshots
- Technology tags
- GitHub and live demo links
- Mobile/desktop app indicators
