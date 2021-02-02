const round = (n) => {
  if (n === undefined) {
    return "";
  }
  if (n < 100) {
    return String(n);
  }
  const rounded = Math.round(n / 100) / 10;
  return `${rounded}k`;
};

const flattenAndSort = (data) =>
  Object.keys(data)
    .reduce((r, key) => r.concat(data[key]), [])
    .sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });

module.exports = {
  round,
  flattenAndSort,
};
