import React, { useEffect } from 'react';
import { List } from 'antd';
import useTodoStore from '../app/store';
import TodoItem from './TodoItem';

const TodoList = () => {
  const todos = useTodoStore((state) => state.todos) || [];
  const fetchTodos = useTodoStore((state) => state.fetchTodos);
  const searchQuery = useTodoStore((state) => state.searchQuery) || '';

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  const filteredTodos = todos.filter((todo) => {
    const todoText = todo.text ? todo.text.toLowerCase() : '';
    return todoText.includes(searchQuery.toLowerCase());
  });

  return (
    <List
      bordered
      dataSource={filteredTodos}
      renderItem={(todo) => <TodoItem key={todo.id} todo={todo} />}
    />
  );
};

export default TodoList;
