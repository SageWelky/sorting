export const generateArray = (setArray, resetSortingState) => {
  const newArray = [];
  for (let i = 0; i < 100; i++) {
    newArray.push(randomIntFromInterval(5, 500));
  }
  setArray(newArray);
  resetSortingState();
};

export const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
