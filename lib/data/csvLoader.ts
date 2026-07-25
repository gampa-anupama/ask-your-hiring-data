import fs from "fs/promises";
import path from "path";
import { parse } from "csv-parse/sync";

export async function loadCSV<T>(fileName: string): Promise<T[]> {
  const filePath = path.join(
    process.cwd(),
    "public",
    "data",
    fileName
  );

  const content = await fs.readFile(filePath, "utf8");

  return parse(content, {
    columns: true,
    skip_empty_lines: true,
  }) as T[];
}