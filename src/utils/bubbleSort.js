export const bubbleSort = async (
  arr,
  setArray,
  setHighlightedIndices,
  setSortedIndex,
  delay
) => {
  let n = arr.length;
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // Swap elements
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;

        // Add delay to visualize the sorting process
        await new Promise((resolve) => setTimeout(resolve, delay));

        // Update the state
        setArray([...arr]);
      }
      setHighlightedIndices([i, i + 1]); // Highlight the current indices being compared
    }
    n--;
    setSortedIndex(n); // Highlight the sorted index
  } while (swapped);
};
