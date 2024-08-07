import React from 'react';
import { List, Button } from 'antd';
import useTodoStore from '../app/store';

const TodoItem = ({ todo }) => {
  const deleteTodo = useTodoStore((state) => state.deleteTodo);
  const toggleComplete = useTodoStore((state) => state.toggleComplete);

  return (
    <List.Item
      actions={[
        <Button type="link" onClick={() => toggleComplete(todo.id)}>
          {todo.complete ? 'Undo' : 'Complete'}
        </Button>,
        <Button type="link" danger onClick={() => deleteTodo(todo.id)}>
          Delete
        </Button>,
      ]}
    >
      <span style={{ textDecoration: todo.complete ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
    </List.Item>
  );
};

export default TodoItem;
