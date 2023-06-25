<script setup>
</script>

<template>
  <nav class="bg-black text-white py-4 px-8 w-full">
    <div class="max-w-screen-lg mx-auto flex justify-between items-center">
      <button class="text-white text-xl focus:outline-none md:hidden">&#8801;</button>
      <ul class="hidden md:flex space-x-4">
        <li>
          <router-link to="/course"
            class="block w-full px-4 py-2 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
            Cursos
          </router-link>
        </li>
        <li>
          <router-link to="/subject"
            class="block w-full px-4 py-2 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
            Disciplinas
          </router-link>
        </li>
        <li>
          <router-link to="/student"
            class="block w-full px-4 py-2 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
            Estudante
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
  <div class="w-full h-screen dark:bg-gray-900 dark:text-white p-10">
    <router-view />
  </div>
</template>
