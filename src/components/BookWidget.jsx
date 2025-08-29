import React from 'react';

const BookWidget = ({ bookData, compact = false, className = '' }) => {
  // Helper function to format author name
  const formatAuthor = (author) => {
    if (!author) return '';
    return author;
  };

  // Compact mode render
  if (compact) {
    return (
      <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden ${className} not-prose`}>
        <div className="relative group cursor-pointer overflow-hidden">
          <img
            src={`/assets/books/${bookData.isbn}.jpg`}
            alt={`${bookData.title} cover`}
            width={200}
            height={300}
            className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Compact Information Section */}
        <div className="p-3">
          {/* Title */}
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1 line-clamp-2">
            {bookData.title}
          </h3>

          {/* Author */}
          {bookData.author && (
            <p className="text-xs text-gray-600 dark:text-gray-400">
              by {formatAuthor(bookData.author)}
            </p>
          )}
        </div>
      </div>
    );
  }

  // Full mode render
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden ${className} not-prose`}>
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
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {bookData.title}
        </h3>

        {/* Subtitle */}
        {bookData.subtitle && (
          <p className="text-sm text-gray-600 dark:text-gray-400 italic mb-2">
            {bookData.subtitle}
          </p>
        )}

        {/* Author */}
        {bookData.author && (
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
            ✍️ by {formatAuthor(bookData.author)}
          </p>
        )}

        {/* ISBN */}
        {bookData.isbn && (
          <p className="text-xs text-gray-500 dark:text-gray-500 font-mono">
            ISBN: {bookData.isbn}
          </p>
        )}
      </div>
    </div>
  );
};

export default BookWidget;
