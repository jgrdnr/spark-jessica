<template>
  <div class="p-4 pt-6">
    <NavigationBar />
    <!-- Spacer Because of fixed navigation bar -->
    <div class="pt-24"></div>
    <form @submit.prevent="submit" class="max-w-screen-sm mx-auto">
      <div class="mb-4">
        <label for="title" class="sr-only">Title</label>
        <input
          class="w-full text-xl font-medium focus:outline-none bg-transparent "
          type="text"
          name="title"
          placeholder="Take a note"
          v-model="title"
          @blur="titleTouched = true"
        />
        <p class="text-sm text-indigo-500" v-if="titleHint">
          {{ titleHint }}
        </p>
      </div>
      <div>
        <label for="content" class="sr-only">Content</label>
        <textarea
          class="bg-transparent resize-none text-lg focus:outline-none w-full"
          placeholder="Content"
          rows="10"
          v-model="content"
        />
      </div>
      <!-- Select option -->
      <select v-model="selectedCollection">
        <option>Job</option>
        <option>Todo</option>
        <option>Personal</option>
      </select>
      <div class="mt-4">
        <button
          class="font-medium text-indigo-500 px-8 py-1 border-2 border-indigo-400 rounded-md text-base hover:bg-indigo-50  appearance-none focus:outline-none"
          type="submit"
        >
          Create
        </button>
      </div>
      <p v-if="submitError" class="mt-1 text-xs text-red-600">
        {{ submitError }}
      </p>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import NavigationBar from "@/components/NavigationBar.vue";

export default {
  components: {
    NavigationBar,
  },
  data() {
    return {
      title: "",
      titleTouched: false,
      content: "",
      submitError: "",
      selectedCollection: "",
    };
  },
  computed: {
    titleHint() {
      if (this.titleTouched == false) return "";
      if (!this.title) return "Please insert a title";
      return "";
    },
  },
  methods: {
    validate() {
      this.titleTouched = true;
      if (this.titleHint) return false;
      return true;
    },
    clearErrors() {
      this.submitError = "";
    },
    async submit() {
      this.clearErrors();

      if (!this.validate()) return;
      try {
        const now = new Date();
        const response = await axios.post("http://localhost:3000/notes", {
          title: this.title,
          content: this.content,
          collection: this.selectedCollection,
          createdAt: now,
          updatedAt: now,
          createdBy: this.$store.state.user.id,
        });

        const id = response.data.id;
        this.$router.push("/notes/" + id);
      } catch (error) {
        console.error(error);
        this.submitError =
          "Sorry, something went wrong. Please try again later.";
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
