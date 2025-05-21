export const formatterDate = new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' });

export const capitalize = (word: string): string =>
  word.charAt(0).toUpperCase() + word.slice(1);

export const pluralize = (count: number, singular: string, plural: string) => `${count} ${count === 1 ? singular : plural}`;
