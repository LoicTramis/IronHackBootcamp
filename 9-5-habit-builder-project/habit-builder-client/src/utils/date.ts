const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const shortDayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const monthNames = ["January", "February", "March", "April", "May", "June", "July",
  "August", "September", "October", "November", "December"];
const shortMonthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
  "Aug", "Sep", "Oct", "Nov", "Dec"];

const today = new Date();

const frequencyChart = {
  Daily: 1,
  Weekly: 7,
  Biweekly: 14,
  Monthly: 1,
  Quaterly: 3,
};
/*const newDay = startDay.getDate() + frequencyMap["Weekly"];
 const newDate = `
${startDay.getFullYear()}
-${startDay.getMonth() + 1 + frequencyMap["Monthly"]}
-${newDay}
`; */
/**
 * Format ISO date to UTC type date
 * 
 * @param ISOStringDate Date
 * @returns string
 */
const formatDate = (ISOStringDate: Date) => {
  const newDate = new Date(ISOStringDate)
  const dayWeek = dayNames[newDate.getDay()]
  const dayMonth = newDate.getDate()
  const month = monthNames[newDate.getMonth()]
  const year = newDate.getFullYear()
  const hours = newDate.getHours()
  const minutes = newDate.getMinutes()
  const meridiem = hours < 13 ? "AM" : "PM"

  return `${dayWeek}, ${dayMonth} ${month} ${year}`
}
const simpleFormatDate = (ISOStringDate: string) => {
  const newDate = new Date(ISOStringDate)
  const dayWeek = shortDayNames[newDate.getDay()]
  const dayMonth = newDate.getDate()
  const month = shortMonthNames[newDate.getMonth()]
  const year = newDate.getFullYear().toString()
  const hours = newDate.getHours() > 13 ? newDate.getHours() - 12 : newDate.getHours()
  const minutes = newDate.getMinutes()
  const meridiem = newDate.getHours() < 13 ? "am" : "pm"

  return `${dayMonth} ${month}, ${year}`
}
const formatISODateToHTMLDate = (ISOStringDate: string) => {
  return ISOStringDate.slice(0,10)
}

export {
  today,
  frequencyChart,
  formatDate,
  simpleFormatDate,
  formatISODateToHTMLDate,
  monthNames,
}