<template>
  <div>
    <div v-for="note in notes" :key="note.id">
      <h3>{{ note.title }}</h3>
      <p>{{ note.content }}</p>
      <p>{{ new Date(note.createdAt).toLocaleDateString() }}</p>
      <router-link :to="{ name: 'Note', params: { id: note.id } }"
        >Open</router-link
      >
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";

export default Vue.extend({
  name: "Dashboard",
  data() {
    return {
      notes: [],
    };
  },
  async mounted() {
    const response = await axios.get("http://localhost:3000/notes");
    this.notes = response.data;
  },
});
</script>
