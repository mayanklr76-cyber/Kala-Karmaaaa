export type PeriodCategory = 
  | 'prehistoric' 
  | 'indus' 
  | 'mauryan-shunga' 
  | 'classical-gupta' 
  | 'early-medieval' 
  | 'sultanate-mughal' 
  | 'rajput-pahari' 
  | 'colonial-modern' 
  | 'contemporary';

export type MediumCategory = 
  | 'stone' 
  | 'bronze' 
  | 'mural' 
  | 'manuscript' 
  | 'oil' 
  | 'architecture';

export type RegionCategory = 
  | 'North' 
  | 'South' 
  | 'East' 
  | 'West' 
  | 'Central' 
  | 'Pan-Indian / Diaspora';

export interface Artifact {
  id: string;
  order: number;
  name: string;
  hindiName?: string;
  approximateDate: string;
  numericSortYear: number; // Negative for BCE, positive for CE
  historicalPeriod: string;
  dynastyOrMovement: string;
  artist: string;
  region: RegionCategory;
  findspotOrOrigin: string;
  presentLocation: string;
  medium: string;
  mediumCategory: MediumCategory;
  periodCategory: PeriodCategory;
  dimensions?: string;
  museumAccessionNo?: string;
  
  // Detailed academic sections
  description: string;
  visualCharacteristics: string[];
  historicalContext: string;
  culturalReligiousSocialContext: string;
  artisticSignificance: string;
  importanceInIndianArtHistory: string;
  interestingFact: string;
  
  // Media & Sourcing
  imageUrl: string;
  highResImageUrl?: string;
  imageCaption: string;
  imageCredit: string;
  academicReference: string;
  
  // Curatorial / Comparative features
  comparisonImageUrl?: string;
  comparisonTitle?: string;
  comparisonNote?: string;
  keyThemes: string[];
}

export interface VivaQuestion {
  id: number;
  question: string;
  category: 'Methodology' | 'Chronology' | 'Art Theory' | 'Curatorial';
  answer: string;
  keyPoints: string[];
}

export interface ProfessorQuestion {
  id: number;
  question: string;
  deepDiveExplanation: string;
  sampleAnswer: string;
}

export interface QualityCheckItem {
  requirement: string;
  howProjectSatisfies: string;
  status: 'Complete' | 'Exceeds Standard';
}
