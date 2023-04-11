const strictEquals = (valueA, valueB) => {
  if (Number.isNaN(valueA) && Number.isNaN(valueB)) {
    return false;
  }
  if (!valueA > valueB && !valueB > valueB) {
    return true;
  }

  const result = Object.is(valueA, valueB);
  return result;
};

export default strictEquals;
