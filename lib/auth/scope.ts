// // // import { UserContext } from "./roles";

// // // export function applyRoleScope(rows: any[], user: UserContext) {
// // //   return rows;
// // // }
// // import { UserContext } from "./roles";

// // export function applyRoleScope(
// //   rows: any[],
// //   user: UserContext
// // ) {
// //   if (user.role === "ADMIN") {
// //     return rows;
// //   }

// //   if (user.role === "HR") {
// //     return rows;
// //   }

// //   // Recruiters only see their own jobs
// //   return rows.filter(
// //     row => row.recruiter === user.recruiter
// //   );
// // }
// import { UserContext } from "./roles";

// export function applyRoleScope(
//   rows: any[],
//   user: UserContext
// ) {
//   // Admin can see everything
//   if (user.role === "ADMIN") {
//     return rows;
//   }

//   // HR can also see everything
//   if (user.role === "HR") {
//     return rows;
//   }

//   // Recruiters see only their own jobs
//   return rows.filter(
//     (row) => row.recruiter === user.recruiter
//   );
// }
import { UserContext } from "./roles";

export function applyRoleScope(
  rows: any[],
  user: UserContext
) {
  switch (user.role) {
    case "ADMIN":
    case "HR":
      return rows;

    case "RECRUITER":
      return rows.filter(
        (row) => row.recruiter === user.recruiter
      );

    default:
      return [];
  }
}