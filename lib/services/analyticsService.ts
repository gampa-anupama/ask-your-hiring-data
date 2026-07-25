export async function analyticsService(message: string) {
  console.log("User Question:", message);

  return {
    answer: `You asked: "${message}"`,
  };
}