<template>
  <div id="app">
    <h1>vue-sweet-calendar</h1>
    <div>
      <h2>Calendar</h2>
      <button
        @click="goToday()"
        id="todayButton"
      >Today</button>
      <Calendar
        :eventCategories="eventCategories"
        :events="events"
        ref="calendar"
      />
    </div>
    <div>
      <h2>Date Picker</h2>
      <input type="text" :value="selectedDate.iso">
      <date-picker @setDate="setDate" :selectedDate="selectedDate.iso"/>
    </div>
  </div>
</template>

<script>
import Calendar from './components/Calendar.vue'
import DatePicker from './components/DatePicker.vue'
export default {
  name: 'app',
  components: {
    Calendar,
    DatePicker
  },
  data () {
    return {
      eventCategories: [
        {
          id: 1,
          title: 'Personal',
          textColor: 'white',
          backgroundColor: 'Blue'
        },
        {
          id: 2,
          title: 'Company-wide',
          textColor: 'white',
          backgroundColor: 'red'
        },
        {
          id: 3,
          title: 'National',
          textColor: 'white',
          backgroundColor: 'green'
        }
      ],
      events: [
        {
          title: 'test1',
          start: '2019-04-02',
          end: '2019-04-04',
          repeat: 'never',
          categoryId: 1
        },
        {
          title: 'test2',
          start: '2019-04-08',
          end: '2019-04-09',
          repeat: 'monthly',
          categoryId: 1
        },
        {
          title: 'test3',
          start: '2019-04-10',
          end: '2019-04-11',
          repeat: 'yearly',
          categoryId: 2
        },
        {
          title: 'test4',
          start: '2019-04-23',
          end: '2019-04-23',
          repeat: 'monthly',
          categoryId: 2
        },
        {
          title: 'test5',
          start: '2021-06-17',
          end: '2021-06-18',
          repeat: 'weekly',
          categoryId: 3
        },
      ],
      selectedDate: {}
    }
  },
  methods: {
    goToday () {
      this.$refs.calendar.goToday()
    },
    setDate (date) {
      this.selectedDate = date
    }
  }
}
</script>

<style lang="sass">
@import './styles/index.sass'
#app
  font-family: "Avenir", Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  margin-top: 60px

  #todayButton
    margin-bottom: 20px
    width: 90px
    height: 40px
    background-color: white
    color: $today-color
    border: 2px solid $today-color
    border-radius: 10px
    font-size: 16px
    &:focus
      outline: none
</style>
