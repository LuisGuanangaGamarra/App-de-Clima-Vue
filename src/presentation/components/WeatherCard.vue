<template>
  <div class="bg-white p-6 rounded-lg shadow-md text-indigo-900 text-center">
    <h2 class="text-xl font-bold mb-2">{{ weather.city }}</h2>
    <img :src="`https://openweathermap.org/img/wn/${weather.icon}@2x.png`" class="mx-auto" />
    <p class="capitalize">{{ weather.description }}</p>
    <p class="text-2xl font-bold">{{ weather.temperature }}°C</p>
    <p>Sensación térmica: {{ weather.feels_like }}°C</p>
    <p>Humedad: {{ weather.humidity }}%</p>
  </div>
</template>

<script setup lang="ts">
import { Weather } from '@/domain/entities/weather';

defineProps<{ weather: Weather }>();
</script>