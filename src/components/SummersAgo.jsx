import React from 'react';

export function SummersAgo({ year }) {
  const calculateSummersAgo = (year) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth(); // 0-11, where 5 = June

    // Calculate years difference
    let yearsDiff = currentYear - year;

    // If we're before summer (before June), subtract one summer
    if (currentMonth < 5) {
      yearsDiff -= 1;
    }

    return yearsDiff;
  };

  return <span>{calculateSummersAgo(year)} summers ago</span>;
}
