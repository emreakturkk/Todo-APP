import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";

function EditModal({ task, updateTask, closeModal, darkMode }) {
  const [title, setTitle] = useState(task.title);
  const [priority, setPriority] = useState(task.priority);
  const [category, setCategory] = useState(task.category);
  const [assignedTo, setAssignedTo] = useState(task.assignedTo);

  const priorityTooltips = {
    Yüksek: "Öncelikli görev",
    Orta: "Orta öncelik",
    Düşük: "Düşük öncelik",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTask({ ...task, title, priority, category, assignedTo });
    closeModal();
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className={`bg-white dark:bg-gray-800 p-6 rounded shadow-lg w-96 flex flex-col gap-4`}
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white">Görev Düzenle</h2>
          <button onClick={closeModal} className="text-gray-600 dark:text-gray-300 hover:text-red-500">
            <FaTimes />
          </button>
        </div>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`border p-2 rounded ${darkMode ? "bg-gray-700 text-white border-gray-600" : ""}`}
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className={`border p-2 rounded ${darkMode ? "bg-gray-700 text-white border-gray-600" : ""}`}
          >
            <option>İş</option>
            <option>Oyun</option>
            <option>Market</option>
          </select>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className={`border p-2 rounded ${darkMode ? "bg-gray-700 text-white border-gray-600" : ""}`}
            title={priorityTooltips[priority]}
          >
            <option title="Öncelikli görev">Yüksek</option>
            <option title="Orta öncelik">Orta</option>
            <option title="Düşük öncelik">Düşük</option>
          </select>
          <input
            type="text"
            value={assignedTo}
            onChange={(e) => setAssignedTo(e.target.value)}
            className={`border p-2 rounded ${darkMode ? "bg-gray-700 text-white border-gray-600" : ""}`}
            placeholder="Atanan kişi"
          />
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
          >
            Güncelle
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
}

export default EditModal;
