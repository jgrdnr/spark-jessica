<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-md w-full space-y-8">
      <div>
        <h1 class="mx-auto text-6xl font-extrabold text-indigo-600 text-center">
          Spark
        </h1>

        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Create your account
        </h2>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="submit">
        <div class="space-y-4">
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input
              id="email-address"
              name="email"
              type="text"
              autocomplete="email"
              required
              class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10"
              placeholder="Email address"
              v-model="email"
            />
            <p class="px-2 mt-1 text-xs text-red-600 hidden">
              Please insert a valid email address
            </p>
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              required
              class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10"
              placeholder="Password"
              v-model="password"
            />
            <p class="px-2 mt-1 text-xs text-red-600 hidden">
              Your password must be at least 12 characters long
            </p>
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <!-- Heroicon name: solid/lock-closed -->
              <svg
                class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            Sign up
          </button>
          <p class="px-2 mt-1 text-xs text-red-600 hidden">
            Sorry, some error occured during signup. Please try again.
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    submit() {
      console.log("Email:", this.email, "Password:", this.password);
    },
  },
});
</script>

<style scoped></style>
