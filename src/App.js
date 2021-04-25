import React from 'react'
import TodoList from './components/TodoList'
import './App.css';



const App = () => {
    return (
        <>
            <div className="todo-app">
                <TodoList />
            </div>
            <div className="footer">
                <p>Made with &hearts; by Estefanía De Rosa Gil</p>
            </div>
            </>
        
    )
}

export default App;
