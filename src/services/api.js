import axios from 'axios';

const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY || 'YOUR_TMDB_API_KEY_HERE';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: TMDB_API_KEY,
  },
});

const MOCK_GENRES = [
  { id: 28, name: "Action" },
  { id: 12, name: "Adventure" },
  { id: 80, name: "Crime" },
  { id: 18, name: "Drama" },
  { id: 36, name: "History" },
  { id: 878, name: "Science Fiction" },
  { id: 53, name: "Thriller" }
];

const MOCK_MOVIES = [
  {
    id: 1001,
    title: "Leo",
    poster_path: "/34nDCQZpr2G623bE93YV26t3b2x.jpg",
    backdrop_path: "/l621r5qZg331yXm7S2dZ37d25eQ.jpg",
    overview: "A mild-mannered cafe owner becomes a local hero, but old enemies resurface, claiming he is a former gang leader.",
    release_date: "2023-10-19",
    vote_average: 8.2,
    vote_count: 1450,
    original_language: "ta",
    genre_ids: [28, 53, 80],
    runtime: 164,
    status: "Released",
    credits: {
      cast: [
        { id: 1, name: "Vijay", character: "Parthiban / Leo Das", profile_path: "" },
        { id: 2, name: "Sanjay Dutt", character: "Antony Das", profile_path: "" },
        { id: 3, name: "Arjun Sarja", character: "Harold Das", profile_path: "" },
        { id: 4, name: "Trisha Krishnan", character: "Sathya", profile_path: "" }
      ]
    },
    videos: {
      results: [
        { key: "coAMcT43bNA", type: "Trailer" }
      ]
    }
  },
  {
    id: 1002,
    title: "Interstellar",
    poster_path: "/gEU2QvHOm5fgYv3xSafe4mEg3Zs.jpg",
    backdrop_path: "/xJHokZbljvjC1OH0zIE7RZ4wAsP.jpg",
    overview: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    release_date: "2014-11-07",
    vote_average: 8.6,
    vote_count: 32000,
    original_language: "en",
    genre_ids: [12, 18, 878],
    runtime: 169,
    status: "Released",
    credits: {
      cast: [
        { id: 5, name: "Matthew McConaughey", character: "Cooper", profile_path: "" },
        { id: 6, name: "Anne Hathaway", character: "Brand", profile_path: "" },
        { id: 7, name: "Jessica Chastain", character: "Murph", profile_path: "" },
        { id: 8, name: "Michael Caine", character: "Professor Brand", profile_path: "" }
      ]
    },
    videos: {
      results: [
        { key: "zSWdZVtXT7E", type: "Trailer" }
      ]
    }
  },
  {
    id: 1003,
    title: "Master",
    poster_path: "/9yK2g0lGgZtYV3a14n8Y1wW9L6Y.jpg",
    backdrop_path: "/vG60q5c3G17L35O09159954.jpg",
    overview: "An alcoholic professor is sent to a juvenile correctional school, where he clashes with a ruthless gangster who uses the children for criminal activities.",
    release_date: "2021-01-13",
    vote_average: 8.0,
    vote_count: 850,
    original_language: "ta",
    genre_ids: [28, 53],
    runtime: 179,
    status: "Released",
    credits: {
      cast: [
        { id: 1, name: "Vijay", character: "JD (John Durairaj)", profile_path: "" },
        { id: 9, name: "Vijay Sethupathi", character: "Bhavani", profile_path: "" },
        { id: 10, name: "Malavika Mohanan", character: "Charulatha", profile_path: "" }
      ]
    },
    videos: {
      results: [
        { key: "pg-uJg7z_xY", type: "Trailer" }
      ]
    }
  },
  {
    id: 1004,
    title: "Inception",
    poster_path: "/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg",
    backdrop_path: "/8Zg0iBS2wslhWY0R8rQI1xa4LZg.jpg",
    overview: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    release_date: "2010-07-16",
    vote_average: 8.4,
    vote_count: 35000,
    original_language: "en",
    genre_ids: [28, 878, 53],
    runtime: 148,
    status: "Released",
    credits: {
      cast: [
        { id: 11, name: "Leonardo DiCaprio", character: "Cobb", profile_path: "" },
        { id: 12, name: "Joseph Gordon-Levitt", character: "Arthur", profile_path: "" },
        { id: 13, name: "Elliot Page", character: "Ariadne", profile_path: "" },
        { id: 14, name: "Tom Hardy", character: "Eames", profile_path: "" }
      ]
    },
    videos: {
      results: [
        { key: "YoHD9XEInc0", type: "Trailer" }
      ]
    }
  },
  {
    id: 1005,
    title: "Oppenheimer",
    poster_path: "/8Gxv2wSbsysLYlhuxd76v25P0d1.jpg",
    backdrop_path: "/hoV627Yr7n5F7s7zRnd6xZs938x.jpg",
    overview: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
    release_date: "2023-07-21",
    vote_average: 8.5,
    vote_count: 8900,
    original_language: "en",
    genre_ids: [18, 36],
    runtime: 180,
    status: "Released",
    credits: {
      cast: [
        { id: 15, name: "Cillian Murphy", character: "J. Robert Oppenheimer", profile_path: "" },
        { id: 16, name: "Emily Blunt", character: "Kitty Oppenheimer", profile_path: "" },
        { id: 17, name: "Matt Damon", character: "Leslie Groves", profile_path: "" },
        { id: 18, name: "Robert Downey Jr.", character: "Lewis Strauss", profile_path: "" }
      ]
    },
    videos: {
      results: [
        { key: "uYPbbksJxIg", type: "Trailer" }
      ]
    }
  },
  {
    id: 1006,
    title: "Mersal",
    poster_path: "/c1b3sPq6i9k5v716JpZ8vG4uL5C.jpg",
    backdrop_path: "/hC3j3w591m4H57J8R9u4b8686sA.jpg",
    overview: "A magician and a doctor, who are identical twins, seek revenge against a corrupt medical practitioner who killed their parents.",
    release_date: "2017-10-18",
    vote_average: 7.9,
    vote_count: 650,
    original_language: "ta",
    genre_ids: [28, 53, 18],
    runtime: 172,
    status: "Released",
    credits: {
      cast: [
        { id: 1, name: "Vijay", character: "Dr. Maaran / Vetri", profile_path: "" },
        { id: 19, name: "Samantha Ruth Prabhu", character: "Tara", profile_path: "" },
        { id: 20, name: "Kajal Aggarwal", character: "Anu Pallavi", profile_path: "" }
      ]
    },
    videos: {
      results: [
        { key: "n3c2yT-yG6U", type: "Trailer" }
      ]
    }
  },
  {
    id: 1007,
    title: "The Dark Knight",
    poster_path: "/qJ2tW6WMUDux911r6mQHhaLibjq.jpg",
    backdrop_path: "/dqK9HZXoHl4W1E1f04N7u9G20wI.jpg",
    overview: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    release_date: "2008-07-18",
    vote_average: 8.8,
    vote_count: 31000,
    original_language: "en",
    genre_ids: [28, 80, 18, 53],
    runtime: 152,
    status: "Released",
    credits: {
      cast: [
        { id: 21, name: "Christian Bale", character: "Bruce Wayne / Batman", profile_path: "" },
        { id: 22, name: "Heath Ledger", character: "Joker", profile_path: "" },
        { id: 23, name: "Aaron Eckhart", character: "Harvey Dent", profile_path: "" }
      ]
    },
    videos: {
      results: [
        { key: "EXeTwQWrcwY", type: "Trailer" }
      ]
    }
  },
  {
    id: 1008,
    title: "Theri",
    poster_path: "/y52W4gQ0fJg6jR0T7YQ2r6tP6iC.jpg",
    backdrop_path: "/9Rj8l6gElLpRL7Kj17iZhrT5Zuw.jpg",
    overview: "When his daughter's life is threatened by a local politician, a former police officer must confront his past to protect her.",
    release_date: "2016-04-14",
    vote_average: 7.8,
    vote_count: 550,
    original_language: "ta",
    genre_ids: [28, 53, 18],
    runtime: 158,
    status: "Released",
    credits: {
      cast: [
        { id: 1, name: "Vijay", character: "ACP Vijay Kumar / Joseph Kuruvilla", profile_path: "" },
        { id: 19, name: "Samantha Ruth Prabhu", character: "Mithra", profile_path: "" },
        { id: 24, name: "Amy Jackson", character: "Annie", profile_path: "" }
      ]
    },
    videos: {
      results: [
        { key: "V8u2iH-j3iQ", type: "Trailer" }
      ]
    }
  },
  {
    id: 1009,
    title: "Vikram",
    poster_path: "/4jQp0gMh492gO5j2p9z7R3zV9P1.jpg",
    backdrop_path: "/p1F51LvjB34LhMhV096lMv6m4T2.jpg",
    overview: "A special agent investigates a murder committed by a masked group of serial killers.",
    release_date: "2022-06-03",
    vote_average: 8.1,
    vote_count: 720,
    original_language: "ta",
    genre_ids: [28, 53, 80],
    runtime: 175,
    status: "Released",
    credits: {
      cast: [
        { id: 25, name: "Kamal Haasan", character: "Vikram", profile_path: "" },
        { id: 9, name: "Vijay Sethupathi", character: "Sandhanam", profile_path: "" },
        { id: 26, name: "Fahadh Faasil", character: "Amar", profile_path: "" }
      ]
    },
    videos: {
      results: [
        { key: "OKBMCL-FRis", type: "Trailer" }
      ]
    }
  },
  {
    id: 1010,
    title: "Jailer",
    poster_path: "/8ie2BLaMh4zH4yq0Vj4Wq1qJ71s.jpg",
    backdrop_path: "/t5zCc9yVn4t34V3J809v8yX7o1M.jpg",
    overview: "A retired jailer goes on a manhunt to find his son's killers, only to find himself entangled in a massive heist of antique idols.",
    release_date: "2023-08-10",
    vote_average: 7.7,
    vote_count: 610,
    original_language: "ta",
    genre_ids: [28, 53, 80],
    runtime: 168,
    status: "Released",
    credits: {
      cast: [
        { id: 27, name: "Rajinikanth", character: "Tiger Muthuvel Pandian", profile_path: "" },
        { id: 28, name: "Vinayakan", character: "Varman", profile_path: "" },
        { id: 29, name: "Ramya Krishnan", character: "Vijaya Pandian", profile_path: "" }
      ]
    },
    videos: {
      results: [
        { key: "cb5UcvBTsW8", type: "Trailer" }
      ]
    }
  }
];

const makeMockResponse = (data) => Promise.resolve({ data });

const handleRequest = async (apiCall, getFallbackData) => {
  if (TMDB_API_KEY === 'YOUR_TMDB_API_KEY_HERE') {
    return makeMockResponse(getFallbackData());
  }
  try {
    return await apiCall();
  } catch (error) {
    console.warn("TMDB API call failed. Falling back to local mock data.", error);
    return makeMockResponse(getFallbackData());
  }
};

export const movieService = {
  getPopular: (page = 1) =>
    handleRequest(
      () => api.get('/movie/popular', { params: { page } }),
      () => ({ results: MOCK_MOVIES })
    ),
  getTopRated: (page = 1) =>
    handleRequest(
      () => api.get('/movie/top_rated', { params: { page } }),
      () => ({ results: [...MOCK_MOVIES].sort((a, b) => b.vote_average - a.vote_average) })
    ),
  getTrending: (timeWindow = 'day') =>
    handleRequest(
      () => api.get(`/trending/movie/${timeWindow}`),
      () => ({ results: MOCK_MOVIES })
    ),
  getNowPlaying: (page = 1) =>
    handleRequest(
      () => api.get('/movie/now_playing', { params: { page } }),
      () => ({ results: MOCK_MOVIES })
    ),
  getUpcoming: (page = 1) =>
    handleRequest(
      () => api.get('/movie/upcoming', { params: { page } }),
      () => ({ results: MOCK_MOVIES })
    ),
  getDetails: (id) =>
    handleRequest(
      () => api.get(`/movie/${id}`, { params: { append_to_response: 'videos,credits,recommendations,similar' } }),
      () => {
        const movie = MOCK_MOVIES.find(m => String(m.id) === String(id)) || MOCK_MOVIES[0];
        return {
          ...movie,
          genres: movie.genres || (movie.genre_ids ? movie.genre_ids.map(gid => MOCK_GENRES.find(g => g.id === gid)).filter(Boolean) : []),
          budget: movie.budget || 140000000,
          revenue: movie.revenue || 520000000,
          production_companies: movie.production_companies || [
            { id: 1, name: "Universal Pictures", logo_path: null, origin_country: "US" },
            { id: 2, name: "Syncopy", logo_path: null, origin_country: "US" }
          ],
          recommendations: {
            results: MOCK_MOVIES.filter(m => String(m.id) !== String(id))
          },
          similar: {
            results: MOCK_MOVIES.filter(m => String(m.id) !== String(id)).reverse()
          }
        };
      }
    ),
  getGenres: () =>
    handleRequest(
      () => api.get('/genre/movie/list'),
      () => ({ genres: MOCK_GENRES })
    ),
  searchMovies: (query, page = 1) =>
    handleRequest(
      () => api.get('/search/movie', { params: { query, page } }),
      () => {
        const filtered = MOCK_MOVIES.filter(m =>
          m.title.toLowerCase().includes(query.toLowerCase()) ||
          m.overview.toLowerCase().includes(query.toLowerCase())
        );
        return { results: filtered };
      }
    ),
  discoverMovies: (params) =>
    handleRequest(
      () => api.get('/discover/movie', { params }),
      () => {
        let results = [...MOCK_MOVIES];

        // Filter by genre
        if (params.with_genres) {
          const genreId = Number(params.with_genres);
          results = results.filter(m => m.genre_ids.includes(genreId));
        }

        // Filter by year
        if (params.year) {
          const year = String(params.year);
          results = results.filter(m => m.release_date.startsWith(year));
        }

        // Filter by language
        if (params.with_original_language) {
          results = results.filter(m => m.original_language === params.with_original_language);
        }

        // Sort results
        if (params.sort_by) {
          if (params.sort_by.startsWith('vote_average')) {
            results.sort((a, b) => b.vote_average - a.vote_average);
          } else {
            results.sort((a, b) => b.vote_count - a.vote_count);
          }
        }

        return { results };
      }
    ),
};

export const getImageUrl = (path, size = 'original') => {
  if (!path) return 'https://via.placeholder.com/500x750?text=No+Image';
  if (path.startsWith('http') || path.startsWith('/images/')) return path;
  return `${IMAGE_BASE_URL}/${size}${path}`;
};

export default api;


