import Task from "../models/Task.js";
import Project from "../models/Project.js";

export const createTask = async (req, res) => {
  try {
    const { title, description, projectId, assignedTo, dueDate } = req.body;

    const project = await Project.findById(projectId);

    if (!project.members.includes(assignedTo)) {
      return res.status(400).json({ msg: "User not in project" });
    }

    const task = await Task.create({
      title,
      description,
      projectId,
      assignedTo,
      dueDate
    });

    res.json(task);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({
      assignedTo: req.user.id
    }).populate("projectId", "title");

    res.json(tasks);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

export const updateTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) return res.status(404).json({ msg: "Task not found" });

    // only assigned user can update
    if (task.assignedTo.toString() !== req.user.id) {
      return res.status(403).json({ msg: "Not allowed" });
    }

    task.status = req.body.status || task.status;

    await task.save();

    res.json(task);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ msg: "Task deleted" });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};