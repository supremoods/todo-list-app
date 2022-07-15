import React from 'react';
// components
import ToDoItems from './ToDoItems';
import EmptyImg from '../vendors/img/empty.svg';
const TodoList = ({toDoList, setToDoList, filterToDoList, taskCount}) => {
    return (
        <div className="to-do-container flex flex-col container my-6 md:h-full h-full overflow-auto ">
            <div className="to-do-list flex flex-col p-7">

                <div className={`flex flex-col justify-center items-center ${taskCount > 0 ? "hidden" : ""}`}>
                    <img className=" md:h-96 h-[300px]"src={EmptyImg} alt="empty"/>
                    <span className="text-lg font-bold">Empty Task</span>
                </div>
      
                {filterToDoList.map((todo) => (
                    <ToDoItems 
                        desc = {todo.text}
                        key = {todo.id}
                        setToDoList = {setToDoList}
                        toDoList = {toDoList}
                        todo = {todo}
                    />
                ))}

            </div>
        </div>
    )
}

export default TodoList
