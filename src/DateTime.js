export default class DateTime {
  constructor (...args) {
    let date
    if (args.length > 1) {
      let [year, month, ...rest] = args
      date = new Date(year, month - 1, ...rest)
    } else {
      date = new Date(...args)
    }
    date.setHours(0, 0, 0, 0)
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

  getTime () {
    return this._date.getTime()
  }

  getDayName (mode = 'long') {
    return this._date.toLocaleString('en-US', { weekday: mode })
  }

  getNextDay () {
    let day = new this.constructor(this.getTime())
    day.setDate(day.getDate() + 1)
    return day
  }

  getPrevDay () {
    let day = new this.constructor(this.getTime())
    day.setDate(day.getDate() - 1)
    return day
  }

  setDate (date) {
    this._date.setDate(date)
    return this.getTime()
  }

  isInRange (start, end) {
    let startCheck = this.getTime() >= new this.constructor(start).getTime()
    let endCheck = this.getTime() <= new this.constructor(end).getTime()
    return startCheck && endCheck
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
