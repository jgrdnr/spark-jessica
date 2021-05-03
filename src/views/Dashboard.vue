<template>
  <div class="grid place-items-center min-h-screen">
    <div>
      <h1 class="text-6xl text-indigo-600 font-semibold mb-4">
        Welcome to Spark
      </h1>
      <p class="text-center text-lg">
        You are logged in as {{ $store.state.user.email }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Dashboard",
});
</script>
