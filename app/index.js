const strictEquals = (valueA, valueB) => {
  if (Number.isNaN(valueA) && Number.isNaN(valueB)) {
    return false;
  }

  const result = Object.is(valueA, valueB);
  return result;
};
strictEquals();
