export async function getData() {
  const num = Math.random();
  await new Promise((ok) => setTimeout(ok, 1000 * num));
  if (num > 0.5) throw new Error(`Bad number: ${num}`);
  return `Good number: ${num}`;
}
