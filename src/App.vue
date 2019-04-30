<template>
  <div id="app">
    <h1>vue-sweet-calendar</h1>
    <button
      @click="goToday()"
      id="todayButton"
    >Today</button>
    <Calendar
      :eventCategories="eventCategories"
      :events="events"
      ref="calendar"
      msg="Welcome to Your Vue.js App"
    />
  </div>
</template>

<script>
import Calendar from './components/Calendar.vue'

export default {
  name: 'app',
  components: {
    Calendar
  },
  data () {
    return {
      eventCategories: [
        {
          id: 1,
          name: 'Personal',
          textColor: 'white',
          backgroundColor: 'Blue'
        },
        {
          id: 2,
          name: 'Company-wide',
          textColor: 'white',
          backgroundColor: 'red'
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
        }
      ]
    }
  },
  methods: {
    goToday () {
      this.$refs.calendar.goToday()
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
    background-color: $light-color
    color: $today-color
    border: 2px solid $today-color
    border-radius: 10px
    font-size: 16px
    &:focus
      outline: none
</style>
