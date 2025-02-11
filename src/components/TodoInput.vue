<template>
    <div class="inputBox shadow">
        <input type="text" :value="newTodoItem" @input="handleInput" @keyup.enter="addTodo">
        <span class="addContainer" @click="addTodo">
            <i class="fas fa-plus addBtn"></i>
        </span>
        <MyModal v-if="showModal" @close="showModal = false">
            <template v-slot:header>
                <h3>
                    경고!
                    <i class="closeModalBtn fas fa-times" @click="showModal = false"></i>
                </h3>
            </template>
            <template v-slot:body>
                <div>아무것도 입력하지 않으셨습니다.</div>
            </template>
        </MyModal>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import MyModal from './common/MyModal.vue'

const showModal = ref(false)

const newTodoItem = ref("")
//input:todo를 이름을 갖는 커스텀 Event를 정의하기
//const emit = defineEmits(["input:todo"])

//add:todo를 이름을 갖는 커스텀 Event를 정의하기
const emit = defineEmits(["add:todo"])

//Event Handler 함수
const handleInput = (event) => {
    //텍스트필드에 사용자가 입력한 값을 todoText 임시변수에 저장
    const todoText = event.target.value
    if (!todoText) return
    //input:todo를 이름을 갖는 커스텀 Event를 발생시키기
    //emit("input:todo", todoText)
    /*
        ref()로 선언한 변수에 값을 저장할때는 .value 속성을 사용합니다.
        사용자가 입력한 값을 newTodoItem 상태변수에 저장합니다.
    */
    newTodoItem.value = todoText
}
const addTodo = () => {
    if (newTodoItem.value !== "") {
        const todoItem = newTodoItem.value
        emit('add:todo', todoItem)
        clearInput()
    } else {
        showModal.value = !showModal.value
    }
}

const clearInput = () => {
    newTodoItem.value = ""
}

</script>

<style scoped>
input:focus {
    outline: none;
}

.inputBox {
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
}

.inputBox input {
    border-style: none;
    font-size: 0.9rem;
    width: 80%;
}

.addContainer {
    float: right;
    background: linear-gradient(to right, #6478FB, #8763FB);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
}

.addBtn {
    color: white;
    vertical-align: middle;
}

.closeModalBtn {
    color: #42b983;
}
</style>