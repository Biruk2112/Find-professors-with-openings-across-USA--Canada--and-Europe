import React from 'react';
import { Mail, ExternalLink, MapPin } from 'lucide-react';
import { Professor } from '../types';

interface ProfessorCardProps {
  professor: Professor;
}

export default function ProfessorCard({ professor }: ProfessorCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="relative h-48">
        <img
          src={professor.imageUrl}
          alt={professor.name}
          className="w-full h-full object-cover"
        />
        {professor.hasOpenings && (
          <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            Open Positions
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900">{professor.name}</h3>
        <div className="flex items-center gap-2 text-gray-600">
          <MapPin size={16} />
          <p>{professor.university}</p>
        </div>
        <p className="text-gray-500 text-sm">{professor.department}</p>
        
        <div className="mt-4">
          <h4 className="font-semibold text-gray-900">Research Areas</h4>
          <div className="mt-2 flex flex-wrap gap-2">
            {professor.researchAreas.map((area, index) => (
              <span
                key={`${professor.id}-area-${index}`}
                className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
        
        <div className="mt-4">
          <h4 className="font-semibold text-gray-900">Current Projects</h4>
          <ul className="mt-2 list-disc list-inside text-sm text-gray-600">
            {professor.currentProjects.map((project, index) => (
              <li key={`${professor.id}-project-${index}`}>{project}</li>
            ))}
          </ul>
        </div>
        
        <div className="mt-6 flex gap-4">
          <a
            href={`mailto:${professor.email}`}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
          >
            <Mail size={18} />
            <span>Contact</span>
          </a>
          {professor.labUrl && (
            <a
              href={professor.labUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
            >
              <ExternalLink size={18} />
              <span>Visit Lab</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}