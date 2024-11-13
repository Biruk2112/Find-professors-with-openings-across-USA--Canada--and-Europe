import React from 'react';
import { Search, Filter } from 'lucide-react';
import { SearchFilters } from '../types';
import { DEPARTMENTS, RESEARCH_AREAS } from '../data/constants';

interface SearchBarProps {
  filters: SearchFilters;
  setFilters: React.Dispatch<React.SetStateAction<SearchFilters>>;
}

export default function SearchBar({ filters, setFilters }: SearchBarProps) {
  const allDepartments = ['All', ...Object.values(DEPARTMENTS).flat()];
  const allResearchAreas = ['All', ...Object.values(RESEARCH_AREAS).flat()];
  const regions = ['All', 'USA', 'Canada', 'Europe'];

  return (
    <div className="w-full max-w-6xl mx-auto space-y-4 p-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search by professor name, university, or research area..."
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={filters.query}
          onChange={(e) => setFilters(prev => ({ ...prev, query: e.target.value }))}
        />
      </div>
      
      <div className="flex flex-wrap gap-4">
        <div className="flex items-center gap-4 flex-wrap">
          <Filter className="text-gray-400" size={20} />
          
          <select
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            value={filters.department}
            onChange={(e) => setFilters(prev => ({ ...prev, department: e.target.value }))}
          >
            {allDepartments.map(dept => (
              <option key={dept} value={dept}>{dept}</option>
            ))}
          </select>

          <select
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            value={filters.researchArea}
            onChange={(e) => setFilters(prev => ({ ...prev, researchArea: e.target.value }))}
          >
            {allResearchAreas.map(area => (
              <option key={area} value={area}>{area}</option>
            ))}
          </select>

          <select
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            value={filters.region}
            onChange={(e) => setFilters(prev => ({ ...prev, region: e.target.value }))}
          >
            {regions.map(region => (
              <option key={region} value={region}>{region}</option>
            ))}
          </select>

          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={filters.hasOpenings}
              onChange={(e) => setFilters(prev => ({ ...prev, hasOpenings: e.target.checked }))}
              className="rounded text-blue-600 focus:ring-blue-500"
            />
            <span>Show only professors with current openings</span>
          </label>
        </div>
      </div>
    </div>
  );
}