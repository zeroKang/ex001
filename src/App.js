import React from 'react';
import logo from './logo.svg';
import './App.css';
import FakeLogin from './components/FakeLogin';
import Dashboard from './components/Dashboard';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <Dashboard></Dashboard>
      <FakeLogin></FakeLogin>
      <TodoInput></TodoInput>
      <TodoList></TodoList>
    </div>
  );
}

export default App;
