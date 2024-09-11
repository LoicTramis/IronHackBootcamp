import c from 'calendar'

const cal = new c.Calendar()

/**
 * 
 * @param year number
 * @param month number
 * @returns array[][]
 */
const getCalendar = (year: number, month: number) => {
  return cal.monthDates(year, month)

}

export default getCalendar