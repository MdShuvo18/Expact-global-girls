import { FaLongArrowAltRight } from "react-icons/fa";
import img from "../../assets/image-resources/Frame 172.png"

const CommunitySection = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-8 justify-center sm:mt-12  md:mt-24 lg:mt-64">
            {/* left side */}
            <div className="">
                <img src={img} alt="" />
            </div>
            {/* right side */}
            <div className=" p-5 flex flex-col flex-grow  space-y-6 lg:w-2/4 content-stretch">
                <hr className="w-[57px] h-[8px] rounded-2xl bg-primary border-2" />
                <h1 className="text-5xl font-semibold text-[#1D2939] mb-4 leading-tight">
                    Your Community for Women Ready to Go Abroad
                </h1>
                <p className="text-[#344054] text-xl font-medium mb-6 leading-relaxed">
                    We’re thrilled you found us! At Expat Global Girls, we empower women to pursue their dreams abroad. Our platform connects women seeking housemates for international moves and trips, offering a safe, supportive community and a searchable directory to help you find the perfect living companion. Join us to make your move abroad affordable, achievable, and filled with support!
                </p>
                <button className="w-[236px] flex items-center justify-center gap-2 px-4 py-2 tracking-wide bg-primary text-white rounded-xl">
                    Become a member <FaLongArrowAltRight />
                </button>
            </div>
        </div>

    );
};

export default CommunitySection;