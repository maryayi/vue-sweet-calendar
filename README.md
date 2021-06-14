<p align="center">
  <a href="#">
    <img src="https://github.com/maryayi/vue-sweet-calendar/blob/master/src/assets/vue-sweet-calendar.png?raw=true" alt="vue-sweet-calendar" />
  </a>
</p>

<h1 align="center" >vue-sweet-calendar</h1>

<p align="center" class="badges" >
  <a href="https://www.npmjs.com/package/vue-sweet-calendar"><img src="https://badge.fury.io/js/vue-sweet-calendar.svg" alt="npm version" /></a>
</p>

A simple and sweet vue.js calendar

## Features

- Showing Multiple-Events
- Fully customizable 

## How to install

```
npm install vue-sweet-calendar --save
```

## How to use

Inside your `.vue` files

```vue
<template>
  <div id="your-component">
    <!-- Using Component -->
    <calendar
      :eventCategories="eventCategories"
      :events="events"
      ref="calendar"
    />
  </div>
</template>
<script>
// Importing Component and style
import { Calendar } from 'vue-sweet-calendar'
import 'vue-sweet-calendar/dist/SweetCalendar.css'

export default {
  name: 'YourComponentName',
  data() {
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
          title: 'Event 1',
          start: '2019-04-02',
          end: '2019-04-04',
          repeat: 'monthly',
          categoryId: 1
        },
        {
          title: 'Event 2',
          start: '2019-04-08',
          end: '2019-04-09',
          repeat: 'yearly',
          categoryId: 1
        },
        {
          title: 'Event 3',
          start: '2019-04-10',
          end: '2019-04-11',
          repeat: 'never',
          categoryId: 2
        },
        {
          title: 'Event 4',
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
      ]
    }
  },
  methods: {
    goToday() {
      this.$refs.calendar.goToday()
    }
  },
  components: {
    Calendar // Registering Component
  }
}
</script>
```

## Component props

| prop              | description                                                                       | default                          |
| ----------------- | --------------------------------------------------------------------------------- | -------------------------------- |
| `initialDate`     | First date that is showing on calendar                                            | `null` (showing current month)   |
| `firstDayOfWeek`  | First day of week (1: sunday, 2:monday, 3:tuesday, etc)                           | `1` (Sunday)                     |
| `eventCategories` | An array of objects showing different categories of events (see an example below) | `[]` (no categories)             |
| `events`          | An array of objects showing list of events                                        | `[]` (no events)                 |
| `offDays`         | An array for determining that which weekdays are off.                             | `[1, 7]` (saturdays and sundays) |

## Component methods

| prop      | description                     | arguments |
| --------- | ------------------------------- | --------- |
| `goToday` | Going to today! (current month) | -         |

## Example for eventCategories

```javascript
[
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
]
```

## Example for events

```javascript
[
  {
    title: 'Event 1',
    start: '2019-04-02',
    end: '2019-04-04',
    repeat: 'monthly',
    categoryId: 1
  },
  {
    title: 'Event 2',
    start: '2019-04-08',
    end: '2019-04-09',
    repeat: 'yearly',
    categoryId: 1
  },
  {
    title: 'Event 3',
    start: '2019-04-10',
    end: '2019-04-11',
    repeat: 'never',
    categoryId: 2
  },
  {
    title: 'Event 4',
    start: '2019-04-23',
    end: '2019-04-23',
    repeat: 'monthly',
    categoryId: 2
  },
  {
    title: 'Event 5',
    start: '2021-06-17',
    end: '2021-06-18',
    repeat: 'weekly',
    categoryId: 3
  }
]
```

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your tests

```
npm run test
```

### Lints and fixes files

```
npm run lint
```

### Run your unit tests

```
npm run test:unit
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### License

MIT
