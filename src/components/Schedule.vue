<template>
    <vue-cal 
        :hide-view-selector="true"
        :hide-weekends="true"
        :editable-events="false"
        style="height: 600px">
    </vue-cal>
</template>

<script>
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'

export default {
  name: 'Schedule',
  components: {
      'vue-cal': VueCal
  },
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.vuecal__cell.selected {
    z-index: 1;
}
</style>
