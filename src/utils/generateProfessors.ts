import { universities } from '../data/universities';
import { DEPARTMENTS, RESEARCH_AREAS } from '../data/constants';
import { Professor } from '../types';

const PROFILE_IMAGES = [
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
  'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98',
  'https://images.unsplash.com/photo-1580489944761-15a19d654956',
  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d',
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
  'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604',
  'https://images.unsplash.com/photo-1594751543129-6701ad444259',
  'https://images.unsplash.com/photo-1551836022-d5d88e9218df',
  'https://images.unsplash.com/photo-1513258496099-48168024aec0'
];

const randomElement = <T>(array: T[]): T => {
  return array[Math.floor(Math.random() * array.length)];
};

const randomElements = <T>(array: T[], count: number): T[] => {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const generateEmail = (name: string, domain: string): string => {
  const [first, last] = name.replace('Dr. ', '').toLowerCase().split(' ');
  return `${first.charAt(0)}${last}@${domain}`;
};

const generateLabUrl = (domain: string, department: string, name: string): string => {
  const deptSlug = department.toLowerCase().replace(/ /g, '-');
  const nameSlug = name.replace('Dr. ', '').toLowerCase().replace(/ /g, '-');
  return `https://www.${domain}/research/${deptSlug}/lab/${nameSlug}`;
};

const generateProjects = (researchAreas: string[]): string[] => {
  const projectTypes = [
    'Advanced', 'Novel', 'Innovative', 'Next-generation', 'Sustainable',
    'Intelligent', 'Smart', 'Efficient', 'Integrated', 'Autonomous'
  ];
  
  return researchAreas.map(area => 
    `${randomElement(projectTypes)} ${area} Systems`
  ).slice(0, 2);
};

export const generateProfessors = (count: number): Professor[] => {
  const professors: Professor[] = [];
  const firstNames = ['James', 'Sarah', 'Michael', 'Emma', 'David', 'Lisa', 'John', 'Maria', 'Robert', 'Anna'];
  const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez'];

  for (let i = 0; i < count; i++) {
    const university = randomElement(universities);
    const departmentCategory = randomElement(Object.keys(DEPARTMENTS)) as keyof typeof DEPARTMENTS;
    const department = randomElement(DEPARTMENTS[departmentCategory]);
    
    const possibleResearchAreas = [
      ...RESEARCH_AREAS[departmentCategory],
      ...RESEARCH_AREAS.ENGINEERING // Add some engineering areas to all departments for interdisciplinary research
    ];
    
    const name = `Dr. ${randomElement(firstNames)} ${randomElement(lastNames)}`;
    const researchAreas = randomElements(possibleResearchAreas, 3);
    
    professors.push({
      id: `prof-${i + 1}`,
      name,
      university: university.name,
      department,
      researchAreas,
      hasOpenings: Math.random() > 0.3, // 70% chance of having openings
      email: generateEmail(name, university.domain),
      imageUrl: randomElement(PROFILE_IMAGES),
      labUrl: generateLabUrl(university.domain, department, name),
      currentProjects: generateProjects(researchAreas),
      region: university.region,
      country: university.country
    });
  }

  return professors;
};