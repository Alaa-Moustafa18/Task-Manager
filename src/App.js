import React from 'react';
import './App.css';
import TaskContextProvider from './Contexts/TaskContext';
import TaskList from './Components/TaskList';
import Header from './Components/Header';
import TaskForm from './Components/TaskForm';

function App() {
  return (
    <TaskContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <Header />
          <div className="main">
              <TaskForm />
              <TaskList />
            </div>
          </div>
      </div>
    </TaskContextProvider>
  );
}

export default App;
