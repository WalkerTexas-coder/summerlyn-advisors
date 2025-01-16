# Summerlyn Advisors

A modern website built with Next.js for Summerlyn Advisors, featuring dynamic routing and a responsive design.

## Prerequisites

- Node.js (version 18 or higher recommended)
- npm (comes with Node.js)

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/WalkerTexas-coder/summerlyn-advisors.git
cd summerlyn-advisors
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Creates an optimized production build
- `npm start` - Runs the production server
- `npm run lint` - Runs ESLint to check code quality

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework for production
- [React](https://reactjs.org/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible components
- [React Hook Form](https://react-hook-form.com/) - Form handling
- [Zod](https://zod.dev/) - Schema validation

## Deployment

This project is automatically deployed to GitHub Pages using GitHub Actions. The deployment process is triggered whenever changes are pushed to the `main` branch.

### Prerequisites for Deployment

1. Enable GitHub Pages in your repository:
   - Go to repository Settings > Pages
   - Set "Source" to "GitHub Actions"

### How Deployment Works

1. Push your changes to the `main` branch
2. GitHub Actions will automatically:
   - Install dependencies
   - Build the project
   - Deploy to GitHub Pages

The deployment workflow:
- Builds an optimized production version
- Uploads the build artifacts
- Deploys to GitHub Pages
- Makes the site available at your GitHub Pages URL

You can monitor the deployment status in the "Actions" tab of your GitHub repository.

### Manual Deployment

While deployment is automated, you can still build the project locally:

```bash
npm run build
```

This will create an optimized production build in the `out` directory.
