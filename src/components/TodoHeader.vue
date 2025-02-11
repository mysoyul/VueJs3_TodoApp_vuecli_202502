<template>
    <header>
        <h1>TODO it! ({{ mode }})</h1>
    </header>
</template>

<script>
export default {
    setup() {
        //VUE_APP_TITLE 환경변수 가져오기
        const mode = process.env.VUE_APP_TITLE
        return { mode }
    }
}
</script>

<style scoped>
h1 {
    color: #2F3852;
    font-weight: 900;
    margin: 2.5rem 0 1.5rem;
}
</style>