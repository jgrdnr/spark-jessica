<template>
  <div class="py-6 px-4 max-w-screen-sm mx-auto">
    <NavigationBar />
    <div class="flex justify-end mb-2 pt-16">
      <router-link
        :to="{ name: 'EditNote', params: { id: $route.params.id } }"
        class="font-medium text-indigo-500 px-8 py-1 border-2 border-indigo-400 rounded-md text-base hover:bg-indigo-50 appearance-none focus:outline-none"
        >Edit</router-link
      >
    </div>
    <header class="mb-4">
      <h2 class="text-indigo-500 text-lg">{{ note.collection }}</h2>
      <h1 class="text-4xl font-medium">{{ note.title }}</h1>
    </header>
    <p class="leading-relaxed text-lg">{{ note.content }}</p>
    <div class="text-sm text-right text-gray-400 mt-4">
      {{ new Date(note.createdAt).toLocaleDateString() }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import NavigationBar from "@/components/NavigationBar.vue";

export default Vue.extend({
  components: {
    NavigationBar,
  },
  data() {
    return {
      note: {},
    };
  },
  async mounted() {
    const id = this.$route.params.id;
    const response = await axios.get(
      `${process.env.VUE_APP_API_URL}/notes/` + id
    );
    this.note = response.data;
  },
});
</script>

<style scoped></style>
