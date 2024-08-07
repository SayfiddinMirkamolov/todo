import React, { useState } from 'react';
import { Input, Button } from 'antd';
import useTodoStore from '../app/store';

const TodoInput = () => {
  const [text, setText] = useState('');
  const addTodo = useTodoStore((state) => state.addTodo);

  const handleAdd = () => {
    if (text.trim()) {
      addTodo({ text, complete: false });
      setText('');
    }
  };

  return (
    <div style={{ display: 'flex', marginBottom: '16px' }}>
      <Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo"
        style={{ marginRight: '8px' }}
      />
      <Button type="primary" onClick={handleAdd}>
        Add
      </Button>
    </div>
  );
};

export default TodoInput;
