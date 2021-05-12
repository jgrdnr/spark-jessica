<template>
  <!-- Navigation Bar -->
  <div
    class="flex justify-center space-x-4 fixed bg-gray-100 w-screen left-0 top-0 p-4"
  >
    <router-link
      :to="{ name: 'Dashboard' }"
      v-if="showDashboardButton"
      class="font-medium text-blue-500 px-8 py-1 border-2 border-blue-400 rounded-md text-base hover:bg-blue-50 appearance-none focus:outline-none"
    >
      Back to Dashboard
    </router-link>
    <router-link
      to="/create-note"
      class="font-medium text-indigo-500 px-8 py-1 border-2 border-indigo-400 rounded-md text-base hover:bg-indigo-50 appearance-none focus:outline-none"
    >
      Take a note
    </router-link>
    <button @click="logout" class="text-sm hover:text-indigo-600">
      Logout
    </button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    showDashboardButton: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    logout() {
      this.$store.commit("CLEAR");
      this.$router.push({ name: "Login" });
    },
  },
});
</script>

<style scoped>
</style>