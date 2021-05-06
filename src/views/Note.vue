<template>
  <div>
    <h1>Note</h1>
    <h3>{{ note.title }}</h3>
    <p>{{ note.content }}</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";

export default Vue.extend({
  data() {
    return {
      note: {},
    };
  },
  async mounted() {
    const id = this.$route.params.id;
    const response = await axios.get("http://localhost:3000/notes/" + id);
    this.note = response.data;
  },
});
</script>

<style scoped></style>
