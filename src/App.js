import React, {useState} from "react";
import './app.css';
import TaskForm from "./components/TaskForm";
import TaskItem from "./components/TaskItem";
import TaskList from "./components/TaskList";
import FilterCategory from "./components/FilterCategory";
import AddedTasks from "./components/AddedTasks";

const App = () =>{
  const [tasks, setTasks] = useState([]); // array of tasks
  const [selectedCategory,setSelectedCategory] = useState('all');

  const addTask = (text) =>{
    const task ={
      id: new Date().getTime(),
      text,
      category:selectedCategory,
      dueDate:null, // add due date logic here 
    };

    setTasks([...tasks,task]);
  }
  const deleteTask = (taskId) =>{
    setTasks(tasks.filter((task)=> task.id !== taskId));
  }

  const categories = ['all','personal','work'];

  const filteredTask = selectedCategory === 'all'
    ? tasks
    : tasks.filter((task)=>{ return task.category===selectedCategory});
  
  return(
    <div className="App">
      <h1>Todo List App</h1>
      <TaskForm onAddTask={addTask} />
      <FilterCategory
        categories={categories}
        selectedCategories={selectedCategory}
        onSelectCategories={setSelectedCategory}
      />
      <AddedTasks tasks = {tasks} onDelete={deleteTask} />
      <TaskList tasks={filteredTask} onDelete={deleteTask}/>
    </div>
  )
}


export default App;