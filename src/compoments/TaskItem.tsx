import { useState } from "react";
import type { Task } from "../tyeps/type";

interface Props {
  task: Task
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, newTitle: string) => void;
}

const TaskItem = ({ task, onToggle, onDelete, onEdit }: Props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);

  const handleSave = () => {
    if (!editedTitle.trim()) return;
    onEdit(task.id, editedTitle);
    setIsEditing(false);
  };

  return (
    <div className="flex justify-between items-center border p-2 mb-2">
      {isEditing ? (
        <input
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
          className="border p-1 flex-1 mr-2"
        />
      ) : (
        <span
          onClick={() => onToggle(task.id)}
          className={`cursor-pointer flex-1 ${
            task.completed ? "line-through text-gray-500" : ""
          }`}
        >
          {task.title}
        </span>
      )}

      {isEditing ? (
        <>
          <button onClick={handleSave} className="text-green-600 mr-2">
            Save
          </button>
          <button onClick={() => setIsEditing(false)} className="text-gray-500">
            Cancel
          </button>
        </>
      ) : (
        <>
          <button
            onClick={() => setIsEditing(true)}
            className="text-blue-600 mr-2"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(task.id)}
            className="text-red-500"
          >
            Delete
          </button>
        </>
      )}
    </div>
  );
};

export default TaskItem;
