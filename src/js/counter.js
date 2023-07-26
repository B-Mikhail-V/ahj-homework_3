/* eslint func-names: ["error", "never"] */

export default function useCounter() {
  let count = 0;

  return function () {
    count += 1;
    return count;
  };
}
