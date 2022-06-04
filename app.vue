<template>
  <div class="font-black text-3xl text-center w-full">A nuxt3 starter with headlessui, heroicons and windicss</div>
    <div class="flex w-full justify-around py-16">
        <BeakerIcon class="h-5 w-5 text-blue-500" />
        <Switch v-model="enabled" :class="enabled ? 'bg-teal-900' : 'bg-teal-700'" class="relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <span class="sr-only">Use setting</span>
            <span aria-hidden="true" :class="enabled ? 'translate-x-9' : 'translate-x-0'" class="pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out" />
        </Switch>
    </div>
</template>
<script setup>
import { BeakerIcon } from '@heroicons/vue/outline';
import { Switch } from '@headlessui/vue';
import { ref } from 'vue';

const enabled = ref(false);
</script>