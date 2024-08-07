import React from 'react';
import { Layout } from 'antd';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

const { Header, Content } = Layout;

function App() {
  return (
    <Layout style={{ height: '100vh' }}>
      <Header style={{ color: 'white', textAlign: 'center' }}>
        Todo App
      </Header>
      <Content style={{ padding: '50px', maxWidth: '600px', margin: '0 auto' }}>
        <TodoInput />
        <TodoList />
      </Content>
      <ToastContainer position="top-right" autoClose={3000} />
    </Layout>
  );
}

export default App;
