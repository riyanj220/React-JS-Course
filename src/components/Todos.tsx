import { useState } from "react"


export const Todos = () => {

    const [todos , setTodos] = useState([
        {text: "todo 1", id: 1},
        {text: "todo 2", id: 2},
        {text: "todo 3", id: 3},
    ]);

    const [newTodo , setNewTodo] = useState('');

    const addItems = ()=>{
        if(newTodo.trim()!== ""){
            setTodos([
                ...todos,
                {text: newTodo , id:todos.length+1},
            ]);
            setNewTodo("");
        }
    };

    const deleteItem = (itemId: number) => {
        setTodos(todos.filter(itemEl => {
            return itemEl.id !== itemId
        }));
    }

    return(

        <>
            <section>
                <input 
                    type = 'text' 
                    placeholder= 'Enter Task'
                    value = {newTodo}
                    onChange={(e) =>{
                        setNewTodo(e.target.value)
                    }}
                    className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <button className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200" onClick={addItems}>Add Task</button>
                
                <ul>
                    {todos.map((todoItem) => {
                        return (
                            <li onClick={() => deleteItem(todoItem.id)} key={todoItem.id} className="flex items-center justify-between p-3 mb-2 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200 transition duration-150">
                                {todoItem.text}
                                <span className="text-red-500 font-bold">X</span>
                            </li>
                        );
                    })}
                </ul>
            </section>

        </>
    );
}