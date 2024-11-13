export interface Professor {
  id: string;
  name: string;
  university: string;
  department: string;
  researchAreas: string[];
  hasOpenings: boolean;
  email: string;
  imageUrl: string;
  labUrl: string;
  currentProjects: string[];
  region: 'USA' | 'Canada' | 'Europe';
  country?: string;
}

export interface SearchFilters {
  query: string;
  hasOpenings: boolean;
  researchArea: string;
  department: string;
  region: string;
}