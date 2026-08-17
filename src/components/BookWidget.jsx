const BookWidget = ({ bookData, compact = false, className = "" }) => {
  // Helper function to format author name
  const formatAuthor = (author) => {
    if (!author) return "";
    return author;
  };

  const Wrapper = bookData.link ? "a" : "div";
  const wrapperProps = bookData.link
    ? { href: bookData.link, target: "_blank", rel: "noopener noreferrer" }
    : {};

  // Compact mode render
  if (compact) {
    return (
      <Wrapper
        {...wrapperProps}
        className={`w-full max-w-[350px] bg-gray-800 rounded-lg shadow-md overflow-hidden ${className} not-prose`}
      >
        {/* Fixed 2:3 cover area keeps every card the same size, regardless of the
            source image's native dimensions or aspect ratio. */}
        <div className="relative group cursor-pointer overflow-hidden aspect-[2/3]">
          <img
            src={`/assets/books/${bookData.isbn}.jpg`}
            alt={`${bookData.title} cover`}
            width={350}
            height={500}
            className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Fixed-height info section reserves room for a 2-line title + 1-line
            author, so short and long titles produce identical card heights. */}
        <div className="p-3 h-[84px]">
          {/* Title */}
          <h3 className="text-sm font-semibold text-white mb-1 line-clamp-2">
            {bookData.title}
          </h3>

          {/* Author */}
          {bookData.author && (
            <p className="text-xs text-gray-400 line-clamp-1">
              by {formatAuthor(bookData.author)}
            </p>
          )}
        </div>
      </Wrapper>
    );
  }

  // Full mode render
  return (
    <Wrapper
      {...wrapperProps}
      className={`bg-gray-800 rounded-lg shadow-md overflow-hidden ${className} not-prose`}
    >
      {/* Cover Section */}
      <div className="relative group cursor-pointer overflow-hidden">
        <img
          src={`/assets/books/${bookData.isbn}.jpg`}
          alt={`${bookData.title} cover`}
          width={500}
          height={750}
          className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Subtitle Overlay */}
        {bookData.subtitle && (
          <div className="absolute bottom-2 left-2 right-2">
            <span className="px-2 py-1 bg-black bg-opacity-75 text-white text-xs rounded font-medium">
              {bookData.subtitle}
            </span>
          </div>
        )}
      </div>

      {/* Book Information Section */}
      <div className="p-4">
        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-2">
          {bookData.title}
        </h3>

        {/* Subtitle */}
        {bookData.subtitle && (
          <p className="text-sm text-gray-400 italic mb-2">
            {bookData.subtitle}
          </p>
        )}

        {/* Author */}
        {bookData.author && (
          <p className="text-sm text-gray-300 mb-3">
            ✍️ by {formatAuthor(bookData.author)}
          </p>
        )}

        {/* ISBN */}
        {bookData.isbn && (
          <p className="text-xs text-gray-500 font-mono">
            ISBN: {bookData.isbn}
          </p>
        )}
      </div>
    </Wrapper>
  );
};

export default BookWidget;
