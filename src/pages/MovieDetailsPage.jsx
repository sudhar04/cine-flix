import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { movieService, getImageUrl } from '../services/api';
import { motion } from 'framer-motion';
import {
  Star,
  Clock,
  Calendar,
  Globe,
  Play,
  Plus,
  Check,
  Heart,
  ArrowLeft,
  DollarSign,
  TrendingUp,
  Building2,
  User
} from 'lucide-react';
import { useMovieContext } from '../context/MovieContext';
import MovieGrid from '../components/MovieGrid';

// Language code to full name mapping helper
const getLanguageName = (code) => {
  const languages = {
    en: 'English',
    ta: 'Tamil',
    hi: 'Hindi',
    te: 'Telugu',
    ml: 'Malayalam',
    kn: 'Kannada',
    es: 'Spanish',
    fr: 'French',
    de: 'German',
    ja: 'Japanese',
    ko: 'Korean',
    it: 'Italian',
    zh: 'Chinese',
    ru: 'Russian',
    pt: 'Portuguese',
  };
  return languages[code?.toLowerCase()] || code?.toUpperCase() || 'N/A';
};

// Currency formatter helper
const formatCurrency = (amount) => {
  if (!amount || amount === 0) return 'N/A';
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(amount);
};

// Runtime formatter helper (e.g. 169 -> 2h 49m)
const formatRuntime = (minutes) => {
  if (!minutes) return 'N/A';
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  if (hours === 0) return `${mins}m`;
  return `${hours}h ${mins}m`;
};

// Full date formatter helper
const formatDate = (dateStr) => {
  if (!dateStr) return 'N/A';
  try {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  } catch (e) {
    return dateStr;
  }
};

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { addToWatchlist, isInWatchlist, toggleFavorite, isInFavorites } = useMovieContext();

  useEffect(() => {
    const fetchDetails = async () => {
      setIsLoading(true);
      window.scrollTo(0, 0);
      try {
        const { data } = await movieService.getDetails(id);
        setMovie(data);
      } catch (error) {
        console.error('Error fetching details:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDetails();
  }, [id]);

  if (isLoading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-background">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!movie) return null;

  const inWatchlist = isInWatchlist(movie.id);
  const inFavorites = isInFavorites(movie.id);
  const trailer = movie.videos?.results?.find(v => v.type === 'Trailer') || movie.videos?.results?.[0];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-background min-h-screen"
    >
      {/* Immersive Header */}
      <div className="relative h-[65vh] w-full">
        <div className="absolute inset-0">
          <img
            src={getImageUrl(movie.backdrop_path)}
            alt={movie.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent" />
        </div>

        <Link
          to="/"
          className="absolute top-24 left-4 md:top-28 md:left-8 p-3 glass rounded-full hover:bg-white/10 transition-all z-20 group"
        >
          <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 md:px-8 -mt-24 sm:-mt-32 lg:-mt-60 relative z-10 pb-20">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Left Column: Poster & Quick Facts */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="w-full lg:w-80 shrink-0 flex flex-col items-center lg:items-stretch"
          >
            <div className="relative group w-48 sm:w-64 lg:w-full rounded-2xl overflow-hidden shadow-2xl shadow-black/80 border border-white/5">
              <img
                src={getImageUrl(movie.poster_path, 'w500')}
                alt={movie.title}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Action Buttons (Desktop Only) */}
            <div className="mt-6 hidden lg:flex flex-col gap-3 w-full">
              <button
                onClick={() => addToWatchlist(movie)}
                className={`w-full py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all active:scale-[0.98] ${inWatchlist ? 'bg-white text-black' : 'glass hover:bg-white/10'
                  }`}
              >
                {inWatchlist ? <Check className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                {inWatchlist ? 'In Watchlist' : 'Add to Watchlist'}
              </button>
              <button
                onClick={() => toggleFavorite(movie)}
                className={`w-full py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all active:scale-[0.98] ${inFavorites ? 'bg-primary text-white' : 'glass hover:bg-white/10'
                  }`}
              >
                <Heart className={`w-5 h-5 ${inFavorites ? 'fill-current' : ''}`} />
                {inFavorites ? 'Favorited' : 'Add to Favorites'}
              </button>
            </div>

            {/* Quick Facts Card */}
            <div className="w-full mt-6 glass p-6 rounded-2xl border border-white/5 space-y-5">
              <h4 className="text-sm font-bold font-cinematic uppercase tracking-widest text-white/40 pb-2 border-b border-white/5">
                Facts & Figures
              </h4>

              <div>
                <span className="text-[11px] text-white/40 uppercase tracking-wider block mb-1">Status</span>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-primary/10 text-primary border border-primary/20 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  {movie.status || 'Unknown'}
                </span>
              </div>

              <div>
                <span className="text-[11px] text-white/40 uppercase tracking-wider block mb-1">Release Date</span>
                <span className="text-sm font-medium text-white/90 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-white/40" />
                  {formatDate(movie.release_date)}
                </span>
              </div>

              <div>
                <span className="text-[11px] text-white/40 uppercase tracking-wider block mb-1">Original Language</span>
                <span className="text-sm font-medium text-white/90 flex items-center gap-2">
                  <Globe className="w-4 h-4 text-white/40" />
                  {getLanguageName(movie.original_language)}
                </span>
              </div>

              <div>
                <span className="text-[11px] text-white/40 uppercase tracking-wider block mb-1">Budget</span>
                <span className="text-sm font-semibold text-white/90 flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-white/40" />
                  {formatCurrency(movie.budget)}
                </span>
              </div>

              <div>
                <span className="text-[11px] text-white/40 uppercase tracking-wider block mb-1">Revenue</span>
                <span className="text-sm font-semibold text-white/90 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-white/40" />
                  {formatCurrency(movie.revenue)}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Title, Details, Cast, Video */}
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-4 mb-4">
              {movie.genres?.map(g => (
                <span
                  key={g.id}
                  className="px-3 py-1 bg-white/5 text-white/80 hover:bg-primary/20 hover:text-primary border border-white/10 hover:border-primary/20 rounded-full text-xs font-bold uppercase tracking-wider transition-colors cursor-default"
                >
                  {g.name}
                </span>
              ))}
            </div>

            <h1 className="text-4xl md:text-6xl font-black font-cinematic mb-2 leading-tight">
              {movie.title}
            </h1>

            {movie.tagline && (
              <p className="text-lg md:text-xl text-white/60 italic font-medium mb-6 pl-4 border-l-2 border-primary/50 font-sans">
                "{movie.tagline}"
              </p>
            )}

            <div className="flex flex-wrap items-center gap-8 mb-8 text-white/70">
              <div className="flex items-center gap-2">
                <Star className="text-secondary fill-current w-5 h-5" />
                <span className="text-xl font-bold text-white">{movie.vote_average?.toFixed(1)}</span>
                <span className="text-xs text-white/40">({movie.vote_count?.toLocaleString()} votes)</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-white/40" />
                <span className="font-medium">
                  {formatRuntime(movie.runtime)} <span className="text-xs text-white/40">({movie.runtime} min)</span>
                </span>
              </div>
            </div>

            <div className="mb-10">
              <h3 className="text-xl font-bold mb-4 font-cinematic uppercase tracking-widest text-white/40">Overview</h3>
              <p className="text-lg text-white/80 leading-relaxed max-w-4xl font-sans">
                {movie.overview}
              </p>
            </div>

            {/* Actions (Mobile Only) */}
            <div className="lg:hidden flex flex-wrap gap-4 mb-10">
              <button
                onClick={() => addToWatchlist(movie)}
                className="flex-1 btn-primary py-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2"
              >
                {inWatchlist ? <Check className="w-5 h-5" /> : <Plus className="w-5 h-5" />} Watchlist
              </button>
              <button
                onClick={() => toggleFavorite(movie)}
                className="p-4 glass rounded-xl flex items-center justify-center"
              >
                <Heart className={inFavorites ? 'fill-current text-primary' : 'text-white'} />
              </button>
            </div>

            {/* Production Companies Section */}
            {movie.production_companies && movie.production_companies.length > 0 && (
              <div className="mb-10">
                <h3 className="text-xl font-bold mb-4 font-cinematic uppercase tracking-widest text-white/40">
                  Production Companies
                </h3>
                <div className="flex flex-wrap gap-4">
                  {movie.production_companies.map(company => (
                    <div
                      key={company.id}
                      className="flex items-center gap-3 bg-surface/60 border border-white/5 px-4 py-2.5 rounded-xl hover:bg-surface/80 hover:border-white/10 transition-colors"
                    >
                      {company.logo_path ? (
                        <img
                          src={getImageUrl(company.logo_path, 'w92')}
                          alt={company.name}
                          className="h-6 object-contain filter invert brightness-200"
                        />
                      ) : (
                        <Building2 className="w-5 h-5 text-white/60" />
                      )}
                      <span className="text-sm font-medium">{company.name}</span>
                      {company.origin_country && (
                        <span className="text-[10px] bg-white/10 text-white/70 px-1.5 py-0.5 rounded font-bold font-sans">
                          {company.origin_country}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Cast Section */}
            {movie.credits?.cast && movie.credits.cast.length > 0 && (
              <div className="mb-10">
                <h3 className="text-xl font-bold mb-6 font-cinematic uppercase tracking-widest text-white/40">
                  Top Cast
                </h3>
                <div className="flex gap-6 overflow-x-auto no-scrollbar pb-4">
                  {movie.credits.cast.slice(0, 10).map(actor => (
                    <div key={actor.id} className="w-24 shrink-0 group">
                      <div className="w-24 h-24 rounded-full overflow-hidden mb-3 border-2 border-white/5 shadow-lg group-hover:border-primary/50 transition-all duration-300">
                        {actor.profile_path !== null ? (
                          <img
                            src={`https://image.tmdb.org/t/p/w185${actor.profile_path}`}
                            alt={actor.name}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            onError={(e) => {
                              e.currentTarget.onerror = null;
                              e.currentTarget.src = '/default-avatar.png';
                            }}
                          />
                        ) : (
                          <div className="w-full h-full bg-surface/80 flex items-center justify-center group-hover:bg-surface transition-colors">
                            <User className="w-8 h-8 text-white/30" />
                          </div>
                        )}
                      </div>
                      <p className="text-xs font-bold text-center line-clamp-1 group-hover:text-primary transition-colors">
                        {actor.name}
                      </p>
                      <p className="text-[10px] text-white/40 text-center line-clamp-1 mt-0.5">
                        {actor.character}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Trailer Embed */}
            {trailer && (
              <div className="mb-10">
                <h3 className="text-xl font-bold mb-6 font-cinematic uppercase tracking-widest text-white/40">
                  Official Trailer
                </h3>
                <div className="aspect-video w-full rounded-2xl overflow-hidden glass border border-white/5 shadow-2xl">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${trailer.key}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            )}
          </div>

        </div>

        {/* Similar Movies Grid */}
        {movie.similar?.results && movie.similar.results.length > 0 && (
          <div className="mt-16 border-t border-white/5 pt-8">
            <MovieGrid
              movies={movie.similar.results.slice(0, 6)}
              title="Similar Movies"
            />
          </div>
        )}

        {/* Recommendations Grid */}
        {movie.recommendations?.results && movie.recommendations.results.length > 0 && (
          <div className="mt-8 border-t border-white/5 pt-8">
            <MovieGrid
              movies={movie.recommendations.results.slice(0, 6)}
              title="Recommended For You"
            />
          </div>
        )}

      </div>
    </motion.div>
  );
};

export default MovieDetailsPage;