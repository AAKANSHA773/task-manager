import { useEffect, useState } from "react";
import type { Task } from "../tyeps/type";
import { loadTasks, saveTasks } from "../utils/storage";
import TaskForm from "./TaskFrom";
import TaskList from "./TaskList";

function TaskManager() {
    const [tasks, setTasks] = useState<Task[]>(() => loadTasks());

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const addTask = (title: string) => {
    setTasks(prev => [
      {
        id: crypto.randomUUID(),
        title,
        completed: false
      },
      ...prev
    ]);
  };

  const toggleTask = (id: string) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  return (
    <div className="max-w-xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Task Manager</h1>

      <TaskForm onAdd={addTask} />
      <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
    </div>
  );
}

export default TaskManager;
