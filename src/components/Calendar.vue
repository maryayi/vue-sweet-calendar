<template>
  <div id="sweetCalendar">
    <div class="container">
      <div class="header">
        <div
          class="left-arrow"
          @click="prevMonth"
        >
          <span>&lt;</span>
        </div>
        <div class="month">{{ selectedMonthName }} {{ selectedYear }}</div>
        <div
          class="right-arrow"
          @click="nextMonth"
        >
          <span>&gt;</span>
        </div>
      </div>
      <div class="body">
        <div
          v-for="(day, index) in weekdays"
          :key="`day-name-${index + 1}`"
          class="day-name"
          :title="day"
        >
          {{ day[0] }}
        </div>
        <div
          v-for="(day,index) in days"
          :key="index"
          class="day-container"
        >
          <div
            class="before"
            v-if="day"
            :style="generateBeforeStyle(day)"
          >&nbsp;</div>
          <div
            v-if="day"
            :class="[
            'day',
            `day-${day.getDate()},
            weekday-${day.getDay()}`,
            offDays.includes(day.getDay()) ? 'off-day' : null,
            day.toDateString() === today.toDateString() ? 'today' : null
            ]"
            :style="generateDayStyle(day)"
          >
            <span>{{ day.getDate() }}</span>
          </div>
          <div
            class="after"
            v-if="day"
            :style="generateAfterStyle(day)"
          >&nbsp;</div>
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
      weekdays: null
    }
  },
  computed: {
    days () {
      let emptyDays = Array((this.startWeekDayOfMonth - this.firstDayOfWeek + 7) % 7).fill(null)
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
    },
    generateWeekdayNames (firstDayOfWeek = 1) {
      let weekdays = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ]
      for (let i = 2; i <= firstDayOfWeek; i++) {
        let first = weekdays.shift()
        weekdays.push(first)
      }
      return weekdays
    },
    generateDayStyle (date) {
      let style = {}
      for (let event of this.events) {
        if (date.isInRange(event.start, event.end, event.repeat)) {
          let category = this.eventCategories.find(item => item.id === event.categoryId) || {}
          Object.assign(style, {
            color: category.id ? category.textColor : null,
            backgroundColor: category.id ? category.backgroundColor : null,
            fontWeight: category.id ? 'bold' : 'normal'
          })
        }
      }
      return style
    },
    generateBeforeStyle (date) {
      let style = {}
      for (let event of this.events) {
        if (date.isInRange(event.start, event.end, event.repeat) && date.getPrevDay().isInRange(event.start, event.end, event.repeat)) {
          let category = this.eventCategories.find(item => item.id === event.categoryId) || {}
          Object.assign(style, {
            backgroundColor: category.backgroundColor
          })
        }
      }
      return style
    },
    generateAfterStyle (date) {
      let style = {}
      for (let event of this.events) {
        if (date.isInRange(event.start, event.end, event.repeat) && date.getNextDay().isInRange(event.start, event.end, event.repeat)) {
          let category = this.eventCategories.find(item => item.id === event.categoryId) || {}
          Object.assign(style, {
            backgroundColor: category.backgroundColor
          })
        }
      }
      return style
    },
    goToday () {
      this.date = this.today
    }
  },
  props: {
    initialDate: {
      type: String,
      default: null
    },
    firstDayOfWeek: {
      type: Number,
      default: 1 // 1: Sunday, 2: Monday, etc
    },
    eventCategories: {
      type: Array,
      default () {
        return []
      }
    },
    events: {
      type: Array,
      default () {
        return []
      }
    },
    offDays: {
      type: Array,
      default () {
        return [1, 7]
      }
    }
  },
  beforeMount () {
    this.date = Date.parse(this.initialDate) ? new DateTime(this.initialDate) : new DateTime()
    this.weekdays = this.generateWeekdayNames(this.firstDayOfWeek)
  }
}
</script>

<style lang="sass" scoped>
@import '../styles/index.sass'
</style>
