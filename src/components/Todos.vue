<template>
  <div>
    <div class="new-item">
      <new-input @submit="data => $emit('create', data)"/>
      <ul>
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
