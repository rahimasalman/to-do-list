<template>
  <input
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-gray-50"
      :type="type"
      :placeholder="placeholder"
      v-model="listData"
      @click="$emit('submit')"
  >
</template>

<script>
export default {
  name: "OperationButton",
  computed: {
    listData: {
      get: function() {
        return this.value;
      },
      set: function(val) {
        this.$emit("input", val);
      }
    }
  },
  props: {
    placeholder: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "name"
    },
    value: {
      type: String,
      default: ""
    }
  }
}
</script>

<style scoped>

</style>