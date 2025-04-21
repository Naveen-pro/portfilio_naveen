# Naveen N - Portfolio Website

A professional portfolio website for Naveen N, an Electronics and Communication Engineering graduate with expertise in Full-Stack Web Development, built with React.js and Vite.

## Features

- Responsive modern design
- Dark/Light mode toggle
- Smooth scrolling and animations
- Interactive UI components
- Contact form
- Project showcases
- Mobile-friendly navigation
- Downloadable resume
- Motion-reduced accessibility option

## Tech Stack

- **Frontend Framework**: React.js
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Contact Form**: EmailJS (integration ready)

## Project Structure

```
├── public/             # Static files
├── src/
│   ├── assets/         # Images and other assets
│   ├── components/     # Reusable UI components
│   ├── context/        # Context providers (theme)
│   ├── pages/          # Page components
│   ├── App.jsx         # Main application component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
├── tailwind.config.js  # Tailwind CSS configuration
├── vite.config.js      # Vite configuration
└── package.json        # Dependencies and scripts
```

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/Naveen-pro/naveen-portfolio.git
cd naveen-portfolio
```

2. Install dependencies

```bash
npm install
# or
yarn
```

3. Start the development server

```bash
npm run dev
# or
yarn dev
```

The site will be available at `http://localhost:5173`

### Building for Production

```bash
npm run build
# or
yarn build
```

## Deployment Options

This portfolio can be deployed to:

- **GitHub Pages**: Great for personal portfolio sites
- **Vercel**: Easy deployment with GitHub integration
- **Netlify**: Simple drag and drop deployment

## Customization

- **Theme Colors**: Edit the colors in `tailwind.config.js`
- **Content**: Update personal information in respective components
- **Projects**: Add your projects in the `Projects.jsx` component
- **Contact**: Update contact information in `Contact.jsx`
- **Resume**: Replace the resume.pdf file in the public folder

## License

MIT

## Acknowledgements

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)
