import openClosed from ".";

const testInputs: { s: string; output: boolean }[] = [
  { s: "()", output: true },
  { s: "][", output: false },
  { s: "([])", output: true },
  { s: "(", output: false },
  { s: "(()", output: false },
  { s: "[(])", output: true },
  { s: "[)", output: false },
  { s: '""', output: true },
  { s: `'"`, output: false },
  { s: "()[]", output: true },
  { s: `"(')["""([']')']`, output: true },
  { s: '"""', output: false },
  { s: "((", output: false },
  { s: "()))((", output: false },
  { s: "[[[[[[[[[[[[[[[[[)(]]]]]]]]]]]]]]]]]", output: false },
];

testInputs.forEach((input) => {
  test(`Testing ${input.s}`, () => {
    expect(openClosed(input.s)).toEqual(input.output);
  });
});
