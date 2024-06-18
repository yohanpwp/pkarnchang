import { useState,useEffect,useRef } from "react";
import axios from 'axios';

export default function Todo() {
    const [todos, setTodos] = useState([]);
    const [isLoading, setIsLoading] = useState(0);
    async function fetchTodo () {
        try{
            const response =  await axios.get("https://667008e90900b5f8724922a6.mockapi.io/v1/userList");
            setTodos([response.data]);
            setIsLoading(false);
        }
        catch(error) {console.log('error',error);}
    };
    async function deleteTodo (id) {
        try {
            setIsLoading(true);
            await axios.delete("https://667008e90900b5f8724922a6.mockapi.io/v1/userList/:id");
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
        {!isLoading && <div>
            {todos.map((todo,index) => (
                <div key={index}>
                    {todo.id} {todo.title} {todo.completed}
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
