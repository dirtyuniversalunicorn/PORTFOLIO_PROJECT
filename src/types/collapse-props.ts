// A single tech stack item
export type TechStackItem = {
  index: number;
  name: string;
  icon: React.ReactNode;
  docsUrl: string;
};

// A category containing multiple tech stack items
export type TechStackCategory = {
  category: string; // e.g., "frontend" or "backend"
  items: TechStackItem[];
};

// The main array of categories
export type TechStack = TechStackCategory[];
