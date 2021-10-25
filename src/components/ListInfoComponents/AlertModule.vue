<template>
  <common-page
      :title-option="{uppercase: true}"
      sub-title=" "
  >

  <div slot="content">
    <div class=" flex bg-grey-light h-auto p-4 mt-5 rounded-lg text-base placeholder-gray-600 border rounded-lg focus:shadow-outline">

    <widget-table
        :data-source="dataSource"
        :allow-filtering="false"
        :columns="columns"
        action-column-text="Əməliyyat"
        :action-column-width="200"
    >
      <div slot="actionSlot" slot-scope="">
       <operation-button >
       </operation-button>
      </div>
    </widget-table>

</div>
  </div>


  </common-page>
</template>


<script>
import WidgetTable from "@/components/widgets/WidgetTable";
import OperationButton from "@/components/ListInfoComponents/OperationButton";


// const saveToLocalStorage = data =>
//     localStorage.setItem("state", JSON.stringify(data));
// const loadFromLocalStorage = () =>
//     JSON.parse(localStorage.getItem("state")) || [];
// const by = field => (a, b) =>
//     a[field] && !b[field] ? 1 : !a[field] && b[field] ? -1 : 0;

export default {
  name: "AlertModule",

  components: {
    OperationButton, WidgetTable,
},
  // mounted() {
  //   this.list = loadFromLocalStorage();
  // },
  // computed: {
  //   orderedList: function() {
  //     return this.list.slice(0).sort(by("foggy"));
  //   }
  // },
// method: {
//   create: function(data) {
//     if (data === "") return;
//     const id = Math.random()
//         .toString()
//         .slice(2);
//     const text = data;
//     this.list.push({ id, text, foggy: false });
//     this.save();
//   },
//   remove: function(id) {
//     this.list = this.list.filter(item => item.id !== id);
//   },
//
//   save: function() {
//     saveToLocalStorage(this.list);
//   },
// },
  data() {
return {
  columns: [

    {
      caption: 'Adı',
      dataField: 'name',
      show: true,

    },

  ],
  dataSource: [
    {
      id: 1,
      name: 'test 1',
    },
    {
      id: 2,
      name: 'test 2',
    },
    {
      id: 3,
      name: 'test 3',
    },
    {
      id: 4,
      name: 'test 4',
    },
    {
      id: 5,
      name: 'test 5',
    },{
      id: 6,
      name: 'test 6',
    },{
      id: 7,
      name: 'test 7',
    },{
      id: 8,
      name: 'test 8',
    },{
      id: 9,
      name: 'test 9',
    },{
      id: 10,
      name: 'test 10',
    },{
      id: 11,
      name: 'test 11',
    },

  ],
}
  },
}
</script>

<style scoped>

</style>