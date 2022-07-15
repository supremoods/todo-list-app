import React from 'react'
import uuid from 'react-uuid'
import { BsPlusCircle } from "react-icons/bs";
const Form = ({inputText, setInputText, setToDoList, toDoList, setStatus}) => {
   
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };

    const submitTodoHandler = (e) =>{
        e.preventDefault();
        if(inputText !== ""){
            setToDoList([
                ...toDoList, {text: inputText, completed: false, id: uuid()}
            ])
            setInputText("");
            
        }
    }

    return (
        <form className="container flex px-7 gap-3 ">
            <input type="text" placeholder='Enter a Task' value={inputText} onChange={inputTextHandler} className="rounded-[5px] h-[2rem] w-96 px-3 text-[#1e4352] focus:outline-none"/>
            <button type="submit" onClick={submitTodoHandler} className="bg-[#339ab9] px-4 rounded-[10px] text-[#d9f8f3] font-bold"><span className="md:block hidden">Add Task</span><span className="md:hidden "><BsPlusCircle/></span></button>
        </form>
    )

}

export default Form
