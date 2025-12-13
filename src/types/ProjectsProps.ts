export type ProjectProps = {
  id: number;
  title: string;
  shortDescription: string;
  longDescription: string;
  date: string; // or Date (see note below)
  technologies: string[];
};
