// SearchBar.js
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

function SearchBar() {
  return (
    <div className="flex items-center gap-2 px-4 py-1 bg-white rounded-lg shadow-lg border  focus-within:border-gray-400 focus-within:ring-2 focus-within:ring-gray-300">
      <input
        type="text"
        placeholder="Search"
        className="flex-grow outline-none bg-transparent text-gray-700 placeholder-gray-500"
      />
      <MagnifyingGlassIcon className="text-gray-700" />
    </div>
  );
}

export default SearchBar;
