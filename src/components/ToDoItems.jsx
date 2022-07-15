import React from 'react'
import { BsCheck2Circle, BsTrash } from "react-icons/bs";

const ToDoItems = ({desc, setToDoList, toDoList, todo}) => {

    const deleteHandler = () => {
        setToDoList(toDoList.filter((el) => el.id !== todo.id))
    };

    const completeHandler = () =>{
        setToDoList(toDoList.map((item) => {
            if(item.id === todo.id){
                return{
                    ...item, completed: !item.completed
                };
            }
            return item;
        }));
    }

    return (
        <div className={`to-do-list-items container flex gap-7 items-center py-4 border-b text-[16px] border-b-sky-200 ${todo.completed ? "bg-[#535368] pl-3" : ""}  hover:bg-[#535368] hover:p-6 hover:border-none transition delay-10 duration-100 ease-in-out`}>
            <div onClick={completeHandler} className= {`check-icon flex cursor-pointer hover:text-cyan-400 ${todo.completed ? "text-cyan-400" : ""} `}>
                <BsCheck2Circle />
            </div>
            <div className={`task-desc flex grow ${todo.completed ? "text-cyan-400" : ""}`}>
               <p className='break-all'><span >{desc}</span></p>
            </div>
            <div onClick={deleteHandler} className="delete-icon flex cursor-pointer hover:text-red-400">
                <BsTrash />
            </div>
        </div>
    )
}

export default ToDoItems
