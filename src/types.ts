export interface Website {
  name: string;
  description: string;
  alexaRank: number | null;
  url: string;
  longDescription: string;
  category: 'investment' | 'banking' | 'crypto' | 'crowdfunding' | 'other';
}