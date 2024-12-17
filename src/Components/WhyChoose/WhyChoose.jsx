import Headers from "../../reUseable/Headers";
import imgOne from "../../assets/image-resources/Frame.svg"
import imgTwo from "../../assets/image-resources/Frame 37.png"
import imgThree from "../../assets/image-resources/Frame 37 (1).png"
import imgFour from "../../assets/image-resources/Frame 37 (2).png"
import logoImg from "../../assets/image-resources/company_logo.png"
import rectangle from "../../assets/image-resources/Rectangle_6.png"
import rectangle1 from "../../assets/image-resources/Rectangle_6_1.png"
import rectangle2 from "../../assets/image-resources/Rectangle_6_2.png"
import rectangle3 from "../../assets/image-resources/Rectangle_6_3.png"



const WhyChoose = () => {
    return (
        <div className="mt-16 md:mt-24">
            {/* why choose us level */}
            <div className="-rotate-12 mb-5 flex items-center justify-center">
                <p className="text-center bg-[#0872BA4D] rounded-lg text-sm font-light px-4 py-2">
                    Why choose us?
                </p>
            </div>
            {/* Headers component */}
            <Headers title="Why Choose Expat Global Girls" subTitle="Empowering women to travel with confidence and ease worldwide" />

            <div className="flex flex-col lg:flex-row justify-between items-center mt-10 gap-2 md:gap-10 lg:gap-0">
                {/* left side */}
                <div className="md:space-y-10 lg:space-y-16">
                    <div className="p-10 md:p-20 lg:p-20 lg:space-y-2" style={{
                        backgroundImage: `url(${rectangle1})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                        backgroundPosition: "center",

                    }}>

                        <div className="flex lg:flex-col items-center lg:items-start gap-2">
                            <img src={imgOne} alt="" />
                            <h1 className="md:text-2xl lg:text-2xl font-semibold text-[#1D2939]">Affordable Housing</h1>
                        </div>
                        <p className="text-sm md:text-lg lg:text-lg font-light text-[#475467] leading-relaxed">Save money and travel smarter by <br className="hidden lg:block" /> sharing accommodations with fellow members.</p>

                    </div>
                    <div className="p-10 md:p-20 lg:p-20 space-y-2 lg:space-y-2" style={{
                        backgroundImage: `url(${rectangle2})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                    }} >
                        <div className="flex lg:flex-col items-center lg:items-start gap-2">
                            <img src={imgThree} alt="" />
                            <h1 className="md:text-2xl lg:text-2xl font-semibold text-[#1D2939]">Verified Profiles</h1>
                        </div>
                        <p className="text-sm md:text-lg font-light text-[#475467] leading-relaxed">A reliable community with verified profiles <br className="hidden lg:block" />for added safety and peace of mind. </p>
                    </div>
                </div>
                {/* middle */}
                <div className="hidden lg:block">
                    <img className="h-[250px] w-[250px]" src={logoImg} alt="" />
                </div>
                {/* Right side */}
                <div className="md:space-y-10 lg:space-y-16">
                    <div className="p-10 md:p-20 lg:p-20 space-y-2 lg:space-y-2" style={{
                        backgroundImage: `url(${rectangle})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                    }}>
                        <div className="flex lg:flex-col items-center lg:items-start gap-2">
                            <img src={imgTwo} alt="" />
                            <h1 className="md:text-2xl lg:text-2xl font-semibold text-[#1D2939]">Flexible Options</h1>
                        </div>
                        {/* 
                       
                        */}
                        <p className="text-sm md:text-lg font-light text-[#475467] leading-relaxed">From memberships to travel & lifestyle <br className="hidden lg:block" />   preferences – you have the power to choose.</p>
                    </div>
                    <div className="p-10 md:p-20 lg:p-20 space-y-1 lg:space-y-2" style={{
                        backgroundImage: `url(${rectangle3})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                    }}>
                        <div className="flex lg:flex-col items-center lg:items-start gap-2">
                            <img src={imgFour} alt="" />
                            <h1 className="md:text-2xl lg:text-2xl font-semibold text-[#1D2939]">Women-Only Spaces</h1>
                        </div>
                        <p className="text-sm md:text-lg font-light text-[#475467] leading-relaxed">Safe, supportive spaces for women to <br className="hidden lg:block" />connect and thrive period. </p>
                    </div>
                </div>

            </div>






        </div>
    );
};

export default WhyChoose;