<template >
  <div id="app">
    <div class="container mx-auto py-10">
      <todos :list="orderedList" @create="create" @toggle="toggle" @remove="remove"/>
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
      return this.list.slice(0).sort(by("foggy"));
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
      const text = data;
      this.list.push({ id, text, foggy: false });
      this.save();
    },
    toggle: function(id) {
      const index = this.list.map(item => item.id).indexOf(id);
      if (index < 0) {
        window.alert("Təbriklər! Ediləcəklər listi bitmişdir.");
      } else {
        const list = this.list.slice(0);
        const item = list[index];
        list[index] = { ...item, ...{ foggy: !item.foggy } };
        this.list = list;
        this.save();
      }
    },
    edit: (id) => {
      this.list=this.list.findIndex(item=> item.id === id);

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

