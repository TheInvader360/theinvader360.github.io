<template>
  <div class="max-w-sm flex p-3 m-2 border rounded-lg">
    <div class="flex-shrink-0">
      <img class="h-32 w-32" :src="'assets/img/' + app.image" :alt="app.name">
    </div>
    <div class="flex-shrink ml-4">
      <h4 class="font-semibold text-lg">{{ app.name }}</h4>
      <p>
        {{ app.description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['app'],
}
</script>
