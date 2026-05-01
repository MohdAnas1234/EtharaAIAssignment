import { useEffect, useState } from "react";
import API from "../services/api";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await API.get("/tasks");
    setTasks(res.data);
  };

  const updateStatus = async (id, status) => {
    await API.patch(`/tasks/${id}`, { status });
    fetchTasks();
  };

  const total = tasks.length;
  const completed = tasks.filter(t => t.status === "done").length;
  const overdue = tasks.filter(
    t => new Date(t.dueDate) < new Date() && t.status !== "done"
  ).length;

  return (
    <div>
      <h2>Dashboard</h2>

      <p>Total: {total}</p>
      <p>Completed: {completed}</p>
      <p>Overdue: {overdue}</p>

      <hr />

      <h3>Your Tasks</h3>

      {tasks.map(t => (
        <div key={t._id}>
          <p>{t.title}</p>
          <p>Status: {t.status}</p>

          <select onChange={(e) => updateStatus(t._id, e.target.value)}>
            <option>Change Status</option>
            <option value="todo">Todo</option>
            <option value="in-progress">In Progress</option>
            <option value="done">Done</option>
          </select>
        </div>
      ))}
    </div>
  );
}