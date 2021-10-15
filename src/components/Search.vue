<template>
    <div id="search-container">
        <h2>Buscador</h2>
        <input type="text" v-model="query" v-on:input="$emit('query-change',query)">
    </div>
</template>
<script>
export default {
    name:'Search',
    data() {
        return {
            query:''
        }
    },

}
</script>
<style scoped>
    #search-container{
        width: 592px;
        margin:0px auto;
        border: solid 1px rgb(15, 29, 224);
        background-color: powderblue;
    }
    input{
        padding: 10px;
        width: 100%;
        outline: none;
    }
</style>