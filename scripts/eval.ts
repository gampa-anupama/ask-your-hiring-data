import fs from "fs/promises";
import dotenv from "dotenv";

dotenv.config({
  path: ".env.local",
});

import { analyticsService } from "../lib/services/analyticsService";

interface EvalQuestion {
  id: number;
  question: string;
  expectedContains: string;
}

async function run() {
  const file = await fs.readFile(
    "./evals/questions.json",
    "utf8"
  );

  const tests: EvalQuestion[] = JSON.parse(file);

  console.log("\nRunning Evaluation Suite\n");

  let passed = 0;

  for (const test of tests) {
    try {
      const result = await analyticsService(
        test.question,
        {
          role: "ADMIN",
          recruiter: "Alice",
        }
      );

      const answer = JSON.stringify(result);

      const ok = answer
        .toLowerCase()
        .includes(
          test.expectedContains.toLowerCase()
        );

      if (ok) {
        console.log(
          `✅ ${test.id}. ${test.question}`
        );
        passed++;
      } else {
        console.log(
          `❌ ${test.id}. ${test.question}`
        );
        console.log("Expected:", test.expectedContains);
        console.log("Received:", result.answer);
      }
    } catch (error) {
      console.log(
        `❌ ${test.id}. ${test.question}`
      );
      console.error(error);
    }
  }

  console.log("\n--------------------");

  console.log(
    `Passed ${passed}/${tests.length}`
  );
}

run();