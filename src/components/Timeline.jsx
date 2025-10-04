import React, { useState, useMemo } from 'react';
import './Timeline.css';

const Timeline = ({ data, className = '' }) => {
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
        <div style={{ zIndex: -1 }} className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-500 h-full rounded-full"></div>

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
                const isHovered = hoveredEntry === entry;

                return (
                  <div
                    key={`${decade}-${entryIndex}`}
                    className={`relative flex items-center ${isLeft ? 'flex-row left-node' : 'flex-row-reverse right-node'
                      }`}
                  >
                    {/* Entry content */}
                    <div
                      className={`w-5/12 ${isLeft ? 'pr-8 text-right' : 'pl-8 text-left'}`}
                      onMouseEnter={() => setHoveredEntry(entry)}
                      onMouseLeave={() => setHoveredEntry(null)}
                    >
                      <div
                        className={`p-6 rounded-lg shadow-lg transition-all duration-300 cursor-pointer ${isHovered
                            ? 'bg-gray-50 dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600'
                            : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700'
                          }`}
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
    </div>
  );
};

export default Timeline;
