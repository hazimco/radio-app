// Date.parse works weirdly so e.g. "20" is NaN, but "10" is valid, and:
// -- "2024" valid
// -- "2024-" valid
// -- "2024-0" NaN
// -- "2024-01" valid
// -- "2024-01-" valid
// -- "2024-01-0" NaN
// -- "2024-01-01" valid

//would be better to use a date library to check if a string is a date
export const isDate = (value: string) => {
  return !isNaN(Date.parse(value));
};

// returns integer part of string with format /Date(1711966140000)/
export const getDateMillis = (value: string) => {
  const firstPartRemoved = value.replace("/Date(", "");
  const dateMillis = firstPartRemoved.replace(")/", "");

  return Number(dateMillis);
};
