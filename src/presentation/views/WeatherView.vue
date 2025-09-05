<template>
  <div class="min-h-screen bg-gradient-to-br from-[#cbe7ff] to-[#a3d0f7] flex flex-col items-center justify-center px-4">
    <div class="flex w-full max-w-xl items-center bg-white/80 shadow-lg rounded-full px-6 py-3 backdrop-blur-md ring-1 ring-white/20 mb-8">
      <input
          v-model="city"
          type="text"
          placeholder="Ingresa una ciudad..."
          class="flex-1 text-gray-700 text-lg bg-transparent outline-none placeholder-gray-500"
      />
      <button
          @click="fetch(city)"
          class="cursor-pointer ml-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold px-6 py-2 rounded-full hover:scale-105 transition-transform"
      >
        Buscar
      </button>
    </div>
    <weather-card v-if="weather" :weather="weather" />
    <p v-if="error" class="text-red-500 text-lg">{{ error }}</p>
  </div>
</template>


<script setup lang="ts">
import {useWeather} from "@/presentation/composables/useWeather";
import WeatherCard from "@/presentation/components/WeatherCard.vue";
import {ref} from "vue";

const { weather, error, fetch } = useWeather();
const city = ref('');

</script>