import { createStore, createLogger } from "vuex";

const storage = {
  fetch() {
    const arr = [];
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key !== "__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS_STATE__") {
          const itemJson = localStorage.getItem(key);
          arr.push(JSON.parse(itemJson));
        }
      }
    }
    return arr;
  },
};

export const store = createStore({
  plugins: process.env.NODE_ENV === "development" ? [createLogger()] : [],
  //상태변수를 선언하는 state 객체
  state: {
    todoItems: storage.fetch(),
  },
  //상태변수를 변경(set)하는 동기함수를 포함하는 객체
  mutations: {
    addTodo(state, todoItem) {
      const obj = { completed: false, item: todoItem };
      localStorage.setItem(todoItem, JSON.stringify(obj));
      state.todoItems.push(obj);
    },
    removeTodo(state, payload) {
      const { todoItem, index } = payload;
      localStorage.removeItem(todoItem.item);
      state.todoItems.splice(index, 1);
    },
    toggleTodo(state, payload) {
      const {
        todoItem: { completed, item },
        index,
      } = payload;

      state.todoItems[index].completed = !completed;
      localStorage.removeItem(item);
      localStorage.setItem(item, JSON.stringify(state.todoItems[index]));
    },
  },
  //상태변수를 변경하는 비동기함수 (ajax 통신)를 포함하는 객체
  actions: {},
});
