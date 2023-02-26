const detectSpace = (str) => {
  if (str[str.length - 1] !== ' ') {
    return `${str} `;
  }
  return str;
};

module.exports = detectSpace;
