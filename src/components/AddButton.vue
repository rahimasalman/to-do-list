<template>
  <button
      class="bg-white hover:bg-gray-100 font-normal py-2 px-4 border border-gray-400 rounded shadow"
      @click="$emit('click')"
  >
    <slot/>
  </button>
</template>

<script>
export default {
  name: "AddButton"
}
</script>

<style scoped>

</style>