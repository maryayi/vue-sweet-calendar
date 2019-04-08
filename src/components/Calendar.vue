<template>
  <div id="calendar">
    <div class="container">
      <div class="header">
        <div class="left-arrow"></div>
        <div class="month">{{ selectedMonthName }} {{ selectedYear }}</div>
        <div class="right-arrow"></div>
      </div>
      <div class="body">
        <div
          v-for="(day, index) in weekdays"
          :key="`day-name-${index}`"
          class="day-name"
        >
          {{ day }}
        </div>
        <div
          v-for="(day,index) in days"
          :key="index"
        >
          <div
            v-if="day"
            :class="[
            'day',
            `day-${day.getDate()},
            weekday-${day.getDay()}`,
            day.toDateString() === today.toDateString() ? 'today' : null
            ]"
          >
            <p>{{ day.getDate() }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import DateTime from '../DateTime.js'
export default {
  name: 'Calendar',
  data () {
    return {
      today: new DateTime(),
      date: null,
      weekdays: [
        'S',
        'M',
        'T',
        'W',
        'T',
        'F',
        'S'
      ],
      startWeekDayOfMonth: null,
      numberOfDays: null,
      selectedMonth: null,
      selectedMonthName: null,
      selectedYear: null
    }
  },
  computed: {
    days () {
      let emptyDays = Array(this.startWeekDayOfMonth - 1).fill(null)
      let days = Array(this.numberOfDays).fill().map((item, index) => new DateTime(this.selectedYear, this.selectedMonth, index + 1))
      return emptyDays.concat(days)
    }
  },
  methods: {},
  props: {
    initialDate: {
      type: String,
      default: null
    }
  },
  beforeMount () {
    this.date = Date.parse(this.initialDate) ? new DateTime(this.initialDate) : new DateTime()
    this.startWeekDayOfMonth = this.date.getFirstWeekdayOfMonth()
    this.numberOfDays = this.date.getNumberOfDaysInMonth()
    this.selectedMonth = this.date.getMonth()
    this.selectedMonthName = this.date.getMonthName()
    this.selectedYear = this.date.getFullYear()
  }

}
</script>
<style lang="sass" scoped>
  @import '../styles/index.sass'
</style>
