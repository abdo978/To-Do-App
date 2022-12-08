import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

function Main() {

    const [users, setUsers] = useState([]);
    const [user, setUser] = useState("");
    const nav = useNavigate();

    useEffect(() => {

        axios.get("http://localhost:5000/users").then((result) => {
            setUsers(result.data)
            setUser(result.data[0].username)
        }).catch((err) => console.log(err))

    },[])


    return ( 
        <div>
            Choose username to start
            <select onChange={(e) => setUser(e.target.value) }>
                {
                    users.map( user => <option key={user._id}> {user.username} </option> )
                }
            </select>
            <input type="submit" value={`Go ${user}`} onClick={(e) => {
                e.preventDefault();
                nav(`/todo/${user}`);
            }} />
        </div>
     );
}

export default Main;