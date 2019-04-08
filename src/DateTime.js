export default class DateTime extends Date {
  constructor (...args) {
    if (args.length > 1) {
      let [year, month, ...rest] = args
      super(year, month - 1, ...rest)
    } else {
      super(...args)
    }
  }

  getMonth () {
    return super.getMonth() + 1
  }

  getDay () {
    return super.getDay() + 1
  }

  getMonthName () {
    let months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ]
    return months[this.getMonth() - 1]
  }

  getDayName () {
    let days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ]
    return days[this.getDay() - 1]
  }
}
