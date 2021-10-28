<template>
  <div>

    <div class="new-item">

      <new-input @submit="data => $emit('create', data)"/>

      <ul>
        <div class=" m-5">
        <div class="inline-block float-left font-bold ml-2 mb-2">Adı</div>
        <div class="inline-block float-right font-bold mr-4 mb-2">Əməli̇yyatlar</div>
        </div>
        <list-items
            v-for="todo in list"
            :key="todo.id"
            @toggle="id => $emit('toggle', id)"
            @remove="id => $emit('remove', id)"
            @edit="id => $emit('edit', id)"
            :test="todo"
        />
      </ul>
    </div>
  </div>
</template>
<script>
import NewInput from "@/components/NewInput";
import ListItems from "@/components/ListItems";

export default {
  name: "Todos" ,
  components: {
    ListItems,
    NewInput
  },
  props: {
    list: {
      type: Array,
      default: () => []
    }
  }
};
</script>
