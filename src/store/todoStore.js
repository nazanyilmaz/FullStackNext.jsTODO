import { create } from "zustand";

export const useTodoStore = create((set) => ({
  todos: [],

  fetchTodos: async () => {
    try {
      const res = await fetch("/api/todos");
      const result = await res.json();
      set({ todos: result.data });
    } catch (error) {
      console.log("fetchTodos", error);
    }
  },

  addTodo: async (todo) => {
    try {
      const res = await fetch("/api/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(todo),
      });
      const newTodo = await res.json();
      set((state) => ({ todos: [...state.todos, newTodo] }));
    } catch (error) {
      console.log("addTodo", error);
    }
  },

  fetchTodo: async (id) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/todos/${id}`);
      const result = await res.json();
      set({ currentTodo: result });
      return result;
    } catch (error) {
      console.log("fetchTodo", error);
    }
  },
  updateTodo: async (id, updates) => {
    try {
      const res = await fetch(`/api/todos/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updates),
      });
      const updated = await res.json();
      set((state) => ({
        todos: state.todos.map((todo) => (todo.id === id ? updated : todo)),
      }));
    } catch (error) {
      console.log("updateTodo", error);
    }
  },

  deleteTodo: async (id) => {
    try {
      await fetch(`/api/todos/${id}`, { method: "DELETE" });
      set((state) => ({
        todos: state.todos.filter((todo) => todo.id !== id),
      }));
    } catch (error) {
      console.log("deleteTodo", error);
    }
  },
}));
