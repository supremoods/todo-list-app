import React, {useState, useEffect} from 'react';
import './App.css';

// components
import Header from './components/Header';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [currentDate, getCurrentDate] = useState("");
  const [currentTime, getCurrentTime] = useState("");
  const [inputText, setInputText] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const [filterToDoList, setFilterToDoList] = useState([]);
  const [status, setStatus] = useState("all");

  useEffect(()=>{
    getDateTime();
  });

  useEffect(() =>{
    getLocalTodos();
  }, []);

  useEffect(() =>{
    filterHandler();
    saveLocalTodos();
  }, [toDoList, status]);

  const getDateTime = () =>{
    const date = new Date();
    getCurrentDate(date.toDateString());
    getCurrentTime(date.toLocaleTimeString());
  };

  setInterval(getDateTime, 1000);

  const filterHandler = () => {
    switch(status){
      case "completed":
        setFilterToDoList(toDoList.filter((todo)=> todo.completed === true));
        break;
      case "uncompleted":
        setFilterToDoList(toDoList.filter((todo)=> todo.completed === false));
        break;
      default:
        setFilterToDoList(toDoList);
        break;
    }
  }

  const saveLocalTodos = () =>{
    localStorage.setItem("toDoList", JSON.stringify(toDoList));
  }

  const getLocalTodos = () =>{
    if(localStorage.getItem("toDoList") === null){
      localStorage.setItem("toDoList", JSON.stringify([]));
    }else{
      let todoLocal = localStorage.getItem("toDoList");
      setToDoList(JSON.parse(todoLocal));
    }
  }


  return (
    <div className="App md:container flex justify-center items-center md:min-h-[100vh] h-[100vh] min-w-full bg-[#ffffff]">
      <div className="container flex flex-col todo-list-wrapper bg-[#383847] w-full md:w-[1200px] md:h-[50rem] md:rounded-[10px] h-full shadow-2xl text-slate-200">
          <Header 
            currentDate = {currentDate}
            currentTime = {currentTime}
            setStatus = {setStatus}
            status = {status}
            toDoList = {toDoList.length}
          />
          <Form 
            inputText = {inputText}
            setInputText = {setInputText}
            toDoList = {toDoList}
            setToDoList = {setToDoList}
          />
          <TodoList 
            setToDoList = {setToDoList}
            toDoList = {toDoList}
            taskCount = {toDoList.length}
            filterToDoList = {filterToDoList}
          />
      </div>
    </div>
  );
}

export default App;
