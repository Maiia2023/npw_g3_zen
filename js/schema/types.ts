export interface Title {
  priority: string | number;
  content: string;
};

export interface Image {
  source: string;
  description: string;
};

export interface Link {
  url: string;
};

export interface SectionPrimary {
  name: string;
  title: Title;
  texts: string[];
  image: Image;
  links?: {
    apple: Link;
    google: Link;
  };
};

export interface SectionSecondary {
  name: string;
  title: Title;
  texts: string[];
  buttonText: string; 
};
