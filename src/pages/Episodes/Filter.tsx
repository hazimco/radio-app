const Filter = ({ filterText, handleFilterChange }) => {
  return (
    <div className="pt-6">
      <h1 className="text-pink-500 text-xl mb-2">Filter</h1>
      <input
        type="text"
        placeholder="Enter a keyword or date"
        value={filterText}
        onChange={handleFilterChange}
        className="p-2 mb-5 border-slate-400 border-[0.5px] rounded-md bg-slate-800 text-white w-full"
      />
    </div>
  );
};

export default Filter;
