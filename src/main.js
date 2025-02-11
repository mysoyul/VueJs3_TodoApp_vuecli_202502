import { createApp } from 'vue'
import App from '@/App.vue'
import { store } from "@/store"

createApp(App)
//App컴포넌트가 store객체를 사용할 수 있도록 주입(injection)하기
.use(store)
.mount('#app')
