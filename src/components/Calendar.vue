<template>
  <div id="calendar">
    <div class="container">
      <div class="header">
        <div class="left-arrow" @click="prevMonth">
          <span>&lt;</span>
        </div>
        <div class="month">{{ selectedMonthName }} {{ selectedYear }}</div>
        <div class="right-arrow" @click="nextMonth">
          <span>&gt;</span>
        </div>
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
            <span>{{ day.getDate() }}</span>
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
      ]
    }
  },
  computed: {
    days () {
      let emptyDays = Array(this.startWeekDayOfMonth - 1).fill(null)
      let days = Array(this.numberOfDays).fill().map((item, index) => new DateTime(this.selectedYear, this.selectedMonth, index + 1))
      return emptyDays.concat(days)
    },
    startWeekDayOfMonth () {
      return this.date.getFirstWeekdayOfMonth()
    },
    numberOfDays () {
      return this.date.getNumberOfDaysInMonth()
    },
    selectedMonth () {
      return this.date.getMonth()
    },
    selectedMonthName () {
      return this.date.getMonthName()
    },
    selectedYear () {
      return this.date.getFullYear()
    }
  },
  methods: {
    prevMonth () {
      this.date = new DateTime(this.selectedYear, this.selectedMonth - 1, 1)
    },
    nextMonth () {
      this.date = new DateTime(this.selectedYear, this.selectedMonth + 1, 1)
    }
  },
  props: {
    initialDate: {
      type: String,
      default: null
    }
  },
  beforeMount () {
    this.date = Date.parse(this.initialDate) ? new DateTime(this.initialDate) : new DateTime()
  }

}
</script>
<style lang="sass" scoped>
  @import '../styles/index.sass'
</style>
