import React from 'react';

interface DateDisplayProps {
  dateString: string;
}

const DateDisplay: React.FC<DateDisplayProps> = ({ dateString }) => {
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  return <span className="text-gray-500 text-sm">{formatDate(dateString)}</span>;
};

export default DateDisplay;