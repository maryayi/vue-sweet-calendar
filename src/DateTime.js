export default class DateTime {
  constructor (...args) {
    let date
    if (args.length > 1) {
      let [year, month, ...rest] = args
      date = new Date(year, month - 1, ...rest)
    } else {
      date = new Date(...args)
    }
    this._date = date
  }

  getMonth () {
    return this._date.getMonth() + 1
  }

  getDay () {
    return this._date.getDay() + 1
  }

  getMonthName (mode = 'long') {
    return this._date.toLocaleString('en-US', { month: mode })
  }

  getFullYear () {
    return this._date.getFullYear()
  }

  getDate () {
    return this._date.getDate()
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

  toDateString () {
    return this._date.toDateString()
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
