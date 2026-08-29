
export interface PortfolioProfile {
  name: string;
  role: string;
  location: string;
  description: string;
  availability?: string;
  email?: string;
  github?: string;
  linkedin?: string;
}

export interface PortfolioMetric {
  value: string;
  label: string;
}

export interface PortfolioSocial {
  label: string;
  href: string;
}

export interface PortfolioData {
  profile: PortfolioProfile;
  metrics?: PortfolioMetric[];
  social?: PortfolioSocial[];
}

