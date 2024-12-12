export type Question = {
  id: number;
  topic: string;
  question: string;
  answer: string;
  sampleInput?: string;
  sampleOutput?: string;
  image?: string | null;
};

