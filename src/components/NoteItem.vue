<template>
  <router-link
    class="block border-b pt-8"
    :to="{ name: 'Note', params: { id: note.id } }"
  >
    <div>
      <header class="mb-2">
        <h3 class="text-xs text-indigo-500">
          {{ note.collection }}
        </h3>
        <h2 class="text-lg font-medium">{{ note.title }}</h2>
      </header>
      <p>{{ note.content }}</p>
      <p class="text-sm text-gray-400 mt-2 text-right">
        {{ new Date(note.createdAt).toLocaleDateString() }}
      </p>
    </div></router-link
  >
</template>
    
    <script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    note: {
      type: Object,
    },
  },
});
</script>
    
    <style scoped>
</style>