export const quickSort = async (
  arr,
  setArray,
  setHighlightedIndices,
  setSortedIndex,
  delay
) => {
  const partition = async (arr, low, high) => {
    const pivot = arr[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
      if (arr[j] < pivot) {
        i++;

        // Swap elements
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;

        // Add delay to visualize the sorting process
        await new Promise((resolve) => setTimeout(resolve, delay));

        // Update the state
        setArray([...arr]);
      }
    }

    // Swap elements
    let temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;

    // Add delay to visualize the sorting process
    await new Promise((resolve) => setTimeout(resolve, delay));

    // Update the state
    setArray([...arr]);

    setHighlightedIndices([i + 1, high]); // Highlight the pivot element and the element being swapped
    return i + 1;
  };


  const quickSortHelper = async (arr, low, high) => {
    if (low < high) {
      const pi = await partition(arr, low, high);
      await quickSortHelper(arr, low, pi - 1);
      await quickSortHelper(arr, pi + 1, high);
    }
  };

  await quickSortHelper(arr, 0, arr.length - 1);
};
