<template>
  <alert-module
  title="Bu məlumatı silmək istədiyinizə əminsiniz?"


  />

  <!--  <div class="text-center">-->
  <!--              <span-->
  <!--                  class="material-icons border-2 rounded-full p-2 mb-2 text-red-400 font-semibold border-red-400 w-auto">-->
  <!--          close </span>-->
  <!--  </div>-->

  <!--  <div class="text-center font-semibol text-gray-700 m-2 text-lg">-->
  <!--    Bu məlumatı silmək istədiyinizə əminsiniz?-->
  <!--  </div>-->

  <!--  <div class="flex justify-center mt-4 mb-2">-->
  <!--    <button-->
  <!--        @click="$emit('remove', test.id)"-->
  <!--        class="bg-green-500 text-gray-200 rounded hover:bg-red-400 px-6 py-2 focus:outline-none mx-2 w-auto ">Bəli</button>-->
  <!--    <button-->
  <!--        @click=" closeModule()"-->
  <!--        class="module-close-button ">Xeyr</button>-->

  <!--  </div>-->


<!--<div id="alert-module">-->



<!--</div>-->
</template>

<script>
export default {
  name: "AlertModule",
  data() {
    return{}
  },

  methods: {
    closeModule() {
      this.$emit('close');
    }

  }
}
</script>

<style scoped>
.modal-close-button  {
  @apply  bg-gray-300 text-gray-900 rounded hover:bg-gray-200 px-6 py-2 focus:outline-none mx-2 w-auto
}

</style>