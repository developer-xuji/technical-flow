//时间字符串格式  ' hh:mm '

const timeToCoordinate = (time: string) => {
  let hour = Number(time.split(":")[0]);
  const minute = Number(time.split(":")[1]);

  if (hour < 6) hour += 6;
  else if (hour > 18) hour -= 12;
  else hour -= 6;

  return 600 * hour + 10 * minute;
};

export default timeToCoordinate;
