export default (...styles) => {
  return function CombineStyles(theme) {
    const outStyles = styles.map(arg => {
      if (typeof arg === 'function') {
        return arg(theme);
      }

      return arg;
    });

    return outStyles.reduce((acc, val) => Object.assign(acc, val));
  };
};
