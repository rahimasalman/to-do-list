<template>
<!--  <alert-module-->
<!--      :tabindex="-1"-->
<!--      title="Bu məlumatı silmək istədiyinizə əminsiniz?"-->
<!--      :visible="isPopupVisible"-->
<!--      :close-outside-click="true"-->
<!--  >-->

<!--    <div class="text-center">-->
<!--                <span-->
<!--                    class="material-icons border-2 rounded-full p-2 mb-2 text-red-400 font-semibold border-red-400 w-auto">-->
<!--            close </span>-->
<!--    </div>-->

<!--    <div class="text-center font-semibol text-gray-700 m-2 text-lg">-->
<!--      Bu məlumatı silmək istədiyinizə əminsiniz?-->
<!--    </div>-->

<!--    <div class="flex justify-center mt-4 mb-2">-->
<!--      <button-->
<!--          @click="$emit('remove', listData.id)"-->
<!--          class="bg-green-500 text-gray-200 rounded hover:bg-red-400 px-6 py-2 focus:outline-none mx-2 w-auto ">Bəli</button>-->
<!--      <button-->
<!--          @click="closePopup()"-->
<!--          class=" ">Xeyr</button>-->

<!--    </div>-->
<!--  </alert-module>-->

 <div  v-if="isVisible">
   <div class ="fixed inset-0 z-50 flex justify-center items-center">

  <div class="flex flex-col max-w-5xl rounded-lg shadow-lg bg-white"></div>

  <div class="p-5" >
  <div class="flex justify-between items-start">
  <h3 class="text-2xl font-semibold">Modal Header</h3>
    <button class="p-1 leading-none" @click="emitCancel" ></button>
  <div class="text-xl font-semibold h-6 w-6">
 <span> x</span>
  </div>
</div>
  </div>
  <div class="p-6 flex justify-end items-center">
</div>
  <button class="btn-outline" @click="emitCancel">Cancel</button>
    <button class="btn ml-2"  @click="emitConfirm" > Confirm </button>
 <div class="opacity-25 fixed inset-0 z-40 bg-black">
  </div>
  </div>
   </div>
</template>

<script>
export default {
  name: "AlertModule",
  data() {
    return{
      alertModule: false,
      isPopupVisible: false,
    }
  },

  methods: {
    closePopup() {
      this.isPopupVisible = false;
    },


  }
}
</script>

<style scoped>
.modal-close-button  {
  @apply  bg-gray-300 text-gray-900 rounded hover:bg-gray-200 px-6 py-2 focus:outline-none mx-2 w-auto
}

</style>