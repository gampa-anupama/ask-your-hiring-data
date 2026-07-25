export type UserRole = "Recruiter" | "CHRO";

export interface UserContext {
  role: UserRole;
  recruiter?: string;
}