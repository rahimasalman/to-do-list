<template>
  <div class="flex bg-grey-light h-auto p-4 mt-4 rounded-lg text-base placeholder-gray-600 border rounded-lg focus:border-red-50">
    <div class=" test new-input flex column ">
    <operation-button
        class="mt-2"
        id="listData" name="listData"  v-model="listData"
        type="input"
        maxlength = "70"
        autocomplete="false"
        :required="true"
        placeholder="Daxil edin"
        @submit="submitTest"/>
      <span class="block text-red-400 text-sm m-2">{{naming}}</span>

    <add-button class="add-button font-normal bg-green-500 w-auto ml-2 w-1/6  text-white hover:bg-green-600 " type="button" @click="submitTest()">
   <i class="fa fa-plus  text-white font-normal"></i>  Əlavə et
    </add-button>

    </div>
  </div>

</template>

<script>
import AddButton from "@/components/AddButton";
import OperationButton from "@/components/OperationButton";
export default {
  name: "NewInput",
  components: {
    OperationButton,
    AddButton
  },
  data() {
    return {
      listData: "",
      naming: ""
    }
  },

  methods: {

    submitTest()
      {
        this.$emit("submit", this.listData);
        this.listData = "";

        if (this.listData ==='') {
          this.naming = 'Please fill out this field.'
          this.test ="test focus:border-red-600"
          return this.naming && this.test;
        } else {
          return this.naming = "";
        }
      },
    },

}
</script>

<style>

.new-input {
  @apply w-full
  h-14
}



</style>