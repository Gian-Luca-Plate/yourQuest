<template>
  <div class="home">
    <Stat/>
  </div>
</template>

<script>
// @ is an alias to /src
import Stat from '@/components/Stat.vue'

export default {
  name: 'StatView',
  components: {
    Stat
  }
}
</script>
