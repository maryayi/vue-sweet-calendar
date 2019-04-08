<template>
  <div id="calendar">
    <div class="container">
      <div class="header">
        <div class="left-arrow"></div>
        <div class="month">{{ selectedMonth }} {{ selectedYear }}</div>
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
import DateTime from '../DateTime.js'
export default {
  name: 'Calendar',
  data () {
    return {
      today: new DateTime(),
      weekdays: [
        'S',
        'M',
        'T',
        'W',
        'T',
        'F',
        'S'
      ],
      startWeekDayOfMonth: this.date.getFirstWeekdayOfMonth(),
      numberOfDays: this.date.getNumberOfDaysInMonth(),
      selectedMonth: this.date.getMonthName(),
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
  methods: {},
  props: {
    date: {
      type: DateTime,
      default () {
        return new DateTime()
      }
    }
  }

}
</script>
<style lang="sass" scoped>
  @import '../styles/index.sass'
</style>
