export const storesConverter = (source: Array<string[]>): Record<string, any> => {
  const headerRow = source[0];
  const dataRows = source.slice(1);

  const result = dataRows.map((store) => {
    return store.reduce(
      (acc, cur, index) => ({
        ...acc,
        [headerRow[index]]: cur
      }),
      {}
    );
  });

  return result;
};
