import fs from "fs/promises";

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

    const response = await fetch(
      "http://localhost:3000/api/chat",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
  message: test.question,
}),
      }
    );

    const result = await response.json();

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

    }

  }

  console.log("\n--------------------");

  console.log(
    `Passed ${passed}/${tests.length}`
  );

}

run();