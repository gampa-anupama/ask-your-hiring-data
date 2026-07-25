import { UserContext } from "./roles";

export function applyRoleScope(rows: any[], user: UserContext) {
  if (user.role === "CHRO") {
    return rows;
  }

  return rows.filter(
    (row) => row.recruiter === user.recruiter
  );
}