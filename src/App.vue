<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoFooter @clear:todo="clearTodo"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from '@/components/TodoHeader.vue';
import TodoInput from '@/components/TodoInput.vue';
import TodoList from '@/components/TodoList.vue';
import TodoFooter from '@/components/TodoFooter.vue';
import { reactive } from 'vue';

export default {
  components: {
    TodoHeader, TodoInput, TodoList, TodoFooter
  },

  setup() {
    const todoItems = reactive([]);

    const clearTodo = () => {
      localStorage.clear()
      //reactive() 함수로 정의한 변수 todoItems = [] 초기화 않됨 
      todoItems.splice(0)  
    }

    return { todoItems, clearTodo };
  }, //setup

} //export default
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  text-align: center;
  background-color: #f6f6f6;
}

input {
  border-style: groove;
  width: 200px;
}

button {
  border-style: groove;
}

.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
i,span {
  cursor: pointer;
}
</style>
