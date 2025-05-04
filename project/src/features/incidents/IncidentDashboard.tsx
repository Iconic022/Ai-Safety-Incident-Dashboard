import React, { useState } from 'react';
import { Shield, AlertTriangle } from 'lucide-react';
import { Incident, FilterValue, SortOrder } from '../../types/incident';
import { mockIncidents } from '../../data/mockIncidents';
import IncidentList from './IncidentList';
import IncidentFilters from './IncidentFilters';
import NewIncidentForm from './NewIncidentForm';

const IncidentDashboard: React.FC = () => {
  const [incidents, setIncidents] = useState<Incident[]>(mockIncidents);
  const [severityFilter, setSeverityFilter] = useState<FilterValue>('All');
  const [sortOrder, setSortOrder] = useState<SortOrder>('newest');

  const handleSeverityFilterChange = (filter: FilterValue) => {
    setSeverityFilter(filter);
  };

  const handleSortOrderChange = (order: SortOrder) => {
    setSortOrder(order);
  };

  const handleAddIncident = (newIncident: Omit<Incident, 'id'>) => {
    const nextId = Math.max(...incidents.map((incident) => incident.id), 0) + 1;
    const incidentWithId: Incident = {
      ...newIncident,
      id: nextId,
    };
    
    setIncidents((prevIncidents) => [incidentWithId, ...prevIncidents]);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <header className="mb-8">
          <div className="flex items-center gap-3">
            <Shield className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">AI Safety Incident Dashboard</h1>
          </div>
          <p className="mt-2 text-gray-600">
            Monitor, track, and report AI safety incidents across all systems.
          </p>
        </header>

        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-amber-500" />
            <h2 className="text-lg font-medium text-gray-800">Incident Tracker</h2>
          </div>
          <div className="text-sm text-gray-500">
            {incidents.length} incident{incidents.length !== 1 ? 's' : ''} reported
          </div>
        </div>

        <NewIncidentForm onAddIncident={handleAddIncident} />
        
        <IncidentFilters
          severityFilter={severityFilter}
          sortOrder={sortOrder}
          onSeverityFilterChange={handleSeverityFilterChange}
          onSortOrderChange={handleSortOrderChange}
        />
        
        <IncidentList
          incidents={incidents}
          severityFilter={severityFilter}
          sortOrder={sortOrder}
        />
      </div>
    </div>
  );
};

export default IncidentDashboard;