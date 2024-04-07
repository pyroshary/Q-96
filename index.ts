function calculateSum(numbers: number[]): number {
    return numbers.reduce((accumulator, current) => accumulator + current, 0);
  }

  const numbers: number[] = [1,2,3,4,5,6,7,8];

  console.log(calculateSum(numbers))