import React, {useState} from 'react'

class Todo {
    constructor(str){
        this.text = str;
        this.completed = false;
    }

    toggleCompleted(){
        this.completed = !this.completed;
    }
}

const Todos = () => {
    const [input, setInput] = useState('');
    const [todos, setTodos] = useState([]);

    function handleSubmit(event){
        event.preventDefault();

        const newTodo = new Todo(input);
        setTodos([...todos, newTodo]);


        setInput('');
    }

    function toggleCompleted(i){
        const todo = todos[i];
        todo.toggleCompleted();

        setTodos([...todos]);
    }

    function handleDelete(index){
        const filtered = todos.filter((_, i) => i != index);
        setTodos(filtered);

    }

   
    return (
        <>
        <form onSubmit={handleSubmit}>
            <input 
            value={input}
            onChange={e => setInput(e.target.value)}
            />
            <button>Add</button>
        </form>
        {todos.map((todo, i) => (
           <div key={i}>
               <span style={{ textDecoration:todo.completed ? "line-through" : 'none'}}>{todo.text}</span>
               
               <input 
               type="checkbox" 
               checked={todo.completed}
               onChange={() => toggleCompleted(i)}
               />
               <button onClick={() => handleDelete(i)}>Delete</button>
           </div> 
        ))}
            
        </>
    )
}

export default Todos
