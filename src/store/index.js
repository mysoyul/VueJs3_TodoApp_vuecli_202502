import { createStore, createLogger } from "vuex";
import http from "@/common/http-common";
import axios from "axios";

export const store = createStore({
  plugins: process.env.NODE_ENV === "development" ? [createLogger()] : [],
  //상태변수를 선언하는 state 객체
  state: {
    todoItems: [],
  },
  //상태변수를 변경하는 비동기함수 (ajax 통신)를 포함하는 객체
  actions: {
    loadTodoItems({ commit }) {
      http
        .get("/todos")
        .then((response) => response.data)
        .then((items) => {
          commit("setTodoItems`", items);
        })
        .catch((error) => {
          if (axios.isAxiosError(error)) {
            console.log(error?.response?.status + " : " + error.message);
          } else {
            console.error(error);
          }
        });
    }, //loadTodoItems
  },
  //상태변수를 변경(set)하는 동기함수를 포함하는 객체
  mutations: {
    setTodoItems(state, items) {
      state.todoItems = items;
    },
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
    clearTodo(state) {
      localStorage.clear();
      state.todoItems = [];
    },
  },
});
