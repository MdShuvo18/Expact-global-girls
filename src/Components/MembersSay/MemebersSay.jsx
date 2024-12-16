import Headers from "../../reUseable/Headers";
import img from "../../assets/image-resources/Group 1321314436.png";

const MemebersSay = () => {
  return (
    <div className="mt-16 md:mt-24 px-4 md:px-8 lg:px-16">
      {/* Testimonial Label */}
      <div className="-rotate-12 mb-5 flex items-center justify-center">
        <p className="text-center bg-[#0872BA4D] rounded-lg text-sm font-light px-4 py-2">
          Testimonial
        </p>
      </div>

      {/* Headers Component */}
      <Headers
        title="What Our Members Say"
        subTitle="Hear from women who share your passion for exploring new cultures, experiencing life abroad, and making the most of every opportunity."
      />

      {/* Content Section */}
      <div className="mt-10">
        <div className="flex flex-col-reverse lg:flex-row-reverse gap-10 lg:gap-16 bg-white rounded-2xl overflow-hidden shadow-lg">
          {/* Text Section */}
          <div className="w-full h-auto flex items-center lg:w-1/2">
            <div className="p-6 md:p-8 lg:p-10">
              <p className="text-[#344054] text-lg md:text-xl lg:text-2xl font-medium leading-relaxed">
                Our smart developers build innovative, efficient, and high-performance solutions. Efficient, and high-performance solutions. Efficient, and high-performance solutions.
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full h-full md:h-80 lg:h-[386px] flex items-center justify-center lg:w-1/2">
            <img
              className="w-full h-[386px] rounded-md"
              src={img}
              alt="glasses"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemebersSay;
