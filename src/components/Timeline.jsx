import React, { useState, useMemo } from 'react';
import './Timeline.css';

const Timeline = ({ data, className = '' }) => {
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [hoveredEntry, setHoveredEntry] = useState(null);

  // Helper function to parse various date formats
  const parseDate = (dateStr) => {
    if (!dateStr) return 0;

    // Handle year only (e.g., "1943")
    if (/^\d{4}$/.test(dateStr)) {
      return new Date(dateStr, 0, 1).getTime();
    }

    // Handle year-month (e.g., "2022-06")
    if (/^\d{4}-\d{2}$/.test(dateStr)) {
      const [year, month] = dateStr.split('-');
      return new Date(parseInt(year), parseInt(month) - 1, 1).getTime();
    }

    // Handle full date (e.g., "2023-01-17")
    if (/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
      return new Date(dateStr).getTime();
    }

    return 0;
  };

  // Helper function to format date for display
  const formatDate = (dateStr) => {
    if (!dateStr) return '';

    if (/^\d{4}$/.test(dateStr)) {
      return dateStr;
    }

    if (/^\d{4}-\d{2}$/.test(dateStr)) {
      const [year, month] = dateStr.split('-');
      const date = new Date(parseInt(year), parseInt(month) - 1, 1);
      return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
    }

    if (/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
      const date = new Date(dateStr);
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    }

    return dateStr;
  };

  // Helper function to get decade for grouping
  const getDecade = (dateStr) => {
    const year = parseInt(dateStr.split('-')[0]);
    return Math.floor(year / 10) * 10;
  };

  // Parse and sort timeline entries
  const sortedEntries = useMemo(() => {
    return data.entries.sort((a, b) => {
      const dateA = parseDate(a.date);
      const dateB = parseDate(b.date);
      return dateA - dateB;
    });
  }, [data.entries]);



  // Group entries by decade
  const groupedEntries = useMemo(() => {
    const groups = {};
    sortedEntries.forEach(entry => {
      const decade = getDecade(entry.date);
      if (!groups[decade]) {
        groups[decade] = [];
      }
      groups[decade].push(entry);
    });
    return groups;
  }, [sortedEntries]);

  const decades = Object.keys(groupedEntries).sort((a, b) => parseInt(a) - parseInt(b));

  return (
    <div className={`not-prose mt-6 timeline-container ${className}`}>
      {/* Timeline */}
      <div className="relative">
        {/* Central timeline line */}
        <div style={{zIndex: -1}} className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-500 h-full rounded-full"></div>

        {decades.map((decade, decadeIndex) => (
          <div key={decade} className="mb-16">
            {/* Decade label */}
            <div className="text-center mb-8">
              <div className="inline-block bg-gray-100 dark:bg-gray-800 px-6 py-2 rounded-full">
                <span className="text-2xl font-bold text-gray-700 dark:text-gray-300">
                  {decade}s
                </span>
              </div>
            </div>

            {/* Entries for this decade */}
            <div className="space-y-8">
              {groupedEntries[decade].map((entry, entryIndex) => {
                const isLeft = entryIndex % 2 === 0;
                const isSelected = selectedEntry === entry;
                const isHovered = hoveredEntry === entry;

                return (
                  <div
                    key={`${decade}-${entryIndex}`}
                    className={`relative flex items-center ${
                      isLeft ? 'flex-row' : 'flex-row-reverse'
                    }`}
                  >
                    {/* Entry content */}
                    <div
                      className={`w-5/12 ${isLeft ? 'pr-8 text-right' : 'pl-8 text-left'}`}
                      onMouseEnter={() => setHoveredEntry(entry)}
                      onMouseLeave={() => setHoveredEntry(null)}
                    >
                      <div
                        className={`p-6 rounded-lg shadow-lg transition-all duration-300 cursor-pointer ${
                          isSelected
                            ? 'bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-500'
                            : isHovered
                            ? 'bg-gray-50 dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600'
                            : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700'
                        }`}
                        onClick={() => setSelectedEntry(isSelected ? null : entry)}
                      >
                        {/* Date */}
                        <div className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-2">
                          {formatDate(entry.date)}
                        </div>

                        {/* Title */}
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          {entry.title}
                        </h3>

                        {/* Details */}
                        {entry.details && (
                          <p className="text-gray-600 dark:text-gray-400 text-sm">
                            {entry.details}
                          </p>
                        )}

                        {/* URL link if available */}
                        {entry.url && (
                          <a
                            href={entry.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-3 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Learn More →
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Timeline node */}
                    {/* <div className="w-full h-1 bg-white dark:bg-gray-900 border-4 relative z-10">
											<svg className="w-full h-full" viewBox="0 0 20 100" preserveAspectRatio="xMidYMid meet">
												<path d="M 0 0 L 100 100" stroke="currentColor" strokeWidth="2" fill="none" />
											</svg>
                    </div> */}

                    {/* Spacer for right side */}
                    <div className="w-5/12"></div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="text-center mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
        <p className="text-gray-500 dark:text-gray-400">
          Last updated: {data.metadata?.lastUpdated || 'Unknown'} •
          Total entries: {data.metadata?.totalEntries || data.entries.length}
        </p>
      </div>

      {/* Selected entry modal */}
      {selectedEntry && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {selectedEntry.title}
                </h2>
                <button
                  onClick={() => setSelectedEntry(null)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 text-2xl font-bold"
                >
                  ×
                </button>
              </div>

              <div className="text-lg text-blue-600 dark:text-blue-400 mb-4">
                {formatDate(selectedEntry.date)}
              </div>

              {selectedEntry.details && (
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {selectedEntry.details}
                </p>
              )}

              {selectedEntry.url && (
                <a
                  href={selectedEntry.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  View Source
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Timeline;
