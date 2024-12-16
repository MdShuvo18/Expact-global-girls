import { FaLongArrowAltRight } from "react-icons/fa";
import img from '../../assets/image-resources/company_logo.png'

const CommunitySection = () => {
    return (
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 mt-10 md:mt-24 lg:mt-28 gap-10">
        {/* Left side */}
        <div className="lg:flex-1 h-full bg-white rounded-2xl flex items-center justify-center">
            <img className="h-full w-auto px-20 object-cover" src={img} alt="" />
        </div>
    
        {/* Right side */}
        <div className="w-full lg:h-full flex flex-col justify-between items-start">
            <hr className="px-5 rounded-2xl border-primary border-2" />
            <h1 className="text-3xl lg:text-4xl lg:w-2/3 font-semibold text-[#1D2939] mb-4 leading-relaxed">
                Your Community for Women Ready to Go Abroad
            </h1>
            <p className="text-[#344054] lg:w-4/5 text-xl font-medium mb-6 lg:leading-loose">
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