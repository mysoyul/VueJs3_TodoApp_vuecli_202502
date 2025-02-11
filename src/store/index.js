import { createStore, createLogger } from "vuex";
import { moduleTodo } from "./modules/moduleTodo";

export const store = createStore({
  plugins: process.env.NODE_ENV === "development" ? [createLogger()] : [],
  modules: {
    moduleTodo
    //todo:moduleTodo
  }
});
