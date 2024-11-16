import shopy from '../assets/shopy.png';
import SearchBar from '../shared/searchbar';

function Header() {
  return (
    <div className="flex flex-wrap justify-between items-center px-4 py-4 max-w-screen-xl mx-auto">
      {/* Logo */}
      <div className="flex-shrink-0">
        <img src={shopy} alt="Shopy" className="w-24 h-auto max-w-full" />
      </div>
      
      {/* Navigation */}
      <div className="hidden md:flex space-x-9 font-semibold text-lg text-zinc-800">
        <ul className="flex space-x-8">
          <li className="hover:text-zinc-900 cursor-pointer">Men</li>
          <li className="hover:text-zinc-900 cursor-pointer">Women</li>
          <li className="hover:text-zinc-900 cursor-pointer">Accessories</li>
          <li className="hover:text-zinc-900 cursor-pointer">Summer Sale</li>
          <li className="hover:text-zinc-900 cursor-pointer">Kids</li>
        </ul>
      </div>
      
      {/* Mobile Navigation Placeholder */}
      <div className="block md:hidden">
        <button
          type="button"
          className="text-zinc-800 text-xl font-bold focus:outline-none"
        >
          ☰
        </button>
      </div>
      
      {/* Search Bar */}
      <div className="hidden lg:block mt-4 lg:mt-0 w-full lg:w-auto">
        <SearchBar />
      </div>
    </div>
  );
}

export default Header;
