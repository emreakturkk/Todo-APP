import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Sidebar from "./components/Sidebar";
import TaskForm from "./components/TaskForm";
import TaskCard from "./components/TaskCard";
import EditModal from "./components/EditModal";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");
  const [editingTask, setEditingTask] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [username, setUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const addTask = (task) => setTasks([...tasks, task]);
  const deleteTask = (id) => setTasks(tasks.filter((t) => t.id !== id));
  const toggleDone = (id) =>
    setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  const updateTask = (updated) =>
    setTasks(tasks.map((t) => (t.id === updated.id ? updated : t)));

  const filteredTasks = tasks.filter((task) => {
    if (filter === "All") return true;
    if (filter === "Tamamlandı") return task.done;
    if (["İş", "Oyun", "Market"].includes(filter)) return task.category === filter;
    if (["Yüksek", "Orta", "Düşük"].includes(filter)) return task.priority === filter;
    return true;
  });

  // Login ekranı
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (username.trim()) setIsLoggedIn(true);
          }}
          className="flex flex-col gap-4 p-6 bg-white dark:bg-gray-800 rounded shadow"
        >
          <h2 className="text-xl font-bold text-gray-800 dark:text-white">Hoşgeldin!</h2>
          <input
            type="text"
            placeholder="Kullanıcı adını gir..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border p-2 rounded"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Giriş Yap
          </button>
        </form>
      </div>
    );
  }

  // Todo uygulaması
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex transition-colors">
        <Sidebar
          filter={filter}
          setFilter={setFilter}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          username={username}
        />
        <div className="flex-1 p-6">
          <TaskForm addTask={addTask} darkMode={darkMode} username={username} />
          <motion.div layout className="grid md:grid-cols-2 gap-4 mt-4">
            <AnimatePresence>
              {filteredTasks.map((task) => (
                <TaskCard
                  key={task.id}
                  task={task}
                  toggleDone={toggleDone}
                  deleteTask={deleteTask}
                  setEditingTask={setEditingTask}
                  darkMode={darkMode}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
        {editingTask && (
          <EditModal
            task={editingTask}
            updateTask={updateTask}
            closeModal={() => setEditingTask(null)}
            darkMode={darkMode}
          />
        )}
      </div>
    </div>
  );
}

export default App;
