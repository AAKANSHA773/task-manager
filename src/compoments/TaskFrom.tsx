import { useState } from "react";

interface Props {
  onAdd: (title: string) => void;
}

const TaskForm = ({ onAdd }: Props) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter a task"
        className="border p-2 flex-1"
      />
      <button className="bg-blue-500 text-white px-4">Add</button>
    </form>
  );
};

export default TaskForm;
