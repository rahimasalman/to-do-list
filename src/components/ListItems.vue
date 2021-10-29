<template>

  <div>

  <li
      class="flex row items-center justify-between w-full py-1 px-4 my-1 rounded border text-black"
  >
    <div class="items-center column">

      <span :class="{'line-through': listData.isDone === true}">{{ listData.name }}</span>
    </div>
    <div class="items-center flex">
      <span class="" @click="toggleButton(listData.id)">
        <i
            :class="checkButton"></i>
      </span>
      <span class=" " @click="$emit('edit', listData.id)">
        <i class="fa fa-pencil hover:bg-blue-600"></i>
      </span>
      <span class=""  @click="$emit('remove', listData.id)">
        <i class="fa fa-trash hover:bg-red-600"/>
      </span>
    </div>

  </li>



  </div>
</template>

<script>

export default {
  name: "ListItems",
  components:{

  },
  data() {
    return {
      alertModule: true,
      checkButton: 'fa fa-check hover:bg-green-600 ',
      editList: null,


    }
  },
  props: {
    listData: {type: Object, required: true}
  },
  methods: {
    toggleButton(id) {
      if (this.checkButton === 'fa fa-check hover:bg-green-600 ') {
        this.$emit('toggle', id)
        this.checkButton = 'fa fa-times hover:bg-yellow-600'
      } else if (this.checkButton === 'fa fa-times hover:bg-yellow-600') {
        this.$emit('toggle', id)
        this.checkButton = 'fa fa-check hover:bg-green-600 '
      }else if ( this.$emit('toggle', id)) {
        this.checkButton = 'fa fa-times hover:bg-yellow-600'
      }
      },


  },
  // created() {
  //   const self = this;
  //   if (self.pageLimit) self.page.limit = self.pageLimit;
  //   if (self.pageSize) self.page.size = self.pageSize;
  // },
}
    // alertModule(list = null){
    //   if (list){
    //     this.alertModule = 'Redaktə etmək';
    //     this.alertModule = true;
    //   }
    // },
    // close() {
    //   this.alertModule = false;
    // },


</script>

<style scoped>

</style>