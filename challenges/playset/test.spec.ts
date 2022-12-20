import playset from ".";

const testInputs: { s: string; output: boolean }[] = [
  { s: "abcde", output: false },
  { s: "abbcdde", output: true },
  { s: "abcdeab", output: true },
  { s: "", output: false },
  { s: "abcdefg", output: false },
  { s: "ffffff", output: true },
  { s: "abcdefghijklmnopqrstuvwxyz", output: false },
  { s: "abc123!@#", output: false },
  { s: "#abc123!@#", output: true },
  { s: "🦄🌈", output: false },
];

testInputs.forEach((input) => {
  test(`Testing ${input.s}`, () => {
    expect(playset(input.s)).toEqual(input.output);
  });
});
