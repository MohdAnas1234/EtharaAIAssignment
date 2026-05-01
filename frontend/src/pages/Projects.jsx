import { useEffect, useState } from "react";
import API from "../services/api";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [title, setTitle] = useState("");

  const [taskData, setTaskData] = useState({
    title: "",
    projectId: "",
    assignedTo: "",
    dueDate: ""
  });

  const [users, setUsers] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const res = await API.get("/projects");
    setProjects(res.data);
  };

  const createProject = async () => {
    await API.post("/projects", { title });
    fetchProjects();
  };

  // 🔹 Fetch members of selected project
  const handleProjectSelect = (projectId) => {
    setTaskData({ ...taskData, projectId });

    const selected = projects.find(p => p._id === projectId);
    setUsers(selected.members || []);
  };

  const createTask = async () => {
    await API.post("/tasks", taskData);
    alert("Task Created");
  };

  return (
    <div>
      <h2>Projects</h2>

      {/* CREATE PROJECT (ADMIN ONLY) */}
      {user.role === "admin" && (
        <>
          <input placeholder="Project title"
            onChange={(e) => setTitle(e.target.value)} />
          <button onClick={createProject}>Create Project</button>
        </>
      )}

      {/* PROJECT LIST */}
      {projects.map(p => (
        <div key={p._id}>
          <h3>{p.title}</h3>
        </div>
      ))}

      <hr />

      <h2>Create Task</h2>

      {/* SELECT PROJECT */}
      <select onChange={(e) => handleProjectSelect(e.target.value)}>
        <option>Select Project</option>
        {projects.map(p => (
          <option key={p._id} value={p._id}>{p.title}</option>
        ))}
      </select>

      {/* SELECT USER */}
      <select onChange={(e) =>
        setTaskData({ ...taskData, assignedTo: e.target.value })
      }>
        <option>Select Member</option>
        {users.map(u => (
          <option key={u._id} value={u._id}>{u.name}</option>
        ))}
      </select>

      {/* TASK INPUT */}
      <input placeholder="Task title"
        onChange={(e) => setTaskData({ ...taskData, title: e.target.value })} />

      <input type="date"
        onChange={(e) => setTaskData({ ...taskData, dueDate: e.target.value })} />

      <button onClick={createTask}>Create Task</button>
    </div>
  );
}