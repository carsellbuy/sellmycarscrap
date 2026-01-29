
export interface CarDetails {
  make: string;
  model: string;
  year: string;
  condition: string;
  mileage: string;
}

export interface UserContact {
  name: string;
  phone: string;
  email: string;
}

export interface StepProps {
  onNext: (data: Partial<CarDetails | UserContact>) => void;
  onBack?: () => void;
  data: Partial<CarDetails & UserContact>;
}

export enum CarCondition {
  EXCELLENT = 'Excellent',
  GOOD = 'Good',
  FAIR = 'Fair',
  POOR = 'Poor',
  SCRAP = 'Scrap/Damaged'
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string; // HTML or Markdown string
  date: string;
  author: string;
  imageUrl: string;
  category: string;
}
