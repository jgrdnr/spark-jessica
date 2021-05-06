<template>
  <div>
    <h1>Take a note</h1>
    <form @submit.prevent="submit">
      <div>
        <label for="title" class="sr-only">Title</label>
        <input type="text" name="title" placeholder="Title" v-model="title" />
      </div>
      <div>
        <label for="content" class="sr-only">Content</label>
        <textarea placeholder="Content" v-model="content" />
      </div>
      <div>
        <button type="submit">Create</button>
      </div>
      <p v-if="submitError" class="px-2 mt-1 text-xs text-red-600">
        {{ submitError }}
      </p>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      title: "",
      content: "",
      submitError: "",
    };
  },
  methods: {
    async submit() {
      console.log("Title: ", this.title, "Content: ", this.content);
      try {
        const now = new Date();
        const response = await axios.post("http://localhost:3000/notes", {
          title: this.title,
          content: this.content,
          collection: "Personal",
          createdAt: now,
          updatedAt: now,
        });

        const id = response.data.id;
        this.$router.push("/notes/" + id);
      } catch (error) {
        console.error(error);
        this.submitError = "Sorry, something went wrong";
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
