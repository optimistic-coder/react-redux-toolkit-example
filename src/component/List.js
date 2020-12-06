
import React, { useState, useEffect } from 'react'
import '../App.css';
import { AddTodo } from '../redux-toolkit/listSlice';
import { useSelector, useDispatch } from "react-redux";

function List() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("")
    const [data, setData] = useState([])

    const dispatch = useDispatch()
    const post = () => {
        dispatch(AddTodo(name)) //calling slice (reducers)
        setCount(count + 1)
    }


    const arr = useSelector(state=>{
        return state.listSlice
    })

    const handleChange = (e) => {
        e.preventDefault();
        setName(e.target.value)
    }

console.log(arr)
    return ( <div className = "List" >
         {
        arr.map(text => {
                return ( 
                <li> { text.text } </li>)
                })
        }
        < input onChange = { handleChange }
        /> <button onClick = {() => {
            post()
        }
    } > Click </button> </div > );
}

export default List;