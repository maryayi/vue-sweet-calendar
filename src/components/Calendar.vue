<template>
  <div id="calendar">
    <div class="container">
      <div class="header">
        <div class="left-arrow"></div>
        <div class="month">{{ months[selectedMonth] }} {{ selectedYear }}</div>
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
            v-if="day > 0"
            :class="['day', `day-${day}`]"
          >
            <p>{{ day }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Calendar',
  data () {
    return {
      today: new Date(),
      weekdays: [
        'S',
        'M',
        'T',
        'W',
        'T',
        'F',
        'S'
      ],
      months: [
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
      ],
      startWeekDayOfMonth: this.getFirstWeekdayOfMonth(this.date),
      numberOfDays: this.getNumberOfDaysInMonth(this.date),
      selectedMonth: this.date.getMonth(),
      selectedYear: this.date.getFullYear()
    }
  },
  computed: {
    days () {
      let emptyDays = Array(this.startWeekDayOfMonth - 1).fill(0)
      let days = Array(this.numberOfDays).fill().map((item, index) => index + 1)
      return emptyDays.concat(days)
    }
  },
  methods: {
    getNumberOfDaysInMonth (date) {
      return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
    },
    getFirstWeekdayOfMonth (date) {
      return (new Date(date.getFullYear(), date.getMonth(), 1).getDay()) + 1
    }
  },
  props: {
    date: {
      type: Date,
      default () {
        return new Date()
      }
    }
  }

}
</script>
<style lang="sass" scoped>
  @import '../styles/index.sass'
</style>
