function FilterBar({ filter, setFilter }) {
  const options = ["All", "Tamamlandı", "Yüksek", "Orta", "Düşük"];

  return (
    <div className="flex gap-2 mb-4 flex-wrap">
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => setFilter(opt)}
          className={`px-3 py-1 rounded ${
            filter === opt ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;
