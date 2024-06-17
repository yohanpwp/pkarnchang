import { useState,useEffect,useRef } from "react";
import axios from 'axios';

export default function Todo() {
    const [todos, setTodos] = useState([]);
    const [isLoading, setIsLoading] = useState(0);
    async function fetchTodo () {
        try{
            const response =  await axios.get("https://jsonplaceholder.typicode.com/todos");
            setTodos([response.data]);
            setIsLoading(false);
        }
        catch(error) {console.log('error',error);}
    };
    async function deleteTodo () {
        try {
            setIsLoading(true);
            await axios.delete("https://jsonplaceholder.typicode.com/todos/${id}");
            await fetchTodo();
            setIsLoading(false);
        }
        catch(error) {console.log('error',error);}
    };

    // ฟังก์ชั้น useEffect มีปีกกาคือเงื่อนไขทำแค่ครั้งเดียว
    useEffect(() => {fetchTodo()},[])
    return (
    <>
        {isLoading && (<div>Loading...</div>)}
        {!isLoading && 
        <div>
            {todos.map((todos,index) => (
                <div key={index}>
                    {todos.id} {todos.title} {todos.completed}
                <button>Edit</button>
                <button onClick={async() => {await deleteTodo(todos.id)}}>Delete</button>
                </div>
            ))}
            <h1>Todo</h1>
        </div>
        }
    </>
    )
}