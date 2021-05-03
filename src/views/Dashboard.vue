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
    <button
      @click="logout"
      class="fixed bottom-0 right-0 px-4 py-2 text-sm hover:text-indigo-600"
    >
      Logout
    </button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Dashboard",
  methods: {
    logout() {
      this.$store.commit("CLEAR");
      this.$router.push({ name: "Register" });
    },
  },
});
</script>
