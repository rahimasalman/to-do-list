<template>
  <div class="w-3/2">
<alert-module/>
  <list-items/>
  </div>
</template>

<script>
import AlertModule from "@/components/ListInfoComponents/AlertModule";
import ListItems from "@/components/ListInfoComponents/ListItems";
export default {
  name: "ListInformation",
  components: { ListItems, AlertModule},
}
</script>

<style scoped>

</style>