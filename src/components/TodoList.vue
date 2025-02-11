<template>
    <div>
        <TransitionGroup name="list" tag="ul">
            <li v-for="(todo, index) in todoItems" :key="index" class="shadow">
                <i class="fas fa-check checkBtn" :class="{ checkBtnCompleted: todo.completed }"
                    @click="toggleComplete(todo)"></i>
                <span :class="{ textCompleted: todo.completed }">{{ todo.item }}</span>
                <span class="removeBtn" @click="removeTodo(todo)">
                    <i class="fas fa-trash-alt"></i>
                </span>
            </li>
        </TransitionGroup>
    </div>
</template>

<script setup>
import { useStore } from "vuex"
import { computed, onMounted } from "vue"

//store객체를 Load하기
const store = useStore()
//store의 state객체 포함된 상태변수 가져오기
const todoItems = computed(() => store.state.moduleTodo.todoItems)

//LifeCycle Hook함수 mount된 이후에 자동으로 호출됨
onMounted(() => {
    console.log('onMounted...')
    store.dispatch("moduleTodo/loadTodoItems")
})

const removeTodo = (todoItem) => {
    //store.commit("removeTodo", { todoItem, index })
    store.dispatch("moduleTodo/removeTodo", todoItem)
}

const toggleComplete = (todoItem) => {
    todoItem.completed = !todoItem.completed
    store.dispatch("moduleTodo/toggleTodo", todoItem)
    //store.commit("toggleTodo", { todoItem, index })
}

</script>

<style scoped>
.list-enter-active,
.list-leave-active {
    transition: all 0.7s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

ul {
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: left;
}

li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
}

.removeBtn {
    margin-left: auto;
    color: #de4343;
}

.checkBtn {
    line-height: 45px;
    color: #62acde;
    margin-right: 5px;
}

.checkBtnCompleted {
    color: #b3adad;
}

.textCompleted {
    text-decoration: line-through;
    color: #b3adad;
}
</style>