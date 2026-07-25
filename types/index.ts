export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  recruiter: string;
  status: string;
  band: string;
}

export interface Hire {
  hireId: string;
  jobId: string;
  candidateName: string;
  hireDate: string;
  timeToFill: string;
}

export interface HeadCount {
  department: string;
  headcount: string;
}

export interface Band {
  band: string;
  minSalary: string;
  maxSalary: string;
}

export interface JobFamily {
  family: string;
  department: string;
}