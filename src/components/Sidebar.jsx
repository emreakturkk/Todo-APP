import { motion } from "framer-motion";
import { FaBriefcase, FaGamepad, FaShoppingCart, FaTasks, FaMoon, FaSun } from "react-icons/fa";

function Sidebar({ filter, setFilter, darkMode, setDarkMode, username }) {
  const categories = ["All", "Tamamlandı", "İş", "Oyun", "Market"];
  const icons = {
    All: <FaTasks />,
    İş: <FaBriefcase />,
    Oyun: <FaGamepad />,
    Market: <FaShoppingCart />,
    Tamamlandı: <FaTasks />,
  };

  // Gradient renkler
  const gradients = {
    All: ["from-indigo-400", "to-purple-400"],
    Tamamlandı: ["from-green-400", "to-teal-400"],
    İş: ["from-blue-400", "to-blue-600"],
    Oyun: ["from-pink-400", "to-purple-500"],
    Market: ["from-yellow-400", "to-orange-400"],
  };

  return (
    <div className="w-60 h-screen p-6 flex flex-col bg-gradient-to-b from-blue-400 to-blue-200 dark:from-gray-800 dark:to-gray-700 shadow-lg transition-colors">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <img src="https://i.pravatar.cc/50" alt="Kullanıcı" className="rounded-full" />
          <h2 className="font-bold text-lg text-white">{`Hoşgeldin, ${username}!`}</h2>
        </div>
        <button onClick={() => setDarkMode(!darkMode)} className="text-white text-xl">
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>

      <div className="flex flex-col gap-3">
        {categories.map((cat) => (
          <motion.button
            key={cat}
            onClick={() => setFilter(cat)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center gap-2 px-4 py-2 rounded text-white font-semibold shadow-md
              transition-all duration-500 bg-gradient-to-r ${gradients[cat][0]} ${gradients[cat][1]}
              ${filter === cat ? "ring-2 ring-white" : ""}`}
            style={{
              backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`,
            }}
          >
            {icons[cat]} {cat}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
