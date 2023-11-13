export const mergeSort = async (arr, setArray, setHighlightedIndices, setSortedIndex, delay) => {
  const merge = async (arr, left, mid, right) => {
    const n1 = mid - left + 1;
    const n2 = right - mid;
    const L = new Array(n1);
    const R = new Array(n2);

    for (let i = 0; i < n1; i++) {
      L[i] = arr[left + i];
    }
    for (let j = 0; j < n2; j++) {
      R[j] = arr[mid + 1 + j];
    }

    let i = 0;
    let j = 0;
    let k = left;

    while (i < n1 && j < n2) {
      setHighlightedIndices([left + i, mid + 1 + j]);

      // Add delay to visualize the sorting process
      await new Promise((resolve) => setTimeout(resolve, delay));

      if (L[i] <= R[j]) {
        arr[k] = L[i];
        i++;
      } else {
        arr[k] = R[j];
        j++;
      }
      k++;

      // Update the state
      setArray([...arr]);
    }

    while (i < n1) {
      setHighlightedIndices([left + i]);

      // Add delay to visualize the sorting process
      await new Promise((resolve) => setTimeout(resolve, delay));

      arr[k] = L[i];
      i++;
      k++;

      // Update the state
      setArray([...arr]);
    }

    while (j < n2) {
      setHighlightedIndices([mid + 1 + j]);

      // Add delay to visualize the sorting process
      await new Promise((resolve) => setTimeout(resolve, delay));

      arr[k] = R[j];
      j++;
      k++;

      // Update the state
      setArray([...arr]);
    }

    setHighlightedIndices([]);
    setSortedIndex([...Array(right - left + 1)].map((_, idx) => left + idx));
  };

  const mergeSortHelper = async (arr, left, right) => {
    if (left >= right) {
      return;
    }

    const mid = Math.floor((left + right) / 2);

    await mergeSortHelper(arr, left, mid);
    await mergeSortHelper(arr, mid + 1, right);
    await merge(arr, left, mid, right);
  };

  await mergeSortHelper(arr, 0, arr.length - 1);
};
