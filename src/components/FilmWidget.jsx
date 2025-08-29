import React from 'react';
const FilmWidget = ({ filmData, posterPath = null, compact = false, className = '' }) => {
  // Helper function to format runtime from minutes to hours:minutes
  const formatRuntime = (minutes) => {
    if (!minutes) return '';
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
  };

  // Helper function to format release date
  const formatReleaseDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Compact mode render
  if (compact) {
    return (
      <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden ${className} not-prose`}>
        <div className="relative group cursor-pointer overflow-hidden">
          <a
            href={`https://www.themoviedb.org/movie/${filmData.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <img
              src={posterPath}
              alt={`${filmData.title} poster`}
              width={200}
              height={300}
              className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </a>
        </div>

        {/* Compact Information Section */}
        <div className="p-3">
          {/* Title */}
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1 line-clamp-2">
            {filmData.title}
          </h3>

          {/* Release Date */}
          {filmData.releaseDate && (
            <p className="text-xs text-gray-600 dark:text-gray-400">
              {formatReleaseDate(filmData.releaseDate)}
            </p>
          )}
        </div>
      </div>
    );
  }

  // Full mode render
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden ${className} not-prose`}>
      {/* Poster Section */}
      <div className="relative group cursor-pointer overflow-hidden">
        <a
          href={`https://www.themoviedb.org/movie/${filmData.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <img
            src={posterPath}
            alt={`${filmData.title} poster`}
            width={500}
            height={750}
            className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </a>

        {/* Runtime Badge */}
        {filmData.runtime && (
          <div className="absolute top-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm font-medium">
            {formatRuntime(filmData.runtime)}
          </div>
        )}

        {/* Genre Tags Overlay */}
        {filmData.genres && filmData.genres.length > 0 && (
          <div className="absolute bottom-2 left-2 right-2 flex flex-wrap gap-1">
            {filmData.genres.map((genre) => (
              <span
                key={genre.id}
                className="px-2 py-1 bg-black bg-opacity-75 text-white text-xs rounded font-medium"
              >
                {genre.name}
              </span>
            ))}
          </div>
        )}

        {/* Overview Hover Overlay */}
        {filmData.overview && (
          <a
            href={`https://www.themoviedb.org/movie/${filmData.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="absolute inset-0 bg-black/60 bg-opacity-90 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-sm leading-relaxed text-center text-shadow-lg/30">
                {filmData.overview}
              </p>
            </div>
          </a>
        )}
      </div>

      {/* Film Information Section */}
      <div className="p-4">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {filmData.title}
        </h3>

        {/* Original Title (if different) */}
        {filmData.originalTitle && filmData.originalTitle !== filmData.title && (
          <p className="text-sm text-gray-600 dark:text-gray-400 italic mb-2">
            {filmData.originalTitle}
          </p>
        )}

        {/* Release Date */}
        {filmData.releaseDate && (
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
            🗓️ {formatReleaseDate(filmData.releaseDate)}
          </p>
        )}

        {/* Tagline */}
        {filmData.tagline && (
          <p className="text-sm text-gray-600 dark:text-gray-400 italic mb-3 border-l-4 border-blue-500 pl-3">
            "{filmData.tagline}"
          </p>
        )}
      </div>
    </div>
  );
};

export default FilmWidget;
