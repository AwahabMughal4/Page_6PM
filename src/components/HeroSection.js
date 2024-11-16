import icon_sun_frame from "../assets/icon_sun_frame.svg";
import image from "../assets/image.png";
import i from "../assets/i.png";

function HeroSection() {
  return (
    <div className="flex flex-wrap justify-between items-center px-8 py-8 max-w-screen-xl mx-auto relative">
      {/* Left Column */}
      <div className="flex flex-col w-full md:w-1/2 space-y-6">
        <div>
          <h1 className="text-5xl font-bold leading-tight">Discover New</h1>
          <div className="flex items-center space-x-4 mt-2">
            <h1 className="text-5xl font-bold leading-tight">Collection</h1>
            <img src={icon_sun_frame} alt="Sun frame icon" className="w-auto max-h-10 object-contain" />
          </div>
        </div>

        <p className="text-gray-600 text-lg">
          Fashion is part of the daily air, <br />
          and it changes all the time <br />
          with all the events.
        </p>

        <div className="flex items-center space-x-6">
          <h2 className="text-4xl font-bold">#01</h2>
          <button
            type="button"
            className="px-6 py-3 bg-yellow-400 text-black text-lg font-semibold rounded-lg shadow-lg"
          >
            Start Shopping ↗
          </button>
          <div className="text-center">
            <h3 className="text-2xl font-bold">25%</h3>
            <p className="text-sm text-gray-500">Off New Arrivals</p>
          </div>
        </div>

        <div className="flex space-x-3 mt-4">
  <img
    src="https://randomuser.me/api/portraits/women/1.jpg"
    alt="Woman 1"
    className="w-10 h-10 rounded-full object-cover"
  />
  <img
    src="https://randomuser.me/api/portraits/women/2.jpg"
    alt="Woman 2"
    className="w-10 h-10 rounded-full object-cover"
  />
  <img
    src="https://randomuser.me/api/portraits/women/3.jpg"
    alt="Woman 3"
    className="w-10 h-10 rounded-full object-cover"
  />
</div>

      </div>

      {/* Right Column */}
      <div className="w-full  md:w-1/2 bg-[#FBFAF3] flex justify-center items-end relative py-16 bottom-2">
        <div className="absolute top-6 right-6">
          <img src={i} alt="Abstract icon" className="w-10 h-auto object-contain" />
        </div>
        <img src={image} alt="Decorative graphic" className="max-w-full h-auto object-contain" />
        
      </div>
    </div>
  );
}

export default HeroSection;
