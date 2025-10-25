# GoFast Landing Page

A modern HTML landing page built with Vite that directs users to the GoFast demo platform.

## Features

- Clean, modern design with Tailwind CSS
- Responsive layout for all devices
- Animated background elements
- Direct link to the demo platform
- Feature highlights with glassmorphism effects
- Logo integration
- Optimized build system

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
GoFastLanding/
├── index.html              # Entry point (redirects to home)
├── public/
│   ├── logo.jpg            # Logo file (drop your logo here!)
│   └── logo-placeholder.txt # Instructions
├── src/
│   └── pages/
│       ├── home.html       # Main landing page
│       └── about.html      # About page
├── package.json
├── vite.config.js
└── vercel.json
```

## Setup

1. **Drop your `logo.jpg` file in the `public/` folder**
2. Run `npm run build` to create the dist folder
3. Deploy the `dist` folder to your hosting service

## Demo Link

The landing page directs users to: https://gofastfrontend-demo.vercel.app

## Deployment

### Vercel (Recommended)
```bash
npm run build
# Deploy the dist folder to Vercel
```

### Other Platforms
- Netlify: Deploy the `dist` folder
- GitHub Pages: Deploy the `dist` folder
- Any static hosting service

## Build Output

The build process creates an optimized `dist` folder with:
- Minified HTML, CSS, and JS
- Optimized assets
- Production-ready files
