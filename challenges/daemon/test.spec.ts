import daemon from ".";

const testInputs: { numbers: number[]; k: number; output: boolean }[] = [
  {
    numbers: [100, 97, 101, 109, 111, 110],
    k: 1,
    output: false,
  },
  {
    numbers: [100, 97, 101, 109, 111, 110],
    k: 2,
    output: true,
  },
  {
    numbers: [100, 97, 101, 109, 111, 110],
    k: 3,
    output: true,
  },
  {
    numbers: [1, 2, 3, 4, 5],
    k: 1,
    output: true,
  },

  {
    numbers: [5, 4, 3, 2, 1],
    k: 3,
    output: false,
  },
  {
    numbers: [1, 2, 3, 2, 1],
    k: 1,
    output: false,
  },
  {
    numbers: [1, 2, 2, 3, 4],
    k: 2,
    output: false,
  },
  {
    numbers: [1, 2, 3, 4, 3],
    k: 4,
    output: false,
  },
  {
    numbers: [2, 2, 2, 2, 2],
    k: 2,
    output: false,
  },
  {
    numbers: [1, 2, 3, 4, 5],
    k: 0,
    output: true,
  },
  {
    numbers: [5, 4, 3, 2, 1],
    k: 4,
    output: false,
  },
  {
    numbers: [1, 3, 5, 2, 4],
    k: 1,
    output: false,
  },
  {
    numbers: [5, 3, 1, 4, 2],
    k: 3,
    output: false,
  },
  {
    numbers: [1, 2, 3, 4, 5],
    k: 0,
    output: true,
  },
  {
    numbers: [1, 1, 2, 3, 4],
    k: 1,
    output: false,
  },
];

testInputs.forEach((input, index) => {
  test(`Test number ${index + 1}`, () => {
    expect(daemon(input.numbers, input.k)).toEqual(input.output);
  });
});
