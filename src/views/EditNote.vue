<template>
  <div class="p-4 pt-6">
    <NavigationBar />
    <form @submit.prevent="submit" class="max-w-screen-sm mx-auto">
      <div class="mb-4">
        <label for="title" class="sr-only">Title</label>
        <input
          class="w-full text-xl font-medium focus:outline-none bg-transparent"
          type="text"
          name="title"
          placeholder="Title"
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
      <div class="mt-4">
        <button
          class="font-medium text-indigo-500 px-8 py-1 border-2 border-indigo-400 rounded-md text-base hover:bg-indigo-50 appearance-none focus:outline-none"
          type="submit"
        >
          Save
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
      content: "",
      submitError: "",
    };
  },
  async mounted() {
    const id = this.$route.params.id;
    const response = await axios.get("http://localhost:3000/notes/" + id);
    const note = response.data;
    this.title = note.title;
    this.content = note.content || "";
  },
  computed: {
    titleHint() {
      if (!this.title) return "Please insert a title";
      return "";
    },
  },
  methods: {
    validate() {
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
        const id = this.$route.params.id;
        await axios.patch("http://localhost:3000/notes/" + id, {
          title: this.title,
          content: this.content,
          collection: "Personal",
          updatedAt: now,
        });

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
