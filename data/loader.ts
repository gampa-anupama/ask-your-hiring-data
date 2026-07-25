import Papa from "papaparse";

export async function loadCSV<T>(filePath: string): Promise<T[]> {
  const response = await fetch(filePath);

  if (!response.ok) {
    throw new Error(`Failed to load ${filePath}`);
  }

  const csvText = await response.text();

  const result = Papa.parse<T>(csvText, {
    header: true,
    skipEmptyLines: true,
  });

  return result.data;
}