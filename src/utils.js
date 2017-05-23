export function timePassed(itemTime, currTime) {
  const item = new Date(itemTime);
  const difference = Math.abs((currTime.getTime() / 1000) - (item.getTime() / 1000));

  if (difference < 60) {
    return (`${difference} seconds`);
  } else if (difference < 3600) {
    return (Math.floor(difference / 60) + ' minutes');
  } else if (difference < 86400) {
    return (Math.floor(difference / 3600) + ' hours');
  } else if (difference < 604800) {
    return (Math.floor(difference / 86400) + ' days');
  } else if (difference < 2.628e+6) {
    return (Math.floor(difference / 604800) + ' weeks');
  } else if (difference < 3.154e+7) {
    return (Math.floor(difference / 2.628e+6) + ' months');
  }
  return (Math.floor(difference / 3.154e+7) + ' years');
}

export function displayDate(date) {
  const item = new Date(date);
  return item.toLocaleString('en-us', {
    month: 'short',
    day: 'numeric',
  });
}
