<template>
  <div>

    <div class="new-item">

      <new-input @submit="data => $emit('create', data)" />

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
            :listData="todo"
        />
      </ul>
      <div class=" text-red-600">
        <DxPaging
            :enabled="allowPaging"
                  :page-size="4"
        />

        <DxPager
            :show-page-size-selector="true"
            :allowed-page-sizes="page.size"
            :show-info="false"
        />

      </div>
    </div>
  </div>
</template>
<script>
import NewInput from "@/components/NewInput";
import ListItems from "@/components/ListItems";
import {DxPager, DxPaging} from "devextreme-vue/data-grid";

export default {
  name: "Todos" ,
  components: {
    ListItems,
    NewInput,
    DxPaging,
    DxPager

  },
  data(){
    return {
      allowedPageSizes: [1, 2, 3],
      page: {
        limit: 10,
        size: [2, 4, 6, 8],

      },
      allowPaging:true

    }
  },
  props: {
    list: {
      type: Array,
      default: () => [
          name,
      ]
    }
  },
  methods: {

    }

};
</script>
