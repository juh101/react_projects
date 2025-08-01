import { useState } from "react";
import { useTodo } from "../src/contexts/TodoContext";


function TodoForm() {
    const [todo, setTodo] = useState('')
    const { addTodo } = useTodo()

    const add = (e) => {
        e.preventDefault();           // Prevents page reload when form submits

        if (!todo) return;            // If input is empty, do nothing

        addTodo({                     // Call the addTodo function with:
            todo: todo,                 // the current input value
            completed: false            // and mark it as not completed
        });
        console.log(todo);
        setTodo("");                  // Clear the input box after submission
    };


    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;