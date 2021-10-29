<template >
  <div id="app">

    <div class="container mx-auto py-10">

      <todos :list="orderedList" @create="create" @toggle="toggle" @remove="remove" @edit="edit"/>

    </div>

  </div>

</template>

<script>

import Todos from "./components/Todos"

//local storage
const saveToLocalStorage = data =>
    localStorage.setItem("state", JSON.stringify(data));
const loadFromLocalStorage = () =>
    JSON.parse(localStorage.getItem("state")) || [];
const by = field => (a, b) =>
    a[field] && !b[field] ? 1 : !a[field] && b[field] ? -1 : 0;



export default {
  name: "App",
  components: {
    Todos
  },

  mounted() {
    this.list = loadFromLocalStorage();
  },


  computed: {
    orderedList: function() {
      return this.list.slice(0).sort(by("isDone"));
    }
  },
  methods: {
    save: function() {
      saveToLocalStorage(this.list);
    },
    create: function(data) {
      if (data === "") return;
      const id = Math.random()
          .toString()
          .slice(2);
      const name = data;
      this.list.push({ id, name, isDone: false });
      this.save();
    },
    toggle: function(id) {
      const index = this.list.map(item => item.id).indexOf(id);
      if (index < 0) {
        window.alert("Təbriklər! Ediləcəklər listi bitmişdir.");
      } else {
        const list = this.list.slice(0);
        const item = list[index];
        list[index] = { ...item, ...{ isDone: !item.isDone } };
        this.list = list;
        this.save();
      }
    },


    remove: function(id) {
      this.list = this.list.filter(item => item.id !== id);
    }
  },
  data() {
    return {
      list: []
    };
  },
};

</script>

<style src="./assets/main.css" >

</style>

