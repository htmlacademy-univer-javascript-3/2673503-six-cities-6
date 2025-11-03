export function groupBy<TSource, TValue>(
  source: TSource[],
  keySelector: (item: TSource) => string,
  valueSelector: (item: TSource) => TValue
): { [key: string]: TValue[] } {
  const groupedResults: { [key: string]: TValue[] } = {};

  source.forEach((item) => {
    const key = keySelector(item);
    const value = valueSelector(item);

    if (groupedResults[key]) {
      groupedResults[key].push(value);
    } else {
      groupedResults[key] = [value];
    }
  });

  return groupedResults;
}
