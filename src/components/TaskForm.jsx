import { useState } from "react";
import { motion } from "framer-motion";

function TaskForm({ addTask, darkMode, username }) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Orta");
  const [category, setCategory] = useState("İş");
  const [assignedTo, setAssignedTo] = useState(username);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;
    addTask({ id: Date.now(), title, priority, category, assignedTo, done: false });
    setTitle("");
    setPriority("Orta");
    setCategory("İş");
    setAssignedTo(username);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className={`p-6 rounded shadow flex flex-col md:flex-row gap-3 items-center ${darkMode ? "bg-gray-800 text-white" : "bg-white"}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <input
        type="text"
        placeholder="Görev başlığı..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={`flex-1 border p-3 rounded text-lg ${darkMode ? "bg-gray-700 text-white border-gray-600" : ""}`}
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className={`border p-3 rounded text-lg ${darkMode ? "bg-gray-700 text-white border-gray-600" : ""}`}
      >
        <option>İş</option>
        <option>Oyun</option>
        <option>Market</option>
      </select>
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className={`border p-3 rounded text-lg ${darkMode ? "bg-gray-700 text-white border-gray-600" : ""}`}
      >
        <option>Yüksek</option>
        <option>Orta</option>
        <option>Düşük</option>
      </select>
      <input
        type="text"
        value={assignedTo}
        onChange={(e) => setAssignedTo(e.target.value)}
        className={`border p-3 rounded text-lg ${darkMode ? "bg-gray-700 text-white border-gray-600" : ""}`}
        placeholder="Atanan kişi"
      />
      <motion.button
        whileTap={{ scale: 0.95 }}
        className="bg-blue-500 text-white px-6 py-3 rounded text-lg hover:bg-blue-600 transition"
      >
        Ekle
      </motion.button>
    </motion.form>
  );
}

export default TaskForm;
