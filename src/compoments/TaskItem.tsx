import type { Task } from "../tyeps/type";


interface Props {
  task: Task
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TaskItem = ({ task, onToggle, onDelete }: Props) => {
  return (
    <div className="flex justify-between items-center border p-2 mb-2">
      <span
        onClick={() => onToggle(task.id)}
        className={`cursor-pointer ${task.completed ? "line-through text-gray-500" : ""}`}
      >
        {task.title}
      </span>

      <button
        onClick={() => onDelete(task.id)}
        className="text-red-500"
      >
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
