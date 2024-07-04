export function convertDate(rawDate: string) {
  let formattedDate = '';
  const splittedDate = rawDate.split('-');

  for (let i = 2; i >= 0; i--) {
    formattedDate += splittedDate[i];
    if (i !== 0) formattedDate += '.';
  }
  
  return formattedDate;
}

export function convertDateTime(rawDateTime: string) {
  const splittedDateTime = rawDateTime.split('T');
  const manipulatedTime = splittedDateTime[1].substring(0, splittedDateTime[1].length - 1);
  return convertDate(splittedDateTime[0]) + ' ' + manipulatedTime;
}
