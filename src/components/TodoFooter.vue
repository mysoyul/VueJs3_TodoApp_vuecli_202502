<template>
    <div>
        <div class="clearAllContainer">
            <span class="clearAllBtn" @click="clearTodo">Clear All</span>
        </div>
    </div>
</template>

<script>
export default {
    //clear:todo 이름을 갖는 커스텀 이벤트 정의하기
    emits: ['clear:todo'],
    setup(props, {emit}) {
        const clearTodo = () => {
            emit('clear:todo')
        }

        return {
            clearTodo
        }
    }
}
</script>

<style scoped>
.clearAllContainer {
    width: 8.5rem;
    height: 50px;
    line-height: 50px;
    background-color: white;
    border-radius: 5px;
    margin: 0 auto;
}

.clearAllBtn {
    color: #e20303;
    display: block;
}
</style>