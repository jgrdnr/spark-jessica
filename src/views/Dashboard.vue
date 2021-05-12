<template>
  <div class="p-4 pt-8 max-w-screen-sm mx-auto">
    <!-- Navigation Bar -->
    <NavigationBar :showDashboardButton="false" />
    <!-- Spacer Because of fixed navigation bar -->
    <div class="pt-10"></div>
    <!-- Create Input field for keyword -->
    <label for="keywordInput">Search:</label>
    <input type="text" v-model="keyword" id="keywordInput" />
    <!-- Main Content -->

    <h3 class="text-lg">To Do</h3>
    <NoteItem v-for="note in todoItems" :note="note" :key="note.id" />
    <h3 class="pt-8">Personal</h3>
    <NoteItem v-for="note in personalItems" :note="note" :key="note.id" />
  </div>
</template>

<script>
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
      keyword: "",
    };
  },
  async mounted() {
    const response = await axios.get("http://localhost:3000/notes");
    this.notes = response.data;
  },
  methods: {},
  computed: {
    //filter notes depending on keyword
    filteredNotes() {
      return this.notes.filter((note) => {
        return (
          note.title.toLowerCase().includes(this.keyword.toLowerCase()) ||
          note.content.toLowerCase().includes(this.keyword.toLowerCase())
        );
      });
    },
    todoItems() {
      return this.notes.filter((note) => note.collection == "Todo");
    },
    personalItems() {
      const todos = this.notes.filter((note) => note.collection == "Personal");
      console.log(todos);
      return todos;
    },
  },
});
</script>
