# PaxAura

PaxAura is a modern web application built with Next.js that provides breathing exercises and mindfulness tools to help users achieve mental clarity and relaxation.

## Features

- Interactive breathing exercises with visual animations
- Dark/Light theme support
- Responsive design
- Modern UI components using Radix UI
- Type-safe development with TypeScript

## Tech Stack

- **Framework**: Next.js 15.3.2
- **Language**: TypeScript
- **UI Components**:
  - Radix UI
  - Tailwind CSS
- **State Management**: React Context
- **Theme**: next-themes for dark/light mode support

## Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- pnpm (Package manager)

### Installation

1. Clone the repository:

```bash
git clone [repository-url]
cd paxaura
```

2. Install dependencies:

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm dev
```

The application will be available at `http://localhost:3000`.

### Available Scripts

- `pnpm dev` - Start the development server with Turbopack
- `pnpm build` - Build the application for production
- `pnpm start` - Start the production server
- `pnpm lint` - Run ESLint to check code quality

## Project Structure

```
src/
├── app/              # Next.js app directory
├── components/       # Reusable UI components
├── context/         # React context providers
├── data/            # Static data and configurations
├── types/           # TypeScript type definitions
└── utils/           # Utility functions
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is private and proprietary.

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [Radix UI](https://www.radix-ui.com/)
- Styling with [Tailwind CSS](https://tailwindcss.com/)
