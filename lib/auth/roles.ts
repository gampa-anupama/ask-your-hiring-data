// export type UserRole = "Recruiter" | "CHRO";

// export interface UserContext {
//   role: UserRole;
//   recruiter?: string;
// }
export type UserRole =
  | "ADMIN"
  | "HR"
  | "RECRUITER";

export interface UserContext {
  role: UserRole;

  recruiter?: string;
}