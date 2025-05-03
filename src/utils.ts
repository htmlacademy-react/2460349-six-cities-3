export const formatterDate = new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' });

export const capitalize = (word: string): string =>
  word.charAt(0).toUpperCase() + word.slice(1);
