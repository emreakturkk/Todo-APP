import { motion } from "framer-motion";
import { FaBriefcase, FaGamepad, FaShoppingCart } from "react-icons/fa";

function TaskCard({ task, toggleDone, deleteTask, setEditingTask, darkMode }) {
  const priorityColor = {
    Yüksek: "bg-red-500 text-white",
    Orta: "bg-yellow-400 text-black",
    Düşük: "bg-green-500 text-white",
  };

  const categoryIcon = {
    İş: <FaBriefcase />,
    Oyun: <FaGamepad />,
    Market: <FaShoppingCart />,
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      whileHover={{ scale: 1.04 }}
      className={`p-4 rounded shadow flex flex-col gap-2 bg-gradient-to-r from-indigo-200 to-purple-100 dark:from-gray-800 dark:to-gray-700 dark:text-gray-200 transition-colors`}
    >
      <div className="flex justify-between items-start">
        <div>
          <h2 className={`font-bold text-lg ${darkMode ? "text-white" : ""} flex items-center gap-2`}>
            {categoryIcon[task.category]} {task.title}
          </h2>
          <div className="flex gap-2 mt-1">
            <motion.span
              whileHover={{ scale: 1.2 }}
              className={`inline-block px-2 py-1 rounded text-sm font-semibold ${priorityColor[task.priority]}`}
            >
              {task.priority}
            </motion.span>
            <span className="inline-block px-2 py-1 rounded text-sm font-semibold">
              {task.category}
            </span>
          </div>
          <p className={`mt-1 text-sm ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
            Atanan: {task.assignedTo}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <button onClick={() => toggleDone(task.id)} className="text-blue-700 dark:text-blue-300 font-semibold hover:underline">
            {task.done ? "Geri Al" : "Tamamla"}
          </button>
          <button onClick={() => setEditingTask(task)} className="text-purple-700 dark:text-purple-300 font-semibold hover:underline">
            Düzenle
          </button>
          <button onClick={() => deleteTask(task.id)} className="text-red-700 dark:text-red-400 font-semibold hover:underline">
            Sil
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default TaskCard;
