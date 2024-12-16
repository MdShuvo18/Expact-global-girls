import Headers from "../../reUseable/Headers";
import img from "../../assets/image-resources/Group 1321314436.png";
import comma1 from "../../assets/image-resources/comma.png";
import comma2 from "../../assets/image-resources/comma (1).png";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

const MemebersSay = () => {
  return (
    <div className="mt-16 md:mt-24">
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
        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-16 bg-white rounded-2xl overflow-hidden shadow-lg">
          {/* Image Section */}
          <div className="">
            <img
              className="w-[550px] h-[380px] rounded-md"
              src={img}
              alt="glasses"
            />
          </div>
          {/* Text Section */}
          <div className="w-full h-auto flex items-center lg:w-1/2 relative">

            <div className="absolute top-7 right-6 space-x-3">
              <button className="border-2 px-4 rounded-xl">
                <FaArrowLeft className="text-primary" />
              </button>
              <button className="border-2 px-4 rounded-xl">
                <FaArrowRight className="text-primary" />
              </button>
            </div>
            <div className="p-6 md:p-8 lg:p-10 relative">
              <div className="absolute lg:top-0">
                <img className="" src={comma1} alt="" />
              </div>
              <p className="text-[#344054] text-lg md:text-xl lg:text-2xl font-medium leading-loose py-10 lg:py-0">
                Our smart developers build innovative, efficient, and high-performance solutions. Efficient, and high-performance solutions. Efficient, and high-performance solutions.
              </p>
              <div className="absolute bottom-2 lg:bottom-0 right-10">
                <img src={comma2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemebersSay;
