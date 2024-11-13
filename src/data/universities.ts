interface University {
  name: string;
  domain: string;
  region: 'USA' | 'Canada' | 'Europe';
  country?: string;
}

export const universities: University[] = [
  // USA
  {
    name: 'Massachusetts Institute of Technology',
    domain: 'mit.edu',
    region: 'USA'
  },
  {
    name: 'Stanford University',
    domain: 'stanford.edu',
    region: 'USA'
  },
  {
    name: 'University of California, Berkeley',
    domain: 'berkeley.edu',
    region: 'USA'
  },
  {
    name: 'Georgia Institute of Technology',
    domain: 'gatech.edu',
    region: 'USA'
  },
  {
    name: 'Carnegie Mellon University',
    domain: 'cmu.edu',
    region: 'USA'
  },
  {
    name: 'California Institute of Technology',
    domain: 'caltech.edu',
    region: 'USA'
  },
  {
    name: 'University of Michigan',
    domain: 'umich.edu',
    region: 'USA'
  },
  {
    name: 'University of Illinois Urbana-Champaign',
    domain: 'illinois.edu',
    region: 'USA'
  },
  {
    name: 'Purdue University',
    domain: 'purdue.edu',
    region: 'USA'
  },
  {
    name: 'University of Wisconsin-Madison',
    domain: 'wisc.edu',
    region: 'USA'
  },
  
  // Canada
  {
    name: 'University of Toronto',
    domain: 'utoronto.ca',
    region: 'Canada'
  },
  {
    name: 'University of British Columbia',
    domain: 'ubc.ca',
    region: 'Canada'
  },
  {
    name: 'McGill University',
    domain: 'mcgill.ca',
    region: 'Canada'
  },
  {
    name: 'University of Waterloo',
    domain: 'uwaterloo.ca',
    region: 'Canada'
  },
  
  // Europe
  {
    name: 'ETH Zurich',
    domain: 'ethz.ch',
    region: 'Europe',
    country: 'Switzerland'
  },
  {
    name: 'Imperial College London',
    domain: 'imperial.ac.uk',
    region: 'Europe',
    country: 'UK'
  },
  {
    name: 'Technical University of Munich',
    domain: 'tum.de',
    region: 'Europe',
    country: 'Germany'
  },
  {
    name: 'KTH Royal Institute of Technology',
    domain: 'kth.se',
    region: 'Europe',
    country: 'Sweden'
  },
  {
    name: 'Delft University of Technology',
    domain: 'tudelft.nl',
    region: 'Europe',
    country: 'Netherlands'
  }
];