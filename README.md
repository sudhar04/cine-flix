# CineFlix - Premium Movie Discovery Web App

CineFlix is a world-class movie discovery platform built with React, Tailwind CSS, and Framer Motion. It offers a sleek, cinematic experience inspired by industry leaders like Netflix and TMDb.

<p align="left">
  <a href="https://cine-flex-gamma.vercel.app/">
    <img
      src="https://img.shields.io/badge/Live%20Demo-View%20Website-2563EB?style=for-the-badge&logo=google-chrome&logoColor=white"
      alt="Live Demo"
    />
  </a>
</p>

## Features
- **Cinematic UI**: Dark mode only with gold and red accents.
- **Advanced Filtering**: Filter by genres, year, language, and sorting options.
- **Immersive Details**: Full-screen movie backdrops, trailer embeds, and cast details.
- **Watchlist & Favorites**: Persistent storage using LocalStorage.
- **Search**: Instant search functionality.
- **Premium Animations**: Smooth transitions and hover effects using Framer Motion.
- **Responsive Design**: Optimized for mobile, tablet, and desktop.

## Tech Stack
- **Frontend**: React.js, Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **API**: TMDb (The Movie Database)
- **State Management**: Context API
- **Notifications**: React Hot Toast

## Getting Started

1. **Clone the project**
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Get your TMDb API Key**:
   - Register at [TMDB](https://www.themoviedb.org/documentation/api)
   - Go to your settings and generate an API key.
4. **Set up environment variables**:
   - Create a `.env` file in the root directory.
   - Add your API key: `VITE_TMDB_API_KEY=your_key_here`
5. **Run the development server**:
   ```bash
   npm run dev
   ```

## Folder Structure
- `src/components`: Reusable UI components.
- `src/pages`: Main application pages (Home, Details, Search, Watchlist).
- `src/services`: API service and helper functions.
- `src/context`: Global state management.
- `src/hooks`: Custom React hooks.
- `src/styles`: Global CSS and utility styles.
