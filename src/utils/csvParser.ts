import Papa from 'papaparse';

export interface Website {
  name: string;
  description: string;
  alexaRank: number;
  url: string;
}

export async function parseCSV(filePath: string): Promise<Website[]> {
  const response = await fetch(filePath);
  const csvText = await response.text();
  
  return new Promise((resolve, reject) => {
    Papa.parse(csvText, {
      header: true,
      complete: (results) => {
        const websites: Website[] = results.data.map((record: any) => ({
          ...record,
          alexaRank: parseInt(record.alexaRank, 10)
        }));
        resolve(websites);
      },
      error: (error) => {
        reject(error);
      }
    });
  });
}