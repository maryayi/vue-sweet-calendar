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

  getMonthName (mode = 'long') {
    return this.toLocaleString('en-US', { month: mode })
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

  getNumberOfDaysInMonth () {
    return new this.constructor(
      this.getFullYear(),
      this.getMonth() + 1,
      0
    ).getDate()
  }

  getFirstWeekdayOfMonth () {
    return new this.constructor(this.getFullYear(), this.getMonth(), 1).getDay()
  }
}
