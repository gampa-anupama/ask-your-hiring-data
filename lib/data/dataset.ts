import { loadCSV } from "./csvLoader";
import {
  Job,
  Hire,
  HeadCount,
  Band,
  JobFamily,
} from "@/types";

let jobs: Job[] = [];
let hires: Hire[] = [];
let headcount: HeadCount[] = [];
let bands: Band[] = [];
let jobFamilies: JobFamily[] = [];

let initialized = false;

export async function initializeDataset() {
  if (initialized) return;

  jobs = await loadCSV<Job>("jobs.csv");
  hires = await loadCSV<Hire>("hires.csv");
  headcount = await loadCSV<HeadCount>("headcount.csv");
  bands = await loadCSV<Band>("bands.csv");
  jobFamilies = await loadCSV<JobFamily>("jobFamilies.csv");

  initialized = true;
}

export function getDataset() {
  return {
    jobs,
    hires,
    headcount,
    bands,
    jobFamilies,
  };
}