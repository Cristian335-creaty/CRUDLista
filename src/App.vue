<template>
  <div>
    <div id="header">
      <!--<div id="nav"> 
    <b-navbar toggleable="md" type="dark" variant="danger">
      <b-container>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-navbar-brand href="#">NavBar</b-navbar-brand>
        <b-collapse is-nav id="nav_collapse">
          <router-link to="/Inico">                    Inicio </router-link>
          <router-link to="/">                  Aplicación </router-link> 
        </b-collapse>
      </b-container>

    </b-navbar>
    </div>-->
    </div>
    <div id="main-container">
      <h2>Bienvenido a Tu Lista de Deberes</h2>
      <Todos v-bind:todosList="copyTodos" v-on:delete-todo="deleteTodo" />
      <TodoApp v-on:add-todo="addTodo"/>
      <Search v-on:query-change="querySearch"/>
    </div>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

import Todos from './components/Todos.vue';
import TodoApp from './components/TodoApp';
import Search from './components/Search.vue';
export default {
  name: 'App',
  components: {
    Todos,TodoApp, Search,
    
  },
  methods:{
    deleteTodo(id){
      this.todos= this.todos.filter(todo => todo.id != id);
      this.copyTodos= [... this.todos];
    },
    addTodo(todo){
      this.todos.push(todo);
      this.copyTodos=[... this.todos];
    },
    querySearch(query){
      if(query.trim()==''){
        this.copyTodos=[... this.todos];
      }else{
        const temp =this.todos.filter(todo =>{
          return todo.title.includes(query)
        });
        this.copyTodos=[... temp]
      }
    }
  },
  data() {
    return {
      todos:[
        {
          id:0,
          title:'Comprar',
          completed: false
        },
        {
          id:1,
          title:'Sacar a pasear mascota',
          completed: true
        },
        {
          id:2,
          title:'Leer',
          completed: false
        },
        {
          id:3,
          title:'Clase Programación',
          completed: true
        },

      ],
      copyTodos:[]
    }
  },
  created(){
    this.copyTodos=[...this.todos];
  }
}
</script>

<style >
*{
  box-sizing:border-box;
}
body{
  font-family: Arial, Helvetica, sans-serif;
  font-size:1.5em;
  padding: 0;
  margin: 0;
  background-color: powderblue;
}
#main-container{
  border: solid 5px rgb(15, 29, 224);
  width: 600px;
  margin: 100px auto;
}

#header{
  background:rgb(167, 207, 226);
  padding: 50px;
}

h2{
  padding: 0 10px;
}

/*
.nav{
  list-style: none;
  padding:0;
  background:#092327;
  width: 90%;
  max-width: 1000px;
  margin: auto;
}
.nav li a{
  text-decoration: none;
  color:white;
  padding: 20px;
  display: block;
}
.nav li{
  display: inline-block;
  text-align: center;
}
.nav li a:hover{
  background: #85d4f8;
}
*/
</style>
