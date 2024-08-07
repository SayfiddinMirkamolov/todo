import create from 'zustand';
import axios from 'axios';
import { toast } from 'react-toastify';

const useTodoStore = create((set) => ({
  todos: [],
  fetchTodos: async () => {
    const response = await axios.get('http://localhost:3000/todos');
    set({ todos: response.data });
  },
  addTodo: async (todo) => {
    const response = await axios.post('http://localhost:3000/todos', todo);
    set((state) => ({ todos: [...state.todos, response.data] }));
    toast.success('Todo added successfully!');
  },
  deleteTodo: async (id) => {
    await axios.delete(`http://localhost:3000/todos/${id}`);
    set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) }));
    toast.info('Todo deleted.');
  },
  toggleComplete: async (id) => {
    const todo = await axios.get(`http://localhost:3000/todos/${id}`);
    const updatedTodo = { ...todo.data, complete: !todo.data.complete };
    const response = await axios.put(`http://localhost:3000/todos/${id}`, updatedTodo);
    set((state) => ({
      todos: state.todos.map((todo) => (todo.id === id ? response.data : todo)),
    }));
    toast.success('Todo updated.');
  },
}));

export default useTodoStore;
