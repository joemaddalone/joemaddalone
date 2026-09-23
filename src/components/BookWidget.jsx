const BookWidget = ({ bookData, compact = false, className = "" }) => {
  const formatAuthor = (author) => author || "";

  const Wrapper = bookData.link ? "a" : "div";
  const wrapperProps = bookData.link
    ? { href: bookData.link, target: "_blank", rel: "noopener noreferrer" }
    : {};

  if (compact) {
    return (
      <Wrapper
        {...wrapperProps}
        className={`group w-full max-w-[350px] overflow-hidden border border-[var(--line-soft)] bg-[var(--surface)] not-prose ${className}`}
      >
        <div className="relative overflow-hidden aspect-[2/3]">
          <img
            src={`/assets/books/${bookData.isbn}.jpg`}
            alt={`${bookData.title} cover`}
            width={350}
            height={500}
            className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
            loading="lazy"
          />
        </div>
        <div className="p-3">
          <h3 className="line-clamp-2 text-[13px] font-bold leading-tight tracking-[-0.02em] text-[var(--ink)]">
            {bookData.title}
          </h3>
          {bookData.author && (
            <p className="mt-1 line-clamp-1 font-mono text-[10px] uppercase tracking-[0.06em] text-[var(--ink-faint)]">
              {formatAuthor(bookData.author)}
            </p>
          )}
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper
      {...wrapperProps}
      className={`overflow-hidden border border-[var(--line-soft)] bg-[var(--surface)] not-prose ${className}`}
    >
      <div className="relative overflow-hidden">
        <img
          src={`/assets/books/${bookData.isbn}.jpg`}
          alt={`${bookData.title} cover`}
          width={500}
          height={750}
          className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          loading="lazy"
        />
        {bookData.subtitle && (
          <div className="absolute bottom-2 left-2 right-2">
            <span className="border border-[var(--line-soft)] bg-[var(--surface)] px-2 py-1 font-mono text-[10px] uppercase tracking-[0.06em] text-[var(--ink-muted)]">
              {bookData.subtitle}
            </span>
          </div>
        )}
      </div>
      <div className="p-4 border-t border-[var(--line-soft)]">
        <h3 className="text-[15px] font-bold leading-tight tracking-[-0.02em] text-[var(--ink)]">
          {bookData.title}
        </h3>
        {bookData.subtitle && (
          <p className="mt-1 text-[12px] italic leading-relaxed text-[var(--ink-muted)]">
            {bookData.subtitle}
          </p>
        )}
        {bookData.author && (
          <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.08em] text-[var(--ink-faint)]">
            {formatAuthor(bookData.author)}
          </p>
        )}
        {bookData.isbn && (
          <p className="mt-2 font-mono text-[10px] tracking-[0.04em] text-[var(--ink-faint)]">
            ISBN — {bookData.isbn}
          </p>
        )}
      </div>
    </Wrapper>
  );
};

export default BookWidget;
