import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Incident } from '../../types/incident';
import SeverityBadge from '../../components/SeverityBadge';
import DateDisplay from '../../components/DateDisplay';

interface IncidentItemProps {
  incident: Incident;
}

const IncidentItem: React.FC<IncidentItemProps> = ({ incident }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="border rounded-lg shadow-sm bg-white overflow-hidden transition-all duration-200 hover:shadow-md">
      <div className="p-4 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-2" onClick={toggleExpand}>
        <div className="flex-1">
          <h3 className="font-medium text-gray-900">{incident.title}</h3>
          <div className="flex flex-wrap items-center gap-2 mt-1">
            <SeverityBadge severity={incident.severity} />
            <DateDisplay dateString={incident.reported_at} />
          </div>
        </div>
        <button 
          className="text-blue-600 hover:text-blue-800 flex items-center transition-colors duration-200 ml-auto"
          aria-expanded={isExpanded}
          aria-label={isExpanded ? "Hide details" : "Show details"}
        >
          <span className="mr-1">{isExpanded ? "Hide Details" : "View Details"}</span>
          {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
      </div>
      
      {isExpanded && (
        <div className="px-4 pb-4 pt-0 border-t border-gray-100 animate-[fadeIn_0.2s_ease-in-out]">
          <div className="mt-2 text-gray-700">
            <h4 className="text-sm font-medium text-gray-500 mb-1">Description</h4>
            <p>{incident.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default IncidentItem;