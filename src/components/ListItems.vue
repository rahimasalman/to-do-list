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
    <i class="fa fa-check hover:bg-green-600"></i>
      </span>
      <span class=" " @click="$emit('edit', test.id)">
        <i class="fa fa-pencil hover:bg-blue-600"></i>
      </span>
      <span class="" @click="$emit('remove', test.id)">
        <i class="fa fa-trash hover:bg-red-600"/>
      </span>
    </div>

  </li>
  </div>
</template>

<script>
export default {
  name: "ListItems",
  data() {
    return {
      alertModule: false
    }
  },
  props: {
    test: { type: Object, required: true }
  },
  methods: {
    // alertModule(list = null){
    //   if (list){
    //     this.alertModule = 'Redaktə etmək';
    //     this.alertModule = true;
    //   }
    // },
    // close() {
    //   this.alertModule = false;
    // },
  }

}
</script>

<style scoped>

</style>