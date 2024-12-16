import Headers from "../../reUseable/Headers";
import img1 from "../../assets/image-resources/Filter-rafiki 1.svg"
import img2 from "../../assets/image-resources/Friendship-pana 1.svg"
import img3 from "../../assets/image-resources/Group 12.png"
import img4 from "../../assets/image-resources/Vision board-bro 1.svg"
import img5 from "../../assets/image-resources/Online friends-rafiki 1.svg"

const WorkSection = () => {
    return (
        <div className="mt-10 lg:mt-16 bg-white p-4 lg:py-10 lg:px-48">
            <div className="mt-10 lg:mt-0">
                <Headers title="How It Works" subTitle="Search and find other travelers heading to the same destination." />
            </div>
            <main>
                <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center mt-16">
                    {/* left side */}
                    <div>
                        <div>
                            <h1 className="text-lg lg:text-2xl font-semibold text-[#1D2939]">Plan Your Trip</h1>
                            <p className=" lg:text-lg font-light text-[#475467]">Start by setting your travel dates, destinations, and preferences. This helps you tailor your search for housemates who align with your journey.</p>
                            <div className="flex justify-center items-center">
                                <img src={img1} alt="" />
                            </div>
                        </div>
                        <div>
                            <h1 className="text-lg lg:text-2xl font-semibold text-[#1D2939]">Connect and Build Relationships</h1>
                            <p className="lg:text-lg font-light text-[#475467]">Send messages, ask questions, and get to know potential housemates before committing. Building rapport ensures a comfortable and trusted connection for your shared journey</p>
                            <div className="flex justify-center items-center">
                                <img src={img2} alt="" />
                            </div>
                        </div>
                    </div>
                    {/* middle */}
                    <div className="hidden lg:block"> <img src={img3} alt="" /></div>
                    {/* right side */}
                    <div>
                        <div className="flex flex-col-reverse lg:flex-col">
                            <div className="flex justify-center items-center">
                                <img src={img4} alt="" />
                            </div>
                            <div>
                                <h1 className="text-lg lg:text-2xl font-semibold text-[#1D2939]">Explore Matching Profiles</h1>
                                <p className="lg:text-lg font-light text-[#475467]">Browse through profiles of like-minded women who are traveling to similar locations. You can filter results based on your travel dates, needs, and values.</p>
                            </div>

                        </div>
                        <div className="flex flex-col-reverse lg:flex-col"> 
                            <div className="flex justify-center items-center">
                                <img src={img5} alt="" />
                            </div>
                           <div>
                           <h1 className="text-lg lg:text-2xl font-semibold text-[#1D2939]">Secure Your Plans & Enjoy the Journey</h1>
                           <p className="lg:text-lg font-light text-[#475467]">Once you’ve found the right housemate, finalize your arrangements with confidence. With a trusted companion, you can travel with peace of mind and enjoy every moment.</p>
                           </div>

                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default WorkSection;