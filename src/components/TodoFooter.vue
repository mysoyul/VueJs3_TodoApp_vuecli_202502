<template>
    <div>
        <div class="clearAllContainer">
            <span class="clearAllBtn" @click="clearTodo">Clear All</span>
        </div>
    </div>
</template>

<script>
import { useStore } from "vuex"

export default {
    setup() {
        const store = useStore()

        const clearTodo = () => {
            store.commit("clearTodo")
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