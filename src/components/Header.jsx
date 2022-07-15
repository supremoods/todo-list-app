import React from 'react'
const Header = ({currentDate, currentTime, setStatus, status, toDoList}) => {

    const statusComplete = () => {
        if(status !== "completed"){
            setStatus("completed")
        }else{
            setStatus("all");
        }
    }

    const statusUnComplete = () => {
        if(status !== "uncompleted"){
            setStatus("uncompleted");
        }else{
            setStatus("all");
        }
    }

    return (
        <div className="flex p-7 gap-9">
            <div className="flex flex-col items-start grow colum">
                <span className="font-bold text-lg">{currentDate}</span>
                <span className="font-bold text-lg">{currentTime}</span>
                <span className="text-cyan-400">{toDoList} Active Tasks</span>
            </div>
            <div className="flex md:flex-row flex-col md:gap-9 gap-2">
                <span onClick={statusUnComplete} className={`cursor-pointer ${status === "uncompleted" ? "text-cyan-400" : ""}`}>Incomplete Tasks</span>
                <span onClick={statusComplete} className={`cursor-pointer ${status === "completed" ? "text-cyan-400" : ""}`}>Completed Tasks</span>
            </div>
        </div>
    )
}

export default Header
