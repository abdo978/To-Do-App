import axios from "axios";
import { useState } from "react";

function Todo() {
    
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [date, setDate] = useState(new Date());

    const addTodo = async () => {
        const todo = {
            title : title,
            description : desc,
            date : date
        }
        axios.post("http://localhost:5000/todos", todo).then((ress) => console.log(ress)).catch((err) => console.log(err))
    }

    return ( 
        <div className="container">
            You can add to do Here 
            <input type="text" placeholder="Title..." value={title} onChange={(e) => setTitle(e.target.value) } />
            <input type="text" placeholder="Description..." value={desc} onChange={(e) => setDesc(e.target.value) } />
            <input type="text" value={date} onChange={(e) => setDate(new Date(e.target.value)) } />
            <input type="date" placeholder="dd-mm-yyyy" />
            <input type="submit" value="Add" onClick={() => addTodo()} />
        </div>
     );
}

export default Todo;