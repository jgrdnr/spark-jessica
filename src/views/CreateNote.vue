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
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      content: "",
    };
  },
  methods: {
    async submit() {
      console.log("Title: ", this.title, "Content: ", this.content);
    },
  },
};
</script>

<style lang="scss" scoped></style>
