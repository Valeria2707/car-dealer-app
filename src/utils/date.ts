export const generateYears = (startYear: number, endYear: number): string[] => {
  return Array.from({ length: endYear - startYear + 1 }, (_, i) =>
    (startYear + i).toString(),
  );
};
