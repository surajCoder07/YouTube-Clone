const useFormatDate = (date) => {
  const givenDate = new Date(date);
  const currentDate = new Date();
  const timeDiff = currentDate - givenDate;
  const seconds = Math.floor(timeDiff / 1000);
  const minuts = Math.floor(seconds / 60);
  const hours = Math.floor(minuts / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  if (years > 0) {
    return `${years} year${years === 1 ? "" : "s"} ago`;
  } else if (months > 0) {
    return `${months} month${months === 1 ? "" : "s"} ago`;
  } else if (days > 0) {
    return `${days} day${days === 1 ? "" : "s"} ago`;
  } else if (hours > 0) {
    return `${hours} hour${hours === 1 ? "" : "s"} ago`;
  } else if (minuts > 0) {
    return `${minuts} minut${minuts === 1 ? "" : "s"} ago`;
  } else {
    return `${seconds} second${seconds === 1 ? "" : "s"} ago`;
  }
};
export default useFormatDate;
