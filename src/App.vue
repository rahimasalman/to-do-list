<template >
  <div id="app">
   <div class=" container  mx-auto">
     <h1 class=" flex m-4 pr-52 text-2xl font-semibold"> Simple to do list </h1>
     <div>
     <create-information/></div>
     <div class="mt-2 w-3/2 p-15 mr-16 h-auto">
     <list-information/>
   </div>
</div>
  </div>

</template>

<script>


import CreateInformation from "@/components/CreateInformation";
import ListInformation from "@/components/ListInformation";

export default {
  name: "App",
  components: {
    ListInformation,
    CreateInformation,
  },
};

</script>

<style>
/*.model-open{*/
/*  overflow: hidden;*/
/*  height: 100vh;*/
/*}*/
</style>

