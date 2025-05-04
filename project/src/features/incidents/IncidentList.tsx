import React from 'react';
import { Incident, FilterValue, SortOrder } from '../../types/incident';
import IncidentItem from './IncidentItem';

interface IncidentListProps {
  incidents: Incident[];
  severityFilter: FilterValue;
  sortOrder: SortOrder;
}

const IncidentList: React.FC<IncidentListProps> = ({ incidents, severityFilter, sortOrder }) => {
  // Filter incidents by severity
  const filteredIncidents = incidents.filter((incident) => {
    if (severityFilter === 'All') return true;
    return incident.severity === severityFilter;
  });

  // Sort incidents by date
  const sortedIncidents = [...filteredIncidents].sort((a, b) => {
    const dateA = new Date(a.reported_at).getTime();
    const dateB = new Date(b.reported_at).getTime();
    return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
  });

  if (sortedIncidents.length === 0) {
    return (
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center">
        <p className="text-gray-500">No incidents found with the selected filters.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {sortedIncidents.map((incident) => (
        <IncidentItem key={incident.id} incident={incident} />
      ))}
    </div>
  );
};

export default IncidentList;