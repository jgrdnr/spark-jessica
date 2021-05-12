<template>
  <div class="p-4 pt-8 max-w-screen-sm mx-auto">
    <!-- Navigation Bar -->
    <NavigationBar :showDashboardButton="false" />
    <!-- Spacer Because of fixed navigation bar -->
    <div class="pt-8"></div>
    <!-- Main Content -->
    <NoteItem v-for="note in notes" :note="note" :key="note.id" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import NoteItem from "@/components/NoteItem.vue";
import NavigationBar from "@/components/NavigationBar.vue";

export default Vue.extend({
  name: "Dashboard",
  components: {
    NoteItem,
    NavigationBar,
  },
  data() {
    return {
      notes: [],
    };
  },
  async mounted() {
    const response = await axios.get("http://localhost:3000/notes");
    this.notes = response.data;
  },
  methods: {},
  computed: {
    todoItems(): Array<Object> {
      const todos = this.notes.filter((note: any) => note.collection == "Todo");
      console.log(todos);
      return todos;
    },
  },
});
</script>
