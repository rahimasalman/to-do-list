<template>

  <div>

  <li
      class="flex row items-center justify-between w-full py-1 px-4 my-1 rounded border bg-gray-100 text-gray-600"
  >
    <div class="items-center column">

      <span :class="{'line-through': test.foggy === true}">{{ test.text }}</span>
    </div>
    <div class="items-center flex">
      <span class=" " @click="$emit('toggle', test.id)">
    <i class="fa fa-check"></i>
      </span>
      <span class=" " @click="$emit('edit', test.id)">
        <i class="fa fa-pencil"></i>
      </span>
      <span class="" @click="$emit('remove', test.id)">
        <i class="fa fa-trash"/>
      </span>
    </div>

  </li>
  </div>
</template>

<script>
export default {
  name: "ListItems",
  data() {
return{}
  },
  props: {
    test: { type: Object, required: true }
  }
}
</script>

<style scoped>

</style>