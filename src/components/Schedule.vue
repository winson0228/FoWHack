<template>
    <calendar 
        isReadOnly="true"
        style="height: 800px;"/>
</template>

<script>
import 'tui-calendar/dist/tui-calendar.css'
import { Calendar } from '@toast-ui/vue-calendar'

export default {
  name: 'Schedule',
  components: {
      'calendar': Calendar
  },
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
