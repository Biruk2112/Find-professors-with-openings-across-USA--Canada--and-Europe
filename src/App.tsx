import React, { useState, useMemo } from 'react';
import { GraduationCap } from 'lucide-react';
import { professors } from './data/professors';
import { SearchFilters } from './types';
import SearchBar from './components/SearchBar';
import ProfessorCard from './components/ProfessorCard';

function App() {
  const [filters, setFilters] = useState<SearchFilters>({
    query: '',
    hasOpenings: false,
    researchArea: 'All',
    department: 'All',
    region: 'All'
  });

  const filteredProfessors = useMemo(() => {
    return professors.filter(professor => {
      if (filters.hasOpenings && !professor.hasOpenings) return false;
      
      if (filters.researchArea !== 'All' && !professor.researchAreas.includes(filters.researchArea)) {
        return false;
      }

      if (filters.department !== 'All' && professor.department !== filters.department) {
        return false;
      }

      if (filters.region !== 'All' && professor.region !== filters.region) {
        return false;
      }

      if (filters.query) {
        const searchQuery = filters.query.toLowerCase();
        return (
          professor.name.toLowerCase().includes(searchQuery) ||
          professor.university.toLowerCase().includes(searchQuery) ||
          professor.researchAreas.some(area => area.toLowerCase().includes(searchQuery))
        );
      }

      return true;
    });
  }, [filters]);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <GraduationCap className="w-8 h-8 text-blue-600" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Global PhD Advisor Search
              </h1>
              <p className="text-gray-600">
                Find professors with openings across USA, Canada, and Europe
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <SearchBar filters={filters} setFilters={setFilters} />
        
        <div className="mt-8">
          <p className="text-gray-600 mb-4">
            Found {filteredProfessors.length} professor{filteredProfessors.length !== 1 ? 's' : ''}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProfessors.map(professor => (
              <ProfessorCard key={professor.id} professor={professor} />
            ))}
          </div>

          {filteredProfessors.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No professors found matching your criteria. Try adjusting your filters.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;