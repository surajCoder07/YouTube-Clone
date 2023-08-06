const useFormatNumber = (num) => {
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(0) + "B";
  } else if (num >= 1000000) {
    return (num / 1000000).toFixed(0) + "M";
  } else if (num >= 1000) {
    return (num / 1000).toFixed(0) + "K";
  } else if (num === undefined) {
    return Math.floor(Math.random() * 100 + 1) + "k";
  } else {
    return num;
  }
};
export default useFormatNumber;
