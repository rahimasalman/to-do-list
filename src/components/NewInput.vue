<template>
  <div class="flex bg-grey-light h-auto p-4 mt-4 rounded-lg text-base placeholder-gray-600 border rounded-lg focus:border-gray-50">
    <div class="new-input flex column ">
    <operation-button
        id="test" name="test"  v-model="test"
        type="input"
        maxlength = "70"
        autocomplete="false"
        :required="requiredText()"
        placeholder="Daxil edin"
        @submit="submitTest"/>
    <add-button class="add-button font-normal bg-green-500 w-auto ml-2 w-1/6  text-white hover:bg-green-600 " type="button" @click="submitTest()">
   <i class="fa fa-plus  text-white font-normal"></i>  Əlavə et
    </add-button>
      <span style="color:red;font-size:12px">{{naming}}</span> <br>
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
      test: "",

    };
  },

  methods: {

    submitTest() {
      this.$emit("submit", this.test);
      this.test = "";},
  requiredText() {
        if (this.test === '') {
          this.naming = 'Name cannot be empty. Please fill out this field.'
          return this.naming;
        } else {
          return this.naming = '';
        }


}
    },
    computed: {

    }


}
</script>

<style>

.new-input {
  @apply w-full
  h-14
}



</style>