import React from 'react';

const FilmWidget = ({ filmData, posterPath = null, compact = false, className = '' }) => {
  const formatRuntime = (minutes) => {
    if (!minutes) return '';
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
  };

  const formatReleaseDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
    }).toUpperCase();
  };

  if (compact) {
    return (
      <div className={`group not-prose overflow-hidden border border-[var(--line-soft)] bg-[var(--surface)] ${className}`}>
        <a
          href={`https://www.themoviedb.org/movie/${filmData.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block overflow-hidden"
        >
          <img
            src={posterPath}
            alt={`${filmData.title} poster`}
            width={200}
            height={300}
            className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            loading="lazy"
          />
        </a>
        <div className="p-3">
          <h3 className="line-clamp-2 text-[13px] font-bold leading-tight tracking-[-0.02em] text-[var(--ink)]">
            {filmData.title}
          </h3>
          {filmData.releaseDate && (
            <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.08em] text-[var(--ink-faint)]">
              {formatReleaseDate(filmData.releaseDate)}
              {filmData.runtime ? ` · ${formatRuntime(filmData.runtime)}` : ''}
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={`not-prose overflow-hidden border border-[var(--line-soft)] bg-[var(--surface)] ${className}`}>
      <a
        href={`https://www.themoviedb.org/movie/${filmData.id}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block overflow-hidden"
      >
        <img
          src={posterPath}
          alt={`${filmData.title} poster`}
          width={500}
          height={750}
          className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          loading="lazy"
        />
        {filmData.runtime && (
          <div className="absolute right-2 top-2 border border-[var(--line-soft)] bg-[var(--surface)] px-2 py-1 font-mono text-[10px] uppercase tracking-[0.08em] text-[var(--ink-muted)]">
            {formatRuntime(filmData.runtime)}
          </div>
        )}
        {filmData.genres?.length ? (
          <div className="absolute bottom-2 left-2 right-2 flex flex-wrap gap-1">
            {filmData.genres.map((genre) => (
              <span
                key={genre.id}
                className="border border-[var(--line-soft)] bg-[var(--surface)] px-2 py-1 font-mono text-[10px] uppercase tracking-[0.06em] text-[var(--ink-muted)]"
              >
                {genre.name}
              </span>
            ))}
          </div>
        ) : null}
        {filmData.overview && (
          <div className="absolute inset-0 flex items-center justify-center bg-[var(--ink)]/75 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <p className="text-center text-[13px] leading-relaxed text-[var(--bg)]">
              {filmData.overview}
            </p>
          </div>
        )}
      </a>
      <div className="p-4">
        <h3 className="text-[15px] font-bold leading-tight tracking-[-0.02em] text-[var(--ink)]">
          {filmData.title}
        </h3>
        {filmData.originalTitle && filmData.originalTitle !== filmData.title && (
          <p className="mt-1 text-[12px] italic text-[var(--ink-muted)]">{filmData.originalTitle}</p>
        )}
        {filmData.releaseDate && (
          <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.08em] text-[var(--ink-faint)]">
            {formatReleaseDate(filmData.releaseDate)}
          </p>
        )}
        {filmData.tagline && (
          <p className="mt-3 border-l border-[var(--line)] pl-3 text-[13px] italic leading-relaxed text-[var(--ink-muted)]">
            “{filmData.tagline}”
          </p>
        )}
      </div>
    </div>
  );
};

export default FilmWidget;
