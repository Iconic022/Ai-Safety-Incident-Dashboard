import React from 'react';
import { FilterValue, SortOrder } from '../../types/incident';
import { SlidersHorizontal, ArrowDown, ArrowUp } from 'lucide-react';

interface IncidentFiltersProps {
  severityFilter: FilterValue;
  sortOrder: SortOrder;
  onSeverityFilterChange: (filter: FilterValue) => void;
  onSortOrderChange: (order: SortOrder) => void;
}

const IncidentFilters: React.FC<IncidentFiltersProps> = ({
  severityFilter,
  sortOrder,
  onSeverityFilterChange,
  onSortOrderChange,
}) => {
  const severityOptions: FilterValue[] = ['All', 'Low', 'Medium', 'High'];

  return (
    <div className="bg-gray-50 p-4 rounded-lg mb-6 border border-gray-200">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex items-center">
          <SlidersHorizontal className="h-4 w-4 text-gray-500 mr-2" />
          <span className="text-sm font-medium text-gray-700">Filters:</span>
        </div>
        
        <div className="flex flex-wrap gap-3 w-full sm:w-auto">
          <div className="flex items-center">
            <span className="text-sm text-gray-600 mr-2">Severity:</span>
            <div className="flex flex-wrap gap-1">
              {severityOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => onSeverityFilterChange(option)}
                  className={`px-3 py-1 rounded-md text-sm transition-colors duration-200 ${
                    severityFilter === option
                      ? 'bg-blue-600 text-white'
                      : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center">
            <span className="text-sm text-gray-600 mr-2">Date:</span>
            <div className="flex gap-1">
              <button
                onClick={() => onSortOrderChange('newest')}
                className={`px-3 py-1 rounded-md text-sm flex items-center gap-1 transition-colors duration-200 ${
                  sortOrder === 'newest'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                <ArrowDown className="h-3 w-3" />
                Newest
              </button>
              <button
                onClick={() => onSortOrderChange('oldest')}
                className={`px-3 py-1 rounded-md text-sm flex items-center gap-1 transition-colors duration-200 ${
                  sortOrder === 'oldest'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                <ArrowUp className="h-3 w-3" />
                Oldest
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncidentFilters;