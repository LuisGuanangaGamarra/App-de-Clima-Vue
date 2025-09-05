<template>
  <div class="max-w-md mx-auto mt-10">
    <h1 class="text-3xl font-bold mb-6 text-center text-white">App de Clima</h1>

    <form @submit.prevent="fetch(city)" class="mb-6">
      <input v-model="city" class="w-full p-3 rounded text-black outline outline-offset-2" placeholder="Ingresa una ciudad" />
      <button class="w-full mt-2 py-2 bg-sky-500 text-white cursor-pointer rounded font-bold">Buscar</button>
    </form>

    <weather-card v-if="weather" :weather="weather" />
    <p v-if="error" class="text-red-300 mt-4 text-center">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
import {useWeather} from "@/presentation/composables/useWeather";
import WeatherCard from "@/presentation/components/WeatherCard.vue";
import {ref} from "vue";

const { weather, error, fetch } = useWeather();
const city = ref('');

</script>