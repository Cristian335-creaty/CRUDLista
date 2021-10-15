<template>
    <div>
        <div v-bind:key="todo.id" v-for="todo in todosList">
            <TodoItem v-bind:todo="todo" v-on:delete-todo="$emit('delete-todo', todo.id)" />
        </div>
    </div>
</template>

<script>

import TodoItem from './TodoItem.vue'
export default {
  components: { TodoItem },
    name:'Todos',
    props:['todosList'],
}
</script>
<style scoped>

</style>