<template>
  <div class="home">
    <Quest />
  </div>
</template>

<script>
// @ is an alias to /src
import Quest from '@/components/QuestPage.vue'

export default {
  name: 'QuestView',
  components: {
    Quest
  }
}
</script>
