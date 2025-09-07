<template>
  <transition name="fade">
    <div
        class="bg-white/60 shadow-2xl rounded-3xl p-8 w-full max-w-lg text-center backdrop-blur-md ring-1 ring-white/10"
    >
      <h2 class="text-3xl font-bold text-indigo-700 mb-4">{{ weather.city }}</h2>

      <div class="flex justify-center mb-3">
        <img
            :src="`https://openweathermap.org/img/wn/${weather.icon}@4x.png`"
            :alt="weather.description"
            class="w-24 h-24"
        />
      </div>

      <p class="text-lg text-gray-700 capitalize mb-1">
        {{ weather.description }}
      </p>

      <p class="text-5xl font-extrabold text-indigo-600 mb-4">
        {{ weather.temperature.toFixed(1) }}°C
      </p>

      <div class="text-md text-gray-600 space-y-1">
        <p><span class="font-semibold">Sensación térmica:</span> {{ weather.feels_like.toFixed(1) }}°C</p>
        <p><span class="font-semibold">Humedad:</span> {{ weather.humidity }}%</p>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { Weather } from '@/domain/entities/Weather';

defineProps<{ weather: Weather }>();
</script>