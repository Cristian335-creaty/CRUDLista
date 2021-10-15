<template>
    <div id="app-container">
        <h2>Agregar Deberes</h2>
        <form @submit="addTodo">
            <input type="text" v-model="title">
        </form>
    </div>
</template>
<script>
import { uuid } from 'vue-uuid';
export default {
    name:'TodoApp',
    data(){
        return{
            title:''
        }
    },
    methods:{
        addTodo(e){
            e.preventDefault();
            const newTodo ={
                id: uuid.v4(),
                title: this.title,
                completed: false
            };
            this.title='';
            this.$emit('add-todo',newTodo);
        }
    }
}
</script>
<style scoped>
    #add-container{
        padding: 10px;
    }
    input{
        padding: 10px;
        outline: none;
        border: solid 1px #ccc;
        width: 100%;
        
    }
</style>