import imgOne from "../assets/image-resources/World-bro 1.svg"
import imgTwo from "../assets/image-resources/Filter-rafiki 1.svg"
import imgThree from "../assets/image-resources/Traveling-bro 1.jpg"
const AbsouluteCard = () => {
    return (
        // <div className="grid grid-cols-1 lg:grid-cols-3 justify-self-center lg:justify-items-center gap-6 md:gap-20 lg:gap-44 py-4 px-12 rounded-2xl bg-white lg:absolute -bottom-36 mx-20 my-6 lg:my-0 left-0 right-0 ">
    <main>
        <div className="flex flex-col lg:flex-row w-full items-center lg:justify-between bg-white rounded-2xl p-6 lg:-translate-y-12 gap-6 lg:gap-0 mt-10 lg:mt-0">
            <div className="flex flex-col items-center lg:items-start">
                <img className="w-[83px] h-[83px]" src={imgOne} alt="" />
                <h1 className="text-2xl font-semibold text-black">150+ Countries</h1>
                <p className="text-center lg:text-left font-light text-lg text-[#475467]">Empowering women to <br />explore destinations globally.</p>
            </div>
            <div className="flex flex-col items-center lg:items-start">
                <img className="w-[83px] h-[83px]" src={imgTwo} alt="" />
                <h1 className="text-2xl font-semibold text-black">Connect & Travel</h1>
                <p className="text-center lg:text-left font-light text-lg text-[#475467]">A trusted community of
                    <br />
                    verified members.</p>
            </div>
            <div className="flex flex-col items-center lg:items-start">
                <img className="w-[83px] h-[83px]" src={imgThree} alt="" />
                <h1 className="text-2xl font-semibold text-black">Find Your Tribe</h1>
                <p className="text-center lg:text-left font-light text-lg text-[#475467]">Find like-minded housemates
                    <br />
                    faster and easier.</p>
            </div>
        </div>
    </main>
    );
};

export default AbsouluteCard;