<template>
<div class=" w-3/2 p-15 mr-16 h-auto">
  <div class="flex bg-grey-light h-auto p-4 mt-4 rounded-lg text-base placeholder-gray-600 border rounded-lg focus:shadow-outline">
    <DxTextBox
        v-model="test"
        :max-length="70"
        width="1300"
        placeholder="Daxil edin"/>
    <DxRequiredRule message= "Bu bölmə doldurulmalıdır!"/>
    <DxAsyncRule
        :validation-callback="asyncValidation"
        message="Bu mövzu artıq mövcuddur."
    />
         &nbsp;&nbsp;
    <DxButton
        icon="plus"
        type="success"
        text="Əlavə et"

    />

  </div>


</div>
</template>

<script>
import DxTextBox from 'devextreme-vue/text-box'
import DxButton from "devextreme-vue/button";
import {DxAsyncRule, DxRequiredRule} from "devextreme-vue/form";


export default {
  name: "NewInput",
  components: {
    DxTextBox, DxButton,DxRequiredRule,DxAsyncRule,
  },
  data() {
    return {
       test:""
    }
  },
  computed: {
    // test: {
    //   get: function() {
    //     return this.value;
    //   },
    //   set: function(val) {
    //     this.$emit("input", val);
    //   }
    // }
  },
methods: {
  //
  // asyncValidation(params) {
  //   return sendRequest(params.value);
  // },
  // submitTest: function() {
  //   this.test("submit", this.test);
  //   this.test = "";
  // }
}
}
</script>

<style scoped>

</style>