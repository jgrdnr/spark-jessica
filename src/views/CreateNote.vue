<template>
  <div>
    <h1>Take a note</h1>
    <form>
      <div>
        <label for="title" class="sr-only">Title</label>
        <input type="text" name="title" placeholder="Title" />
      </div>
      <div>
        <label for="content" class="sr-only">Content</label>
        <textarea placeholder="Content" />
      </div>
      <div>
        <button type="submit">Create</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
